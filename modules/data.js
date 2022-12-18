export let coords = [
  { x: 1.6823415607169263, y: -0.1999999999999984, z: 6.239069681749722 },
  { x: 2.8509420825364655, y: -0.19999999999999915, z: 1.90573151910143 },
  { x: 4.276433891268674, y: -0.2000000000000011, z: -6.932543379209228 },
  { x: 2.5520023165732737, y: -0.20000000000000256, z: -12.443097099000 },
  { x: 2.3202869678626703, y: -0.20000000000000098, z: -5.3381492798409 },
  { x: 2.198291079909217, y: 1.0426420304170792e-16, z: 2.3599074814105 },
  { x: 2.1013828518195052, y: 0.0000012591481208290744, z: -1.925401608 },
  { x: -3.9278809296931705, y: 0.05200000000000008, z: -7.8550865223973 },
  { x: -6.917730424225594, y: -0.000004939734935942997, z: -6.981690106 },
  { x: -11.968164559743185, y: -0.20000000000000062, z: -4.710552367895 },
  { x: -13.192385616409695, y: 0.05199637675285307, z: 0.87206680673092 },
  { x: -18.114426916298097, y: -0.1999999999999983, z: 4.72912297107777 },
  { x: -17.158663374051358, y: 0.4200000000000001, z: 4.576902481627856 },
  { x: -17.884154497922736, y: 1.8139227510386315, z: 4.540814850519267 },
  { x: -20.683940302059145, y: 0.2079926357269282, z: -11.1666231106622 },
  { x: -12.428206626202627, y: -0.05125000000000288, z: -20.38614219659 },
  { x: -25.11819238844508, y: 2, z: -34.27391095942908 },
  { x: -41.34740659994402, y: -0.20000000000000784, z: -37.193587500210 },
  { x: -37.82670996764456, y: 3, z: -34.314068607134466 },
  { x: -33.96618821213659, y: 4.764, z: -33.81386697831378 },
  { x: 22.463430470469255, y: -0.20000000000000828, z: -39.252422887632 },
  { x: 43.68791406173881, y: -0.20000000000000828, z: -39.2736686118662 },
  { x: 20.541609379990778, y: -0.05125000000000354, z: -28.855286665632 },
  { x: 19.072728609841292, y: -0.05125000000000412, z: -32.084975027578 },
  { x: 19.236480168033, y: 0.6767499999999961, z: -31.156662961438315 },
  { x: 3.8862289085463173, y: 1.5599999999999985, z: -11.16638013576011 },
  { x: 1.8464467532619528, y: 1.6639999999999997, z: -1.572564317813185 },
  { x: -4.297307805421605, y: -0.2000000000000007, z: -5.10749605831797 },
  { x: -20.564593972424923, y: -0.2000000000000007, z: -5.1233946054481 },
  { x: -29.319407763257786, y: -0.051249999999998706, z: 9.133559910861 },
  { x: -31.89050922449388, y: -0.05124999999999811, z: 16.9985218681605 },
  { x: -9.952648618341685, y: -0.05124967455863748, z: 16.7742493851386 },
  { x: 2.4597702549144973, y: 2.34, z: 0.9632142496708095 },
  { x: -7.569414071856229, y: -0.20000000000000118, z: -6.2617239359765 },
  { x: -11.46701110428735, y: 0.0000012397766112375425, z: 1.2603368717 },
  { x: -7.013700009378495, y: -0.19999999999999893, z: 3.92025442215240 },
  { x: -9.714944801779891, y: 1.715998016357422, z: 4.965604274430139 },
  { x: -4.023427804245146, y: 1.508, z: 0.4164872939364791 },
  { x: -5.27278855162203, y: 0.05199761652946464, z: -4.611337356936714 },
  { x: -4.278930142772631, y: 0.05199761652946466, z: -4.46490977043131 },
  { x: -3.1789642617885168, y: 0.05199761652946467, z: -4.3949218997693 },
  { x: -9.377936001982594, y: -0.20000000000000215, z: -11.568523350294 },
  { x: -19.669296132499884, y: -0.051250000000003994, z: -32.5037758132 },
];

export let riddles = [
  { imgPath: "./riddles/plate4.png", text: "2 x 2 = ?", answer: "4" },
  { imgPath: "./riddles/plate9.png", text: "3 x 3 = ?", answer: "9" },
  { imgPath: "./riddles/plate16.png", text: "2 x 8 = ?", answer: "16" },
  { imgPath: "./riddles/plate16_2.png", text: "4 x 4 = ?", answer: "16" },
  { imgPath: "./riddles/plate24.png", text: "4 x 6 = ?", answer: "24" }
];

export let gameNotes = {
  pl: {
    start: "Zbierz 16 monet - musisz rozwiązać zadanie, by otrzymać monetę.",
    allCoins: "Zanieś monety do zamku, by odblokować nowe modele na działce.",
    dark: "Szkielet oszukał Cię i zabrał wszystkie karty! Odbierz mu je i przywróć ład na wyspie! Ruszaj i znajdź go!",
    vehicle: "Odblokowałeś pojazd: ",
    notEnough: "Musisz przynieść wszystkie monety.",
    escape: "Statek tonie - uciekaj!",
    win: "Udało Ci się! Uratowałeś wyspę! Odblokowałeś 2 nowe bydynki."
  },
  eng: {
    start: "Collect 16 coins - you have to solve the mathematical operation to receive a coin.",
    allCoins: "Take the coins to the castle in order to unlock new models on allotment.",
    dark: "The skeleton deceived you and took all cards! Take them away from him and restore order to the island! Go and find him!",
    vehicle: "You have unlocked vehicle: ",
    notEnough: "You have to bring all coins.",
    escape: "The ship is sinking - run!",
    win: "You did it! You saved the island! You have unlocked 2 new buildings."
  }

}

