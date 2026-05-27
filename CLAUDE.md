# MIO Dessert Lounge — Website

Coming soon landingspagina voor MIO Dessert Lounge, Gorinchem (NL).

## Tech stack

- **Astro 5** met `output: 'server'` + `@astrojs/node` adapter (standalone)
- Vanilla JS, geen frameworks
- Google Fonts: Cinzel + Cormorant Garamond + Inter

## Commando's

```bash
npm run dev      # dev server op http://localhost:4321
npm run build    # productie build → dist/
npm run preview  # preview van de build
```

## Projectstructuur

```
src/
  layouts/Layout.astro          # HTML-shell, meta-tags, Google Fonts, scroll-reveal script
  components/
    Hero.astro                  # Full-viewport hero met fade-in animaties en shimmer logo
    Intro.astro                 # Quote + SVG iconen (gelato, koffie, desserts)
    Aanbod.astro                # Kaart grid — items als array in frontmatter
    Tijden.astro                # Openingstijden — data als array in frontmatter
    Notify.astro                # E-mailformulier, POST naar /api/subscribe
    Footer.astro                # Logo, adres, email, socials, copyright
    Ornament.astro              # Herbruikbare goud-ornament (props: fullWidth, padded)
  pages/
    index.astro                 # Assembleert alle componenten
    api/subscribe.js            # POST endpoint — slaat e-mail op in data/subscribers.csv
  styles/
    global.css                  # Design tokens, reset, animaties, gedeelde utilities
```

## Huisstijl

| Token           | Waarde    | Gebruik                  |
|-----------------|-----------|--------------------------|
| `--cream-base`  | `#EDE0CC` | Achtergrond              |
| `--cream-soft`  | `#F5ECDB` | Cards                    |
| `--champagne`   | `#C9A876` | Logo-goud                |
| `--gold-rich`   | `#B8956A` | Lijnen, buttons          |
| `--gold-shimmer`| `#E8D4A8` | Highlights               |
| `--brown-deep`  | `#3D2817` | Koppen                   |
| `--brown-text`  | `#4A3320` | Lopende tekst            |

Fonts: **Cinzel** voor logo/koppen · **Cormorant Garamond** voor body/taglines · **Inter** voor UI/labels

## E-mailinschrijvingen

Inschrijvingen worden opgeslagen in `data/subscribers.csv` (datum + e-mail per regel).  
De `data/` map staat in `.gitignore`.

**Bij deployment op Coolify:** mount `data/` als persistent volume zodat inschrijvingen bewaard blijven bij een redeploy.

## Adres

Kon. Wilhelminalaan 42, 4205 EX Gorinchem  
info@mio-gorinchem.nl
