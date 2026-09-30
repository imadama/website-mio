/**
 * Openingstijden — één bron van waarheid voor:
 *  - de tijdenlijst in Tijden.astro
 *  - de LocalBusiness-schema in Layout.astro
 *  - de live "Nu open / Gesloten"-status (server én browser)
 *
 * Per weekdag (0 = zondag … 6 = zaterdag) een interval in minuten na middernacht,
 * of `null` als we die dag gesloten zijn. Tijden aanpassen? Alleen hier.
 */
const OPEN = 16 * 60;
const DICHT = 22 * 60;

export const hours = {
  0: { open: OPEN, close: DICHT }, // zondag
  1: null,                         // maandag — gesloten
  2: { open: OPEN, close: DICHT }, // dinsdag
  3: { open: OPEN, close: DICHT }, // woensdag
  4: { open: OPEN, close: DICHT }, // donderdag
  5: { open: OPEN, close: DICHT }, // vrijdag
  6: { open: OPEN, close: DICHT }, // zaterdag
};

const DAGEN_NL = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];
const DAGEN_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const WEEK_MA_ZO = [1, 2, 3, 4, 5, 6, 0];

/** 990 → "16:30" */
export const fmt = (minutes) =>
  `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;

/** Rijen voor de tijdenlijst, maandag t/m zondag. */
export const tijden = WEEK_MA_ZO.map((day) => {
  const h = hours[day];
  return {
    day,
    dag: DAGEN_NL[day].charAt(0).toUpperCase() + DAGEN_NL[day].slice(1),
    tijd: h ? `${fmt(h.open)} – ${fmt(h.close)}` : 'Gesloten',
    gesloten: !h,
  };
});

/** Schema.org OpeningHoursSpecification — dagen met gelijke tijden gegroepeerd. */
export function openingHoursSpecification() {
  const groups = new Map();
  for (const day of WEEK_MA_ZO) {
    const h = hours[day];
    if (!h) continue;
    const key = `${h.open}-${h.close}`;
    if (!groups.has(key)) {
      groups.set(key, {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [],
        opens: fmt(h.open),
        closes: fmt(h.close),
      });
    }
    groups.get(key).dayOfWeek.push(DAGEN_EN[day]);
  }
  return [...groups.values()];
}

/**
 * Weekdag + minuten-sinds-middernacht in Europe/Amsterdam, onafhankelijk van de
 * tijdzone van de server of de bezoeker. Valt terug op de lokale klok als Intl
 * onverhoopt geen tijdzones ondersteunt.
 */
export function nuInGorinchem(date = new Date()) {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Amsterdam',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }).formatToParts(date);
    const get = (type) => parts.find((p) => p.type === type)?.value;
    const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    const hour = Number(get('hour')) % 24;
    const minute = Number(get('minute'));
    if (day >= 0 && Number.isFinite(hour) && Number.isFinite(minute)) {
      return { day, minutes: hour * 60 + minute };
    }
  } catch {
    /* geen Intl-tijdzones: gebruik lokale klok */
  }
  return { day: date.getDay(), minutes: date.getHours() * 60 + date.getMinutes() };
}

/**
 * Huidige status. Bewust simpel: geen feestdagen of afwijkende tijden.
 *
 *   { open: true,  day, text: 'Nu open · tot 22:00' }
 *   { open: false, day, text: 'Gesloten · vandaag vanaf 16:00' }
 *   { open: false, day, text: 'Gesloten · morgen vanaf 16:00' }
 *   { open: false, day, text: 'Gesloten · dinsdag vanaf 16:00' }
 */
export function currentStatus(date = new Date()) {
  const { day, minutes } = nuInGorinchem(date);
  const today = hours[day];

  if (today && minutes >= today.open && minutes < today.close) {
    return { open: true, day, text: `Nu open · tot ${fmt(today.close)}` };
  }

  for (let i = 0; i < 7; i++) {
    const d = (day + i) % 7;
    const next = hours[d];
    if (!next) continue;
    if (i === 0 && minutes >= next.open) continue;
    const when = i === 0 ? 'vandaag' : i === 1 ? 'morgen' : DAGEN_NL[d];
    return { open: false, day, text: `Gesloten · ${when} vanaf ${fmt(next.open)}` };
  }

  return { open: false, day, text: 'Gesloten' };
}

/**
 * Leesbare samenvatting (o.a. voor de meta-omschrijving), open dagen eerst:
 *   "dinsdag t/m zondag 16:00 – 22:00, maandag gesloten"
 */
export function samenvatting() {
  const groepen = [];
  for (const day of WEEK_MA_ZO) {
    const h = hours[day];
    const key = h ? `${h.open}-${h.close}` : 'gesloten';
    const vorige = groepen[groepen.length - 1];
    if (vorige && vorige.key === key) vorige.dagen.push(day);
    else groepen.push({ key, dagen: [day], tijd: h ? `${fmt(h.open)} – ${fmt(h.close)}` : 'gesloten' });
  }
  const label = ({ dagen }) => {
    const [eerste, laatste] = [DAGEN_NL[dagen[0]], DAGEN_NL[dagen[dagen.length - 1]]];
    if (dagen.length === 1) return eerste;
    if (dagen.length === 2) return `${eerste} en ${laatste}`;
    return `${eerste} t/m ${laatste}`;
  };
  return [...groepen.filter((g) => g.key !== 'gesloten'), ...groepen.filter((g) => g.key === 'gesloten')]
    .map((g) => `${label(g)} ${g.tijd}`)
    .join(', ');
}
