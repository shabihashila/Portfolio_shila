# Shabiha Parvin Shila — Developer Portfolio

A personal portfolio presenting my work as a **Full Stack Developer** at **Lighthouse Business Consulting Limited**, with a focus on **.NET, ASP.NET Core, Angular, and SQL Server**, alongside PHP and WordPress development.

[Portfolio preview](https://shabiha-shila-portfolio.cheeryjelly33.chatgpt.site) · [GitHub profile](https://github.com/shabihashila) · [LinkedIn](https://www.linkedin.com/in/shabiha-parvin-shila-9323802a2/) · [Email](mailto:parvin.shabiha234@gmail.com)

The hosted preview currently requires owner access. You can run the complete portfolio locally using the steps below.

## Design and experience

A dark programmer-inspired interface with neon cyan and green accents, Space Mono typography, and a code-editor profile panel. The portfolio includes:

- A professional portrait sourced from my GitHub profile.
- Selected projects with screenshots, descriptions, and source links.
- Skills, experience, education, and architecture patterns.
- Responsive navigation and keyboard-accessible profile tabs.
- Project category filters, email copying, and a downloadable CV.
- Reduced-motion support for visitors who prefer less animation.

## Selected work

| Project | Focus | Technologies |
| :--- | :--- | :--- |
| [Zaara Royal Catering](https://github.com/shabihashila/zaaraRoyalCatering) | Customer website, catalogue, booking, and operational workflows | .NET 10, Minimal APIs, Angular 21, SQL Server, EF Core |
| FEG Technova | Company website and responsive service pages | WordPress, PHP, JavaScript, HTML, CSS |
| [Personal Expense Tracker](https://github.com/shabihashila/Ostad-Assignment-model-20) | Coursework: expense categories, records, and summaries | ASP.NET Core MVC, SQL Server, EF Core, Repository Pattern |
| [Learning Management System](https://github.com/shabihashila/Ostad-Assignment-model-16) | Coursework: courses, enrollment, and assignments | ASP.NET Core Razor Pages, EF Core, SQLite |

## Project structure

The portfolio uses plain **HTML, CSS, and JavaScript**. It requires no framework, package installation, or build step.

```text
dist/
├── index.html                 # Portfolio content and page structure
├── style.css                  # Theme, responsive layouts, and animations
├── script.js                  # Navigation, tabs, filters, and interactions
├── shabiha-shila-cv.pdf        # Downloadable CV
└── assets/
    ├── favicon.svg
    ├── shabiha-portrait.jpg
    ├── feg-technova.jpg
    └── zaara-catering.webp
```

My featured applications use Clean Architecture, Repository Pattern, Modular Monolith, and Dependency Injection where appropriate. This repository contains the static portfolio that presents those applications.

## Run locally

With Git and Python installed:

```bash
git clone https://github.com/shabihashila/Portfolio_shila.git
cd Portfolio_shila
python -m http.server 4173 --directory dist
```

Open **http://localhost:4173** in your browser. Stop the server with `Ctrl+C`.

To host the portfolio on a static hosting service, publish the contents of `dist/`. No build command is needed.

## Content and assets

Profile and project details were reviewed against my GitHub information on **October 11, 2026**. The portrait is my original GitHub avatar, with CSS framing. The downloadable CV retains its supplied content.

The design adapts MotionSites AI's [Neon Logic](https://motionsites.ai/?prompt=neon-logic) template for a software developer portfolio. Project screenshots belong to the featured projects; coursework cards use architecture illustrations.

## Contact

For full-stack roles, client projects, or developer collaboration:

- **Email:** [parvin.shabiha234@gmail.com](mailto:parvin.shabiha234@gmail.com)
- **LinkedIn:** [Shabiha Parvin Shila](https://www.linkedin.com/in/shabiha-parvin-shila-9323802a2/)
