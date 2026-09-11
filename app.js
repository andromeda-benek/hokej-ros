import { LEVEL_SENTENCE_COUNTS, TASK_SETS } from './tasks-data.mjs';

const DEFAULT_WORDS = [
  { lemma: 'хоккей', translation: 'hokej', count: 174, partOfSpeech: 'NOUN' },
  { lemma: 'шайба', translation: 'krążek', count: 150, partOfSpeech: 'NOUN' },
  { lemma: 'матч', translation: 'mecz', count: 145, partOfSpeech: 'NOUN' },
  { lemma: 'команда', translation: 'drużyna', count: 102, partOfSpeech: 'NOUN' },
  { lemma: 'игрок', translation: 'zawodnik', count: 110, partOfSpeech: 'NOUN' },
  { lemma: 'вратарь', translation: 'bramkarz', count: 55, partOfSpeech: 'NOUN' },
  { lemma: 'ворота', translation: 'bramka', count: 54, partOfSpeech: 'NOUN' },
  { lemma: 'гол', translation: 'gol', count: 33, partOfSpeech: 'NOUN' },
  { lemma: 'клюшка', translation: 'kij hokejowy', count: 19, partOfSpeech: 'NOUN' },
  { lemma: 'бросок', translation: 'strzał', count: 19, partOfSpeech: 'NOUN' },
  { lemma: 'лёд', translation: 'lód', count: 28, partOfSpeech: 'NOUN' },
  { lemma: 'тренер', translation: 'trener', count: 19, partOfSpeech: 'NOUN' },
];

const BROWSER_TASK_SETS = typeof window !== 'undefined' ? window.RUSSIAN_HOCKEY_TASK_SETS : null;
const BROWSER_LEVEL_COUNTS = typeof window !== 'undefined' ? window.RUSSIAN_HOCKEY_LEVEL_SENTENCE_COUNTS : null;
const DATA = BROWSER_TASK_SETS || TASK_SETS;
const SENTENCE_COUNTS = BROWSER_LEVEL_COUNTS || LEVEL_SENTENCE_COUNTS;
export const LEVELS = ['A1', 'A2', 'B1', 'B2'];

function splitCsvLine(line) {
  const cells = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i];
    const next = line[i + 1];
    if (ch === '"' && inQuotes && next === '"') { current += '"'; i += 1; }
    else if (ch === '"') inQuotes = !inQuotes;
    else if (ch === ',' && !inQuotes) { cells.push(current); current = ''; }
    else current += ch;
  }
  cells.push(current);
  return cells;
}

export function parseCsvWords(csvText) {
  const lines = csvText.replace(/^\uFEFF/, '').split(/\r?\n/).filter((line) => line.trim());
  if (lines.length < 2) return [];
  const headers = splitCsvLine(lines[0]).map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const cells = splitCsvLine(line);
    const row = Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? '']));
    return {
      lemma: row.lemma_ru.trim(),
      translation: row.translation_pl.trim(),
      count: Number.parseInt(row.count, 10) || 0,
      partOfSpeech: row.part_of_speech.trim(),
    };
  }).filter((word) => word.lemma && word.translation);
}

export function pickTopWords(words, limit = 10) {
  return [...words]
    .filter((word) => word.lemma && word.translation)
    .sort((a, b) => b.count - a.count || a.lemma.localeCompare(b.lemma, 'ru'))
    .slice(0, limit);
}

export function getTaskCount(level = 'A2') {
  return DATA[level]?.length ?? 0;
}

export function getTaskSet(level = 'A2', variantIndex = 0) {
  const sets = DATA[level] || DATA.A2;
  const index = ((variantIndex % sets.length) + sets.length) % sets.length;
  return sets[index];
}

function normalizeOptions(options) {
  if (Array.isArray(options)) return options;
  return Object.entries(options).map(([key, text]) => ({ key, text }));
}

function buildWordLookup(words) {
  return new Map([...DEFAULT_WORDS, ...words].map((word) => [word.lemma, word]));
}

function rotate(items, amount) {
  const offset = ((amount % items.length) + items.length) % items.length;
  return [...items.slice(offset), ...items.slice(0, offset)];
}

