/**
 * Menukaart — één bron voor de menupagina (/menu) en de Menu-schema voor Google.
 *
 * Drie kaarten, elk met groepen en items. Prijzen als string met komma ("6,95").
 * Een item heeft óf `prijs`, óf `prijzen` (één per kolom in `kolommen` van de groep).
 * Bron: de PDF-kaarten van MIO (oktober 2026). De PDF's staan in public/menu/.
 */
export const kaarten = [
  {
    id: 'dranken',
    label: 'Dranken',
    titel: 'La Carte des Boissons',
    intro: 'Coffee · Tea · Matcha · Bubble Tea · Mocktails',
    pdf: '/menu/mio-dranken.pdf',
    groepen: [
      {
        naam: 'Coffee & Tea',
        items: [
          { naam: 'Espresso', prijs: '2,75' },
          { naam: 'Dubbele espresso', prijs: '3,75' },
          { naam: 'Americano', prijs: '2,95' },
          { naam: 'Cappuccino', prijs: '3,50' },
          { naam: 'Grote cappuccino', prijs: '4,50' },
          { naam: 'Cortado', prijs: '3,50' },
          { naam: 'Flat White', prijs: '3,95' },
          { naam: 'Latte Macchiato', prijs: '3,95' },
          { naam: 'IJskoffie', prijs: '5,50' },
          { naam: 'Frappuccino', prijs: '6,50' },
          { naam: 'Thee', prijs: '2,95' },
          { naam: 'Marokkaanse muntthee', prijs: '3,50' },
        ],
      },
      {
        naam: 'Seasonal Coffee',
        items: [
          { naam: 'Pumpkin Spice Latte', prijs: '6,95', omschrijving: 'Espresso, romige melk en herfstkruiden.' },
          { naam: 'Warme chocolademelk', prijs: '4,95' },
          { naam: 'Spanish Latte', prijs: '6,95', omschrijving: 'Espresso met gecondenseerde melk.' },
          { naam: 'Crème Brûlée Iced Latte', prijs: '6,95', omschrijving: 'IJskoffie met vanille en karamel.' },
        ],
      },
      {
        naam: 'Matcha Collection',
        items: [
          { naam: 'Matcha Original', prijs: '6,50' },
          { naam: 'Passion Fruit Matcha', prijs: '6,95' },
          { naam: 'Strawberry Matcha', prijs: '6,95' },
          { naam: 'Mango Matcha', prijs: '6,95' },
          { naam: 'Vanilla Matcha', prijs: '6,95' },
          { naam: 'Banana Cloud Matcha', prijs: '7,95' },
          { naam: 'Crème Brûlée Matcha', prijs: '7,95', omschrijving: 'Romige matcha met dessertaccent.' },
          { naam: 'Pumpkin Spice Matcha', prijs: '7,95', omschrijving: 'Matcha met warme herfstkruiden.' },
        ],
      },
      {
        naam: 'Bubble Tea',
        sub: 'Fruit flavours',
        kolommen: ['Medium', 'Large'],
        items: [
          { naam: 'Passion Fruit', prijzen: ['5,50', '6,50'] },
          { naam: 'Blueberry', prijzen: ['5,50', '6,50'] },
          { naam: 'Peach', prijzen: ['5,50', '6,50'] },
          { naam: 'Mango', prijzen: ['5,50', '6,50'] },
          { naam: 'Lychee', prijzen: ['5,50', '6,50'] },
          { naam: 'Strawberry', prijzen: ['5,50', '6,50'] },
          { naam: 'Watermelon', prijzen: ['5,50', '6,50'] },
          { naam: 'Cherry', prijzen: ['5,50', '6,50'] },
          { naam: 'White Peach', prijzen: ['5,50', '6,50'] },
          { naam: 'Brown Sugar Boba Tea', prijzen: ['6,50', '7,50'], omschrijving: 'Romige melk & tapioca.' },
        ],
      },
      {
        naam: 'Mocktails',
        items: [
          { naam: 'Passion Fruit', prijs: '5,95' },
          { naam: 'Strawberry', prijs: '5,95' },
          { naam: 'Classic Mojito', prijs: '5,95' },
          { naam: 'Tropical Mango', prijs: '5,95' },
          { naam: 'Blue Curaçao', prijs: '5,95' },
        ],
        noot: 'Met Red Bull + € 1,00',
      },
      {
        naam: 'Koude dranken',
        items: [
          { naam: 'Frisdrank diversen', prijs: '2,80' },
          { naam: 'Capri-Sun Multivitamin', prijs: '1,90' },
          { naam: 'Sanpellegrino diversen', prijs: '3,20' },
          { naam: 'Spa bruisend', prijs: '2,20' },
          { naam: 'Earth Water', prijs: '2,20' },
        ],
      },
      {
        naam: 'Red Bull',
        items: [
          { naam: 'Red Bull Original', prijs: '3,20' },
          { naam: 'Red Bull Editions diversen', prijs: '3,50' },
          { naam: 'Red Bull Glacier', prijs: '4,50' },
        ],
      },
      {
        naam: "Extra's",
        items: [
          { naam: 'Siroop', prijs: '0,75' },
          { naam: 'Slagroom', prijs: '1,00' },
          { naam: 'Cold Foam', prijs: '1,00' },
          { naam: 'Extra espresso shot', prijs: '1,00' },
          { naam: 'Extra matcha', prijs: '1,00' },
          { naam: 'Havermelk', prijs: '0,50' },
          { naam: 'Sojamelk', prijs: '0,50' },
          { naam: 'Lactosevrije melk', prijs: '0,50' },
        ],
      },
    ],
  },
  {
    id: 'broodjes',
    label: 'Broodjes',
    titel: "L'Art du Pain",
    intro: 'Waar ambacht en verfijning samenkomen',
    pdf: '/menu/mio-broodjes.pdf',
    voetnoot: 'Versgebakken broodjes · geserveerd op zwarte leisteen met frisse saladegarnituur.',
    groepen: [
      {
        naam: 'Les Classiques & Favoris',
        items: [
          { nummer: '01', naam: 'Bella Caprina', prijs: '8,95', omschrijving: 'Buffelmozzarella, tomaat, groene pesto, rucola, basilicum, balsamico en zwarte olijventapenade.' },
          { nummer: '02', naam: 'Carpaccio Royale', prijs: '11,95', omschrijving: 'Rundercarpaccio, truffelmayonaise, rucola, Parmezaanse kaasschilfers en geroosterde pijnboompitten.' },
          { nummer: '03', naam: 'Le Fondant', prijs: '6,95', omschrijving: 'Warme kaasgrillworst in plakjes, extra gesmolten kaas, tomaat, rucola en andalousesaus.' },
          { nummer: '04', naam: 'Le Classique', prijs: '6,95', omschrijving: 'Warme grillworst naturel in plakjes, tomaat, komkommer, rucola en andalousesaus.' },
          { nummer: '05', naam: 'Le Flamboyant', prijs: '6,95', omschrijving: 'Pittige grillworst, cheddar, jalapeño, rucola, tomaat en MIO Harissa Cream.' },
          { nummer: '06', naam: 'Tonno Fondente', prijs: '8,95', omschrijving: 'Romige tonijnsalade, gesmolten cheddar, rode ui, tomaat en rucola.' },
          { nummer: '07', naam: 'Tonno Miraculoso', prijs: '9,95', omschrijving: 'Pittige tonijnsalade, cheddar, jalapeño, rode ui, rucola en harissa-andalousecrème.' },
          { nummer: '08', naam: 'Saumon Élégance', prijs: '11,95', omschrijving: 'Gerookte zalm, kruidenroomkaas, komkommer, rode ui, rucola, dille en citroen.' },
          { nummer: '09', naam: 'Le Jardin Frais', prijs: '8,95', omschrijving: 'Fijne plakjes kipfiletbeleg, jong belegen kaas, ei, tomaat, komkommer, rucola en andalouse.' },
          { nummer: '10', naam: 'Pollo Fumé', prijs: '10,95', omschrijving: 'Dun gesneden gerookte kipborst, avocado, rucola, tomaat, Parmezaan en truffelmayonaise.' },
          { nummer: '11', naam: 'Le Brie Doré', prijs: '9,95', omschrijving: 'Warme Franse brie, honing, geroosterde walnoten en rucola.' },
        ],
      },
      {
        naam: 'Les Créations Signature',
        items: [
          { nummer: '12', naam: 'Le Deli Royal', prijs: '11,45', omschrijving: 'Pastrami, oude kaas, augurk, rucola en mosterdmayonaise.' },
          { nummer: '13', naam: 'Verde di Sicilia', prijs: '12,45', omschrijving: 'Italiaanse mortadella, burrata, pistachecrème en pistachekruim.' },
          { nummer: '14', naam: 'Le Truffe Royal', prijs: '11,45', omschrijving: 'Rosbief in fijne plakjes, Parmezaanse kaasschilfers, rucola en truffelmayonaise.' },
        ],
      },
      {
        naam: 'La Création du Mois',
        items: [
          { nummer: '15', naam: "L'Édition Exclusive", prijs: '13,95', omschrijving: 'Iedere maand een nieuwe, exclusieve creatie van MIO met verrassende ingrediënten en bijzondere smaakcombinaties. Tijdelijk verkrijgbaar.' },
        ],
      },
    ],
  },
  {
    id: 'zoet',
    label: 'Zoet',
    titel: 'La Collection Sucrée',
    intro: 'Een verfijnde collectie van zoete verleidingen',
    pdf: '/menu/mio-zoet.pdf',
    voetnoot: 'Extra toppings, sauzen en fruit worden apart berekend.',
    groepen: [
      {
        naam: 'Les Macarons Royaux',
        sub: 'Reuze macarons',
        items: [
          { naam: 'Rosé Amour', prijs: '6,95', omschrijving: 'Aardbei' },
          { naam: 'Rubis Royal', prijs: '6,95', omschrijving: 'Framboos' },
          { naam: 'Verde di Lusso', prijs: '6,95', omschrijving: 'Pistache' },
          { naam: 'Bianca Perla', prijs: '6,95', omschrijving: 'Witte chocolade' },
        ],
      },
      {
        naam: 'Les Petits Bijoux',
        sub: 'Luxe gebakjes',
        items: [
          { naam: 'Noir Élégance', prijs: '6,50', omschrijving: 'Rijk chocoladegebak' },
          { naam: "Nougat d'Or", prijs: '6,50', omschrijving: 'Gebak met zachte nougatsmaak' },
          { naam: 'Pistache Royale', prijs: '6,50', omschrijving: 'Luxe pistachegebak' },
          { naam: 'Rouge Velours', prijs: '6,50', omschrijving: 'Fluweelzacht red velvet gebak' },
          { naam: 'Caramello Doré', prijs: '6,50', omschrijving: 'Gebak met rijke karamelsmaak' },
          { naam: "L'Édition MIO", prijs: '6,50', omschrijving: 'Exclusieve, wekelijks wisselende creatie' },
        ],
      },
      {
        naam: 'Dolce Tentazione',
        sub: 'Mini cheesecakes',
        items: [
          { naam: 'Ambra Dorata', prijs: '4,95', omschrijving: 'Stroopwafel' },
          { naam: 'Coco Praliné', prijs: '4,95', omschrijving: 'Kokos en Ferrero' },
          { naam: 'Macaron de Rêve', prijs: '4,95', omschrijving: 'Met macaron' },
          { naam: 'Oreo Noir', prijs: '4,95', omschrijving: 'Oreo' },
        ],
      },
      {
        naam: 'La Pâtisserie Signature',
        sub: 'Signature gebak',
        items: [
          { naam: 'Carotte Royale', prijs: '4,95', omschrijving: 'Smeuïge wortelcake met verfijnde kruidige tonen' },
        ],
      },
      {
        naam: 'Il Dolce Peccato',
        sub: 'Warme skillet cookies',
        items: [
          { naam: 'Lotus Doré', prijs: '10,95', omschrijving: 'Warme skillet cookie met Lotus-speculoos' },
          { naam: 'Chocolat Fondant', prijs: '10,95', omschrijving: 'Warme skillet cookie met brownie' },
          { naam: "Fraise d'Amour", prijs: '10,95', omschrijving: 'Warme skillet cookie met aardbei' },
        ],
        noot: 'Inclusief 1 bol ijs, 1 topping, 1 saus en 1 portie fruit naar keuze.',
      },
      {
        naam: "Les Gaufres d'Or",
        sub: 'Wafels · naturel € 6,50',
        items: [
          { naam: 'La Perle Blanche', prijs: '10,45', omschrijving: 'Witte chocolade en aardbei' },
          { naam: 'Pistache Éclat', prijs: '10,45', omschrijving: 'Pistachecrème en pistachekruim' },
          { naam: 'Choco Royale', prijs: '10,45', omschrijving: 'Chocolade en brownie' },
          { naam: 'Caramel Doré', prijs: '10,45', omschrijving: 'Karamel en Lotus-speculoos' },
          { naam: 'Fraise Velours', prijs: '10,45', omschrijving: 'Aardbei en chocoladesaus' },
          { naam: 'Noisette Praliné', prijs: '10,45', omschrijving: 'Hazelnootpraliné en chocolade' },
          { naam: 'Composez Votre Gaufre', prijs: '10,95', omschrijving: 'Zelf samenstellen: 1 topping, 1 saus en 1 portie fruit naar keuze' },
        ],
      },
      {
        naam: 'Cuore Fondente',
        sub: 'Warme chocoladelavacake',
        items: [
          { naam: 'Cuore Fondente', prijs: '6,95', omschrijving: 'Chocoladegebak met vloeibaar chocoladehart' },
        ],
      },
      {
        naam: "Extra's & Toppings",
        items: [
          { naam: 'Seizoensfruit', prijs: '2,00' },
          { naam: 'Saus naar keuze', prijs: '1,25' },
          { naam: 'Topping', prijs: '2,00', omschrijving: 'Lotus · Oreo · Bueno · KitKat · Ferrero Rocher, per topping' },
        ],
      },
    ],
  },
];

/** Schema.org Menu, afgeleid van de kaarten. */
export function menuSchema(url) {
  const prijs = (item) => (item.prijs ?? item.prijzen?.[0] ?? '').replace(',', '.');
  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Menu MIO Coffee & Desserts',
    url,
    inLanguage: 'nl',
    hasMenuSection: kaarten.map((kaart) => ({
      '@type': 'MenuSection',
      name: kaart.titel,
      description: kaart.intro,
      hasMenuSection: kaart.groepen.map((groep) => ({
        '@type': 'MenuSection',
        name: groep.naam,
        hasMenuItem: groep.items.map((item) => ({
          '@type': 'MenuItem',
          name: item.naam,
          ...(item.omschrijving ? { description: item.omschrijving } : {}),
          offers: { '@type': 'Offer', price: prijs(item), priceCurrency: 'EUR' },
        })),
      })),
    })),
  };
}
