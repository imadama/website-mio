# MIO Coffee & Desserts — Website

Onepager voor MIO Coffee & Desserts, Gorinchem (NL). De zaak is open (sinds september 2026); de site toont het aanbod, openingstijden met live open/gesloten-status en een nieuwsbrief-aanmelding.

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
    Hero.astro                  # Full-viewport hero met fade-in animaties, shimmer logo, live OpenStatus-badge en Menu-knop
    Intro.astro                 # Quote + SVG iconen (gelato, koffie, desserts)
    Galerij.astro               # Fotogalerij "Binnenkijken" — leest src/assets/foto/, max 6, astro:assets (WebP, lazy)
    Aanbod.astro                # Kaart grid — items als array in frontmatter, link naar /menu
    Tijden.astro                # Openingstijden-lijst met vandaag-markering + OpenStatus-badge
    OpenStatus.astro            # Live "Nu open · tot 22:00" / "Gesloten · opent morgen om 16:00"-badge + verversscript
    Notify.astro                # Nieuwsbrief-formulier (voorheen coming-soon notificatie), POST naar /api/subscribe
    Footer.astro                # Logo, adres, email, socials, copyright
    Ornament.astro              # Herbruikbare goud-ornament (props: fullWidth, padded)
  assets/
    foto/                       # Foto's voor de galerij (jpg/png/webp, alfabetisch, max 2000px aanleveren)
  lib/
    openingstijden.js           # Enige bron voor openingstijden: lijst, schema.org spec, currentStatus()
    socials.js                  # Instagram/TikTok-URL's en handle — footer + `sameAs` in de schema
    menu.js                     # Menukaart (dranken, broodjes, zoet) — bron voor /menu en de Menu-schema
  pages/
    index.astro                 # Assembleert alle componenten
    menu.astro                  # Menupagina /menu: drie kaarten, sticky navigatie, Menu JSON-LD
    api/subscribe.js            # POST endpoint — slaat e-mail op in data/subscribers.csv
  styles/
    global.css                  # Design tokens, reset, animaties, gedeelde utilities
```

## Openingstijden

Maandag gesloten, dinsdag t/m zondag 16:00 – 22:00.

Tijden wijzig je **alleen** in `src/lib/openingstijden.js` (`hours`, per weekdag in minuten, `null` = gesloten).
Daaruit volgen automatisch de lijst in `Tijden.astro`, de `openingHoursSpecification` in de LocalBusiness-schema (`Layout.astro`)
de live status "Nu open · tot 22:00" / "Gesloten · opent om 16:00" / "Gesloten · opent morgen om 16:00" (`OpenStatus.astro`, in hero én tijden-sectie)
en de samenvatting in de meta-omschrijving.

De status wordt server-side gerenderd en daarna in de browser elke minuut ververst. De tijd wordt berekend in
`Europe/Amsterdam` via `Intl`, dus onafhankelijk van de tijdzone van de server (Docker/UTC) of de bezoeker.
Geen feestdagen of afwijkende tijden.

## Foto's

Foto's voor de galerij zet je in `src/assets/foto/` (jpg, png of webp). `Galerij.astro` pakt ze automatisch op,
alfabetisch op bestandsnaam, maximaal zes. Astro genereert responsive WebP-varianten (480/800/1200 px) en laadt lazy.
HEIC eerst omzetten (`sips -s format jpeg foto.HEIC --out foto.jpg`) en verkleinen tot max. 2000 px op de lange zijde.
Alt-teksten per bestand in `altTeksten` in `Galerij.astro`. Geen foto's in de map = geen sectie.

## Menu

De kaart staat op `/menu` en wordt gerenderd uit `src/lib/menu.js`: drie kaarten (dranken, broodjes, zoet) met groepen
en items. Prijzen als string met komma; een item heeft `prijs` of `prijzen` (één per kolom, zie Bubble Tea medium/large).
Prijswijziging = alleen `menu.js` aanpassen. De pagina levert ook een schema.org `Menu` (JSON-LD) en de LocalBusiness-schema
verwijst ernaar via `hasMenu`. Er is bewust geen PDF-download (op verzoek van de klant verwijderd). Knop "Menu" staat in de
hero onder de statusbadge, plus een tekstlink onderaan de kaart-sectie.

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

## Adres & contact

Kon. Wilhelminalaan 42, 4205 EX Gorinchem  
0183 79 41 83 (`tel:+31183794183`)  
info@mio-gorinchem.nl  
Instagram: https://www.instagram.com/mio.gorinchem · TikTok: https://www.tiktok.com/@mio.gorinchem (handle `@mio.gorinchem`, in `src/lib/socials.js`)
