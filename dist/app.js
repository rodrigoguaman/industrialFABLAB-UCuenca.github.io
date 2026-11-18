const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Abrir menú'); }
menu.addEventListener('click', () => { const open = navigation.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
const technologies = {
  '3d': { label: '01 / FABRICACIÓN ADITIVA', title: 'Impresión 3D', description: 'Un modelo digital se transforma en un objeto mediante la construcción de capas sucesivas. Es una forma de explorar geometrías y probar el volumen de un diseño.', preparation: 'Comparte tu modelo 3D o un boceto, las dimensiones aproximadas y el uso que tendrá la pieza. El equipo podrá orientarte sobre su viabilidad.' },
  laser: { label: '02 / CORTE Y GRABADO', title: 'Corte láser', description: 'Un haz láser sigue un trazado digital para cortar o grabar una superficie. Permite explorar piezas planas, patrones, ensambles y maquetas.', preparation: 'Prepara tu dibujo vectorial, sus dimensiones y el material que te gustaría utilizar. Consulta su compatibilidad antes de fabricar.' },
  cnc: { label: '03 / FABRICACIÓN SUSTRACTIVA', title: 'Fresado de precisión', description: 'Una herramienta retira material de forma controlada a partir de un diseño digital. El proceso permite obtener detalles, cavidades y formas en una pieza.', preparation: 'Comparte el diseño, sus dimensiones, el material previsto y los detalles que necesitan mayor precisión para evaluar el proceso.' },
  vinyl: { label: '04 / CORTE DIGITAL', title: 'Corte de vinilo', description: 'Una cuchilla sigue un trazado vectorial para crear formas sobre una lámina. El diseño puede aplicarse en señalética, gráficos y otras superficies compatibles.', preparation: 'Prepara un archivo vectorial con trazos cerrados e indica el tamaño y la superficie de aplicación. Consulta las opciones de material disponibles.' }
};
const dialog = document.querySelector('#tech-dialog');
document.querySelectorAll('[data-tech]').forEach(button => button.addEventListener('click', () => {
  const item = technologies[button.dataset.tech];
  document.querySelector('#dialog-label').textContent = item.label;
  document.querySelector('#dialog-title').textContent = item.title;
  document.querySelector('#dialog-description').textContent = item.description;
  document.querySelector('#dialog-preparation').textContent = item.preparation;
  document.querySelector('#dialog-contact').href = 'mailto:fabindustrial@ucuenca.edu.ec?subject=' + encodeURIComponent('Consulta sobre ' + item.title + ' — Industrial FABLAB UCuenca');
  dialog.showModal();
}));
document.querySelector('.close-dialog')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); });