export function generateTextExercise(words = DEFAULT_WORDS, variantIndex = 0, level = 'A2') {
  const task = getTaskSet(level, variantIndex).textExercise;
  return {
    level,
    title: task.title,
    vocabulary: pickTopWords([...DEFAULT_WORDS, ...words], 12),
    text: task.sentences.join(' '),
    translation: task.translation.join(' '),
    sentenceCount: SENTENCE_COUNTS[level],
    questions: task.questions.map((q, index) => ({
      ...q,
      id: `${level}-${variantIndex}-q${index + 1}`,
      options: normalizeOptions(q.options),
    })),
  };
}

export function evaluateQuiz(questions, answers) {
  const correctAnswers = questions.map((question) => ({
    id: question.id,
    correct: question.correct,
    selected: answers[question.id] ?? null,
    isCorrect: answers[question.id] === question.correct,
    prompt: question.prompt,
  }));
  return { score: correctAnswers.filter((answer) => answer.isCorrect).length, total: questions.length, correctAnswers };
}

export function generateRepeatExercise(words = DEFAULT_WORDS, variantIndex = 0, level = 'A2') {
  const wordLookup = buildWordLookup(words);
  const task = getTaskSet(level, variantIndex).repeatExercise;
  const sentences = task.sentences.map((sentence, index) => ({
    id: `s${index + 1}-${level}-${variantIndex}`,
    answer: sentence.answer,
    textWithGap: sentence.textWithGap,
    fullRu: sentence.fullRu || sentence.textWithGap.replace('_____', sentence.answer),
    translationPl: sentence.translationPl,
    hint: wordLookup.get(sentence.answer)?.translation || sentence.translation || '',
  }));
  const ordered = sentences.map((sentence) => wordLookup.get(sentence.answer) ?? {
    lemma: sentence.answer,
    translation: sentence.hint,
    count: 0,
    partOfSpeech: 'NOUN',
  });
  return { level, sentences, wordBank: rotate(ordered, (variantIndex % 7) + 3) };
}

export function generateTaskSet(words = DEFAULT_WORDS, variantIndex = 0, level = 'A2') {
  return {
    textExercise: generateTextExercise(words, variantIndex, level),
    repeatExercise: generateRepeatExercise(words, variantIndex, level),
  };
}

export function placeSelectedWord(currentAnswers, sentenceId, word) {
  return { ...currentAnswers, [sentenceId]: word };
}

function collectUsedWords(answers) {
  return Object.fromEntries(Object.entries(answers).map(([sentenceId, word]) => [word, sentenceId]));
}

export function toggleSelectedWord(currentAnswers, sentenceId, word) {
  const answers = { ...currentAnswers };
  if (answers[sentenceId] === word) {
    delete answers[sentenceId];
    return { answers, usedWords: collectUsedWords(answers), changed: true, reason: 'removed' };
  }
  const usedWords = collectUsedWords(answers);
  if (usedWords[word] && usedWords[word] !== sentenceId) {
    return { answers: currentAnswers, usedWords, changed: false, reason: 'word-used' };
  }
  answers[sentenceId] = word;
  return { answers, usedWords: collectUsedWords(answers), changed: true, reason: 'assigned' };
}

export function buildRepeatSummary(exercise) {
  const wordsByLemma = new Map(exercise.wordBank.map((word) => [word.lemma, word]));
  return {
    words: exercise.sentences.map((sentence) => ({
      lemma: sentence.answer,
      translation: wordsByLemma.get(sentence.answer)?.translation || sentence.hint || '',
    })),
    sentences: exercise.sentences.map((sentence) => ({
      fullRu: sentence.fullRu || sentence.textWithGap.replace('_____', sentence.answer),
      translationPl: sentence.translationPl || '',
      answer: sentence.answer,
    })),
  };
}

function byId(id) { return document.getElementById(id); }
function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[ch]));
}

async function loadWords() {
  if (typeof window !== 'undefined' && window.location.protocol === 'file:') return DEFAULT_WORDS;
  try {
    const response = await fetch('../data/russian_hockey_lemmas_pl.csv');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return parseCsvWords(await response.text());
  } catch (error) {
    console.warn('Nie udało się wczytać CSV, używam słownika zapasowego.', error);
    return DEFAULT_WORDS;
  }
}

