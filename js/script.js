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
