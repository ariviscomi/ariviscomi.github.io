# ariviscomi.github.io

Portfolio personal de Ariel Viscomi — Dev, IT Support, músico y maker patagónico.

Sitio estático single-page, bilingüe (ES/EN), con estética **Equilibrio Austral**: noche patagónica + celeste patria + fuego + violeta.

## Demo

**[https://ariviscomi.github.io](https://ariviscomi.github.io)**

## Stack

- HTML5 semántico
- CSS3 custom (variables, gradients, animations, responsive)
- JavaScript vanilla (zero dependencias externas)
- Google Fonts: Bricolage Grotesque + Lexend

## Estructura

```files
├── index.html    # Documento principal (544 líneas)
├── style.css     # Estilos — paleta Equilibrio Austral (1133 líneas)
├── script.js     # i18n, navegación, filtros, scroll reveal (331 líneas)
└── README.md
```

## Secciones

| Sección                 | Descripción                                                           |
|-------------------------|-----------------------------------------------------------------------|
| **Hero**                | Presentación con nombre, subtítulo y CTAs                             |
| **Sobre mí**            | Bio, intereses, traits con iconos                                     |
| **Stack Tecnológico**   | Tech cards con categorías (lenguajes, frameworks, tools, aprendiendo) |
| **Proyectos**           | Cards filtrables por tecnología, con badges público/privado           |
| **Música & Producción** | Proyectos musicales como Cachorro, MSNTS, Sr. Gómez, Esta Por Verse   |
| **Experiencia**         | Timeline profesional + educación                                      |
| **Blog**                | Placeholder (próximamente con React + Supabase)                       |
| **Contacto**            | Email, LinkedIn, GitHub                                               |

## Features

- **Bilingüe ES/EN** — toggle en navbar, persiste en `localStorage`
- **Scroll reveal** — animaciones de entrada vía Intersection Observer
- **Filtro de proyectos** — por tecnología (React, Python, HTML, etc.)
- **Responsive** — mobile-first, hamburger menu en pantallas < 900px
- **Zero dependencias** — sin frameworks, librerías ni bundlers
- **Paleta contextual** — celeste para tech, naranja para música, violeta para identidad personal

## Paleta de colores — Equilibrio Austral

| Color          | Hex       | Uso                           |
|----------------|-----------|-------------------------------|
| Noche profunda | `#090b16` | Background base               |
| Celeste Patria | `#74ACDF` | Acento tech / links / primary |
| Naranja Fuego  | `#F97316` | Acento música / creatividad   |
| Violeta Nexo   | `#8B5CF6` | Acento personal / identidad   |
| Sol de Mayo    | `#F4B942` | Highlights y CTAs             |
| Carmesí        | `#EF4444` | Alertas / énfasis             |
| Rosa Amanecer  | `#F472B6` | Complementario                |

## Deploy

GitHub Pages directo desde la rama `main`:

1. Crear repositorio `ariviscomi.github.io` en GitHub
2. Subir `index.html`, `style.css`, `script.js` a la raíz
3. Settings → Pages → Source: `main` branch, `/ (root)`
4. El sitio estará live en **[https://ariviscomi.github.io](https://ariviscomi.github.io)**

## Desarrollo local

Cualquier servidor estático sirve:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .

# VS Code
# Instalar extensión "Live Server" → click derecho en index.html → Open with Live Server
```

## Roadmap

La próxima versión migra a **React 18 + Vite + Supabase** para agregar:

- Panel admin (ABM) con autenticación + 2FA
- Blog con markdown, comentarios y reacciones emoji
- Contenido dinámico desde base de datos
- CI/CD con GitHub Actions

## Autor

**Ariel Viscomi** — Bariloche, Patagonia Argentina

- GitHub: [ariviscomi](https://github.com/ariviscomi)
- LinkedIn: [ariel-viscomi](https://linkedin.com/in/ariel-viscomi)
- Email: [arielviscomi.mail@gmail.com](mailto:arielviscomi.mail@gmail.com)

## Licencia

MIT