function renderTextExercise(exercise, variantIndex) {
  const answers = {};
  const root = byId('exercise');
  root.innerHTML = `
    <section class="card">
      <h2>1) Текст и вопросы · ${escapeHtml(exercise.level)}</h2>
      <p class="hint">Przeczytaj tekst po rosyjsku, a potem odpowiedz na 5 pytań. Ten poziom ma ${exercise.sentenceCount} zdań.</p>
      <article class="russian-text" lang="ru">
        <h3>${escapeHtml(exercise.title)}</h3>
        <p>${escapeHtml(exercise.text)}</p>
      </article>
      <form id="quiz-form" class="quiz">
        ${exercise.questions.map((q, index) => `
          <fieldset class="question">
            <legend>${index + 1}. ${escapeHtml(q.prompt)}</legend>
            ${q.options.map((option) => `<button type="button" class="choice" data-question="${q.id}" data-answer="${option.key}"><strong>${option.key})</strong> ${escapeHtml(option.text)}</button>`).join('')}
          </fieldset>`).join('')}
        <button type="submit" class="primary">Sprawdź odpowiedzi</button>
      </form>
      <div id="quiz-result" class="result" aria-live="polite"></div>
    </section>`;
  root.querySelectorAll('.choice').forEach((button) => button.addEventListener('click', () => {
    const question = button.dataset.question;
    answers[question] = button.dataset.answer;
    root.querySelectorAll(`[data-question="${question}"]`).forEach((other) => other.classList.remove('selected'));
    button.classList.add('selected');
  }));
  byId('quiz-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (Object.keys(answers).length < exercise.questions.length) {
      byId('quiz-result').innerHTML = '<p class="warn">Zaznacz odpowiedzi na wszystkie pytania.</p>';
      return;
    }
    const result = evaluateQuiz(exercise.questions, answers);
    root.querySelectorAll('.choice').forEach((button) => {
      const question = exercise.questions.find((q) => q.id === button.dataset.question);
      if (button.dataset.answer === question.correct) button.classList.add('correct');
      if (button.classList.contains('selected') && button.dataset.answer !== question.correct) button.classList.add('wrong');
    });
    byId('quiz-result').innerHTML = `
      <h3>Wynik: ${result.score}/${result.total}</h3>
      <ul>${result.correctAnswers.map((item, index) => `<li>${index + 1}. poprawna odpowiedź: <strong>${item.correct}</strong></li>`).join('')}</ul>
      <section class="translation"><h3>Tłumaczenie tekstu</h3>${exercise.translation.split('. ').map((sentence) => `<p>${escapeHtml(sentence.trim().replace(/\.$/, ''))}.</p>`).join('')}</section>`;
  });
}

