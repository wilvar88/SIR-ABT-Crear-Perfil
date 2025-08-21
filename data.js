// data.js — puntos de ejemplo. Edita/añade los tuyos.
// x,y en PORCENTAJE (0–100) respecto a la imagen.
window.HOTSPOTS = [
  { x: 38.9, y: 26.5, n: 1,  title: "Código:",                   text: "Caracteres alfanuméricos únicos para este perfil."},
  { x: 38.9, y: 37.9, n: 2,  title: "Descripción:",              text: "Definición corta del perfil."},
  { x: 38.9, y: 46.9, n: 3,  title: "Tarifa: ",                  text: "Selecciona el tipo de tarifa que va a tener este perfil." },
  { x: 38.9, y: 56.0, n: 4,  title: "Multiviajes:",              text: "Número de viajes consecutivos permitidos." },
  { x: 38.9, y: 67.0, n: 5,  title: "Tiempo passback:",          text: "Tiempo en minutos que deben de transcurrir para poder validar otro viaje." },
  { x: 8.0, y: 77.0, n: 6,  title: "Viaje de emergencia:",       text: "Checkbox el cual indica si al tener un saldo inferior a la tarifa mínima, puede utilizar un viaje adicional." },


];


/* ===== BOTONES flotantes =====
   IMPORTANTE: El último objeto NO lleva coma al final.
*/
window.BUTTONS = [
  { x: 95, y: 95, label: "Manual", href: "manuales/MANUAL SIR Gestión ABT.pdf", target: "blank", variant: "ghost" },
  { x: 16.0, y: 86.5, label: "Crear Perfil",
  href: "https://wilvar88.github.io/SIR-2/",
  target: "self",
  size: "w145h32", }   // ← usará esa medida exacta , 
];

