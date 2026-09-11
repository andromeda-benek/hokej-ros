export const LEVEL_SENTENCE_COUNTS = {
  "A1": 5,
  "A2": 10,
  "B1": 15,
  "B2": 20
};

export const TASK_SETS = {
  "A1": [
    {
      "id": "A1-01",
      "level": "A1",
      "textExercise": {
        "title": "Семейный матч · A1-01",
        "titlePl": "rodzinny mecz · A1-01",
        "sentences": [
          "Сегодня хоккей на маленькой арене.",
          "Это красная команда.",
          "Вратарь ловит шайбу.",
          "Шайба на льду.",
          "Текст 1 простой."
        ],
        "translation": [
          "Dzisiaj hokej jest na małej arenie.",
          "To jest czerwona drużyna.",
          "Bramkarz łapie krążek.",
          "Krążek jest na lodzie.",
          "Tekst 1 jest prosty."
        ],
        "questions": [
          {
            "id": "q1",
            "prompt": "Где хоккей в тексте 1?",
            "options": {
              "a": "на маленькой арене",
              "b": "в магазине",
              "c": "в поезде",
              "d": "в кафе"
            },
            "correct": "a"
          },
          {
            "id": "q2",
            "prompt": "Какая команда дома в теме «семейный матч»?",
            "options": {
              "a": "старая",
              "b": "красная",
              "c": "чужая",
              "d": "детская"
            },
            "correct": "b"
          },
          {
            "id": "q3",
            "prompt": "Кто видит шайбу в наборе 1?",
            "options": {
              "a": "повар",
              "b": "врач",
              "c": "вратарь",
              "d": "певец"
            },
            "correct": "c"
          },
          {
            "id": "q4",
            "prompt": "Что на льду в тексте 1?",
            "options": {
              "a": "книга",
              "b": "мяч",
              "c": "билет",
              "d": "шайба"
            },
            "correct": "d"
          },
          {
            "id": "q5",
            "prompt": "Какой текст 1?",
            "options": {
              "a": "простой",
              "b": "длинный",
              "c": "старый",
              "d": "грустный"
            },
            "correct": "a"
          }
        ]
      },
      "repeatExercise": {
        "sentences": [
          {
            "answer": "маленькой",
            "translation": "małej",
            "textWithGap": "Сегодня хоккей на _____ арене.",
            "fullRu": "Сегодня хоккей на маленькой арене.",
            "translationPl": "Dzisiaj hokej jest na małej arenie."
          },
          {
            "answer": "красная",
            "translation": "czerwona",
            "textWithGap": "Это _____ команда.",
            "fullRu": "Это красная команда.",
            "translationPl": "To jest czerwona drużyna."
          },
          {
            "answer": "Вратарь",
            "translation": "bramkarz",
            "textWithGap": "_____ ловит шайбу.",
            "fullRu": "Вратарь ловит шайбу.",
            "translationPl": "Bramkarz łapie krążek."
          },
          {
            "answer": "Шайба",
            "translation": "krążek",
            "textWithGap": "_____ на льду.",
            "fullRu": "Шайба на льду.",
            "translationPl": "Krążek jest na lodzie."
          },
          {
            "answer": "простой",
            "translation": "prosty",
            "textWithGap": "Текст 1 _____.",
            "fullRu": "Текст 1 простой.",
            "translationPl": "Tekst 1 jest prosty."
          }
        ]
      }
    }
  ],
  "A2": [
    {
      "id": "A2-01",
      "level": "A2",
      "textExercise": {
        "title": "Семейный матч · A2-01",
        "titlePl": "rodzinny mecz · A2-01",
        "sentences": [
          "Сегодня на маленькой арене проходит семейный матч.",
          "Красная команда начинает игру спокойно.",
          "Вратарь ловит шайбу и смотрит на партнёров.",
          "Тренер показывает игрокам короткий план.",
          "В первом периоде команды много катаются.",
          "Один игрок получает шайбу у борта.",
          "Он делает передачу в центр площадки.",
          "После броска вратарь ловит шайбу.",
          "Болельщики громко поддерживают команду.",
          "После игры все обсуждают тему 1."
        ],
        "translation": [
          "Dzisiaj na małej arenie odbywa się rodzinny mecz.",
          "Czerwona drużyna zaczyna grę spokojnie.",
          "Bramkarz łapie krążek i patrzy na partnerów.",
          "Trener pokazuje zawodnikom krótki plan.",
          "W pierwszej tercji drużyny dużo jeżdżą.",
          "Jeden zawodnik dostaje krążek przy bandzie.",
          "Podaje do środka lodowiska.",
          "Po strzale bramkarz łapie krążek.",
          "Kibice głośno wspierają drużynę.",
          "Po grze wszyscy omawiają temat 1."
        ],
        "questions": [
          {
            "id": "q1",
            "prompt": "Где проходит тема текста 1?",
            "options": {
              "a": "на маленькой арене",
              "b": "в музее",
              "c": "в ресторане",
              "d": "в аэропорту"
            },
            "correct": "a"
          },
          {
            "id": "q2",
            "prompt": "Как команда начинает игру в теме «семейный матч»?",
            "options": {
              "a": "случайно",
              "b": "спокойно",
              "c": "без игроков",
              "d": "после концерта"
            },
            "correct": "b"
          },
          {
            "id": "q3",
            "prompt": "Кто смотрит на партнёров в наборе 1?",
            "options": {
              "a": "судья",
              "b": "болельщик",
              "c": "вратарь",
              "d": "врач"
            },
            "correct": "c"
          },
          {
            "id": "q4",
            "prompt": "Что ловит вратарь в тексте 1?",
            "options": {
              "a": "шлем",
              "b": "новую форму",
              "c": "музыку",
              "d": "шайбу"
            },
            "correct": "d"
          },
          {
            "id": "q5",
            "prompt": "О чём говорят после игры «семейный матч»?",
            "options": {
              "a": "семейный матч",
              "b": "покупки",
              "c": "еда",
              "d": "сон"
            },
            "correct": "a"
          }
        ]
      },
      "repeatExercise": {
        "sentences": [
          {
            "answer": "маленькой",
            "translation": "małej",
            "textWithGap": "Сегодня на _____ арене проходит семейный матч.",
            "fullRu": "Сегодня на маленькой арене проходит семейный матч.",
            "translationPl": "Dzisiaj na małej arenie odbywa się rodzinny mecz."
          },
          {
            "answer": "спокойно",
            "translation": "spokojnie",
            "textWithGap": "Красная команда начинает игру _____.",
            "fullRu": "Красная команда начинает игру спокойно.",
            "translationPl": "Czerwona drużyna zaczyna grę spokojnie."
          },
          {
            "answer": "партнёров",
            "translation": "partnerów",
            "textWithGap": "Вратарь ловит шайбу и смотрит на _____.",
            "fullRu": "Вратарь ловит шайбу и смотрит на партнёров.",
            "translationPl": "Bramkarz łapie krążek i patrzy na partnerów."
          },
          {
            "answer": "показывает",
            "translation": "pokazuje",
            "textWithGap": "Тренер _____ игрокам короткий план.",
            "fullRu": "Тренер показывает игрокам короткий план.",
            "translationPl": "Trener pokazuje zawodnikom krótki plan."
          },
          {
            "answer": "катаются",
            "translation": "jeżdżą",
            "textWithGap": "В первом периоде команды много _____.",
            "fullRu": "В первом периоде команды много катаются.",
            "translationPl": "W pierwszej tercji drużyny dużo jeżdżą."
          },
          {
            "answer": "получает",
            "translation": "otrzymuje",
            "textWithGap": "Один игрок _____ шайбу у борта.",
            "fullRu": "Один игрок получает шайбу у борта.",
            "translationPl": "Jeden zawodnik dostaje krążek przy bandzie."
          },
          {
            "answer": "площадки",
            "translation": "boiska / lodowiska",
            "textWithGap": "Он делает передачу в центр _____.",
            "fullRu": "Он делает передачу в центр площадки.",
            "translationPl": "Podaje do środka lodowiska."
          },
          {
            "answer": "вратарь",
            "translation": "bramkarz",
            "textWithGap": "После броска _____ ловит шайбу.",
            "fullRu": "После броска вратарь ловит шайбу.",
            "translationPl": "Po strzale bramkarz łapie krążek."
          },
          {
            "answer": "поддерживают",
            "translation": "wspierają",
            "textWithGap": "Болельщики громко _____ команду.",
            "fullRu": "Болельщики громко поддерживают команду.",
            "translationPl": "Kibice głośno wspierają drużynę."
          },
          {
            "answer": "обсуждают",
            "translation": "omawiają",
            "textWithGap": "После игры все _____ тему 1.",
            "fullRu": "После игры все обсуждают тему 1.",
            "translationPl": "Po grze wszyscy omawiają temat 1."
          }
        ]
      }
    }
  ],
  "B1": [
    {
      "id": "B1-01",
      "level": "B1",
      "textExercise": {
        "title": "Семейный матч · B1-01",
        "titlePl": "rodzinny mecz · B1-01",
        "sentences": [
          "Встреча про семейный матч начинается без спешки, потому что соперники осторожно проверяют оборону.",
          "Красная команда старается чаще выходить из зоны через короткий пас.",
          "Вратарь ловит шайбу, когда партнёры открываются между защитниками.",
          "Тренер объясняет, что лишний риск у своей синей линии может привести к опасному моменту.",
          "Когда команда играет в большинстве, она двигает шайбу быстрее и ищет свободный бросок.",
          "В меньшинстве игроки закрывают центр и помогают вратарю видеть шайбу.",
          "После потери шайбы капитан сразу возвращается назад и подсказывает защитнику.",
          "Во втором периоде темп становится выше, поэтому смены становятся короче.",
          "Судья останавливает игру после борьбы у борта, но удаления нет.",
          "Гости начинают чаще бросать от синей линии и ждать добивания.",
          "Хозяева отвечают быстрой контратакой через левый фланг.",
          "Перед третьим периодом тренер меняет одно звено, потому что игроки устали.",
          "Последние минуты проходят под давлением, но команда сохраняет порядок.",
          "Заблокированный бросок оказывается таким же важным, как гол.",
          "В наборе B1-1 главная тема — командная работа и спокойные решения."
        ],
        "translation": [
          "Spotkanie o temacie rodzinny mecz zaczyna się bez pośpiechu, ponieważ rywale ostrożnie sprawdzają obronę.",
          "Czerwona drużyna stara się częściej wychodzić ze strefy krótkim podaniem.",
          "Bramkarz łapie krążek, kiedy partnerzy otwierają się między obrońcami.",
          "Trener wyjaśnia, że zbędne ryzyko przy własnej niebieskiej linii może doprowadzić do groźnej sytuacji.",
          "Kiedy drużyna gra w przewadze, szybciej przesuwa krążek i szuka wolnego strzału.",
          "W osłabieniu zawodnicy zamykają środek i pomagają bramkarzowi widzieć krążek.",
          "Po stracie krążka kapitan od razu wraca i podpowiada obrońcy.",
          "W drugiej tercji tempo staje się wyższe, dlatego zmiany robią się krótsze.",
          "Sędzia zatrzymuje grę po walce przy bandzie, ale nie ma kary.",
          "Goście zaczynają częściej strzelać z niebieskiej linii i czekać na dobitkę.",
          "Gospodarze odpowiadają szybką kontrą przez lewą flankę.",
          "Przed trzecią tercją trener zmienia jedną formację, ponieważ zawodnicy są zmęczeni.",
          "Ostatnie minuty mijają pod presją, ale drużyna zachowuje porządek.",
          "Zablokowany strzał okazuje się równie ważny jak gol.",
          "W zestawie B1-1 główny temat to praca zespołowa i spokojne decyzje."
        ],
        "questions": [
          {
            "id": "q1",
            "prompt": "Почему команды начинают осторожно в B1-1?",
            "options": {
              "a": "они проверяют оборону",
              "b": "они ждут концерт",
              "c": "нет шайбы",
              "d": "закрыта арена"
            },
            "correct": "a"
          },
          {
            "id": "q2",
            "prompt": "К чему может привести лишний риск у синей линии в теме «семейный матч»?",
            "options": {
              "a": "к новому свитеру",
              "b": "к опасному моменту",
              "c": "к перерыву на обед",
              "d": "к смене льда"
            },
            "correct": "b"
          },
          {
            "id": "q3",
            "prompt": "Что делают игроки в меньшинстве в наборе 1?",
            "options": {
              "a": "открывают магазин",
              "b": "садятся на трибуну",
              "c": "закрывают центр",
              "d": "поют песню"
            },
            "correct": "c"
          },
          {
            "id": "q4",
            "prompt": "Почему смены становятся короче в тексте B1-1?",
            "options": {
              "a": "темп становится выше",
              "b": "форма новая",
              "c": "звучит музыка",
              "d": "погода тёплая"
            },
            "correct": "a"
          },
          {
            "id": "q5",
            "prompt": "Какая главная тема набора «семейный матч»?",
            "options": {
              "a": "командная работа и решения",
              "b": "покупки",
              "c": "еда",
              "d": "сон"
            },
            "correct": "a"
          }
        ]
      },
      "repeatExercise": {
        "sentences": [
          {
            "answer": "защитниками",
            "translation": "obrońcami",
            "textWithGap": "Вратарь ловит шайбу, когда партнёры открываются между _____.",
            "fullRu": "Вратарь ловит шайбу, когда партнёры открываются между защитниками.",
            "translationPl": "Bramkarz łapie krążek, kiedy partnerzy otwierają się między obrońcami."
          },
          {
            "answer": "объясняет",
            "translation": "wyjaśnia",
            "textWithGap": "Тренер _____, что лишний риск у своей синей линии может привести к опасному моменту.",
            "fullRu": "Тренер объясняет, что лишний риск у своей синей линии может привести к опасному моменту.",
            "translationPl": "Trener wyjaśnia, że zbędne ryzyko przy własnej niebieskiej linii może doprowadzić do groźnej sytuacji."
          },
          {
            "answer": "большинстве",
            "translation": "przewaga",
            "textWithGap": "Когда команда играет в _____, она двигает шайбу быстрее и ищет свободный бросок.",
            "fullRu": "Когда команда играет в большинстве, она двигает шайбу быстрее и ищет свободный бросок.",
            "translationPl": "Kiedy drużyna gra w przewadze, szybciej przesuwa krążek i szuka wolnego strzału."
          },
          {
            "answer": "подсказывает",
            "translation": "podpowiada",
            "textWithGap": "После потери шайбы капитан сразу возвращается назад и _____ защитнику.",
            "fullRu": "После потери шайбы капитан сразу возвращается назад и подсказывает защитнику.",
            "translationPl": "Po stracie krążka kapitan od razu wraca i podpowiada obrońcy."
          },
          {
            "answer": "останавливает",
            "translation": "zatrzymuje",
            "textWithGap": "Судья _____ игру после борьбы у борта, но удаления нет.",
            "fullRu": "Судья останавливает игру после борьбы у борта, но удаления нет.",
            "translationPl": "Sędzia zatrzymuje grę po walce przy bandzie, ale nie ma kary."
          },
          {
            "answer": "добивания",
            "translation": "dobitki",
            "textWithGap": "Гости начинают чаще бросать от синей линии и ждать _____.",
            "fullRu": "Гости начинают чаще бросать от синей линии и ждать добивания.",
            "translationPl": "Goście zaczynają częściej strzelać z niebieskiej linii i czekać na dobitkę."
          },
          {
            "answer": "контратакой",
            "translation": "kontratak",
            "textWithGap": "Хозяева отвечают быстрой _____ через левый фланг.",
            "fullRu": "Хозяева отвечают быстрой контратакой через левый фланг.",
            "translationPl": "Gospodarze odpowiadają szybką kontrą przez lewą flankę."
          },
          {
            "answer": "периодом",
            "translation": "tercją",
            "textWithGap": "Перед третьим _____ тренер меняет одно звено, потому что игроки устали.",
            "fullRu": "Перед третьим периодом тренер меняет одно звено, потому что игроки устали.",
            "translationPl": "Przed trzecią tercją trener zmienia jedną formację, ponieważ zawodnicy są zmęczeni."
          },
          {
            "answer": "сохраняет",
            "translation": "zachowuje",
            "textWithGap": "Последние минуты проходят под давлением, но команда _____ порядок.",
            "fullRu": "Последние минуты проходят под давлением, но команда сохраняет порядок.",
            "translationPl": "Ostatnie minuty mijają pod presją, ale drużyna zachowuje porządek."
          },
          {
            "answer": "Заблокированный",
            "translation": "zablokowany",
            "textWithGap": "_____ бросок оказывается таким же важным, как гол.",
            "fullRu": "Заблокированный бросок оказывается таким же важным, как гол.",
            "translationPl": "Zablokowany strzał okazuje się równie ważny jak gol."
          }
        ]
      }
    }
  ],
  "B2": [
    {
      "id": "B2-01",
      "level": "B2",
      "textExercise": {
        "title": "Семейный матч · B2-01",
        "titlePl": "rodzinny mecz · B2-01",
        "sentences": [
          "Текст о теме «семейный матч» рассматривает матч как систему взаимосвязанных решений, а не как набор отдельных эпизодов.",
          "Команда строит выход из зоны так, чтобы первый пас не попадал под прямое давление соперника.",
          "Если центральный нападающий опускается ниже, крайние получают больше пространства для ускорения.",
          "Такой приём требует синхронного движения, иначе владение быстро превращается в потерю.",
          "В большинстве тренер просит не бросать сразу, а растянуть квадрат обороны несколькими передачами.",
          "Пауза с шайбой иногда важнее скорости, потому что она заставляет защитников менять ориентиры.",
          "Голкипер контролирует не только первый бросок, но и направление возможного отскока.",
          "После длинной смены даже технически сильное звено теряет компактность в средней зоне.",
          "Аналитики называют этот момент следствием усталости, а не ошибкой одного игрока.",
          "Во втором периоде хозяева чаще переводят шайбу на слабую сторону, чтобы растянуть оборону.",
          "Защитники гостей вынуждены разворачиваться, и именно тогда появляется окно для броска.",
          "Решение бросать без подготовки выглядит простым, но оно возникает из длинной цепочки действий.",
          "После гола команда не отказывается от плана, потому что структура игры остаётся устойчивой.",
          "Соперник снимает вратаря и перегружает один фланг, чтобы создать численное преимущество.",
          "Обороняющаяся команда принимает этот риск и оставляет только дальний бросок с неудобного угла.",
          "Один блокированный бросок меняет вероятность победы почти так же сильно, как выигранное вбрасывание.",
          "Капитан после сирены говорит о дисциплине без шайбы, потому что именно она удержала результат.",
          "Тренерский штаб отдельно отмечает качество смен и своевременную подстраховку защитников.",
          "Такой матч полезен для анализа, потому что в нём видна связь между деталями и общим контролем.",
          "В наборе B2-1 хоккей описан как сложная модель выбора, темпа и пространства."
        ],
        "translation": [
          "Tekst o temacie „rodzinny mecz” traktuje mecz jako system powiązanych decyzji, a nie zbiór osobnych akcji.",
          "Drużyna buduje wyjście ze strefy tak, aby pierwszy pas nie trafiał pod bezpośrednią presję przeciwnika.",
          "Jeśli środkowy napastnik schodzi niżej, skrzydłowi dostają więcej przestrzeni do przyspieszenia.",
          "Taki zabieg wymaga zsynchronizowanego ruchu, inaczej posiadanie szybko zamienia się w stratę.",
          "W przewadze trener prosi, aby nie strzelać od razu, lecz rozciągnąć kwadrat obrony kilkoma podaniami.",
          "Pauza z krążkiem bywa ważniejsza od szybkości, ponieważ zmusza obrońców do zmiany punktów odniesienia.",
          "Bramkarz kontroluje nie tylko pierwszy strzał, lecz także kierunek możliwego odbicia.",
          "Po długiej zmianie nawet technicznie mocna formacja traci kompaktowość w strefie środkowej.",
          "Analitycy nazywają ten moment skutkiem zmęczenia, a nie błędem jednego zawodnika.",
          "W drugiej tercji gospodarze częściej przenoszą krążek na słabą stronę, aby rozciągnąć obronę.",
          "Obrońcy gości muszą się obracać i właśnie wtedy pojawia się okno do strzału.",
          "Decyzja o strzale bez przygotowania wygląda prosto, ale wynika z długiego łańcucha działań.",
          "Po golu drużyna nie rezygnuje z planu, ponieważ struktura gry pozostaje stabilna.",
          "Przeciwnik zdejmuje bramkarza i przeciąża jedną flankę, aby stworzyć przewagę liczebną.",
          "Drużyna broniąca akceptuje to ryzyko i zostawia tylko daleki strzał z niewygodnego kąta.",
          "Jeden zablokowany strzał zmienia prawdopodobieństwo zwycięstwa niemal tak mocno jak wygrane wznowienie.",
          "Kapitan po syrenie mówi o dyscyplinie bez krążka, ponieważ to ona utrzymała wynik.",
          "Sztab trenerski osobno podkreśla jakość zmian i terminową asekurację obrońców.",
          "Taki mecz jest przydatny do analizy, ponieważ widać w nim związek między detalami a ogólną kontrolą.",
          "W zestawie B2-1 hokej opisano jako złożony model wyboru, tempa i przestrzeni."
        ],
        "questions": [
          {
            "id": "q1",
            "prompt": "Как текст B2-1 рассматривает матч?",
            "options": {
              "a": "как систему решений",
              "b": "как прогулку",
              "c": "как концерт",
              "d": "как поездку"
            },
            "correct": "a"
          },
          {
            "id": "q2",
            "prompt": "Зачем растягивать оборону в большинстве в теме «семейный матч»?",
            "options": {
              "a": "чтобы сменить форму",
              "b": "чтобы открыть варианты передачи",
              "c": "чтобы закончить тренировку",
              "d": "чтобы уйти со льда"
            },
            "correct": "b"
          },
          {
            "id": "q3",
            "prompt": "Почему пауза с шайбой важна в наборе 1?",
            "options": {
              "a": "она мешает зрителям",
              "b": "она заменяет бросок",
              "c": "она меняет ориентиры защитников",
              "d": "она закрывает арену"
            },
            "correct": "c"
          },
          {
            "id": "q4",
            "prompt": "Что теряет звено после длинной смены в B2-1?",
            "options": {
              "a": "компактность",
              "b": "новую форму",
              "c": "музыку",
              "d": "погоду"
            },
            "correct": "a"
          },
          {
            "id": "q5",
            "prompt": "Как описан хоккей в финале текста «семейный матч»?",
            "options": {
              "a": "как модель выбора, темпа и пространства",
              "b": "как покупки",
              "c": "как еда",
              "d": "как сон"
            },
            "correct": "a"
          }
        ]
      },
      "repeatExercise": {
        "sentences": [
          {
            "answer": "соперника",
            "translation": "przeciwnika",
            "textWithGap": "Команда строит выход из зоны так, чтобы первый пас не попадал под прямое давление _____.",
            "fullRu": "Команда строит выход из зоны так, чтобы первый пас не попадал под прямое давление соперника.",
            "translationPl": "Drużyna buduje wyjście ze strefy tak, aby pierwszy pas nie trafiał pod bezpośrednią presję przeciwnika."
          },
          {
            "answer": "пространства",
            "translation": "przestrzeń",
            "textWithGap": "Если центральный нападающий опускается ниже, крайние получают больше _____ для ускорения.",
            "fullRu": "Если центральный нападающий опускается ниже, крайние получают больше пространства для ускорения.",
            "translationPl": "Jeśli środkowy napastnik schodzi niżej, skrzydłowi dostają więcej przestrzeni do przyspieszenia."
          },
          {
            "answer": "защитников",
            "translation": "obrońców",
            "textWithGap": "Пауза с шайбой иногда важнее скорости, потому что она заставляет _____ менять ориентиры.",
            "fullRu": "Пауза с шайбой иногда важнее скорости, потому что она заставляет защитников менять ориентиры.",
            "translationPl": "Pauza z krążkiem bywa ważniejsza od szybkości, ponieważ zmusza obrońców do zmiany punktów odniesienia."
          },
          {
            "answer": "контролирует",
            "translation": "kontroluje",
            "textWithGap": "Голкипер _____ не только первый бросок, но и направление возможного отскока.",
            "fullRu": "Голкипер контролирует не только первый бросок, но и направление возможного отскока.",
            "translationPl": "Bramkarz kontroluje nie tylko pierwszy strzał, lecz także kierunek możliwego odbicia."
          },
          {
            "answer": "растянуть",
            "translation": "rozciągnąć",
            "textWithGap": "Во втором периоде хозяева чаще переводят шайбу на слабую сторону, чтобы _____ оборону.",
            "fullRu": "Во втором периоде хозяева чаще переводят шайбу на слабую сторону, чтобы растянуть оборону.",
            "translationPl": "W drugiej tercji gospodarze częściej przenoszą krążek na słabą stronę, aby rozciągnąć obronę."
          },
          {
            "answer": "отказывается",
            "translation": "rezygnuje",
            "textWithGap": "После гола команда не _____ от плана, потому что структура игры остаётся устойчивой.",
            "fullRu": "После гола команда не отказывается от плана, потому что структура игры остаётся устойчивой.",
            "translationPl": "Po golu drużyna nie rezygnuje z planu, ponieważ struktura gry pozostaje stabilna."
          },
          {
            "answer": "Обороняющаяся",
            "translation": "broniąca się",
            "textWithGap": "_____ команда принимает этот риск и оставляет только дальний бросок с неудобного угла.",
            "fullRu": "Обороняющаяся команда принимает этот риск и оставляет только дальний бросок с неудобного угла.",
            "translationPl": "Drużyna broniąca akceptuje to ryzyko i zostawia tylko daleki strzał z niewygodnego kąta."
          },
          {
            "answer": "блокированный",
            "translation": "zablokowany",
            "textWithGap": "Один _____ бросок меняет вероятность победы почти так же сильно, как выигранное вбрасывание.",
            "fullRu": "Один блокированный бросок меняет вероятность победы почти так же сильно, как выигранное вбрасывание.",
            "translationPl": "Jeden zablokowany strzał zmienia prawdopodobieństwo zwycięstwa niemal tak mocno jak wygrane wznowienie."
          },
          {
            "answer": "своевременную",
            "translation": "w porę / terminową",
            "textWithGap": "Тренерский штаб отдельно отмечает качество смен и _____ подстраховку защитников.",
            "fullRu": "Тренерский штаб отдельно отмечает качество смен и своевременную подстраховку защитников.",
            "translationPl": "Sztab trenerski osobno podkreśla jakość zmian i terminową asekurację obrońców."
          },
          {
            "answer": "сложная",
            "translation": "złożona",
            "textWithGap": "В наборе B2-1 хоккей описан как _____ модель выбора, темпа и пространства.",
            "fullRu": "В наборе B2-1 хоккей описан как сложная модель выбора, темпа и пространства.",
            "translationPl": "W zestawie B2-1 hokej opisano jako złożony model wyboru, tempa i przestrzeni."
          }
        ]
      }
    }
  ]
};
