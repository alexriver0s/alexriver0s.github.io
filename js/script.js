/* ============================================================
   1. MENÚ HAMBURGUESA (solo se ve en celular)
   ============================================================ */
const botonMenu = document.getElementById('navToggle');
const listaLinks = document.getElementById('navLinks');

botonMenu.addEventListener('click', () => {
  const estaAbierto = listaLinks.classList.toggle('abierto');
  botonMenu.setAttribute('aria-expanded', estaAbierto);
  botonMenu.setAttribute('aria-label', estaAbierto ? 'Cerrar menú' : 'Abrir menú');
});

// Al tocar un link del menu, se cierra solo
listaLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    listaLinks.classList.remove('abierto');
    botonMenu.setAttribute('aria-expanded', false);
  });
});

/* ============================================================
   2. AÑO AUTOMÁTICO EN EL PIE
   Evita que el sitio quede "viejo" cada 1 de enero.
   ============================================================ */
document.getElementById('anio').textContent = new Date().getFullYear();

/* ============================================================
   3. SELECTOR DE TIPO DE CITA
   Cada botón cambia el calendario que se muestra en el iframe.
   El iframe apunta a cal.com, un origen distinto al de esta web:
   el navegador lo aísla y ese código no puede tocar esta página.
   ============================================================ */
const USUARIO_CAL = 'alexriveros';
const marco = document.getElementById('calFrame');
const botonesCita = document.querySelectorAll('.agenda-tipo');

botonesCita.forEach((boton) => {
  boton.addEventListener('click', () => {
    botonesCita.forEach((b) => b.classList.remove('activo'));
    boton.classList.add('activo');
    marco.src = `https://cal.com/${USUARIO_CAL}/${boton.dataset.cal}` +
                '?embed=true&theme=dark&layout=month_view';
    marco.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});