export let uncleeLines = {
  start: true,
  eng: {
  startingLine: "Hello my friend! I'm U. N. Clee - unofficial sheriff of the order, ha ha! The police officer catches the thieves - I catch the garbage. For now the whole area is clear so I can take a rest and drink a cup of hot, dark coffee! Do you think it's boring? Well, I'm not bored, although I don't have the internet on my mobile phone! I know that for many youngsters it's very hard to not be bored without a phone, computer or TV. If you have the same problem come by to me sometime - we try to wake up your brain.",
  lines: [
    "The biggest entertainment centrum is not in your phone or computer - it is in your own mind. Try to use imagination sometimes, youngster.",
    "Learn youngster! Nobody will take your knowledge.",
    "I know that you want this new 'skin' for your game, but remember that your mum and dad must work to buy it for you.",
    "If you save your money now, then soon you will able to buy something bigger or better.",
    "Brush your teeth regularly - people don't have spare parts like minifigures!",
    "I know that for children is very important what is under the Christmas tree - but don't you think that more important is WHO is around the Christmas tree in your home?",
    "It's funny and also a little scary that today some people are so lazy that they almost don't think and can't live without phone and TV.",
    "Have you lost internet connection and you can't play your game? Well, then you can amuse yourself by creating a new story for a game, or a new hero.",
    "First computer games were simple - we had a great time also AFTER playing when we were created new stories for these games.",
    "Clean your room, make the bed and take out the garbage regularly - not only will you help your parents, but also you will learn and play in a more convenient environment.",
    "I always try my best to keep the order!",
    "If you divide a task on small steps you will achieve it more easily. Go drive a little, I'm certain that you will find some coins soon."
  ]
  },
  pl: {
    startingLine: "Witaj przyjacielu! Jestem W. U. Jaszek - nieoficjalnie szeryf porządku, ha ha! Policjant łapie złodziei - ja łapię śmieci. Na razie cały teren jest uporządkowany, więc mogę odpocząć i wypić kubek gorącej, czarnej kawy! Sądzisz, że to nudne? Cóż, nie jestem znudzony, choć nie mam internetu w swoim telefonie! Wiem, że dla wielu młodych bardzo trudno jest nie nudzić się bez telefonu, komputera albo telewizji. Jeśli też masz taki problem to wpadnij do mnie czasem - spróbujemy obudzić Twój umysł.",
    lines: [
      "Największe centrum rozrywki nie jest w telefonie czy komputerze - jest w Twoim własnym umyśle. Spróbuj czasem użyć wyobraźni!",
      "Ucz się pilnie! Wiedzy nikt Ci nie odbierze.",
      "Wiem, że chciałbyś nowy 'skin' do swojej gry w telefonie, ale pamiętaj, że Twoja mama i Twój tata muszą pracować, by kupić Ci te wszystkie rzeczy.",
      "Jeśli oszczędzisz pieniądze teraz to w niedalekiej przyszłości będziesz mógł kupić jakąś większą, albo lepszą rzecz.",
      "Pamiętaj o regularnym myciu zębów - ludzie nie mają części zamiennych tak jak minifigurki.",
      "Wiem, że dla dzieci bardzo ważne jest to co znajduje się pod choinką, ale czy nie sądzisz, że ważniejsze jest KTO znajduje się wokół choinki w Twoim domu?",
      "To zabawne, ale też trochę straszne, że obecnie niektórzy ludzie są tak leniwi, że prawie nie myślą i nie mogą żyć bez telefonu i telewizora.",
      "Nie masz połączenia z internetem i nie możesz grać w swoją grę? Cóż, w takim razie możesz się świetnie bawić wymyślając nową histiorię do gry lub nową postać.",
      "Pierwsze gry komputerowe były proste - świetnie spędzało się czas także PO graniu, kiedy wymyślaliśmy nowe historie dla tych gier.",
      "Sprzątaj swój pokój, ściel łóżko i wynoś śmieci regularnie - nie tylko pomożesz swoim rodzicom, ale też będziesz się uczył i bawił w bardziej wygodnym otoczeniu.",
      "Zawsze staram się jak najlepiej, aby zachować porządek!",
      "Jeśli podzielisz zadanie na małe kroki, wtedy łatwiej je ukończysz. Idź trochę pojeździć, jestem pewien, że wkrótce znajdziesz trochę monet."
    ]
  }
}

export let openClose = {
  'door': { move: false, rev: false },
  'window': { move: false, rev: false },
  'wcdoor': { move: false, rev: false },
  'jdoor': { move: false, rev: false },
  'mdoor': { move: false, rev: false },
  'maindoor': { move: false, rev: false },
  'kitchendoor': { move: false, rev: true },
  'myroomdoor': { move: false, rev: false },
  'bathroomdoor': { move: false, rev: false },
  'livingroomdoor': { move: false, rev: false },
  'balconydoor': { move: false, rev: false },
  'ghdoor': { move: false, rev: false },
  'boxDoor': { move: false, rev: false },
  'postDoor': { move: false, rev: false },
}

export let tracks = [
  'childish-prank-21177.mp3',
  'happy-114950.mp3',
  'happy-holiday-120132.mp3',
  'happy-processed-guitar-melody-with-acoustic-bass_155bpm_G_minor.wav',
  'jazz-happy-110855.mp3',
  'just-relax-11157.mp3',
  'kids-117853.mp3',
  'summer-trip-with-a-guitar-112939.mp3',
]