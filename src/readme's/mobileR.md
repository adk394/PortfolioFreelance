Main / Hero

Eliminé los offsets grandes de escritorio en móvil.
Convertí el layout principal en vertical.
Ajusté el título con tamaños fluidos y wrap-break-word.
Reduje subtítulos y texto descriptivo.
Organicé los botones en este orden:
Let’s talk
Watch CV
GitHub y LinkedIn
npx contact --open to work
Los botones tienen ancho máximo, padding y sombras adaptadas.
El botón npx es más pequeño y permite que el texto se ajuste.
El marco reservado para tu foto queda centrado, grande y responsive.
Eliminé el desplazamiento lateral causado por el layout de escritorio.
Proyectos

Convertí el layout horizontal en vertical en móvil.
La imagen aparece arriba.
El texto aparece debajo.
La descripción tiene altura limitada y overflow.
Las imágenes usan tamaños responsive.
Los iconos del stack usado tienen un tamaño limitado.
Las flechas de navegación se recolocan dentro de la tarjeta.
Los botones Preview y GitHub se reducen en móvil.
El título, tabs y acciones se adaptan al ancho disponible.
Stack

Las tres categorías pasan de tres columnas a tres tarjetas verticales.
Las TechCard ocupan todo el ancho disponible.
Aumenté el espacio interno de las tarjetas.
Ajusté títulos, padding, separación y altura mínima.
Evité que las tecnologías se salgan horizontalmente.
AboutMe

El contenido pasa de dos columnas a una columna.
La imagen queda arriba.
El texto queda debajo.
El texto tiene scroll vertical independiente.
El tamaño de los títulos se reduce en móvil.
Los botones de Overview y Personal se adaptan y pueden envolver.
Las galerías mantienen un tamaño usable en móvil.
Navbar

Se redujeron paddings y gaps.
La navegación puede hacer scroll horizontal si no cabe.
Los enlaces no fuerzan overflow de pantalla.
Se ajustó la posición superior en móvil.
Footer

El footer pasa de horizontal a vertical.
Se redujeron paddings y tamaños de título.
Las listas ocupan todo el ancho.
El botón npx se hizo compacto:
Texto pequeño.
Menos padding.
Icono reducido.
Ancho ajustado al contenido.
Límite de ancho respecto al viewport.
Cursor

El cursor personalizado se oculta en móvil con hidden md:block.
En dispositivos táctiles se restaura el cursor nativo.
Se añadió una media query para evitar que cursor: none global afecte a móviles.
Página general

El contenedor principal usa overflow-x-hidden.
Se ajustaron los espacios verticales entre secciones.
Los tamaños responsive se controlan desde las clases Tailwind.
responsive.css ya no participa en la aplicación; la adaptación principal está en los JSX.