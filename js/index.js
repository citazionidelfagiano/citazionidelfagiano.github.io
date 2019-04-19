const cits = [
  "Con l'asciutto o col bagnato… tieni il gas spalancato",
  "È zucchero sintattico",
  "Son sfumature di significato",
  "Il problema è sempre tra il monitor e la sedia",
  "E' un booleano inverso",
  "Eh ma paghi il contesto",
  "E' come dare ghiande al bagnino",
  "E' una peripatetica",
  "E' un boolenao inverso ma al contrario",
  "E' una sbrodolata di merda",
  "E' una salsiccia in tangenziale",
  "Non stiamo mica a pettinare le bambole",
  "Parliam di niente",
  "E' un problema di allestimento",
  "Che hype",
  "Ti ringrazio per la domanda",
  "Abbiamo un'opportunità",
  "Ho già deployoato",
  "Fallo, fallo, fallo",
  "Non prende la specificità delle regola",
  "Lo impostiamo parametricamente",
  "Fa diverso",
  "Elda, era Borrone non Sborrone",
  "Non è girare una vite, ma sapere quale vite girare",
  "Ormai è uan cosa desueta",
  "E' cache",
  "Dura meno di un gatto in tangenziale",
  "Questa cosa è assolutamente Out of scope",
  "Diobo",
  "Soooocmel",
  "Meeting vari",
  "Non è roba nostra",
  "Mi sono sfondato",
  "Sto cazzo di seo",
  "Minchia stai già sul pezzo",
  "Sei proprio una cammelliera",
  "Caproni",
  "Prendi una sedia, ti va?",
  "Sviluppiamolo in ottica Wyoming",
  "E allora grazie",
  "Il profumo è un gioiello",
  "Te ne pregherei",
  "Un gran fritto misto",
  "Fai davero",
  "00 come la farina",
  "Rimango come un mango",
  "E' uno sbocco di sangue",
  "Sei confidente?",
  "Automagicamente",
];

const reloadBtn = document.querySelector('.reload');
const citElement = document.querySelector('.cit');

function setNewCit(e) {
  e && e.preventDefault();
  return citElement.innerHTML = cits[Math.floor(Math.random() * cits.length)];
}

reloadBtn.addEventListener('click', setNewCit);
setNewCit();