function renderRepeatExercise(exercise, variantIndex) {
  let selectedSentence = null;
  let answers = {};
  const root = byId('exercise');
  const summary = buildRepeatSummary(exercise);
  root.innerHTML = `
    <section class="card">
      <h2>2) Повтори слова · ${escapeHtml(exercise.level)}</h2>
      <p class="hint">Najpierw kliknij zdanie z luką, potem kliknij słowo u góry. Użyte słowo robi się zielone. Kliknij wstawione słowo drugi raz, żeby je usunąć.</p>
      <div class="word-bank">${exercise.wordBank.map((word) => `<button type="button" class="word-button" data-word="${escapeHtml(word.lemma)}">${escapeHtml(word.lemma)}</button>`).join('')}</div>
      <ol class="gap-list">${exercise.sentences.map((sentence) => `<li><button type="button" class="gap-sentence" data-sentence="${sentence.id}"><span class="sentence-text">${escapeHtml(sentence.textWithGap)}</span><span class="inserted" id="inserted-${sentence.id}" data-sentence="${sentence.id}"></span></button></li>`).join('')}</ol>
      <button type="button" id="check-gaps" class="primary">Sprawdź słowa</button>
      <button type="button" id="clear-gaps" class="secondary">Wyczyść</button>
      <div id="gap-result" class="result" aria-live="polite"></div>
    </section>`;

  const refreshAssignments = () => {
    const usedWords = collectUsedWords(answers);
    root.querySelectorAll('.word-button').forEach((button) => {
      const used = Boolean(usedWords[button.dataset.word]);
      button.classList.toggle('used', used);
      button.disabled = used;
    });
    root.querySelectorAll('.gap-sentence').forEach((button) => {
      const sentenceId = button.dataset.sentence;
      const word = answers[sentenceId] || '';
      const inserted = byId(`inserted-${sentenceId}`);
      inserted.textContent = word;
      inserted.dataset.word = word;
      button.classList.toggle('filled', Boolean(word));
      button.classList.remove('correct', 'wrong');
    });
  };

  root.querySelectorAll('.gap-sentence').forEach((button) => button.addEventListener('click', () => {
    selectedSentence = button.dataset.sentence;
    root.querySelectorAll('.gap-sentence').forEach((other) => other.classList.remove('selected'));
    button.classList.add('selected');
  }));
  root.querySelectorAll('.inserted').forEach((node) => node.addEventListener('click', (event) => {
    event.stopPropagation();
    const sentenceId = node.dataset.sentence;
    const word = answers[sentenceId];
    if (!word) return;
    answers = toggleSelectedWord(answers, sentenceId, word).answers;
    byId('gap-result').textContent = '';
    refreshAssignments();
  }));
  root.querySelectorAll('.word-button').forEach((button) => button.addEventListener('click', () => {
    if (!selectedSentence) { byId('gap-result').innerHTML = '<p class="warn">Najpierw wybierz zdanie.</p>'; return; }
    const result = toggleSelectedWord(answers, selectedSentence, button.dataset.word);
    if (!result.changed && result.reason === 'word-used') {
      byId('gap-result').innerHTML = '<p class="warn">To słowo jest już użyte. Kliknij je w zdaniu, żeby je odpiąć.</p>';
      return;
    }
    answers = result.answers;
    byId('gap-result').textContent = '';
    refreshAssignments();
  }));
  byId('check-gaps').addEventListener('click', () => {
    const correct = exercise.sentences.filter((sentence) => answers[sentence.id] === sentence.answer).length;
    root.querySelectorAll('.gap-sentence').forEach((button) => {
      const sentence = exercise.sentences.find((item) => item.id === button.dataset.sentence);
      button.classList.toggle('correct', answers[sentence.id] === sentence.answer);
      button.classList.toggle('wrong', Boolean(answers[sentence.id]) && answers[sentence.id] !== sentence.answer);
    });
    byId('gap-result').innerHTML = `
      <h3>Wynik: ${correct}/${exercise.sentences.length}</h3>
      <section class="translation"><h3>Słowa</h3><ul>${summary.words.map((item) => `<li><strong>${escapeHtml(item.lemma)}</strong> — ${escapeHtml(item.translation)}</li>`).join('')}</ul></section>
      <section class="translation"><h3>Zdania</h3><ol>${summary.sentences.map((item) => `<li><span lang="ru">${escapeHtml(item.fullRu)}</span><br><small>${escapeHtml(item.translationPl)}</small></li>`).join('')}</ol></section>`;
  });
  byId('clear-gaps').addEventListener('click', () => {
    answers = {}; selectedSentence = null;
    root.querySelectorAll('.selected,.correct,.wrong,.filled').forEach((node) => node.classList.remove('selected', 'correct', 'wrong', 'filled'));
    byId('gap-result').textContent = '';
    refreshAssignments();
  });
  refreshAssignments();
}

export async function initApp() {
  const words = await loadWords();
  let level = 'A2';
  const variantIndex = 0;
  let mode = 'text';
  let tasks = generateTaskSet(words, variantIndex, level);
  const renderCurrent = () => (mode === 'text'
    ? renderTextExercise(tasks.textExercise, variantIndex)
    : renderRepeatExercise(tasks.repeatExercise, variantIndex));
  document.querySelectorAll('[data-level]').forEach((button) => button.addEventListener('click', () => {
    level = button.dataset.level;
    tasks = generateTaskSet(words, variantIndex, level);
    document.querySelectorAll('[data-level]').forEach((node) => node.classList.toggle('active', node.dataset.level === level));
    renderCurrent();
  }));
  byId('text-mode').addEventListener('click', () => { mode = 'text'; renderCurrent(); });
  byId('repeat-mode').addEventListener('click', () => { mode = 'repeat'; renderCurrent(); });

  document.querySelector('[data-level="A2"]').classList.add('active');
  renderCurrent();
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  window.addEventListener('DOMContentLoaded', initApp);
}
