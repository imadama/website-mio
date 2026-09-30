/**
 * Sociale media van MIO — één handle voor alle platformen.
 * Gebruikt in Footer.astro (knoppen + handle) en Layout.astro (`sameAs` in de schema).
 */
export const handle = 'mio.gorinchem';
export const instagramUrl = `https://www.instagram.com/${handle}`;
export const tiktokUrl = `https://www.tiktok.com/@${handle}`;

/** Voor `sameAs` in de LocalBusiness-schema. */
export const socialUrls = [instagramUrl, tiktokUrl];
