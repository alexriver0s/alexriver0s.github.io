# Alex Riveros — Soporte Técnico IT

Sitio web de servicios de soporte técnico IT.
**En vivo:** https://alexriver0s.github.io/

---

## 1. Qué hay en cada archivo

```
index.html                 El CONTENIDO y la estructura de la página
css/style.css              El ASPECTO: colores, tamaños, diseño responsive
js/i18n.js                 Las TRADUCCIONES a los 6 idiomas
js/script.js               El COMPORTAMIENTO: menú, año, selector de citas
og.png                     Imagen de vista previa al compartir el link
favicon.svg                Ícono de la pestaña del navegador
apple-touch-icon.png       Ícono al guardar la web en la pantalla de inicio
robots.txt / sitemap.xml   Instrucciones para Google
.gitignore                 Archivos que Git NUNCA debe subir
```

---

## 2. El ciclo de trabajo (esto se repite siempre)

```powershell
cd "C:\Proyecto Alex\alexriver0s.github.io"

git status                          # ver qué cambió
git add .                           # marcar los cambios
git commit -m "Descripcion corta"   # guardar la foto
git push                            # subir a GitHub
```

La web se actualiza sola en unos 40 segundos.

**Antes de publicar, probá local:** abrí `index.html` con doble clic y mirá el
resultado en el navegador. No hace falta hacer commit para ver cómo quedó.

---

## 3. Cambios frecuentes

### Cambiar un precio

Están en DOS lugares y hay que tocar los dos:

1. `index.html` → buscá `class="precio"` (hay 4)
2. `js/i18n.js` → los precios NO se traducen, pero sí el detalle
   (`diag.precioDet`, `rem.precioDet`, etc.) en los 6 idiomas

Además: actualizá el precio en el bloque de datos estructurados
(`application/ld+json`) al final del `<head>` de `index.html`.

### Cambiar un texto

El español está en `index.html`. Pero el motor de idiomas lo REESCRIBE al
cargar, así que el cambio real va en `js/i18n.js`, en los **6 idiomas**:
`es`, `gn`, `en`, `pt`, `fr`, `zh`.

Si cambiás solo el HTML, vas a ver el texto viejo igual.

### Cambiar un color

Todo está en las variables de arriba de `css/style.css`:

```css
:root {
  --azul-profundo: #0b1f33;
  --acento:        #0ea5e9;
  --acento-oscuro: #0369a1;
}
```

Cambiás ahí y cambia en toda la web.

⚠️ Si cambiás colores, verificá el CONTRASTE en https://webaim.org/resources/contrastchecker/
El mínimo legible es **4.5:1** entre el texto y su fondo.

### Cambiar el número de WhatsApp

Buscá `595976527771` en `index.html` y en `js/i18n.js`. Formato: sin `+`,
sin espacios, sin guiones.

### Cambiar horarios o tipos de cita

Eso NO está en la web: se administra en https://cal.com (Event Types y
Availability). La web solo muestra el calendario.

Si cambiás el nombre de un evento en Cal.com, puede cambiar su "slug".
Entonces hay que actualizar el `data-cal="..."` de ese botón en `index.html`.

### Bloquear días en los que no querés trabajar

Creá un evento en Google Calendar marcado como **"Ocupado"**.
Cal.com lo lee y no ofrece ese horario. No hace falta tocar la web.

---

## 4. El problema de la caché (leelo, te va a pasar)

Los navegadores guardan copia de los archivos CSS y JS. Si publicás un cambio
y "no pasa nada", **primero sospechá de la caché, no del código**.

Por eso los archivos se cargan así:

```html
<link rel="stylesheet" href="css/style.css?v=5">
```

**Cada vez que hagas un cambio importante, subí ese número** (`v=6`, `v=7`...)
en las tres líneas del final del `<head>` y del final del `<body>`.
Eso obliga a todos los navegadores a bajar la versión nueva.

Para probar vos mismo sin caché: modo incógnito, o agregá `?x=1` a la URL.

### Caché de las redes sociales

WhatsApp, LinkedIn y Facebook también guardan la vista previa. Si cambiás
`og.png`, el título o la descripción, forzá la actualización en:

- LinkedIn: https://www.linkedin.com/post-inspector/
- Facebook y WhatsApp: https://developers.facebook.com/tools/debug/

---

## 5. Reglas de seguridad

Este repositorio es **PÚBLICO**. Todo lo que subas lo puede ver cualquiera.

1. **NUNCA** pongas en esta carpeta: contraseñas, claves, tokens, IPs de
   clientes, diagramas de red de clientes, informes con datos reales.
2. **El historial de Git es permanente.** Si subís un secreto y después lo
   borrás, sigue siendo recuperable con `git log -p`. La única solución real
   es **rotar la credencial** (cambiar la contraseña, revocar el token).
3. El `.gitignore` bloquea `.env`, `*.key`, `credenciales*` y `/privado/`.
   Si necesitás guardar algo sensible cerca, poné `/privado/` — Git lo ignora.
4. Mantené el **2FA activo** en tu cuenta de GitHub. Es el único acceso real
   que existe a esta web.

---

## 6. Verificar que todo sigue bien

Cada tanto, o después de un cambio grande:

| Qué revisar | Dónde |
|---|---|
| Velocidad y buenas prácticas | https://pagespeed.web.dev/ |
| Contraste de colores | https://webaim.org/resources/contrastchecker/ |
| Vista previa al compartir | Post Inspector de LinkedIn |
| Que la agenda bloquee bien | Reservá una cita de prueba y después cancelala |

Última auditoría: **0 violaciones WCAG 2.1 AA**, carga en ~660 ms, 20 KB
transferidos.

---

## 7. Si algo se rompe

Git guarda todas las versiones. Para volver atrás:

```powershell
git log --oneline          # ver el historial, copiar el codigo de la version buena
git checkout CODIGO -- .   # traer todos los archivos de esa version
git commit -m "Revertir al estado anterior"
git push
```

Nada de lo que hagas es irreversible mientras hayas hecho commit.
