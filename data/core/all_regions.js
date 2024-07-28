const allRegions = [
  {
    id: 1,
    country_id: 107,
    name: 'Al Qadisiyah',
  },
  {
    id: 2,
    country_id: 802,
    name: 'HaTsafon',
  },
  {
    id: 3,
    country_id: 3483,
    name: 'Hawaii',
  },
  {
    id: 4,
    country_id: 614,
    name: 'Constantine',
  },
  {
    id: 5,
    country_id: 614,
    name: 'Tiaret',
  },
  {
    id: 6,
    country_id: 614,
    name: 'Djelfa',
  },
  {
    id: 7,
    country_id: 614,
    name: 'Sidi Bel Abbes',
  },
  {
    id: 8,
    country_id: 614,
    name: 'Saida',
  },
  {
    id: 9,
    country_id: 614,
    name: "M'sila",
  },
  {
    id: 10,
    country_id: 614,
    name: 'Tizi Ouzou',
  },
  {
    id: 11,
    country_id: 614,
    name: 'Relizane',
  },
  {
    id: 12,
    country_id: 488,
    name: 'Azarbayjan-e Sharqi',
  },
  {
    id: 13,
    country_id: 2802,
    name: "'Ajman",
  },
  {
    id: 14,
    country_id: 190318,
    name: "'Amran",
  },
  {
    id: 15,
    country_id: 48946,
    name: 'Jenin',
  },
  {
    id: 16,
    country_id: 97374,
    name: 'Irbid',
  },
  {
    id: 17,
    country_id: 3677,
    name: "As Suwayda'",
  },
  {
    id: 18,
    country_id: 190321,
    name: 'Al Janubiyah',
  },
  {
    id: 19,
    country_id: 3677,
    name: 'Rif Dimashq',
  },
  {
    id: 20,
    country_id: 3677,
    name: 'Ar Raqqah',
  },
  {
    id: 21,
    country_id: 3677,
    name: 'Al Ladhiqiyah',
  },
  {
    id: 22,
    country_id: 3677,
    name: 'Hims',
  },
  {
    id: 23,
    country_id: 3677,
    name: 'Hamah',
  },
  {
    id: 24,
    country_id: 48946,
    name: 'Qalqilya',
  },
  {
    id: 25,
    country_id: 802,
    name: 'HaDarom',
  },
  {
    id: 26,
    country_id: 886,
    name: 'Ad Daqahliyah',
  },
  {
    id: 27,
    country_id: 38,
    name: 'Noord-Brabant',
  },
  {
    id: 28,
    country_id: 38,
    name: 'Zuid-Holland',
  },
  {
    id: 29,
    country_id: 38,
    name: 'Gelderland',
  },
  {
    id: 30,
    country_id: 1004,
    name: 'British Columbia',
  },
  {
    id: 31,
    country_id: 32,
    name: 'Galicia',
  },
  {
    id: 32,
    country_id: 20,
    name: 'Lisboa',
  },
  {
    id: 33,
    country_id: 64306,
    name: 'Hong Kong',
  },
  {
    id: 34,
    country_id: 320,
    name: 'Syddanmark',
  },
  {
    id: 35,
    country_id: 11,
    name: 'Bayern',
  },
  {
    id: 36,
    country_id: 11,
    name: 'Nordrhein-Westfalen',
  },
  {
    id: 37,
    country_id: 62,
    name: 'Thurgau',
  },
  {
    id: 38,
    country_id: 320,
    name: 'Nordjylland',
  },
  {
    id: 39,
    country_id: 11,
    name: 'Baden-Wurttemberg',
  },
  {
    id: 40,
    country_id: 38,
    name: 'Noord-Holland',
  },
  {
    id: 41,
    country_id: 556,
    name: 'Oost-Vlaanderen',
  },
  {
    id: 42,
    country_id: 1233,
    name: 'Keski-Suomi',
  },
  {
    id: 43,
    country_id: 62,
    name: 'Aargau',
  },
  {
    id: 44,
    country_id: 62,
    name: 'Bern',
  },
  {
    id: 45,
    country_id: 556,
    name: 'Vlaams-Brabant',
  },
  {
    id: 46,
    country_id: 556,
    name: 'Antwerpen',
  },
  {
    id: 47,
    country_id: 462,
    name: 'England',
  },
  {
    id: 48,
    country_id: 5618,
    name: 'Sichuan',
  },
  {
    id: 49,
    country_id: 674,
    name: 'Fejer',
  },
  {
    id: 50,
    country_id: 716,
    name: 'Abia',
  },
  {
    id: 51,
    country_id: 50809,
    name: 'Iloilo',
  },
  {
    id: 52,
    country_id: 488,
    name: 'Khuzestan',
  },
  {
    id: 53,
    country_id: 488,
    name: 'Fars',
  },
  {
    id: 54,
    country_id: 5,
    name: 'Goias',
  },
  {
    id: 55,
    country_id: 1424,
    name: 'Beni-Mellal-Khenifra',
  },
  {
    id: 56,
    country_id: 674,
    name: 'Jasz-Nagykun-Szolnok',
  },
  {
    id: 57,
    country_id: 227,
    name: 'Adygeya, Respublika',
  },
  {
    id: 58,
    country_id: 5,
    name: 'Minas Gerais',
  },
  {
    id: 59,
    country_id: 5,
    name: 'Para',
  },
  {
    id: 60,
    country_id: 716,
    name: 'Ebonyi',
  },
  {
    id: 61,
    country_id: 227,
    name: 'Khakasiya, Respublika',
  },
  {
    id: 62,
    country_id: 227,
    name: "Tyumenskaya oblast'",
  },
  {
    id: 63,
    country_id: 32,
    name: 'La Rioja',
  },
  {
    id: 64,
    country_id: 227,
    name: 'Krasnoyarskiy kray',
  },
  {
    id: 65,
    country_id: 404,
    name: 'Kastamonu',
  },
  {
    id: 66,
    country_id: 338,
    name: 'Apurimac',
  },
  {
    id: 67,
    country_id: 17,
    name: 'Hauts-de-France',
  },
  {
    id: 68,
    country_id: 88407,
    name: 'Bali',
  },
  {
    id: 69,
    country_id: 251,
    name: 'Veneto',
  },
  {
    id: 70,
    country_id: 32,
    name: 'Murcia, Region de',
  },
  {
    id: 71,
    country_id: 674,
    name: 'Heves',
  },
  {
    id: 72,
    country_id: 119,
    name: 'Samegrelo-Zemo Svaneti',
  },
  {
    id: 73,
    country_id: 479,
    name: 'Hokkaido',
  },
  {
    id: 74,
    country_id: 458,
    name: 'Guanajuato',
  },
  {
    id: 75,
    country_id: 458,
    name: 'Tamaulipas',
  },
  {
    id: 76,
    country_id: 17,
    name: 'Grand-Est',
  },
  {
    id: 77,
    country_id: 674,
    name: 'Borsod-Abauj-Zemplen',
  },
  {
    id: 78,
    country_id: 2427,
    name: 'Qaraghandy oblysy',
  },
  {
    id: 79,
    country_id: 251,
    name: 'Lombardia',
  },
  {
    id: 80,
    country_id: 251,
    name: 'Toscana',
  },
  {
    id: 81,
    country_id: 17,
    name: 'Pays-de-la-Loire',
  },
  {
    id: 82,
    country_id: 251,
    name: 'Sardegna',
  },
  {
    id: 83,
    country_id: 11,
    name: 'Niedersachsen',
  },
  {
    id: 84,
    country_id: 11,
    name: 'Sachsen-Anhalt',
  },
  {
    id: 85,
    country_id: 3483,
    name: 'Alabama',
  },
  {
    id: 86,
    country_id: 3483,
    name: 'Georgia',
  },
  {
    id: 87,
    country_id: 3483,
    name: 'Louisiana',
  },
  {
    id: 88,
    country_id: 3483,
    name: 'South Carolina',
  },
  {
    id: 89,
    country_id: 98,
    name: 'Western Australia',
  },
  {
    id: 90,
    country_id: 462,
    name: 'Scotland',
  },
  {
    id: 91,
    country_id: 491,
    name: 'Limerick',
  },
  {
    id: 92,
    country_id: 491,
    name: 'Laois',
  },
  {
    id: 93,
    country_id: 47,
    name: 'Dalarnas lan',
  },
  {
    id: 94,
    country_id: 98,
    name: 'Victoria',
  },
  {
    id: 95,
    country_id: 3483,
    name: 'Wisconsin',
  },
  {
    id: 96,
    country_id: 3483,
    name: 'Texas',
  },
  {
    id: 97,
    country_id: 52126,
    name: 'Khyber Pakhtunkhwa',
  },
  {
    id: 98,
    country_id: 674,
    name: 'Gyor-Moson-Sopron',
  },
  {
    id: 99,
    country_id: 488,
    name: 'Ilam',
  },
  {
    id: 100,
    country_id: 227,
    name: "Orenburgskaya oblast'",
  },
  {
    id: 101,
    country_id: 98799,
    name: 'Ouaddai',
  },
  {
    id: 102,
    country_id: 3483,
    name: 'Maryland',
  },
  {
    id: 103,
    country_id: 11,
    name: 'Sachsen',
  },
  {
    id: 104,
    country_id: 23,
    name: 'Comoe',
  },
  {
    id: 105,
    country_id: 11,
    name: 'Rheinland-Pfalz',
  },
  {
    id: 106,
    country_id: 716,
    name: 'Ogun',
  },
  {
    id: 107,
    country_id: 88407,
    name: 'Papua',
  },
  {
    id: 108,
    country_id: 462,
    name: 'Wales',
  },
  {
    id: 109,
    country_id: 3483,
    name: 'North Dakota',
  },
  {
    id: 110,
    country_id: 98,
    name: 'New South Wales',
  },
  {
    id: 111,
    country_id: 1004,
    name: 'Saskatchewan',
  },
  {
    id: 112,
    country_id: 3483,
    name: 'Mississippi',
  },
  {
    id: 113,
    country_id: 3483,
    name: 'North Carolina',
  },
  {
    id: 114,
    country_id: 3483,
    name: 'Ohio',
  },
  {
    id: 115,
    country_id: 3483,
    name: 'South Dakota',
  },
  {
    id: 116,
    country_id: 3483,
    name: 'Washington',
  },
  {
    id: 117,
    country_id: 17,
    name: 'Bourgogne-Franche-Comte',
  },
  {
    id: 118,
    country_id: 143,
    name: 'Tirol',
  },
  {
    id: 119,
    country_id: 35376,
    name: "'Asir",
  },
  {
    id: 120,
    country_id: 153732,
    name: 'Rajasthan',
  },
  {
    id: 121,
    country_id: 488,
    name: 'Zanjan',
  },
  {
    id: 122,
    country_id: 23,
    name: 'Abidjan',
  },
  {
    id: 123,
    country_id: 479,
    name: 'Chiba',
  },
  {
    id: 124,
    country_id: 3483,
    name: 'Kansas',
  },
  {
    id: 125,
    country_id: 17,
    name: 'Centre-Val de Loire',
  },
  {
    id: 126,
    country_id: 3483,
    name: 'Virginia',
  },
  {
    id: 127,
    country_id: 3483,
    name: 'Massachusetts',
  },
  {
    id: 128,
    country_id: 3483,
    name: 'Pennsylvania',
  },
  {
    id: 129,
    country_id: 227,
    name: 'Krasnodarskiy kray',
  },
  {
    id: 130,
    country_id: 3483,
    name: 'New Mexico',
  },
  {
    id: 131,
    country_id: 50809,
    name: 'Negros Oriental',
  },
  {
    id: 132,
    country_id: 2405,
    name: 'Viljandimaa',
  },
  {
    id: 133,
    country_id: 17,
    name: 'Ile-de-France',
  },
  {
    id: 134,
    country_id: 17,
    name: 'Normandie',
  },
  {
    id: 135,
    country_id: 153732,
    name: 'Punjab',
  },
  {
    id: 136,
    country_id: 7830,
    name: 'Zou',
  },
  {
    id: 137,
    country_id: 7830,
    name: 'Atlantique',
  },
  {
    id: 138,
    country_id: 17,
    name: 'Auvergne-Rhone-Alpes',
  },
  {
    id: 139,
    country_id: 674,
    name: 'Pest',
  },
  {
    id: 140,
    country_id: 50809,
    name: 'Palawan',
  },
  {
    id: 141,
    country_id: 17,
    name: 'Nouvelle-Aquitaine',
  },
  {
    id: 142,
    country_id: 919,
    name: 'Ararat',
  },
  {
    id: 143,
    country_id: 919,
    name: "Kotayk'",
  },
  {
    id: 144,
    country_id: 35376,
    name: 'Ash Sharqiyah',
  },
  {
    id: 145,
    country_id: 44,
    name: 'Jujuy',
  },
  {
    id: 146,
    country_id: 716,
    name: 'Delta',
  },
  {
    id: 147,
    country_id: 155,
    name: 'Bihor',
  },
  {
    id: 148,
    country_id: 227,
    name: "Voronezhskaya oblast'",
  },
  {
    id: 149,
    country_id: 2,
    name: 'Lubelskie',
  },
  {
    id: 150,
    country_id: 20,
    name: 'Santarem',
  },
  {
    id: 151,
    country_id: 20,
    name: 'Viseu',
  },
  {
    id: 152,
    country_id: 353,
    name: 'Norte de Santander',
  },
  {
    id: 153,
    country_id: 32,
    name: 'Catalunya',
  },
  {
    id: 154,
    country_id: 5,
    name: 'Pernambuco',
  },
  {
    id: 155,
    country_id: 251,
    name: 'Basilicata',
  },
  {
    id: 156,
    country_id: 3483,
    name: 'Montana',
  },
  {
    id: 157,
    country_id: 3483,
    name: 'New Jersey',
  },
  {
    id: 158,
    country_id: 143,
    name: 'Salzburg',
  },
  {
    id: 159,
    country_id: 11,
    name: 'Hessen',
  },
  {
    id: 160,
    country_id: 35376,
    name: 'Jazan',
  },
  {
    id: 161,
    country_id: 886,
    name: 'Al Buhayrah',
  },
  {
    id: 162,
    country_id: 2802,
    name: 'Abu Zaby',
  },
  {
    id: 163,
    country_id: 48946,
    name: 'Jerusalem',
  },
  {
    id: 164,
    country_id: 107,
    name: 'Baghdad',
  },
  {
    id: 165,
    country_id: 886,
    name: 'Al Minya',
  },
  {
    id: 166,
    country_id: 886,
    name: 'Aswan',
  },
  {
    id: 167,
    country_id: 886,
    name: 'Asyut',
  },
  {
    id: 168,
    country_id: 50809,
    name: 'Bataan',
  },
  {
    id: 169,
    country_id: 716,
    name: 'Abuja Federal Capital Territory',
  },
  {
    id: 170,
    country_id: 2507,
    name: 'Western',
  },
  {
    id: 171,
    country_id: 468,
    name: 'Eastern',
  },
  {
    id: 172,
    country_id: 50809,
    name: 'Sorsogon',
  },
  {
    id: 173,
    country_id: 47,
    name: 'Ostergotlands lan',
  },
  {
    id: 174,
    country_id: 488,
    name: 'Markazi',
  },
  {
    id: 175,
    country_id: 227,
    name: 'Bashkortostan, Respublika',
  },
  {
    id: 176,
    country_id: 98,
    name: 'Queensland',
  },
  {
    id: 177,
    country_id: 353,
    name: 'Meta',
  },
  {
    id: 178,
    country_id: 1190,
    name: 'Paraguari',
  },
  {
    id: 179,
    country_id: 458,
    name: 'Puebla',
  },
  {
    id: 180,
    country_id: 5,
    name: 'Bahia',
  },
  {
    id: 181,
    country_id: 35008,
    name: 'Sonsonate',
  },
  {
    id: 182,
    country_id: 458,
    name: 'Mexico',
  },
  {
    id: 183,
    country_id: 3483,
    name: 'California',
  },
  {
    id: 184,
    country_id: 458,
    name: 'Yucatan',
  },
  {
    id: 185,
    country_id: 50809,
    name: 'La Union',
  },
  {
    id: 186,
    country_id: 458,
    name: 'Nayarit',
  },
  {
    id: 187,
    country_id: 458,
    name: 'Guerrero',
  },
  {
    id: 188,
    country_id: 5,
    name: 'Ceara',
  },
  {
    id: 189,
    country_id: 338,
    name: 'Arequipa',
  },
  {
    id: 190,
    country_id: 275,
    name: 'Portuguesa',
  },
  {
    id: 191,
    country_id: 404,
    name: 'Aydin',
  },
  {
    id: 192,
    country_id: 251,
    name: 'Sicilia',
  },
  {
    id: 193,
    country_id: 458,
    name: 'Jalisco',
  },
  {
    id: 194,
    country_id: 458,
    name: 'Oaxaca',
  },
  {
    id: 195,
    country_id: 458,
    name: 'Veracruz de Ignacio de la Llave',
  },
  {
    id: 196,
    country_id: 251,
    name: 'Puglia',
  },
  {
    id: 197,
    country_id: 3483,
    name: 'West Virginia',
  },
  {
    id: 198,
    country_id: 468,
    name: 'Greater Accra',
  },
  {
    id: 199,
    country_id: 251,
    name: 'Campania',
  },
  {
    id: 200,
    country_id: 32,
    name: 'Extremadura',
  },
  {
    id: 201,
    country_id: 353,
    name: 'Huila',
  },
  {
    id: 202,
    country_id: 7598,
    name: 'La Paz',
  },
  {
    id: 203,
    country_id: 153732,
    name: 'Maharashtra',
  },
  {
    id: 204,
    country_id: 125,
    name: 'Attiki',
  },
  {
    id: 205,
    country_id: 143,
    name: 'Niederosterreich',
  },
  {
    id: 206,
    country_id: 5618,
    name: 'Heilongjiang',
  },
  {
    id: 207,
    country_id: 1004,
    name: 'Alberta',
  },
  {
    id: 208,
    country_id: 3483,
    name: 'Oklahoma',
  },
  {
    id: 209,
    country_id: 614,
    name: 'Jijel',
  },
  {
    id: 210,
    country_id: 44,
    name: 'Cordoba',
  },
  {
    id: 211,
    country_id: 227,
    name: "Sverdlovskaya oblast'",
  },
  {
    id: 212,
    country_id: 11,
    name: 'Schleswig-Holstein',
  },
  {
    id: 213,
    country_id: 17,
    name: 'Bretagne',
  },
  {
    id: 214,
    country_id: 404,
    name: 'Denizli',
  },
  {
    id: 215,
    country_id: 3483,
    name: 'Iowa',
  },
  {
    id: 216,
    country_id: 3483,
    name: 'Michigan',
  },
  {
    id: 217,
    country_id: 251,
    name: 'Calabria',
  },
  {
    id: 218,
    country_id: 251,
    name: 'Marche',
  },
  {
    id: 219,
    country_id: 251,
    name: 'Lazio',
  },
  {
    id: 220,
    country_id: 62,
    name: 'Ticino',
  },
  {
    id: 221,
    country_id: 251,
    name: 'Umbria',
  },
  {
    id: 222,
    country_id: 251,
    name: 'Piemonte',
  },
  {
    id: 223,
    country_id: 674,
    name: 'Komarom-Esztergom',
  },
  {
    id: 224,
    country_id: 1004,
    name: 'Ontario',
  },
  {
    id: 225,
    country_id: 458,
    name: 'Tlaxcala',
  },
  {
    id: 226,
    country_id: 462,
    name: 'Northern Ireland',
  },
  {
    id: 227,
    country_id: 3483,
    name: 'Maine',
  },
  {
    id: 228,
    country_id: 1004,
    name: 'Quebec',
  },
  {
    id: 229,
    country_id: 458,
    name: 'Hidalgo',
  },
  {
    id: 230,
    country_id: 5,
    name: 'Rio Grande do Norte',
  },
  {
    id: 231,
    country_id: 458,
    name: 'Michoacan de Ocampo',
  },
  {
    id: 232,
    country_id: 190318,
    name: 'Dhamar',
  },
  {
    id: 233,
    country_id: 35376,
    name: 'Ar Riyad',
  },
  {
    id: 234,
    country_id: 190318,
    name: "Ta'izz",
  },
  {
    id: 235,
    country_id: 107,
    name: 'Salah ad Din',
  },
  {
    id: 236,
    country_id: 56518,
    name: 'Blue Nile',
  },
  {
    id: 237,
    country_id: 3483,
    name: 'Minnesota',
  },
  {
    id: 238,
    country_id: 3483,
    name: 'Illinois',
  },
  {
    id: 239,
    country_id: 3483,
    name: 'Kentucky',
  },
  {
    id: 240,
    country_id: 7091,
    name: 'Ad Dakhiliyah',
  },
  {
    id: 241,
    country_id: 3483,
    name: 'Vermont',
  },
  {
    id: 242,
    country_id: 5,
    name: 'Sao Paulo',
  },
  {
    id: 243,
    country_id: 125,
    name: 'Notio Aigaio',
  },
  {
    id: 244,
    country_id: 245,
    name: 'Jihomoravsky kraj',
  },
  {
    id: 245,
    country_id: 2,
    name: 'Podkarpackie',
  },
  {
    id: 246,
    country_id: 3483,
    name: 'Nebraska',
  },
  {
    id: 247,
    country_id: 3483,
    name: 'New York',
  },
  {
    id: 248,
    country_id: 3483,
    name: 'Tennessee',
  },
  {
    id: 249,
    country_id: 155,
    name: 'Mures',
  },
  {
    id: 250,
    country_id: 32,
    name: 'Andalucia',
  },
  {
    id: 251,
    country_id: 404,
    name: 'Adana',
  },
  {
    id: 252,
    country_id: 674,
    name: 'Somogy',
  },
  {
    id: 253,
    country_id: 404,
    name: 'Sakarya',
  },
  {
    id: 254,
    country_id: 1424,
    name: 'Souss-Massa',
  },
  {
    id: 255,
    country_id: 1424,
    name: 'Marrakech-Safi',
  },
  {
    id: 256,
    country_id: 20,
    name: 'Braga',
  },
  {
    id: 257,
    country_id: 748,
    name: 'Adazu novads',
  },
  {
    id: 258,
    country_id: 153732,
    name: 'Andhra Pradesh',
  },
  {
    id: 259,
    country_id: 44983,
    name: 'Adis Abeba',
  },
  {
    id: 260,
    country_id: 32,
    name: 'Canarias',
  },
  {
    id: 261,
    country_id: 50809,
    name: 'Mindoro Occidental',
  },
  {
    id: 262,
    country_id: 98,
    name: 'South Australia',
  },
  {
    id: 263,
    country_id: 11,
    name: 'Thuringen',
  },
  {
    id: 264,
    country_id: 32,
    name: 'Valenciana, Comunidad',
  },
  {
    id: 265,
    country_id: 190318,
    name: "'Adan",
  },
  {
    id: 266,
    country_id: 2802,
    name: 'Ash Shariqah',
  },
  {
    id: 267,
    country_id: 119,
    name: 'Samtskhe-Javakheti',
  },
  {
    id: 268,
    country_id: 44983,
    name: 'Tigray',
  },
  {
    id: 269,
    country_id: 153732,
    name: 'Telangana',
  },
  {
    id: 270,
    country_id: 88407,
    name: 'Jawa Tengah',
  },
  {
    id: 271,
    country_id: 153732,
    name: 'Tamil Nadu',
  },
  {
    id: 272,
    country_id: 44983,
    name: 'Oromiya',
  },
  {
    id: 273,
    country_id: 404,
    name: 'Adiyaman',
  },
  {
    id: 274,
    country_id: 155,
    name: 'Vrancea',
  },
  {
    id: 275,
    country_id: 77580,
    name: 'Adjuntas',
  },
  {
    id: 276,
    country_id: 11,
    name: 'Berlin',
  },
  {
    id: 277,
    country_id: 62,
    name: 'Luzern',
  },
  {
    id: 278,
    country_id: 62,
    name: 'Zurich',
  },
  {
    id: 279,
    country_id: 11,
    name: 'Mecklenburg-Vorpommern',
  },
  {
    id: 280,
    country_id: 143,
    name: 'Steiermark',
  },
  {
    id: 281,
    country_id: 716,
    name: 'Ekiti',
  },
  {
    id: 282,
    country_id: 458,
    name: 'Chihuahua',
  },
  {
    id: 283,
    country_id: 458,
    name: 'Sinaloa',
  },
  {
    id: 284,
    country_id: 296,
    name: 'Severnobanatski okrug',
  },
  {
    id: 285,
    country_id: 3483,
    name: 'Missouri',
  },
  {
    id: 286,
    country_id: 3483,
    name: 'Oregon',
  },
  {
    id: 287,
    country_id: 38,
    name: 'Groningen',
  },
  {
    id: 288,
    country_id: 155,
    name: 'Prahova',
  },
  {
    id: 289,
    country_id: 153732,
    name: 'Kerala',
  },
  {
    id: 290,
    country_id: 227,
    name: 'Karachayevo-Cherkesskaya Respublika',
  },
  {
    id: 291,
    country_id: 23,
    name: 'Lagunes',
  },
  {
    id: 292,
    country_id: 47,
    name: 'Kronobergs lan',
  },
  {
    id: 293,
    country_id: 47,
    name: 'Uppsala lan',
  },
  {
    id: 294,
    country_id: 47,
    name: 'Norrbottens lan',
  },
  {
    id: 295,
    country_id: 1233,
    name: 'Pirkanmaa',
  },
  {
    id: 296,
    country_id: 17,
    name: 'Corse',
  },
  {
    id: 297,
    country_id: 7563,
    name: 'Shabeellaha Hoose',
  },
  {
    id: 298,
    country_id: 125,
    name: 'Kentriki Makedonia',
  },
  {
    id: 299,
    country_id: 614,
    name: 'Laghouat',
  },
  {
    id: 300,
    country_id: 5,
    name: 'Espirito Santo',
  },
  {
    id: 301,
    country_id: 404,
    name: 'Kahramanmaras',
  },
  {
    id: 302,
    country_id: 3483,
    name: 'Wyoming',
  },
  {
    id: 303,
    country_id: 155,
    name: 'Ilfov',
  },
  {
    id: 304,
    country_id: 50809,
    name: 'Cagayan',
  },
  {
    id: 305,
    country_id: 404,
    name: 'Afyonkarahisar',
  },
  {
    id: 306,
    country_id: 153732,
    name: 'Uttar Pradesh',
  },
  {
    id: 307,
    country_id: 153732,
    name: 'Karnataka',
  },
  {
    id: 308,
    country_id: 1424,
    name: 'Guelmim-Oued Noun (EH-partial)',
  },
  {
    id: 309,
    country_id: 227,
    name: "Leningradskaya oblast'",
  },
  {
    id: 310,
    country_id: 479,
    name: 'Niigata',
  },
  {
    id: 311,
    country_id: 227,
    name: "Chelyabinskaya oblast'",
  },
  {
    id: 312,
    country_id: 153732,
    name: 'Madhya Pradesh',
  },
  {
    id: 313,
    country_id: 119,
    name: "Rach'a-Lechkhumi-Kvemo Svaneti",
  },
  {
    id: 314,
    country_id: 919,
    name: "Syunik'",
  },
  {
    id: 315,
    country_id: 153732,
    name: 'Tripura',
  },
  {
    id: 316,
    country_id: 674,
    name: 'Bacs-Kiskun',
  },
  {
    id: 317,
    country_id: 910036,
    name: 'Agat',
  },
  {
    id: 318,
    country_id: 3483,
    name: 'Colorado',
  },
  {
    id: 319,
    country_id: 251,
    name: 'Emilia-Romagna',
  },
  {
    id: 320,
    country_id: 716,
    name: 'Ondo',
  },
  {
    id: 321,
    country_id: 2453,
    name: 'Agdas',
  },
  {
    id: 322,
    country_id: 17,
    name: 'Occitanie',
  },
  {
    id: 323,
    country_id: 1424,
    name: 'Draa-Tafilalet',
  },
  {
    id: 324,
    country_id: 2453,
    name: 'Agcabadi',
  },
  {
    id: 325,
    country_id: 479,
    name: 'Saitama',
  },
  {
    id: 326,
    country_id: 227,
    name: "Tul'skaya oblast'",
  },
  {
    id: 327,
    country_id: 919,
    name: 'Aragacotn',
  },
  {
    id: 328,
    country_id: 155,
    name: 'Cluj',
  },
  {
    id: 329,
    country_id: 2453,
    name: 'Agsu',
  },
  {
    id: 330,
    country_id: 125,
    name: 'Thessalia',
  },
  {
    id: 331,
    country_id: 155,
    name: 'Constanta',
  },
  {
    id: 332,
    country_id: 404,
    name: 'Elazig',
  },
  {
    id: 333,
    country_id: 227,
    name: "Zabaykal'skiy kray",
  },
  {
    id: 334,
    country_id: 125,
    name: 'Peloponnisos',
  },
  {
    id: 335,
    country_id: 125,
    name: 'Ipeiros',
  },
  {
    id: 336,
    country_id: 125,
    name: 'Voreio Aigaio',
  },
  {
    id: 337,
    country_id: 125,
    name: 'Ionia Nisia',
  },
  {
    id: 338,
    country_id: 125,
    name: 'Kriti',
  },
  {
    id: 339,
    country_id: 116,
    name: 'Larnaka',
  },
  {
    id: 340,
    country_id: 404,
    name: 'Burdur',
  },
  {
    id: 341,
    country_id: 50809,
    name: 'Quirino',
  },
  {
    id: 342,
    country_id: 748,
    name: 'Aglonas novads',
  },
  {
    id: 343,
    country_id: 155,
    name: 'Sibiu',
  },
  {
    id: 344,
    country_id: 251,
    name: 'Molise',
  },
  {
    id: 345,
    country_id: 50809,
    name: 'Batangas',
  },
  {
    id: 346,
    country_id: 1578,
    name: 'Hordaland',
  },
  {
    id: 347,
    country_id: 32,
    name: 'Castilla y Leon',
  },
  {
    id: 348,
    country_id: 404,
    name: 'Agri',
  },
  {
    id: 349,
    country_id: 155,
    name: 'Salaj',
  },
  {
    id: 350,
    country_id: 125,
    name: 'Dytiki Ellada',
  },
  {
    id: 351,
    country_id: 227,
    name: 'Tatarstan, Respublika',
  },
  {
    id: 352,
    country_id: 1176,
    name: 'Yoro',
  },
  {
    id: 353,
    country_id: 5,
    name: 'Alagoas',
  },
  {
    id: 354,
    country_id: 5,
    name: 'Piaui',
  },
  {
    id: 355,
    country_id: 5,
    name: 'Mato Grosso do Sul',
  },
  {
    id: 356,
    country_id: 353,
    name: 'Cundinamarca',
  },
  {
    id: 357,
    country_id: 1176,
    name: 'Valle',
  },
  {
    id: 358,
    country_id: 458,
    name: 'Sonora',
  },
  {
    id: 359,
    country_id: 79146,
    name: 'Duarte',
  },
  {
    id: 360,
    country_id: 353,
    name: 'Cesar',
  },
  {
    id: 361,
    country_id: 77580,
    name: 'Aguada',
  },
  {
    id: 362,
    country_id: 20,
    name: 'Aveiro',
  },
  {
    id: 363,
    country_id: 63604,
    name: 'Cienfuegos',
  },
  {
    id: 364,
    country_id: 77580,
    name: 'Aguadilla',
  },
  {
    id: 365,
    country_id: 65437,
    name: 'Cocle',
  },
  {
    id: 366,
    country_id: 77580,
    name: 'Aguas Buenas',
  },
  {
    id: 367,
    country_id: 77580,
    name: 'Ceiba',
  },
  {
    id: 368,
    country_id: 158,
    name: 'Canelones',
  },
  {
    id: 369,
    country_id: 20,
    name: 'Porto',
  },
  {
    id: 370,
    country_id: 458,
    name: 'Aguascalientes',
  },
  {
    id: 371,
    country_id: 353,
    name: 'Casanare',
  },
  {
    id: 372,
    country_id: 3483,
    name: 'Arizona',
  },
  {
    id: 373,
    country_id: 50809,
    name: 'Pangasinan',
  },
  {
    id: 374,
    country_id: 44,
    name: 'Tucuman',
  },
  {
    id: 375,
    country_id: 35008,
    name: 'San Salvador',
  },
  {
    id: 376,
    country_id: 77580,
    name: 'Juana Diaz',
  },
  {
    id: 377,
    country_id: 50809,
    name: 'Bohol',
  },
  {
    id: 378,
    country_id: 50809,
    name: 'Negros Occidental',
  },
  {
    id: 379,
    country_id: 50809,
    name: 'Misamis Oriental',
  },
  {
    id: 380,
    country_id: 1179,
    name: 'Kisumu',
  },
  {
    id: 381,
    country_id: 1424,
    name: "L'Oriental",
  },
  {
    id: 382,
    country_id: 2817,
    name: 'Northland',
  },
  {
    id: 383,
    country_id: 404,
    name: 'Konya',
  },
  {
    id: 384,
    country_id: 404,
    name: 'Bitlis',
  },
  {
    id: 385,
    country_id: 153732,
    name: 'West Bengal',
  },
  {
    id: 386,
    country_id: 153732,
    name: 'Gujarat',
  },
  {
    id: 387,
    country_id: 404,
    name: 'Manisa',
  },
  {
    id: 388,
    country_id: 716,
    name: 'Rivers',
  },
  {
    id: 389,
    country_id: 11,
    name: 'Brandenburg',
  },
  {
    id: 390,
    country_id: 1233,
    name: 'Etela-Pohjanmaa',
  },
  {
    id: 391,
    country_id: 35008,
    name: 'Ahuachapan',
  },
  {
    id: 392,
    country_id: 458,
    name: 'San Luis Potosi',
  },
  {
    id: 393,
    country_id: 47,
    name: 'Skane lan',
  },
  {
    id: 394,
    country_id: 43444,
    name: 'Samangan',
  },
  {
    id: 395,
    country_id: 77580,
    name: 'Aibonito',
  },
  {
    id: 396,
    country_id: 251,
    name: 'Abruzzo',
  },
  {
    id: 397,
    country_id: 251,
    name: 'Friuli-Venezia Giulia',
  },
  {
    id: 398,
    country_id: 62,
    name: 'Vaud',
  },
  {
    id: 399,
    country_id: 158,
    name: 'Maldonado',
  },
  {
    id: 400,
    country_id: 5618,
    name: 'Yunnan',
  },
  {
    id: 401,
    country_id: 5618,
    name: 'Hubei',
  },
  {
    id: 402,
    country_id: 5618,
    name: 'Anhui',
  },
  {
    id: 403,
    country_id: 614,
    name: 'Oum el Bouaghi',
  },
  {
    id: 404,
    country_id: 614,
    name: 'Bouira',
  },
  {
    id: 405,
    country_id: 614,
    name: 'Ain Defla',
  },
  {
    id: 406,
    country_id: 45412,
    name: 'Nabatiye',
  },
  {
    id: 407,
    country_id: 614,
    name: 'Oran',
  },
  {
    id: 408,
    country_id: 614,
    name: 'Naama',
  },
  {
    id: 409,
    country_id: 886,
    name: 'As Suways',
  },
  {
    id: 410,
    country_id: 614,
    name: 'Ain Temouchent',
  },
  {
    id: 411,
    country_id: 614,
    name: 'Batna',
  },
  {
    id: 412,
    country_id: 32,
    name: 'Aragon',
  },
  {
    id: 413,
    country_id: 98,
    name: 'Australian Capital Territory',
  },
  {
    id: 414,
    country_id: 479,
    name: 'Hyogo',
  },
  {
    id: 415,
    country_id: 7598,
    name: 'Cochabamba',
  },
  {
    id: 416,
    country_id: 479,
    name: 'Kagoshima',
  },
  {
    id: 417,
    country_id: 62,
    name: 'Geneve',
  },
  {
    id: 418,
    country_id: 479,
    name: 'Aichi',
  },
  {
    id: 419,
    country_id: 155,
    name: 'Alba',
  },
  {
    id: 420,
    country_id: 17,
    name: "Provence-Alpes-Cote-d'Azur",
  },
  {
    id: 421,
    country_id: 2931,
    name: 'Sant Julia de Loria',
  },
  {
    id: 422,
    country_id: 153732,
    name: 'Mizoram',
  },
  {
    id: 423,
    country_id: 748,
    name: 'Aizkraukles novads',
  },
  {
    id: 424,
    country_id: 748,
    name: 'Aizputes novads',
  },
  {
    id: 425,
    country_id: 479,
    name: 'Fukushima',
  },
  {
    id: 426,
    country_id: 2453,
    name: 'Haciqabul',
  },
  {
    id: 427,
    country_id: 674,
    name: 'Szabolcs-Szatmar-Bereg',
  },
  {
    id: 428,
    country_id: 32,
    name: 'Madrid, Comunidad de',
  },
  {
    id: 429,
    country_id: 716,
    name: 'Kogi',
  },
  {
    id: 430,
    country_id: 16175,
    name: 'Al Wahat',
  },
  {
    id: 431,
    country_id: 1424,
    name: 'Fes- Meknes',
  },
  {
    id: 432,
    country_id: 1638,
    name: 'Ajdovscina',
  },
  {
    id: 433,
    country_id: 674,
    name: 'Veszprem',
  },
  {
    id: 434,
    country_id: 32,
    name: 'Castilla-La Mancha',
  },
  {
    id: 435,
    country_id: 88407,
    name: 'Jawa Timur',
  },
  {
    id: 436,
    country_id: 1176,
    name: 'Comayagua',
  },
  {
    id: 437,
    country_id: 227,
    name: "Novosibirskaya oblast'",
  },
  {
    id: 438,
    country_id: 479,
    name: 'Okayama',
  },
  {
    id: 439,
    country_id: 153732,
    name: 'Chhattisgarh',
  },
  {
    id: 440,
    country_id: 47,
    name: 'Vastra Gotalands lan',
  },
  {
    id: 441,
    country_id: 404,
    name: 'Mardin',
  },
  {
    id: 442,
    country_id: 614,
    name: 'Bejaia',
  },
  {
    id: 443,
    country_id: 404,
    name: 'Trabzon',
  },
  {
    id: 444,
    country_id: 404,
    name: 'Sanliurfa',
  },
  {
    id: 445,
    country_id: 404,
    name: 'Bolu',
  },
  {
    id: 446,
    country_id: 404,
    name: 'Yozgat',
  },
  {
    id: 447,
    country_id: 47,
    name: 'Sodermanlands lan',
  },
  {
    id: 448,
    country_id: 47,
    name: 'Stockholms lan',
  },
  {
    id: 449,
    country_id: 119,
    name: "K'akheti",
  },
  {
    id: 450,
    country_id: 886,
    name: 'Suhaj',
  },
  {
    id: 451,
    country_id: 153732,
    name: 'Jammu and Kashmir',
  },
  {
    id: 452,
    country_id: 227,
    name: "Astrakhanskaya oblast'",
  },
  {
    id: 453,
    country_id: 227,
    name: 'Dagestan, Respublika',
  },
  {
    id: 454,
    country_id: 919,
    name: 'Sirak',
  },
  {
    id: 455,
    country_id: 116,
    name: 'Ammochostos',
  },
  {
    id: 456,
    country_id: 479,
    name: 'Kochi',
  },
  {
    id: 457,
    country_id: 404,
    name: 'Sivas',
  },
  {
    id: 458,
    country_id: 320,
    name: 'Hovedstaden',
  },
  {
    id: 459,
    country_id: 479,
    name: 'Tokyo',
  },
  {
    id: 460,
    country_id: 479,
    name: 'Akita',
  },
  {
    id: 461,
    country_id: 404,
    name: 'Kayseri',
  },
  {
    id: 462,
    country_id: 716,
    name: 'Gombe',
  },
  {
    id: 463,
    country_id: 2427,
    name: 'Aqmola oblysy',
  },
  {
    id: 464,
    country_id: 38,
    name: 'Fryslan',
  },
  {
    id: 465,
    country_id: 404,
    name: 'Ordu',
  },
  {
    id: 466,
    country_id: 2079,
    name: 'Siauliu apskritis',
  },
  {
    id: 467,
    country_id: 748,
    name: 'Jekabpils novads',
  },
  {
    id: 468,
    country_id: 404,
    name: 'Kirsehir',
  },
  {
    id: 469,
    country_id: 125,
    name: 'Sterea Ellada',
  },
  {
    id: 470,
    country_id: 1796,
    name: 'Vesturland',
  },
  {
    id: 471,
    country_id: 1578,
    name: 'Rogaland',
  },
  {
    id: 472,
    country_id: 125,
    name: 'Dytiki Makedonia',
  },
  {
    id: 473,
    country_id: 3483,
    name: 'Indiana',
  },
  {
    id: 474,
    country_id: 404,
    name: 'Aksaray',
  },
  {
    id: 475,
    country_id: 227,
    name: 'Yamalo-Nenetskiy avtonomnyy okrug',
  },
  {
    id: 476,
    country_id: 227,
    name: "Rostovskaya oblast'",
  },
  {
    id: 477,
    country_id: 404,
    name: 'Antalya',
  },
  {
    id: 478,
    country_id: 5618,
    name: 'Xinjiang',
  },
  {
    id: 479,
    country_id: 2427,
    name: 'Ongtustik Qazaqstan oblysy',
  },
  {
    id: 480,
    country_id: 2427,
    name: 'Shyghys Qazaqstan oblysy',
  },
  {
    id: 481,
    country_id: 2427,
    name: 'Mangghystau oblysy',
  },
  {
    id: 482,
    country_id: 2427,
    name: 'Aqtobe oblysy',
  },
  {
    id: 483,
    country_id: 1796,
    name: 'Nordurland eystra',
  },
  {
    id: 484,
    country_id: 3483,
    name: 'Alaska',
  },
  {
    id: 485,
    country_id: 716,
    name: 'Nasarawa',
  },
  {
    id: 486,
    country_id: 404,
    name: 'Ankara',
  },
  {
    id: 487,
    country_id: 1578,
    name: 'Buskerud',
  },
  {
    id: 488,
    country_id: 190318,
    name: 'Hadramawt',
  },
  {
    id: 489,
    country_id: 886,
    name: 'Matruh',
  },
  {
    id: 490,
    country_id: 107,
    name: 'Maysan',
  },
  {
    id: 491,
    country_id: 3677,
    name: 'Tartus',
  },
  {
    id: 492,
    country_id: 16175,
    name: 'Al Marj',
  },
  {
    id: 493,
    country_id: 190318,
    name: "Ad Dali'",
  },
  {
    id: 494,
    country_id: 886,
    name: 'Al Jizah',
  },
  {
    id: 495,
    country_id: 107,
    name: 'Wasit',
  },
  {
    id: 496,
    country_id: 190318,
    name: 'Ibb',
  },
  {
    id: 497,
    country_id: 190318,
    name: "San'a'",
  },
  {
    id: 498,
    country_id: 21462,
    name: 'Al Ahmadi',
  },
  {
    id: 499,
    country_id: 3677,
    name: 'Dayr az Zawr',
  },
  {
    id: 500,
    country_id: 35376,
    name: 'Al Bahah',
  },
  {
    id: 501,
    country_id: 886,
    name: 'Al Minufiyah',
  },
  {
    id: 502,
    country_id: 107,
    name: 'Al Basrah',
  },
  {
    id: 503,
    country_id: 16175,
    name: 'Al Jabal al Akhdar',
  },
  {
    id: 504,
    country_id: 35376,
    name: 'Al Qasim',
  },
  {
    id: 505,
    country_id: 7091,
    name: 'Al Buraymi',
  },
  {
    id: 506,
    country_id: 21462,
    name: "Al 'Asimah",
  },
  {
    id: 507,
    country_id: 107,
    name: 'Al Anbar',
  },
  {
    id: 508,
    country_id: 886,
    name: 'Bani Suwayf',
  },
  {
    id: 509,
    country_id: 886,
    name: 'Al Fayyum',
  },
  {
    id: 510,
    country_id: 2802,
    name: 'Al Fujayrah',
  },
  {
    id: 511,
    country_id: 190318,
    name: 'Al Mahrah',
  },
  {
    id: 512,
    country_id: 74505,
    name: 'Al Khawr wa adh Dhakhirah',
  },
  {
    id: 513,
    country_id: 35376,
    name: 'Makkah al Mukarramah',
  },
  {
    id: 514,
    country_id: 97374,
    name: 'Jarash',
  },
  {
    id: 515,
    country_id: 886,
    name: 'Kafr ash Shaykh',
  },
  {
    id: 516,
    country_id: 3677,
    name: "Dar'a",
  },
  {
    id: 517,
    country_id: 3677,
    name: 'Al Hasakah',
  },
  {
    id: 518,
    country_id: 190318,
    name: 'Al Jawf',
  },
  {
    id: 519,
    country_id: 48946,
    name: 'Bethlehem',
  },
  {
    id: 520,
    country_id: 56518,
    name: 'Gezira',
  },
  {
    id: 521,
    country_id: 107,
    name: 'Babil',
  },
  {
    id: 522,
    country_id: 107,
    name: "Karbala'",
  },
  {
    id: 523,
    country_id: 1424,
    name: 'Tanger-Tetouan-Al Hoceima',
  },
  {
    id: 524,
    country_id: 190318,
    name: 'Al Hudaydah',
  },
  {
    id: 525,
    country_id: 97374,
    name: "Ma'an",
  },
  {
    id: 526,
    country_id: 16175,
    name: 'Al Butnan',
  },
  {
    id: 527,
    country_id: 21462,
    name: "Al Jahra'",
  },
  {
    id: 528,
    country_id: 16175,
    name: 'Al Kufrah',
  },
  {
    id: 529,
    country_id: 190318,
    name: 'Lahij',
  },
  {
    id: 530,
    country_id: 97374,
    name: "Al Balqa'",
  },
  {
    id: 531,
    country_id: 1439,
    name: 'Siliana',
  },
  {
    id: 532,
    country_id: 7091,
    name: 'Shamal al Batinah',
  },
  {
    id: 533,
    country_id: 886,
    name: 'Al Qalyubiyah',
  },
  {
    id: 534,
    country_id: 886,
    name: 'Al Wadi al Jadid',
  },
  {
    id: 535,
    country_id: 16175,
    name: 'Al Marqab',
  },
  {
    id: 536,
    country_id: 56518,
    name: 'South Kordofan',
  },
  {
    id: 537,
    country_id: 97374,
    name: 'Al Mafraq',
  },
  {
    id: 538,
    country_id: 886,
    name: 'Al Gharbiyah',
  },
  {
    id: 539,
    country_id: 1439,
    name: 'Bizerte',
  },
  {
    id: 540,
    country_id: 107,
    name: 'Ninawa',
  },
  {
    id: 541,
    country_id: 97374,
    name: 'Al Karak',
  },
  {
    id: 542,
    country_id: 1439,
    name: 'Sidi Bouzid',
  },
  {
    id: 543,
    country_id: 107,
    name: 'Diyala',
  },
  {
    id: 544,
    country_id: 107,
    name: 'An Najaf',
  },
  {
    id: 545,
    country_id: 190321,
    name: 'Al Muharraq',
  },
  {
    id: 546,
    country_id: 16175,
    name: 'Darnah',
  },
  {
    id: 547,
    country_id: 886,
    name: 'Al Bahr al Ahmar',
  },
  {
    id: 548,
    country_id: 35376,
    name: 'Tabuk',
  },
  {
    id: 549,
    country_id: 74505,
    name: 'Al Wakrah',
  },
  {
    id: 550,
    country_id: 251,
    name: 'Trentino-Alto Adige',
  },
  {
    id: 551,
    country_id: 50809,
    name: 'Albay',
  },
  {
    id: 552,
    country_id: 404,
    name: 'Corum',
  },
  {
    id: 553,
    country_id: 404,
    name: 'Samsun',
  },
  {
    id: 554,
    country_id: 404,
    name: 'Izmir',
  },
  {
    id: 555,
    country_id: 3483,
    name: 'Florida',
  },
  {
    id: 556,
    country_id: 65053,
    name: 'Agadez',
  },
  {
    id: 557,
    country_id: 227,
    name: 'Severnaya Osetiya, Respublika',
  },
  {
    id: 558,
    country_id: 20,
    name: 'Portalegre',
  },
  {
    id: 559,
    country_id: 5,
    name: 'Paraiba',
  },
  {
    id: 560,
    country_id: 32,
    name: 'Illes Balears',
  },
  {
    id: 561,
    country_id: 1233,
    name: 'Kainuu',
  },
  {
    id: 562,
    country_id: 1739,
    name: 'Alajuela',
  },
  {
    id: 563,
    country_id: 227,
    name: "Murmanskaya oblast'",
  },
  {
    id: 564,
    country_id: 50809,
    name: 'Laguna',
  },
  {
    id: 565,
    country_id: 65437,
    name: 'Chiriqui',
  },
  {
    id: 566,
    country_id: 404,
    name: 'Bursa',
  },
  {
    id: 567,
    country_id: 404,
    name: 'Zonguldak',
  },
  {
    id: 568,
    country_id: 251,
    name: 'Liguria',
  },
  {
    id: 569,
    country_id: 1233,
    name: 'Varsinais-Suomi',
  },
  {
    id: 570,
    country_id: 227,
    name: 'Chuvashskaya Respublika',
  },
  {
    id: 571,
    country_id: 459,
    name: 'Chimborazo',
  },
  {
    id: 572,
    country_id: 919,
    name: 'Lori',
  },
  {
    id: 573,
    country_id: 1233,
    name: 'Pohjois-Pohjanmaa',
  },
  {
    id: 574,
    country_id: 44,
    name: 'Misiones',
  },
  {
    id: 575,
    country_id: 353,
    name: 'La Guajira',
  },
  {
    id: 576,
    country_id: 2817,
    name: 'Auckland',
  },
  {
    id: 577,
    country_id: 44,
    name: 'San Juan',
  },
  {
    id: 578,
    country_id: 155,
    name: 'Gorj',
  },
  {
    id: 579,
    country_id: 143,
    name: 'Oberosterreich',
  },
  {
    id: 580,
    country_id: 98,
    name: 'Tasmania',
  },
  {
    id: 581,
    country_id: 146,
    name: 'Gauteng',
  },
  {
    id: 582,
    country_id: 155,
    name: 'Botosani',
  },
  {
    id: 583,
    country_id: 360931,
    name: 'Black River',
  },
  {
    id: 584,
    country_id: 3483,
    name: 'Idaho',
  },
  {
    id: 585,
    country_id: 245,
    name: 'Moravskoslezsky kraj',
  },
  {
    id: 586,
    country_id: 245,
    name: 'Kralovehradecky kraj',
  },
  {
    id: 587,
    country_id: 20,
    name: 'Faro',
  },
  {
    id: 588,
    country_id: 20,
    name: 'Setubal',
  },
  {
    id: 589,
    country_id: 20,
    name: 'Guarda',
  },
  {
    id: 590,
    country_id: 353,
    name: 'Valle del Cauca',
  },
  {
    id: 591,
    country_id: 5,
    name: 'Maranhao',
  },
  {
    id: 592,
    country_id: 50809,
    name: 'Cebu',
  },
  {
    id: 593,
    country_id: 86,
    name: 'Luhanska oblast',
  },
  {
    id: 594,
    country_id: 20,
    name: 'Leiria',
  },
  {
    id: 595,
    country_id: 227,
    name: 'Saha, Respublika',
  },
  {
    id: 596,
    country_id: 47,
    name: 'Hallands lan',
  },
  {
    id: 597,
    country_id: 5,
    name: 'Rio Grande do Sul',
  },
  {
    id: 598,
    country_id: 50809,
    name: 'Agusan del Sur',
  },
  {
    id: 599,
    country_id: 227,
    name: "Stavropol'skiy kray",
  },
  {
    id: 600,
    country_id: 227,
    name: "Ryazanskaya oblast'",
  },
  {
    id: 601,
    country_id: 227,
    name: "Vladimirskaya oblast'",
  },
  {
    id: 602,
    country_id: 227,
    name: "Saratovskaya oblast'",
  },
  {
    id: 603,
    country_id: 86,
    name: 'Mykolaivska oblast',
  },
  {
    id: 604,
    country_id: 227,
    name: 'Permskiy kray',
  },
  {
    id: 605,
    country_id: 227,
    name: "Sakhalinskaya oblast'",
  },
  {
    id: 606,
    country_id: 227,
    name: "Tomskaya oblast'",
  },
  {
    id: 607,
    country_id: 2,
    name: 'Kujawsko-pomorskie',
  },
  {
    id: 608,
    country_id: 2,
    name: 'Lodzkie',
  },
  {
    id: 609,
    country_id: 227,
    name: "Belgorodskaya oblast'",
  },
  {
    id: 610,
    country_id: 227,
    name: "Irkutskaya oblast'",
  },
  {
    id: 611,
    country_id: 227,
    name: "Volgogradskaya oblast'",
  },
  {
    id: 612,
    country_id: 1578,
    name: 'Sor-Trondelag',
  },
  {
    id: 613,
    country_id: 3677,
    name: 'Halab',
  },
  {
    id: 614,
    country_id: 488,
    name: 'Lorestan',
  },
  {
    id: 615,
    country_id: 1578,
    name: 'More og Romsdal',
  },
  {
    id: 616,
    country_id: 3483,
    name: 'Arkansas',
  },
  {
    id: 617,
    country_id: 886,
    name: 'Al Iskandariyah',
  },
  {
    id: 618,
    country_id: 155,
    name: 'Teleorman',
  },
  {
    id: 619,
    country_id: 125,
    name: 'Anatoliki Makedonia kai Thraki',
  },
  {
    id: 620,
    country_id: 155,
    name: 'Iasi',
  },
  {
    id: 621,
    country_id: 155,
    name: 'Calarasi',
  },
  {
    id: 622,
    country_id: 227,
    name: 'Altayskiy kray',
  },
  {
    id: 623,
    country_id: 224,
    name: 'Silistra',
  },
  {
    id: 624,
    country_id: 50809,
    name: 'Cavite',
  },
  {
    id: 625,
    country_id: 459,
    name: 'Guayas',
  },
  {
    id: 626,
    country_id: 47,
    name: 'Gavleborgs lan',
  },
  {
    id: 627,
    country_id: 1796,
    name: 'Sudurnes',
  },
  {
    id: 628,
    country_id: 614,
    name: 'Alger',
  },
  {
    id: 629,
    country_id: 32,
    name: 'Pais Vasco',
  },
  {
    id: 630,
    country_id: 20,
    name: 'Coimbra',
  },
  {
    id: 631,
    country_id: 2453,
    name: 'Zaqatala',
  },
  {
    id: 632,
    country_id: 52126,
    name: 'Gilgit-Baltistan',
  },
  {
    id: 633,
    country_id: 50809,
    name: 'Nueva Ecija',
  },
  {
    id: 634,
    country_id: 296,
    name: 'Juznobanatski okrug',
  },
  {
    id: 635,
    country_id: 146,
    name: 'Eastern Cape',
  },
  {
    id: 636,
    country_id: 98,
    name: 'Northern Territory',
  },
  {
    id: 637,
    country_id: 50809,
    name: 'Isabela',
  },
  {
    id: 638,
    country_id: 50809,
    name: 'Ilocos Sur',
  },
  {
    id: 639,
    country_id: 52126,
    name: 'Federally Administered Tribal Areas',
  },
  {
    id: 640,
    country_id: 20,
    name: 'Beja',
  },
  {
    id: 641,
    country_id: 556,
    name: 'Limburg',
  },
  {
    id: 642,
    country_id: 227,
    name: 'Chechenskaya Respublika',
  },
  {
    id: 643,
    country_id: 137919,
    name: 'Saint John',
  },
  {
    id: 644,
    country_id: 1004,
    name: 'New Brunswick',
  },
  {
    id: 645,
    country_id: 62,
    name: 'Jura',
  },
  {
    id: 646,
    country_id: 44,
    name: 'Rio Negro',
  },
  {
    id: 647,
    country_id: 50809,
    name: 'Northern Samar',
  },
  {
    id: 648,
    country_id: 33497,
    name: 'Saint Thomas',
  },
  {
    id: 649,
    country_id: 458,
    name: 'Coahuila de Zaragoza',
  },
  {
    id: 650,
    country_id: 458,
    name: 'Nuevo Leon',
  },
  {
    id: 651,
    country_id: 320,
    name: 'Midtjylland',
  },
  {
    id: 652,
    country_id: 62,
    name: 'Basel-Landschaft',
  },
  {
    id: 653,
    country_id: 459,
    name: 'Santo Domingo de los Tsachilas',
  },
  {
    id: 654,
    country_id: 50809,
    name: 'Guimaras',
  },
  {
    id: 655,
    country_id: 2427,
    name: 'Almaty',
  },
  {
    id: 656,
    country_id: 38,
    name: 'Overijssel',
  },
  {
    id: 657,
    country_id: 50809,
    name: 'Tarlac',
  },
  {
    id: 658,
    country_id: 38,
    name: 'Flevoland',
  },
  {
    id: 659,
    country_id: 65437,
    name: 'Bocas del Toro',
  },
  {
    id: 660,
    country_id: 53128,
    name: 'Quetzaltenango',
  },
  {
    id: 661,
    country_id: 153732,
    name: 'Uttarakhand',
  },
  {
    id: 662,
    country_id: 404,
    name: 'Tokat',
  },
  {
    id: 663,
    country_id: 227,
    name: 'Udmurtskaya Respublika',
  },
  {
    id: 664,
    country_id: 12444275,
    name: 'Niue',
  },
  {
    id: 665,
    country_id: 748,
    name: 'Alojas novads',
  },
  {
    id: 666,
    country_id: 4125,
    name: 'Nwoya',
  },
  {
    id: 667,
    country_id: 153732,
    name: 'Arunachal Pradesh',
  },
  {
    id: 668,
    country_id: 3995,
    name: 'Melaka',
  },
  {
    id: 669,
    country_id: 3995,
    name: 'Kedah',
  },
  {
    id: 670,
    country_id: 44,
    name: 'La Pampa',
  },
  {
    id: 671,
    country_id: 3483,
    name: 'Utah',
  },
  {
    id: 672,
    country_id: 62,
    name: 'Obwalden',
  },
  {
    id: 673,
    country_id: 11,
    name: 'Hamburg',
  },
  {
    id: 674,
    country_id: 1578,
    name: 'Finnmark',
  },
  {
    id: 675,
    country_id: 5,
    name: 'Mato Grosso',
  },
  {
    id: 676,
    country_id: 143,
    name: 'Vorarlberg',
  },
  {
    id: 677,
    country_id: 275,
    name: 'Guarico',
  },
  {
    id: 678,
    country_id: 458,
    name: 'Chiapas',
  },
  {
    id: 679,
    country_id: 5,
    name: 'Parana',
  },
  {
    id: 680,
    country_id: 62,
    name: 'Uri',
  },
  {
    id: 681,
    country_id: 11,
    name: 'Bremen',
  },
  {
    id: 682,
    country_id: 62,
    name: 'Schwyz',
  },
  {
    id: 683,
    country_id: 11,
    name: 'Saarland',
  },
  {
    id: 684,
    country_id: 143,
    name: 'Karnten',
  },
  {
    id: 685,
    country_id: 404,
    name: 'Yalova',
  },
  {
    id: 686,
    country_id: 275,
    name: 'Barinas',
  },
  {
    id: 687,
    country_id: 44,
    name: 'Chubut',
  },
  {
    id: 688,
    country_id: 3483,
    name: 'New Hampshire',
  },
  {
    id: 689,
    country_id: 1004,
    name: 'Manitoba',
  },
  {
    id: 690,
    country_id: 1190,
    name: 'Cordillera',
  },
  {
    id: 691,
    country_id: 32,
    name: 'Navarra, Comunidad Foral de',
  },
  {
    id: 692,
    country_id: 62,
    name: 'Sankt Gallen',
  },
  {
    id: 693,
    country_id: 404,
    name: 'Nigde',
  },
  {
    id: 694,
    country_id: 748,
    name: 'Aluksnes novads',
  },
  {
    id: 695,
    country_id: 44,
    name: 'Neuquen',
  },
  {
    id: 696,
    country_id: 86,
    name: 'Avtonomna Respublika Krym',
  },
  {
    id: 697,
    country_id: 353,
    name: 'Tolima',
  },
  {
    id: 698,
    country_id: 458,
    name: 'Ciudad de Mexico',
  },
  {
    id: 699,
    country_id: 1578,
    name: 'Hedmark',
  },
  {
    id: 700,
    country_id: 44,
    name: 'Corrientes',
  },
  {
    id: 701,
    country_id: 556,
    name: 'West-Vlaanderen',
  },
  {
    id: 702,
    country_id: 5,
    name: 'Tocantins',
  },
  {
    id: 703,
    country_id: 2,
    name: 'Malopolskie',
  },
  {
    id: 704,
    country_id: 5618,
    name: 'Nei Mongol',
  },
  {
    id: 705,
    country_id: 2453,
    name: 'Siyazan',
  },
  {
    id: 706,
    country_id: 2079,
    name: 'Alytaus apskritis',
  },
  {
    id: 707,
    country_id: 353,
    name: 'Antioquia',
  },
  {
    id: 708,
    country_id: 88407,
    name: 'Maluku',
  },
  {
    id: 709,
    country_id: 479,
    name: 'Kumamoto',
  },
  {
    id: 710,
    country_id: 155,
    name: 'Ialomita',
  },
  {
    id: 711,
    country_id: 155,
    name: 'Dolj',
  },
  {
    id: 712,
    country_id: 3483,
    name: 'Nevada',
  },
  {
    id: 713,
    country_id: 404,
    name: 'Bartin',
  },
  {
    id: 714,
    country_id: 404,
    name: 'Amasya',
  },
  {
    id: 715,
    country_id: 53128,
    name: 'Guatemala',
  },
  {
    id: 716,
    country_id: 556,
    name: 'Liege',
  },
  {
    id: 717,
    country_id: 153732,
    name: 'Haryana',
  },
  {
    id: 718,
    country_id: 38404,
    name: 'Southern Province',
  },
  {
    id: 719,
    country_id: 404,
    name: 'Diyarbakir',
  },
  {
    id: 720,
    country_id: 459,
    name: 'Tungurahua',
  },
  {
    id: 721,
    country_id: 1646,
    name: 'Toamasina',
  },
  {
    id: 722,
    country_id: 1646,
    name: 'Fianarantsoa',
  },
  {
    id: 723,
    country_id: 458,
    name: 'Queretaro',
  },
  {
    id: 724,
    country_id: 38,
    name: 'Utrecht',
  },
  {
    id: 725,
    country_id: 153732,
    name: 'Assam',
  },
  {
    id: 726,
    country_id: 1004,
    name: 'Nova Scotia',
  },
  {
    id: 727,
    country_id: 479,
    name: 'Ibaraki',
  },
  {
    id: 728,
    country_id: 79146,
    name: 'Valverde',
  },
  {
    id: 729,
    country_id: 45412,
    name: 'Liban-Nord',
  },
  {
    id: 730,
    country_id: 153732,
    name: 'Dadra and Nagar Haveli',
  },
  {
    id: 731,
    country_id: 1578,
    name: 'Aust-Agder',
  },
  {
    id: 732,
    country_id: 49477,
    name: 'Amnat Charoen',
  },
  {
    id: 733,
    country_id: 488,
    name: 'Mazandaran',
  },
  {
    id: 734,
    country_id: 1578,
    name: 'Telemark',
  },
  {
    id: 735,
    country_id: 47,
    name: 'Varmlands lan',
  },
  {
    id: 736,
    country_id: 3995,
    name: 'Wilayah Persekutuan Kuala Lumpur',
  },
  {
    id: 737,
    country_id: 38404,
    name: 'Eastern Province',
  },
  {
    id: 738,
    country_id: 50809,
    name: 'Maguindanao',
  },
  {
    id: 739,
    country_id: 49477,
    name: 'Samut Songkhram',
  },
  {
    id: 740,
    country_id: 49477,
    name: 'Nakhon Ratchasima',
  },
  {
    id: 741,
    country_id: 32,
    name: 'Cantabria',
  },
  {
    id: 742,
    country_id: 3483,
    name: 'Connecticut',
  },
  {
    id: 743,
    country_id: 88407,
    name: 'Kalimantan Selatan',
  },
  {
    id: 744,
    country_id: 227,
    name: 'Khabarovskiy kray',
  },
  {
    id: 745,
    country_id: 4125,
    name: 'Amuru',
  },
  {
    id: 746,
    country_id: 227,
    name: "Yevreyskaya avtonomnaya oblast'",
  },
  {
    id: 747,
    country_id: 86,
    name: 'Donetska oblast',
  },
  {
    id: 748,
    country_id: 69697,
    name: 'Ba Ria - Vung Tau',
  },
  {
    id: 749,
    country_id: 491,
    name: 'Westmeath',
  },
  {
    id: 750,
    country_id: 107,
    name: 'Dhi Qar',
  },
  {
    id: 751,
    country_id: 48946,
    name: 'Jericho and Al Aghwar',
  },
  {
    id: 752,
    country_id: 275,
    name: 'Anzoategui',
  },
  {
    id: 753,
    country_id: 227,
    name: 'Chukotskiy avtonomnyy okrug',
  },
  {
    id: 754,
    country_id: 404,
    name: 'Isparta',
  },
  {
    id: 755,
    country_id: 404,
    name: 'Mersin',
  },
  {
    id: 756,
    country_id: 479,
    name: 'Tokushima',
  },
  {
    id: 757,
    country_id: 77580,
    name: 'Anasco',
  },
  {
    id: 758,
    country_id: 44,
    name: 'Santiago del Estero',
  },
  {
    id: 759,
    country_id: 5618,
    name: 'Guangdong',
  },
  {
    id: 760,
    country_id: 5618,
    name: 'Zhejiang',
  },
  {
    id: 761,
    country_id: 1004,
    name: 'Newfoundland and Labrador',
  },
  {
    id: 762,
    country_id: 1640,
    name: 'Saint James',
  },
  {
    id: 763,
    country_id: 88407,
    name: 'Jawa Barat',
  },
  {
    id: 764,
    country_id: 65437,
    name: 'Panama',
  },
  {
    id: 765,
    country_id: 80,
    name: 'Los Lagos',
  },
  {
    id: 766,
    country_id: 404,
    name: 'Sirnak',
  },
  {
    id: 767,
    country_id: 44,
    name: 'Catamarca',
  },
  {
    id: 768,
    country_id: 143,
    name: 'Burgenland',
  },
  {
    id: 769,
    country_id: 1578,
    name: 'Vestfold',
  },
  {
    id: 770,
    country_id: 1578,
    name: 'Nordland',
  },
  {
    id: 771,
    country_id: 556,
    name: 'Namur',
  },
  {
    id: 772,
    country_id: 2426,
    name: 'Andijon',
  },
  {
    id: 773,
    country_id: 712,
    name: 'Gyeongsangbuk-do',
  },
  {
    id: 774,
    country_id: 5618,
    name: 'Shandong',
  },
  {
    id: 775,
    country_id: 2931,
    name: 'Andorra la Vella',
  },
  {
    id: 776,
    country_id: 227,
    name: 'Khanty-Mansiyskiy avtonomnyy okrug',
  },
  {
    id: 777,
    country_id: 227,
    name: "Tverskaya oblast'",
  },
  {
    id: 778,
    country_id: 1638,
    name: 'Puconci',
  },
  {
    id: 779,
    country_id: 155,
    name: 'Satu Mare',
  },
  {
    id: 780,
    country_id: 266,
    name: 'Vukovarsko-srijemska zupanija',
  },
  {
    id: 781,
    country_id: 80919,
    name: 'Central Andros',
  },
  {
    id: 782,
    country_id: 86,
    name: 'Zhytomyrska oblast',
  },
  {
    id: 783,
    country_id: 1578,
    name: 'Akershus',
  },
  {
    id: 784,
    country_id: 47,
    name: 'Jonkopings lan',
  },
  {
    id: 785,
    country_id: 2345,
    name: 'Anenii Noi',
  },
  {
    id: 786,
    country_id: 5618,
    name: 'Jiangsu',
  },
  {
    id: 787,
    country_id: 49477,
    name: 'Ang Thong',
  },
  {
    id: 788,
    country_id: 50809,
    name: 'Abra',
  },
  {
    id: 789,
    country_id: 212,
    name: 'Horad Minsk',
  },
  {
    id: 790,
    country_id: 47,
    name: 'Vasternorrlands lan',
  },
  {
    id: 791,
    country_id: 50809,
    name: 'Pampanga',
  },
  {
    id: 792,
    country_id: 44569,
    name: 'Aruba',
  },
  {
    id: 793,
    country_id: 80,
    name: 'La Araucania',
  },
  {
    id: 794,
    country_id: 50809,
    name: 'Rizal',
  },
  {
    id: 795,
    country_id: 20,
    name: 'Regiao Autonoma dos Acores',
  },
  {
    id: 796,
    country_id: 5,
    name: 'Rio de Janeiro',
  },
  {
    id: 797,
    country_id: 2426,
    name: 'Toshkent',
  },
  {
    id: 798,
    country_id: 153732,
    name: 'Odisha',
  },
  {
    id: 799,
    country_id: 69697,
    name: 'Kon Tum',
  },
  {
    id: 800,
    country_id: 5618,
    name: 'Gansu',
  },
  {
    id: 801,
    country_id: 507,
    name: 'Brcko distrikt',
  },
  {
    id: 802,
    country_id: 155,
    name: 'Caras-Severin',
  },
  {
    id: 803,
    country_id: 155,
    name: 'Dambovita',
  },
  {
    id: 804,
    country_id: 211975,
    name: 'Wele-Nzas',
  },
  {
    id: 805,
    country_id: 5,
    name: 'Santa Catarina',
  },
  {
    id: 806,
    country_id: 1233,
    name: 'Kymenlaakso',
  },
  {
    id: 807,
    country_id: 5618,
    name: 'Hunan',
  },
  {
    id: 808,
    country_id: 5618,
    name: 'Fujian',
  },
  {
    id: 809,
    country_id: 1646,
    name: 'Antananarivo',
  },
  {
    id: 810,
    country_id: 5618,
    name: 'Shaanxi',
  },
  {
    id: 811,
    country_id: 1638,
    name: 'Koper',
  },
  {
    id: 812,
    country_id: 47,
    name: 'Kalmar lan',
  },
  {
    id: 813,
    country_id: 5618,
    name: 'Henan',
  },
  {
    id: 814,
    country_id: 38,
    name: 'Drenthe',
  },
  {
    id: 815,
    country_id: 614,
    name: 'Annaba',
  },
  {
    id: 816,
    country_id: 479,
    name: 'Gunma',
  },
  {
    id: 817,
    country_id: 5618,
    name: 'Shanxi',
  },
  {
    id: 818,
    country_id: 712,
    name: 'Gyeonggi-do',
  },
  {
    id: 819,
    country_id: 908860,
    name: 'Anse aux Pins',
  },
  {
    id: 820,
    country_id: 908860,
    name: 'Anse Boileau',
  },
  {
    id: 821,
    country_id: 908860,
    name: 'Pointe Larue',
  },
  {
    id: 822,
    country_id: 908860,
    name: 'La Digue',
  },
  {
    id: 823,
    country_id: 12095,
    name: 'Anse la Raye',
  },
  {
    id: 824,
    country_id: 353,
    name: 'Risaralda',
  },
  {
    id: 825,
    country_id: 5618,
    name: 'Liaoning',
  },
  {
    id: 826,
    country_id: 5618,
    name: 'Guizhou',
  },
  {
    id: 827,
    country_id: 26,
    name: 'Gao',
  },
  {
    id: 828,
    country_id: 53128,
    name: 'Sacatepequez',
  },
  {
    id: 829,
    country_id: 35008,
    name: 'La Libertad',
  },
  {
    id: 830,
    country_id: 404,
    name: 'Hatay',
  },
  {
    id: 831,
    country_id: 50809,
    name: 'Camarines Sur',
  },
  {
    id: 832,
    country_id: 80,
    name: 'Antofagasta',
  },
  {
    id: 833,
    country_id: 556,
    name: 'Hainaut',
  },
  {
    id: 834,
    country_id: 224,
    name: 'Sofia',
  },
  {
    id: 835,
    country_id: 77580,
    name: 'Humacao',
  },
  {
    id: 836,
    country_id: 86,
    name: 'Khmelnytska oblast',
  },
  {
    id: 837,
    country_id: 6783,
    name: 'Nampula',
  },
  {
    id: 838,
    country_id: 227,
    name: "Kostromskaya oblast'",
  },
  {
    id: 839,
    country_id: 1646,
    name: 'Antsiranana',
  },
  {
    id: 840,
    country_id: 266,
    name: 'Osjecko-baranjska zupanija',
  },
  {
    id: 841,
    country_id: 227,
    name: 'Primorskiy kray',
  },
  {
    id: 842,
    country_id: 38404,
    name: 'North Central Province',
  },
  {
    id: 843,
    country_id: 5618,
    name: 'Jiangxi',
  },
  {
    id: 844,
    country_id: 2079,
    name: 'Utenos apskritis',
  },
  {
    id: 845,
    country_id: 227,
    name: "Kemerovskaya oblast'",
  },
  {
    id: 846,
    country_id: 49477,
    name: 'Krabi',
  },
  {
    id: 847,
    country_id: 479,
    name: 'Aomori',
  },
  {
    id: 848,
    country_id: 251,
    name: "Valle d'Aosta",
  },
  {
    id: 849,
    country_id: 614,
    name: 'Adrar',
  },
  {
    id: 850,
    country_id: 98799,
    name: 'Tibesti',
  },
  {
    id: 851,
    country_id: 1638,
    name: 'Apace',
  },
  {
    id: 852,
    country_id: 919,
    name: 'Armavir',
  },
  {
    id: 853,
    country_id: 50809,
    name: 'Sarangani',
  },
  {
    id: 854,
    country_id: 35008,
    name: 'San Vicente',
  },
  {
    id: 855,
    country_id: 674,
    name: 'Csongrad',
  },
  {
    id: 856,
    country_id: 296,
    name: 'Zapadnobacki okrug',
  },
  {
    id: 857,
    country_id: 867334,
    name: 'Tuamasaga',
  },
  {
    id: 858,
    country_id: 50809,
    name: 'Davao del Norte',
  },
  {
    id: 859,
    country_id: 44,
    name: 'Salta',
  },
  {
    id: 860,
    country_id: 86,
    name: 'Dnipropetrovska oblast',
  },
  {
    id: 861,
    country_id: 62,
    name: 'Appenzell Innerrhoden',
  },
  {
    id: 862,
    country_id: 227,
    name: "Moskovskaya oblast'",
  },
  {
    id: 863,
    country_id: 224,
    name: 'Lovech',
  },
  {
    id: 864,
    country_id: 97374,
    name: "Al 'Aqabah",
  },
  {
    id: 865,
    country_id: 2427,
    name: 'Batys Qazaqstan oblysy',
  },
  {
    id: 866,
    country_id: 2427,
    name: 'Pavlodar oblysy',
  },
  {
    id: 867,
    country_id: 5,
    name: 'Sergipe',
  },
  {
    id: 868,
    country_id: 458,
    name: 'Tabasco',
  },
  {
    id: 869,
    country_id: 50809,
    name: 'Aklan',
  },
  {
    id: 870,
    country_id: 353,
    name: 'Boyaca',
  },
  {
    id: 871,
    country_id: 21462,
    name: 'Al Farwaniyah',
  },
  {
    id: 872,
    country_id: 190318,
    name: "Amanat al 'Asimah",
  },
  {
    id: 873,
    country_id: 74505,
    name: 'Ar Rayyan',
  },
  {
    id: 874,
    country_id: 1439,
    name: 'Gafsa',
  },
  {
    id: 875,
    country_id: 107,
    name: 'Al Muthanna',
  },
  {
    id: 876,
    country_id: 153732,
    name: 'Bihar',
  },
  {
    id: 877,
    country_id: 404,
    name: 'Gaziantep',
  },
  {
    id: 878,
    country_id: 32396817,
    name: 'Aracinovo',
  },
  {
    id: 879,
    country_id: 155,
    name: 'Arad',
  },
  {
    id: 880,
    country_id: 2427,
    name: 'Qyzylorda oblysy',
  },
  {
    id: 881,
    country_id: 153732,
    name: 'Goa',
  },
  {
    id: 882,
    country_id: 5790,
    name: 'Erongo',
  },
  {
    id: 883,
    country_id: 296,
    name: 'Sumadijski okrug',
  },
  {
    id: 884,
    country_id: 44,
    name: 'Entre Rios',
  },
  {
    id: 885,
    country_id: 5790,
    name: 'Hardap',
  },
  {
    id: 886,
    country_id: 49477,
    name: 'Sa Kaeo',
  },
  {
    id: 887,
    country_id: 353,
    name: 'Caldas',
  },
  {
    id: 888,
    country_id: 404,
    name: 'Malatya',
  },
  {
    id: 889,
    country_id: 35376,
    name: 'Al Hudud ash Shamaliyah',
  },
  {
    id: 890,
    country_id: 353,
    name: 'Santander',
  },
  {
    id: 891,
    country_id: 3995,
    name: 'Perlis',
  },
  {
    id: 892,
    country_id: 353,
    name: 'Arauca',
  },
  {
    id: 893,
    country_id: 80,
    name: 'Biobio',
  },
  {
    id: 894,
    country_id: 1424,
    name: 'Rabat-Sale-Kenitra',
  },
  {
    id: 895,
    country_id: 614,
    name: 'Boumerdes',
  },
  {
    id: 896,
    country_id: 227,
    name: "Kirovskaya oblast'",
  },
  {
    id: 897,
    country_id: 47,
    name: 'Vastmanlands lan',
  },
  {
    id: 898,
    country_id: 353,
    name: 'Narino',
  },
  {
    id: 899,
    country_id: 459,
    name: 'Napo',
  },
  {
    id: 900,
    country_id: 1004,
    name: 'Nunavut',
  },
  {
    id: 901,
    country_id: 488,
    name: 'Ardabil',
  },
  {
    id: 902,
    country_id: 404,
    name: 'Ardahan',
  },
  {
    id: 903,
    country_id: 488,
    name: 'Yazd',
  },
  {
    id: 904,
    country_id: 1578,
    name: 'Sogn og Fjordane',
  },
  {
    id: 905,
    country_id: 491,
    name: 'Donegal',
  },
  {
    id: 906,
    country_id: 227,
    name: 'Mordoviya, Respublika',
  },
  {
    id: 907,
    country_id: 227,
    name: "Nizhegorodskaya oblast'",
  },
  {
    id: 908,
    country_id: 491,
    name: 'Louth',
  },
  {
    id: 909,
    country_id: 404,
    name: 'Rize',
  },
  {
    id: 910,
    country_id: 488,
    name: 'Esfahan',
  },
  {
    id: 911,
    country_id: 224,
    name: 'Kardzhali',
  },
  {
    id: 912,
    country_id: 47,
    name: 'Jamtlands lan',
  },
  {
    id: 913,
    country_id: 77580,
    name: 'Arecibo',
  },
  {
    id: 914,
    country_id: 155,
    name: 'Arges',
  },
  {
    id: 915,
    country_id: 50809,
    name: 'Dinagat Islands',
  },
  {
    id: 916,
    country_id: 353,
    name: 'Bolivar',
  },
  {
    id: 917,
    country_id: 353,
    name: 'Cauca',
  },
  {
    id: 918,
    country_id: 2154,
    name: 'Streymoy',
  },
  {
    id: 919,
    country_id: 716,
    name: 'Kebbi',
  },
  {
    id: 920,
    country_id: 26833,
    name: 'Southern Grenadine Islands',
  },
  {
    id: 921,
    country_id: 404,
    name: 'Artvin',
  },
  {
    id: 922,
    country_id: 1439,
    name: "L'Ariana",
  },
  {
    id: 923,
    country_id: 80,
    name: 'Arica y Parinacota',
  },
  {
    id: 924,
    country_id: 479,
    name: 'Wakayama',
  },
  {
    id: 925,
    country_id: 3677,
    name: 'Idlib',
  },
  {
    id: 926,
    country_id: 404,
    name: 'Istanbul',
  },
  {
    id: 927,
    country_id: 2228,
    name: 'Arima',
  },
  {
    id: 928,
    country_id: 2931,
    name: 'La Massana',
  },
  {
    id: 929,
    country_id: 2079,
    name: 'Kauno apskritis',
  },
  {
    id: 930,
    country_id: 5,
    name: 'Rondonia',
  },
  {
    id: 931,
    country_id: 886,
    name: "Shamal Sina'",
  },
  {
    id: 932,
    country_id: 2427,
    name: 'Qostanay oblysy',
  },
  {
    id: 933,
    country_id: 227,
    name: "Arkhangel'skaya oblast'",
  },
  {
    id: 934,
    country_id: 227,
    name: "Amurskaya oblast'",
  },
  {
    id: 935,
    country_id: 153732,
    name: 'Himachal Pradesh',
  },
  {
    id: 936,
    country_id: 491,
    name: 'Wicklow',
  },
  {
    id: 937,
    country_id: 556,
    name: 'Luxembourg',
  },
  {
    id: 938,
    country_id: 227,
    name: "Magadanskaya oblast'",
  },
  {
    id: 939,
    country_id: 353,
    name: 'Quindio',
  },
  {
    id: 940,
    country_id: 50809,
    name: 'Masbate',
  },
  {
    id: 941,
    country_id: 458,
    name: 'Colima',
  },
  {
    id: 942,
    country_id: 44,
    name: 'Santa Fe',
  },
  {
    id: 943,
    country_id: 404,
    name: 'Balikesir',
  },
  {
    id: 944,
    country_id: 56518,
    name: 'Kassala',
  },
  {
    id: 945,
    country_id: 62,
    name: 'Graubunden',
  },
  {
    id: 946,
    country_id: 2228,
    name: 'Tunapuna-Piarco',
  },
  {
    id: 947,
    country_id: 1190,
    name: 'Itapua',
  },
  {
    id: 948,
    country_id: 2817,
    name: 'Otago',
  },
  {
    id: 949,
    country_id: 77580,
    name: 'Arroyo',
  },
  {
    id: 950,
    country_id: 1578,
    name: 'Troms',
  },
  {
    id: 951,
    country_id: 63604,
    name: 'Artemisa',
  },
  {
    id: 952,
    country_id: 158,
    name: 'Artigas',
  },
  {
    id: 953,
    country_id: 1233,
    name: 'Paijat-Hame',
  },
  {
    id: 954,
    country_id: 86,
    name: 'Odeska oblast',
  },
  {
    id: 955,
    country_id: 4125,
    name: 'Arua',
  },
  {
    id: 956,
    country_id: 35210,
    name: 'Arusha',
  },
  {
    id: 957,
    country_id: 245,
    name: 'Karlovarsky kraj',
  },
  {
    id: 958,
    country_id: 47,
    name: 'Orebro lan',
  },
  {
    id: 959,
    country_id: 48946,
    name: 'Hebron',
  },
  {
    id: 960,
    country_id: 1439,
    name: 'Le Kef',
  },
  {
    id: 961,
    country_id: 107,
    name: 'As Sulaymaniyah',
  },
  {
    id: 962,
    country_id: 488,
    name: 'Hamadan',
  },
  {
    id: 963,
    country_id: 479,
    name: 'Fukuoka',
  },
  {
    id: 964,
    country_id: 712,
    name: 'Chungcheongnam-do',
  },
  {
    id: 965,
    country_id: 47,
    name: 'Vasterbottens lan',
  },
  {
    id: 966,
    country_id: 224,
    name: 'Stara Zagora',
  },
  {
    id: 967,
    country_id: 224,
    name: 'Plovdiv',
  },
  {
    id: 968,
    country_id: 3483,
    name: 'Rhode Island',
  },
  {
    id: 969,
    country_id: 491,
    name: 'Meath',
  },
  {
    id: 970,
    country_id: 83175,
    name: 'Ahal',
  },
  {
    id: 971,
    country_id: 479,
    name: 'Tochigi',
  },
  {
    id: 972,
    country_id: 212,
    name: "Hrodzenskaya voblasts'",
  },
  {
    id: 973,
    country_id: 39214,
    name: 'Grenadines',
  },
  {
    id: 974,
    country_id: 1233,
    name: 'Pohjois-Karjala',
  },
  {
    id: 975,
    country_id: 212,
    name: "Mahilyowskaya voblasts'",
  },
  {
    id: 976,
    country_id: 404,
    name: 'Erzurum',
  },
  {
    id: 977,
    country_id: 86,
    name: 'Khersonska oblast',
  },
  {
    id: 978,
    country_id: 1578,
    name: 'Ostfold',
  },
  {
    id: 979,
    country_id: 1233,
    name: 'Etela-Karjala',
  },
  {
    id: 980,
    country_id: 404,
    name: 'Kutahya',
  },
  {
    id: 981,
    country_id: 43321,
    name: 'Al Awsat',
  },
  {
    id: 982,
    country_id: 320,
    name: 'Sjaelland',
  },
  {
    id: 983,
    country_id: 44983,
    name: 'Binshangul Gumuz',
  },
  {
    id: 984,
    country_id: 488,
    name: 'Gilan',
  },
  {
    id: 985,
    country_id: 2453,
    name: 'Astara',
  },
  {
    id: 986,
    country_id: 919,
    name: "Gegark'unik'",
  },
  {
    id: 987,
    country_id: 1190,
    name: 'Asuncion',
  },
  {
    id: 988,
    country_id: 53128,
    name: 'Jutiapa',
  },
  {
    id: 989,
    country_id: 49477,
    name: 'Roi Et',
  },
  {
    id: 990,
    country_id: 886,
    name: "Al Isma'iliyah",
  },
  {
    id: 991,
    country_id: 49438,
    name: 'Naryn',
  },
  {
    id: 992,
    country_id: 2453,
    name: 'Kurdamir',
  },
  {
    id: 993,
    country_id: 3039,
    name: 'Plateaux',
  },
  {
    id: 994,
    country_id: 65437,
    name: 'Veraguas',
  },
  {
    id: 995,
    country_id: 88407,
    name: 'Nusa Tenggara Timur',
  },
  {
    id: 996,
    country_id: 190318,
    name: 'Shabwah',
  },
  {
    id: 997,
    country_id: 56518,
    name: 'River Nile',
  },
  {
    id: 998,
    country_id: 1176,
    name: 'Atlantida',
  },
  {
    id: 999,
    country_id: 491,
    name: 'Galway',
  },
  {
    id: 1000,
    country_id: 1179,
    name: 'Machakos',
  },
  {
    id: 1001,
    country_id: 52126,
    name: 'Azad Jammu and Kashmir',
  },
  {
    id: 1002,
    country_id: 491,
    name: 'Kildare',
  },
  {
    id: 1003,
    country_id: 1176,
    name: 'Santa Barbara',
  },
  {
    id: 1004,
    country_id: 50809,
    name: 'Quezon',
  },
  {
    id: 1005,
    country_id: 146,
    name: 'Western Cape',
  },
  {
    id: 1006,
    country_id: 479,
    name: 'Kanagawa',
  },
  {
    id: 1007,
    country_id: 2756,
    name: 'Attard',
  },
  {
    id: 1008,
    country_id: 459,
    name: 'Imbabura',
  },
  {
    id: 1009,
    country_id: 2427,
    name: 'Atyrau oblysy',
  },
  {
    id: 1010,
    country_id: 748,
    name: 'Dobeles novads',
  },
  {
    id: 1011,
    country_id: 716,
    name: 'Edo',
  },
  {
    id: 1012,
    country_id: 2,
    name: 'Podlaskie',
  },
  {
    id: 1013,
    country_id: 2079,
    name: 'Vilniaus apskritis',
  },
  {
    id: 1014,
    country_id: 50809,
    name: 'Zamboanga del Sur',
  },
  {
    id: 1015,
    country_id: 5,
    name: 'Amazonas',
  },
  {
    id: 1016,
    country_id: 62,
    name: 'Neuchatel',
  },
  {
    id: 1017,
    country_id: 404,
    name: 'Nevsehir',
  },
  {
    id: 1018,
    country_id: 867648,
    name: 'Cook Islands',
  },
  {
    id: 1019,
    country_id: 44,
    name: 'Buenos Aires',
  },
  {
    id: 1020,
    country_id: 44,
    name: 'Chaco',
  },
  {
    id: 1021,
    country_id: 32,
    name: 'Asturias, Principado de',
  },
  {
    id: 1022,
    country_id: 62,
    name: 'Fribourg',
  },
  {
    id: 1023,
    country_id: 479,
    name: 'Fukui',
  },
  {
    id: 1024,
    country_id: 2088,
    name: 'Sipaliwini',
  },
  {
    id: 1025,
    country_id: 44983,
    name: 'YeDebub Biheroch Bihereseboch na Hizboch',
  },
  {
    id: 1026,
    country_id: 190317,
    name: 'Northern Bahr el Ghazal',
  },
  {
    id: 1027,
    country_id: 716,
    name: 'Anambra',
  },
  {
    id: 1028,
    country_id: 38,
    name: 'Zeeland',
  },
  {
    id: 1029,
    country_id: 458,
    name: 'Morelos',
  },
  {
    id: 1030,
    country_id: 479,
    name: 'Kyoto',
  },
  {
    id: 1031,
    country_id: 338,
    name: 'Ayacucho',
  },
  {
    id: 1032,
    country_id: 50809,
    name: 'Zamboanga Sibugay',
  },
  {
    id: 1033,
    country_id: 404,
    name: 'Sinop',
  },
  {
    id: 1034,
    country_id: 338,
    name: 'Puno',
  },
  {
    id: 1035,
    country_id: 404,
    name: 'Batman',
  },
  {
    id: 1036,
    country_id: 404,
    name: 'Siirt',
  },
  {
    id: 1037,
    country_id: 404,
    name: 'Bayburt',
  },
  {
    id: 1038,
    country_id: 227,
    name: 'Komi, Respublika',
  },
  {
    id: 1039,
    country_id: 404,
    name: 'Karaman',
  },
  {
    id: 1040,
    country_id: 224,
    name: 'Burgas',
  },
  {
    id: 1041,
    country_id: 404,
    name: 'Canakkale',
  },
  {
    id: 1042,
    country_id: 74505,
    name: "Az Za'ayin",
  },
  {
    id: 1043,
    country_id: 886,
    name: 'Dumyat',
  },
  {
    id: 1044,
    country_id: 16175,
    name: 'Az Zawiyah',
  },
  {
    id: 1045,
    country_id: 716,
    name: 'Bauchi',
  },
  {
    id: 1046,
    country_id: 459,
    name: 'Canar',
  },
  {
    id: 1047,
    country_id: 227,
    name: "Omskaya oblast'",
  },
  {
    id: 1048,
    country_id: 79146,
    name: 'Azua',
  },
  {
    id: 1049,
    country_id: 479,
    name: 'Nagano',
  },
  {
    id: 1050,
    country_id: 614,
    name: 'Skikda',
  },
  {
    id: 1051,
    country_id: 69697,
    name: 'Dak Nong',
  },
  {
    id: 1052,
    country_id: 45412,
    name: 'Mont-Liban',
  },
  {
    id: 1053,
    country_id: 45412,
    name: 'Baalbek-Hermel',
  },
  {
    id: 1054,
    country_id: 62,
    name: 'Zug',
  },
  {
    id: 1055,
    country_id: 155,
    name: 'Tulcea',
  },
  {
    id: 1056,
    country_id: 404,
    name: 'Kirklareli',
  },
  {
    id: 1057,
    country_id: 459,
    name: 'Los Rios',
  },
  {
    id: 1058,
    country_id: 50809,
    name: 'Davao del Sur',
  },
  {
    id: 1059,
    country_id: 88407,
    name: 'Sulawesi Barat',
  },
  {
    id: 1060,
    country_id: 86,
    name: 'Cherkaska oblast',
  },
  {
    id: 1061,
    country_id: 35210,
    name: 'Manyara',
  },
  {
    id: 1062,
    country_id: 227,
    name: "Vologodskaya oblast'",
  },
  {
    id: 1063,
    country_id: 155,
    name: 'Valcea',
  },
  {
    id: 1064,
    country_id: 2,
    name: 'Wielkopolskie',
  },
  {
    id: 1065,
    country_id: 245,
    name: 'Zlinsky kraj',
  },
  {
    id: 1066,
    country_id: 155,
    name: 'Olt',
  },
  {
    id: 1067,
    country_id: 2,
    name: 'Lubuskie',
  },
  {
    id: 1068,
    country_id: 614,
    name: 'Setif',
  },
  {
    id: 1069,
    country_id: 2,
    name: 'Opolskie',
  },
  {
    id: 1070,
    country_id: 2,
    name: 'Mazowieckie',
  },
  {
    id: 1071,
    country_id: 227,
    name: 'Buryatiya, Respublika',
  },
  {
    id: 1072,
    country_id: 227,
    name: "Kaluzhskaya oblast'",
  },
  {
    id: 1073,
    country_id: 69697,
    name: 'Bac Giang',
  },
  {
    id: 1074,
    country_id: 69697,
    name: 'Bac Kan',
  },
  {
    id: 1075,
    country_id: 69697,
    name: 'Bac Lieu',
  },
  {
    id: 1076,
    country_id: 69697,
    name: 'Bac Ninh',
  },
  {
    id: 1077,
    country_id: 1638,
    name: 'Hrpelje-Kozina',
  },
  {
    id: 1078,
    country_id: 458,
    name: 'Quintana Roo',
  },
  {
    id: 1079,
    country_id: 155,
    name: 'Vaslui',
  },
  {
    id: 1080,
    country_id: 50809,
    name: 'Ilocos Norte',
  },
  {
    id: 1081,
    country_id: 155,
    name: 'Bacau',
  },
  {
    id: 1082,
    country_id: 49477,
    name: 'Narathiwat',
  },
  {
    id: 1083,
    country_id: 155,
    name: 'Hunedoara',
  },
  {
    id: 1084,
    country_id: 296,
    name: 'Juznobacki okrug',
  },
  {
    id: 1085,
    country_id: 296,
    name: 'Severnobacki okrug',
  },
  {
    id: 1086,
    country_id: 2,
    name: 'Swietokrzyskie',
  },
  {
    id: 1087,
    country_id: 50809,
    name: 'Mindoro Oriental',
  },
  {
    id: 1088,
    country_id: 50809,
    name: 'Surigao del Sur',
  },
  {
    id: 1089,
    country_id: 5618,
    name: 'Guangxi',
  },
  {
    id: 1090,
    country_id: 716,
    name: 'Lagos',
  },
  {
    id: 1091,
    country_id: 2453,
    name: 'Baki',
  },
  {
    id: 1092,
    country_id: 155043,
    name: 'Rangpur',
  },
  {
    id: 1093,
    country_id: 52126,
    name: 'Sindh',
  },
  {
    id: 1094,
    country_id: 7091,
    name: 'Shamal ash Sharqiyah',
  },
  {
    id: 1095,
    country_id: 35376,
    name: 'Al Madinah al Munawwarah',
  },
  {
    id: 1096,
    country_id: 38404,
    name: 'Uva Province',
  },
  {
    id: 1097,
    country_id: 593,
    name: 'Centre',
  },
  {
    id: 1098,
    country_id: 3039,
    name: 'Kara',
  },
  {
    id: 1099,
    country_id: 26,
    name: 'Kayes',
  },
  {
    id: 1100,
    country_id: 593,
    name: 'Ouest',
  },
  {
    id: 1101,
    country_id: 1739,
    name: 'Guanacaste',
  },
  {
    id: 1102,
    country_id: 353,
    name: 'Choco',
  },
  {
    id: 1103,
    country_id: 674,
    name: 'Hajdu-Bihar',
  },
  {
    id: 1104,
    country_id: 35210,
    name: 'Pwani',
  },
  {
    id: 1105,
    country_id: 3995,
    name: 'Perak',
  },
  {
    id: 1106,
    country_id: 491,
    name: 'Carlow',
  },
  {
    id: 1107,
    country_id: 43444,
    name: 'Baghlan',
  },
  {
    id: 1108,
    country_id: 862868,
    name: 'Dhawalagiri',
  },
  {
    id: 1109,
    country_id: 1578,
    name: 'Oppland',
  },
  {
    id: 1110,
    country_id: 62,
    name: 'Valais',
  },
  {
    id: 1111,
    country_id: 870933,
    name: 'Bago',
  },
  {
    id: 1112,
    country_id: 50809,
    name: 'Bulacan',
  },
  {
    id: 1113,
    country_id: 919,
    name: 'Tavus',
  },
  {
    id: 1114,
    country_id: 227,
    name: "Kaliningradskaya oblast'",
  },
  {
    id: 1115,
    country_id: 50809,
    name: 'Benguet',
  },
  {
    id: 1116,
    country_id: 364678,
    name: 'Grande Comore',
  },
  {
    id: 1117,
    country_id: 3995,
    name: 'Negeri Sembilan',
  },
  {
    id: 1118,
    country_id: 459,
    name: 'Manabi',
  },
  {
    id: 1119,
    country_id: 44983,
    name: 'Amara',
  },
  {
    id: 1120,
    country_id: 155,
    name: 'Suceava',
  },
  {
    id: 1121,
    country_id: 155,
    name: 'Maramures',
  },
  {
    id: 1122,
    country_id: 5618,
    name: 'Jilin',
  },
  {
    id: 1123,
    country_id: 7563,
    name: 'Bay',
  },
  {
    id: 1124,
    country_id: 908860,
    name: 'Baie Lazare',
  },
  {
    id: 1125,
    country_id: 3779,
    name: 'Guadeloupe',
  },
  {
    id: 1126,
    country_id: 2427,
    name: 'Bayqongyr',
  },
  {
    id: 1127,
    country_id: 155,
    name: 'Harghita',
  },
  {
    id: 1128,
    country_id: 491,
    name: 'Cavan',
  },
  {
    id: 1129,
    country_id: 5618,
    name: 'Xizang',
  },
  {
    id: 1130,
    country_id: 5618,
    name: 'Hainan',
  },
  {
    id: 1131,
    country_id: 296,
    name: 'Zlatiborski okrug',
  },
  {
    id: 1132,
    country_id: 155043,
    name: 'Dhaka',
  },
  {
    id: 1133,
    country_id: 49438,
    name: 'Talas',
  },
  {
    id: 1134,
    country_id: 2427,
    name: 'Almaty oblysy',
  },
  {
    id: 1135,
    country_id: 266,
    name: 'Primorsko-goranska zupanija',
  },
  {
    id: 1136,
    country_id: 2507,
    name: 'Banjul',
  },
  {
    id: 1137,
    country_id: 86,
    name: 'Chernihivska oblast',
  },
  {
    id: 1138,
    country_id: 7563,
    name: 'Awdal',
  },
  {
    id: 1139,
    country_id: 245,
    name: 'Stredocesky kraj',
  },
  {
    id: 1140,
    country_id: 2,
    name: 'Slaskie',
  },
  {
    id: 1141,
    country_id: 3995,
    name: 'Johor',
  },
  {
    id: 1142,
    country_id: 155,
    name: 'Buzau',
  },
  {
    id: 1143,
    country_id: 360931,
    name: 'Rodrigues Islands',
  },
  {
    id: 1144,
    country_id: 50809,
    name: 'Leyte',
  },
  {
    id: 1145,
    country_id: 88407,
    name: 'Nusa Tenggara Barat',
  },
  {
    id: 1146,
    country_id: 88407,
    name: 'Riau',
  },
  {
    id: 1147,
    country_id: 20802,
    name: 'Balaka',
  },
  {
    id: 1148,
    country_id: 86,
    name: 'Sevastopol',
  },
  {
    id: 1149,
    country_id: 86,
    name: 'Kharkivska oblast',
  },
  {
    id: 1150,
    country_id: 674,
    name: 'Nograd',
  },
  {
    id: 1151,
    country_id: 507,
    name: 'Republika Srpska',
  },
  {
    id: 1152,
    country_id: 491,
    name: 'Dublin',
  },
  {
    id: 1153,
    country_id: 224,
    name: 'Dobrich',
  },
  {
    id: 1154,
    country_id: 404,
    name: 'Kocaeli',
  },
  {
    id: 1155,
    country_id: 748,
    name: 'Baldones novads',
  },
  {
    id: 1156,
    country_id: 50809,
    name: 'Aurora',
  },
  {
    id: 1157,
    country_id: 146,
    name: 'Mpumalanga',
  },
  {
    id: 1158,
    country_id: 593,
    name: 'Nord-Ouest',
  },
  {
    id: 1159,
    country_id: 88407,
    name: 'Kalimantan Timur',
  },
  {
    id: 1160,
    country_id: 50809,
    name: 'Lanao del Sur',
  },
  {
    id: 1161,
    country_id: 50809,
    name: 'South Cotabato',
  },
  {
    id: 1162,
    country_id: 491,
    name: 'Roscommon',
  },
  {
    id: 1163,
    country_id: 491,
    name: 'Mayo',
  },
  {
    id: 1164,
    country_id: 2454,
    name: 'Fier',
  },
  {
    id: 1165,
    country_id: 491,
    name: 'Kerry',
  },
  {
    id: 1166,
    country_id: 748,
    name: 'Kekavas novads',
  },
  {
    id: 1167,
    country_id: 62,
    name: 'Solothurn',
  },
  {
    id: 1168,
    country_id: 155,
    name: 'Neamt',
  },
  {
    id: 1169,
    country_id: 2345,
    name: 'Balti',
  },
  {
    id: 1170,
    country_id: 50809,
    name: 'Compostela Valley',
  },
  {
    id: 1171,
    country_id: 748,
    name: 'Balvu novads',
  },
  {
    id: 1172,
    country_id: 49438,
    name: 'Ysyk-Kol',
  },
  {
    id: 1173,
    country_id: 2756,
    name: 'Balzan',
  },
  {
    id: 1174,
    country_id: 21795,
    name: 'Balzers',
  },
  {
    id: 1175,
    country_id: 488,
    name: 'Kerman',
  },
  {
    id: 1176,
    country_id: 26,
    name: 'Bamako',
  },
  {
    id: 1177,
    country_id: 50809,
    name: 'Nueva Vizcaya',
  },
  {
    id: 1178,
    country_id: 1640,
    name: 'Saint Ann',
  },
  {
    id: 1179,
    country_id: 153732,
    name: 'Andaman and Nicobar Islands',
  },
  {
    id: 1180,
    country_id: 49477,
    name: 'Chaiyaphum',
  },
  {
    id: 1181,
    country_id: 593,
    name: 'Sud-Ouest',
  },
  {
    id: 1182,
    country_id: 43444,
    name: 'Bamyan',
  },
  {
    id: 1183,
    country_id: 49477,
    name: 'Phangnga',
  },
  {
    id: 1184,
    country_id: 49477,
    name: 'Samut Prakan',
  },
  {
    id: 1185,
    country_id: 49477,
    name: 'Phra Nakhon Si Ayutthaya',
  },
  {
    id: 1186,
    country_id: 49477,
    name: 'Rayong',
  },
  {
    id: 1187,
    country_id: 49477,
    name: 'Buri Ram',
  },
  {
    id: 1188,
    country_id: 49477,
    name: 'Sukhothai',
  },
  {
    id: 1189,
    country_id: 49477,
    name: 'Udon Thani',
  },
  {
    id: 1190,
    country_id: 49477,
    name: 'Khon Kaen',
  },
  {
    id: 1191,
    country_id: 869895,
    name: 'Xaignabouli',
  },
  {
    id: 1192,
    country_id: 49477,
    name: 'Mae Hong Son',
  },
  {
    id: 1193,
    country_id: 49477,
    name: 'Phetchaburi',
  },
  {
    id: 1194,
    country_id: 49477,
    name: 'Pathum Thani',
  },
  {
    id: 1195,
    country_id: 49477,
    name: 'Nan',
  },
  {
    id: 1196,
    country_id: 49477,
    name: 'Songkhla',
  },
  {
    id: 1197,
    country_id: 49477,
    name: 'Bueng Kan',
  },
  {
    id: 1198,
    country_id: 49477,
    name: 'Lop Buri',
  },
  {
    id: 1199,
    country_id: 49477,
    name: 'Saraburi',
  },
  {
    id: 1200,
    country_id: 49477,
    name: 'Nakhon Nayok',
  },
  {
    id: 1201,
    country_id: 49477,
    name: 'Surat Thani',
  },
  {
    id: 1202,
    country_id: 869895,
    name: 'Oudomxai',
  },
  {
    id: 1203,
    country_id: 49477,
    name: 'Chumphon',
  },
  {
    id: 1204,
    country_id: 49477,
    name: 'Nakhon Phanom',
  },
  {
    id: 1205,
    country_id: 49477,
    name: 'Samut Sakhon',
  },
  {
    id: 1206,
    country_id: 49477,
    name: 'Ratchaburi',
  },
  {
    id: 1207,
    country_id: 49477,
    name: 'Suphan Buri',
  },
  {
    id: 1208,
    country_id: 49477,
    name: 'Prachin Buri',
  },
  {
    id: 1209,
    country_id: 49477,
    name: 'Tak',
  },
  {
    id: 1210,
    country_id: 49477,
    name: 'Chon Buri',
  },
  {
    id: 1211,
    country_id: 49477,
    name: 'Lamphun',
  },
  {
    id: 1212,
    country_id: 491,
    name: 'Offaly',
  },
  {
    id: 1213,
    country_id: 26,
    name: 'Koulikoro',
  },
  {
    id: 1214,
    country_id: 5618,
    name: 'Chongqing',
  },
  {
    id: 1215,
    country_id: 50809,
    name: 'Ifugao',
  },
  {
    id: 1216,
    country_id: 50809,
    name: 'Cotabato',
  },
  {
    id: 1217,
    country_id: 404,
    name: 'Usak',
  },
  {
    id: 1218,
    country_id: 88407,
    name: 'Aceh',
  },
  {
    id: 1219,
    country_id: 88407,
    name: 'Sumatera Utara',
  },
  {
    id: 1220,
    country_id: 488,
    name: 'Hormozgan',
  },
  {
    id: 1221,
    country_id: 488,
    name: 'Bushehr',
  },
  {
    id: 1222,
    country_id: 3995,
    name: 'Sabah',
  },
  {
    id: 1223,
    country_id: 913469,
    name: 'Brunei-Muara',
  },
  {
    id: 1224,
    country_id: 88407,
    name: 'Lampung',
  },
  {
    id: 1225,
    country_id: 491,
    name: 'Cork',
  },
  {
    id: 1226,
    country_id: 1320,
    name: 'Kwilu',
  },
  {
    id: 1227,
    country_id: 488,
    name: 'Kordestan',
  },
  {
    id: 1228,
    country_id: 862868,
    name: 'Bagmati',
  },
  {
    id: 1229,
    country_id: 63604,
    name: 'Holguin',
  },
  {
    id: 1230,
    country_id: 49477,
    name: 'Nonthaburi',
  },
  {
    id: 1231,
    country_id: 49477,
    name: 'Phatthalung',
  },
  {
    id: 1232,
    country_id: 49477,
    name: 'Krung Thep Maha Nakhon',
  },
  {
    id: 1233,
    country_id: 49477,
    name: 'Nakhon Si Thammarat',
  },
  {
    id: 1234,
    country_id: 49477,
    name: 'Chachoengsao',
  },
  {
    id: 1235,
    country_id: 49477,
    name: 'Phitsanulok',
  },
  {
    id: 1236,
    country_id: 49477,
    name: 'Nakhon Pathom',
  },
  {
    id: 1237,
    country_id: 49477,
    name: 'Phichit',
  },
  {
    id: 1238,
    country_id: 49477,
    name: 'Prachuap Khiri Khan',
  },
  {
    id: 1239,
    country_id: 913469,
    name: 'Temburong',
  },
  {
    id: 1240,
    country_id: 3995,
    name: 'Selangor',
  },
  {
    id: 1241,
    country_id: 50809,
    name: 'Sulu',
  },
  {
    id: 1242,
    country_id: 1247,
    name: 'Bangui',
  },
  {
    id: 1243,
    country_id: 79146,
    name: 'Peravia',
  },
  {
    id: 1244,
    country_id: 1439,
    name: 'Monastir',
  },
  {
    id: 1245,
    country_id: 190318,
    name: 'Al Mahwit',
  },
  {
    id: 1246,
    country_id: 1439,
    name: 'Medenine',
  },
  {
    id: 1247,
    country_id: 48946,
    name: 'Gaza',
  },
  {
    id: 1248,
    country_id: 16175,
    name: 'Misratah',
  },
  {
    id: 1249,
    country_id: 2,
    name: 'Zachodniopomorskie',
  },
  {
    id: 1250,
    country_id: 2,
    name: 'Warminsko-mazurskie',
  },
  {
    id: 1251,
    country_id: 79146,
    name: 'San Jose de Ocoa',
  },
  {
    id: 1252,
    country_id: 2,
    name: 'Pomorskie',
  },
  {
    id: 1253,
    country_id: 224,
    name: 'Smolyan',
  },
  {
    id: 1254,
    country_id: 2325,
    name: 'Mashonaland West',
  },
  {
    id: 1255,
    country_id: 909440,
    name: 'Rotanak Kiri',
  },
  {
    id: 1256,
    country_id: 401,
    name: 'Nitriansky kraj',
  },
  {
    id: 1257,
    country_id: 507,
    name: 'Federacija Bosne i Hercegovine',
  },
  {
    id: 1258,
    country_id: 213370,
    name: 'New Taipei',
  },
  {
    id: 1259,
    country_id: 2507,
    name: 'Central River',
  },
  {
    id: 1260,
    country_id: 401,
    name: 'Banskobystricky kraj',
  },
  {
    id: 1261,
    country_id: 224,
    name: 'Blagoevgrad',
  },
  {
    id: 1262,
    country_id: 86,
    name: 'Chernivetska oblast',
  },
  {
    id: 1263,
    country_id: 5618,
    name: 'Tianjin',
  },
  {
    id: 1264,
    country_id: 5618,
    name: 'Hebei',
  },
  {
    id: 1265,
    country_id: 23,
    name: 'Yamoussoukro',
  },
  {
    id: 1266,
    country_id: 5618,
    name: 'Shanghai',
  },
  {
    id: 1268,
    country_id: 86,
    name: 'Vinnytska oblast',
  },
  {
    id: 1269,
    country_id: 63604,
    name: 'Guantanamo',
  },
  {
    id: 1270,
    country_id: 1176,
    name: 'Cortes',
  },
  {
    id: 1271,
    country_id: 63604,
    name: 'Ciego de Avila',
  },
  {
    id: 1272,
    country_id: 77580,
    name: 'Morovis',
  },
  {
    id: 1273,
    country_id: 88407,
    name: 'Sulawesi Selatan',
  },
  {
    id: 1274,
    country_id: 614,
    name: 'Tipaza',
  },
  {
    id: 1275,
    country_id: 43444,
    name: 'Logar',
  },
  {
    id: 1276,
    country_id: 212,
    name: "Brestskaya voblasts'",
  },
  {
    id: 1277,
    country_id: 353,
    name: 'Atlantico',
  },
  {
    id: 1278,
    country_id: 155,
    name: 'Covasna',
  },
  {
    id: 1279,
    country_id: 50809,
    name: 'Antique',
  },
  {
    id: 1280,
    country_id: 7437,
    name: 'Curacao',
  },
  {
    id: 1281,
    country_id: 53128,
    name: 'Santa Rosa',
  },
  {
    id: 1282,
    country_id: 155,
    name: 'Galati',
  },
  {
    id: 1283,
    country_id: 77580,
    name: 'Barceloneta',
  },
  {
    id: 1284,
    country_id: 2453,
    name: 'Barda',
  },
  {
    id: 1285,
    country_id: 401,
    name: 'Presovsky kraj',
  },
  {
    id: 1286,
    country_id: 2,
    name: 'Dolnoslaskie',
  },
  {
    id: 1287,
    country_id: 296,
    name: 'Beograd',
  },
  {
    id: 1288,
    country_id: 1179,
    name: 'Baringo',
  },
  {
    id: 1289,
    country_id: 155043,
    name: 'Barisal',
  },
  {
    id: 1290,
    country_id: 153732,
    name: 'Jharkhand',
  },
  {
    id: 1291,
    country_id: 7091,
    name: 'Janub al Batinah',
  },
  {
    id: 1292,
    country_id: 146,
    name: 'Northern Cape',
  },
  {
    id: 1293,
    country_id: 50809,
    name: 'Lanao del Norte',
  },
  {
    id: 1294,
    country_id: 275,
    name: 'Lara',
  },
  {
    id: 1295,
    country_id: 2507,
    name: 'North Bank',
  },
  {
    id: 1296,
    country_id: 338,
    name: 'Lima',
  },
  {
    id: 1297,
    country_id: 77580,
    name: 'Barranquitas',
  },
  {
    id: 1298,
    country_id: 910036,
    name: 'Barrigada',
  },
  {
    id: 1299,
    country_id: 39214,
    name: 'Saint Patrick',
  },
  {
    id: 1300,
    country_id: 155,
    name: 'Mehedinti',
  },
  {
    id: 1301,
    country_id: 275,
    name: 'Miranda',
  },
  {
    id: 1302,
    country_id: 212,
    name: "Minskaya voblasts'",
  },
  {
    id: 1303,
    country_id: 227,
    name: "Ul'yanovskaya oblast'",
  },
  {
    id: 1304,
    country_id: 86,
    name: 'Kyivska oblast',
  },
  {
    id: 1305,
    country_id: 50809,
    name: 'Sultan Kudarat',
  },
  {
    id: 1306,
    country_id: 2345,
    name: 'Basarabeasca',
  },
  {
    id: 1307,
    country_id: 50809,
    name: 'Batanes',
  },
  {
    id: 1308,
    country_id: 62,
    name: 'Basel-Stadt',
  },
  {
    id: 1309,
    country_id: 227,
    name: "Penzenskaya oblast'",
  },
  {
    id: 1310,
    country_id: 266,
    name: 'Splitsko-dalmatinska zupanija',
  },
  {
    id: 1311,
    country_id: 404,
    name: 'Van',
  },
  {
    id: 1312,
    country_id: 2507,
    name: 'Upper River',
  },
  {
    id: 1313,
    country_id: 5120,
    name: 'Martinique',
  },
  {
    id: 1314,
    country_id: 160047,
    name: 'Saint George Basseterre',
  },
  {
    id: 1315,
    country_id: 802,
    name: 'Tel Aviv',
  },
  {
    id: 1316,
    country_id: 211975,
    name: 'Litoral',
  },
  {
    id: 1317,
    country_id: 674,
    name: 'Tolna',
  },
  {
    id: 1318,
    country_id: 224,
    name: 'Pazardzhik',
  },
  {
    id: 1319,
    country_id: 1739,
    name: 'Limon',
  },
  {
    id: 1320,
    country_id: 224,
    name: 'Pernik',
  },
  {
    id: 1321,
    country_id: 33497,
    name: 'Saint Joseph',
  },
  {
    id: 1322,
    country_id: 49438,
    name: 'Batken',
  },
  {
    id: 1323,
    country_id: 266,
    name: 'Brodsko-posavska zupanija',
  },
  {
    id: 1324,
    country_id: 909440,
    name: 'Baat Dambang',
  },
  {
    id: 1325,
    country_id: 674,
    name: 'Bekes',
  },
  {
    id: 1326,
    country_id: 119,
    name: 'Ajaria',
  },
  {
    id: 1327,
    country_id: 88407,
    name: 'Sumatera Selatan',
  },
  {
    id: 1328,
    country_id: 88407,
    name: 'Sumatera Barat',
  },
  {
    id: 1329,
    country_id: 748,
    name: 'Bauskas novads',
  },
  {
    id: 1330,
    country_id: 468,
    name: 'Upper East',
  },
  {
    id: 1331,
    country_id: 227,
    name: 'Tyva, Respublika',
  },
  {
    id: 1332,
    country_id: 79146,
    name: 'Monte Plata',
  },
  {
    id: 1333,
    country_id: 63604,
    name: 'Granma',
  },
  {
    id: 1334,
    country_id: 77580,
    name: 'Bayamon',
  },
  {
    id: 1335,
    country_id: 77580,
    name: 'Cidra',
  },
  {
    id: 1336,
    country_id: 21462,
    name: 'Hawalli',
  },
  {
    id: 1337,
    country_id: 3995,
    name: 'Pulau Pinang',
  },
  {
    id: 1338,
    country_id: 909526,
    name: 'Govi-Altay',
  },
  {
    id: 1339,
    country_id: 83175,
    name: 'Mary',
  },
  {
    id: 1340,
    country_id: 48946,
    name: 'Nablus',
  },
  {
    id: 1341,
    country_id: 49438,
    name: 'Jalal-Abad',
  },
  {
    id: 1342,
    country_id: 3483,
    name: 'Delaware',
  },
  {
    id: 1343,
    country_id: 360931,
    name: 'Grand Port',
  },
  {
    id: 1344,
    country_id: 908860,
    name: 'Beau Vallon',
  },
  {
    id: 1345,
    country_id: 556,
    name: 'Brabant wallon',
  },
  {
    id: 1346,
    country_id: 1004,
    name: 'Yukon',
  },
  {
    id: 1347,
    country_id: 155,
    name: 'Timis',
  },
  {
    id: 1348,
    country_id: 614,
    name: 'Bechar',
  },
  {
    id: 1349,
    country_id: 468,
    name: 'Brong-Ahafo',
  },
  {
    id: 1350,
    country_id: 245,
    name: 'Jihocesky kraj',
  },
  {
    id: 1351,
    country_id: 62,
    name: 'Nidwalden',
  },
  {
    id: 1352,
    country_id: 245,
    name: 'Ustecky kraj',
  },
  {
    id: 1353,
    country_id: 674,
    name: 'Zala',
  },
  {
    id: 1354,
    country_id: 266,
    name: 'Krapinsko-zagorska zupanija',
  },
  {
    id: 1355,
    country_id: 245,
    name: 'Olomoucky kraj',
  },
  {
    id: 1356,
    country_id: 32396817,
    name: 'Kumanovo',
  },
  {
    id: 1357,
    country_id: 212,
    name: "Vitsyebskaya voblasts'",
  },
  {
    id: 1358,
    country_id: 1004,
    name: 'Northwest Territories',
  },
  {
    id: 1359,
    country_id: 5618,
    name: 'Beijing',
  },
  {
    id: 1360,
    country_id: 6783,
    name: 'Sofala',
  },
  {
    id: 1361,
    country_id: 45412,
    name: 'Beyrouth',
  },
  {
    id: 1362,
    country_id: 2325,
    name: 'Matabeleland South',
  },
  {
    id: 1363,
    country_id: 63604,
    name: 'Mayabeque',
  },
  {
    id: 1364,
    country_id: 468,
    name: 'Ashanti',
  },
  {
    id: 1365,
    country_id: 360931,
    name: 'Flacq',
  },
  {
    id: 1366,
    country_id: 908860,
    name: 'Bel Ombre',
  },
  {
    id: 1367,
    country_id: 245,
    name: 'Plzensky kraj',
  },
  {
    id: 1368,
    country_id: 593,
    name: 'Est',
  },
  {
    id: 1369,
    country_id: 227,
    name: "Kurskaya oblast'",
  },
  {
    id: 1370,
    country_id: 86,
    name: 'Ternopilska oblast',
  },
  {
    id: 1371,
    country_id: 353,
    name: 'Caqueta',
  },
  {
    id: 1372,
    country_id: 224,
    name: 'Pleven',
  },
  {
    id: 1373,
    country_id: 266,
    name: 'Varazdinska zupanija',
  },
  {
    id: 1374,
    country_id: 1004,
    name: 'Prince Edward Island',
  },
  {
    id: 1375,
    country_id: 266,
    name: 'Medimurska zupanija',
  },
  {
    id: 1376,
    country_id: 144816,
    name: 'Belize',
  },
  {
    id: 1377,
    country_id: 65437,
    name: 'Los Santos',
  },
  {
    id: 1378,
    country_id: 1190,
    name: 'Amambay',
  },
  {
    id: 1379,
    country_id: 338,
    name: 'San Martin',
  },
  {
    id: 1380,
    country_id: 33497,
    name: 'Saint Andrew',
  },
  {
    id: 1381,
    country_id: 144816,
    name: 'Cayo',
  },
  {
    id: 1382,
    country_id: 296,
    name: 'Srednjebanatski okrug',
  },
  {
    id: 1383,
    country_id: 224,
    name: 'Vidin',
  },
  {
    id: 1384,
    country_id: 2453,
    name: 'Balakan',
  },
  {
    id: 1385,
    country_id: 224,
    name: 'Varna',
  },
  {
    id: 1386,
    country_id: 49438,
    name: 'Chuy',
  },
  {
    id: 1387,
    country_id: 227,
    name: "Kurganskaya oblast'",
  },
  {
    id: 1388,
    country_id: 862868,
    name: 'Kosi',
  },
  {
    id: 1389,
    country_id: 227,
    name: "Bryanskaya oblast'",
  },
  {
    id: 1390,
    country_id: 86,
    name: 'Lvivska oblast',
  },
  {
    id: 1391,
    country_id: 7830,
    name: 'Borgou',
  },
  {
    id: 1392,
    country_id: 1439,
    name: 'Ben Arous',
  },
  {
    id: 1393,
    country_id: 614,
    name: 'El Tarf',
  },
  {
    id: 1394,
    country_id: 69697,
    name: 'Ben Tre',
  },
  {
    id: 1395,
    country_id: 2345,
    name: 'Bender',
  },
  {
    id: 1396,
    country_id: 1638,
    name: 'Benedikt',
  },
  {
    id: 1397,
    country_id: 16175,
    name: 'Banghazi',
  },
  {
    id: 1398,
    country_id: 88407,
    name: 'Bengkulu',
  },
  {
    id: 1399,
    country_id: 911,
    name: 'Benguela',
  },
  {
    id: 1400,
    country_id: 1320,
    name: 'Nord-Kivu',
  },
  {
    id: 1401,
    country_id: 1439,
    name: 'Nabeul',
  },
  {
    id: 1402,
    country_id: 614,
    name: 'Tlemcen',
  },
  {
    id: 1403,
    country_id: 1190,
    name: 'Presidente Hayes',
  },
  {
    id: 1404,
    country_id: 266,
    name: 'Zadarska zupanija',
  },
  {
    id: 1405,
    country_id: 719,
    name: 'Montserrado',
  },
  {
    id: 1406,
    country_id: 33497,
    name: 'Saint Lucy',
  },
  {
    id: 1407,
    country_id: 190317,
    name: 'Unity',
  },
  {
    id: 1408,
    country_id: 3995,
    name: 'Pahang',
  },
  {
    id: 1409,
    country_id: 712,
    name: 'Jeollanam-do',
  },
  {
    id: 1410,
    country_id: 23,
    name: 'Vallee du Bandama',
  },
  {
    id: 1411,
    country_id: 479,
    name: 'Oita',
  },
  {
    id: 1412,
    country_id: 155043,
    name: 'Rajshahi',
  },
  {
    id: 1414,
    country_id: 2454,
    name: 'Berat',
  },
  {
    id: 1415,
    country_id: 7563,
    name: 'Woqooyi Galbeed',
  },
  {
    id: 1416,
    country_id: 86,
    name: 'Zaporizka oblast',
  },
  {
    id: 1417,
    country_id: 146,
    name: 'Kwazulu-Natal',
  },
  {
    id: 1418,
    country_id: 86,
    name: 'Zakarpatska oblast',
  },
  {
    id: 1419,
    country_id: 674,
    name: 'Baranya',
  },
  {
    id: 1420,
    country_id: 86,
    name: 'Volynska oblast',
  },
  {
    id: 1421,
    country_id: 227,
    name: "Samarskaya oblast'",
  },
  {
    id: 1422,
    country_id: 62,
    name: 'Schaffhausen',
  },
  {
    id: 1423,
    country_id: 35008,
    name: 'Usulutan',
  },
  {
    id: 1424,
    country_id: 458,
    name: 'Durango',
  },
  {
    id: 1425,
    country_id: 32396817,
    name: 'Berovo',
  },
  {
    id: 1426,
    country_id: 1424,
    name: 'Casablanca-Settat',
  },
  {
    id: 1427,
    country_id: 614,
    name: 'Ghardaia',
  },
  {
    id: 1428,
    country_id: 614,
    name: 'Medea',
  },
  {
    id: 1429,
    country_id: 38404,
    name: 'Western Province',
  },
  {
    id: 1430,
    country_id: 2426,
    name: 'Navoiy',
  },
  {
    id: 1431,
    country_id: 296,
    name: 'Sremski okrug',
  },
  {
    id: 1432,
    country_id: 266,
    name: 'Zagrebacka zupanija',
  },
  {
    id: 1433,
    country_id: 7598,
    name: 'Potosi',
  },
  {
    id: 1434,
    country_id: 146,
    name: 'Free State',
  },
  {
    id: 1435,
    country_id: 49477,
    name: 'Yala',
  },
  {
    id: 1436,
    country_id: 3126,
    name: 'Diekirch',
  },
  {
    id: 1437,
    country_id: 50809,
    name: 'Mountain Province',
  },
  {
    id: 1438,
    country_id: 404,
    name: 'Eskisehir',
  },
  {
    id: 1439,
    country_id: 227,
    name: "Pskovskaya oblast'",
  },
  {
    id: 1440,
    country_id: 862868,
    name: 'Mechi',
  },
  {
    id: 1441,
    country_id: 870933,
    name: 'Kachin',
  },
  {
    id: 1442,
    country_id: 862868,
    name: 'Narayani',
  },
  {
    id: 1443,
    country_id: 155043,
    name: 'Khulna',
  },
  {
    id: 1444,
    country_id: 39214,
    name: 'Charlotte',
  },
  {
    id: 1445,
    country_id: 119,
    name: 'Abkhazia',
  },
  {
    id: 1446,
    country_id: 716,
    name: 'Niger',
  },
  {
    id: 1447,
    country_id: 48946,
    name: 'Salfit',
  },
  {
    id: 1448,
    country_id: 69697,
    name: 'Dong Nai',
  },
  {
    id: 1449,
    country_id: 200,
    name: 'Ziguinchor',
  },
  {
    id: 1450,
    country_id: 35210,
    name: 'Kagera',
  },
  {
    id: 1453,
    country_id: 404,
    name: 'Bilecik',
  },
  {
    id: 1454,
    country_id: 266,
    name: 'Pozesko-slavonska zupanija',
  },
  {
    id: 1455,
    country_id: 2345,
    name: 'Singerei',
  },
  {
    id: 1456,
    country_id: 2454,
    name: 'Korce',
  },
  {
    id: 1457,
    country_id: 296,
    name: 'Pcinjski okrug',
  },
  {
    id: 1458,
    country_id: 1638,
    name: 'Miren-Kostanjevica',
  },
  {
    id: 1459,
    country_id: 86,
    name: 'Sumska oblast',
  },
  {
    id: 1460,
    country_id: 86,
    name: 'Ivano-Frankivska oblast',
  },
  {
    id: 1461,
    country_id: 62,
    name: 'Glarus',
  },
  {
    id: 1462,
    country_id: 88407,
    name: 'Gorontalo',
  },
  {
    id: 1463,
    country_id: 69697,
    name: 'Thanh Hoa',
  },
  {
    id: 1464,
    country_id: 2325,
    name: 'Mashonaland Central',
  },
  {
    id: 1465,
    country_id: 404,
    name: 'Bingol',
  },
  {
    id: 1466,
    country_id: 3995,
    name: 'Sarawak',
  },
  {
    id: 1467,
    country_id: 1439,
    name: 'Sfax',
  },
  {
    id: 1468,
    country_id: 614,
    name: 'Tebessa',
  },
  {
    id: 1469,
    country_id: 2756,
    name: 'Gharb',
  },
  {
    id: 1470,
    country_id: 862868,
    name: 'Bheri',
  },
  {
    id: 1471,
    country_id: 488,
    name: 'Khorasan-e Jonubi',
  },
  {
    id: 1472,
    country_id: 2756,
    name: 'Birkirkara',
  },
  {
    id: 1473,
    country_id: 716,
    name: 'Jigawa',
  },
  {
    id: 1474,
    country_id: 2079,
    name: 'Panevezio apskritis',
  },
  {
    id: 1475,
    country_id: 2756,
    name: 'Birzebbuga',
  },
  {
    id: 1476,
    country_id: 12095,
    name: 'Castries',
  },
  {
    id: 1477,
    country_id: 49438,
    name: 'Bishkek',
  },
  {
    id: 1478,
    country_id: 2427,
    name: 'Soltustik Qazaqstan oblysy',
  },
  {
    id: 1479,
    country_id: 614,
    name: 'Biskra',
  },
  {
    id: 1480,
    country_id: 1707,
    name: 'Bissau',
  },
  {
    id: 1481,
    country_id: 32396817,
    name: 'Bitola',
  },
  {
    id: 1482,
    country_id: 1638,
    name: 'Sentrupert',
  },
  {
    id: 1483,
    country_id: 1638,
    name: 'Bistrica ob Sotli',
  },
  {
    id: 1484,
    country_id: 155,
    name: 'Bistrita-Nasaud',
  },
  {
    id: 1485,
    country_id: 3662,
    name: 'Woleu-Ntem',
  },
  {
    id: 1486,
    country_id: 88407,
    name: 'Sulawesi Utara',
  },
  {
    id: 1487,
    country_id: 266,
    name: 'Bjelovarsko-bilogorska zupanija',
  },
  {
    id: 1488,
    country_id: 158,
    name: 'Durazno',
  },
  {
    id: 1489,
    country_id: 20802,
    name: 'Blantyre',
  },
  {
    id: 1490,
    country_id: 32396817,
    name: 'Vinica',
  },
  {
    id: 1491,
    country_id: 266,
    name: 'Dubrovacko-neretvanska zupanija',
  },
  {
    id: 1492,
    country_id: 1638,
    name: 'Bled',
  },
  {
    id: 1493,
    country_id: 2817,
    name: 'Marlborough',
  },
  {
    id: 1494,
    country_id: 614,
    name: 'Blida',
  },
  {
    id: 1495,
    country_id: 146,
    name: 'North-West',
  },
  {
    id: 1496,
    country_id: 1640,
    name: 'Westmoreland',
  },
  {
    id: 1497,
    country_id: 3990,
    name: 'Costa Caribe Sur',
  },
  {
    id: 1498,
    country_id: 2817,
    name: 'Southland',
  },
  {
    id: 1499,
    country_id: 49477,
    name: 'Kanchanaburi',
  },
  {
    id: 1500,
    country_id: 49477,
    name: 'Trat',
  },
  {
    id: 1501,
    country_id: 5,
    name: 'Roraima',
  },
  {
    id: 1502,
    country_id: 50809,
    name: 'Marinduque',
  },
  {
    id: 1503,
    country_id: 3990,
    name: 'Boaco',
  },
  {
    id: 1504,
    country_id: 607,
    name: 'Houet',
  },
  {
    id: 1505,
    country_id: 88407,
    name: 'Maluku Utara',
  },
  {
    id: 1506,
    country_id: 224,
    name: 'Kyustendil',
  },
  {
    id: 1507,
    country_id: 296,
    name: 'Pomoravski okrug',
  },
  {
    id: 1508,
    country_id: 1638,
    name: 'Smarje pri Jelsah',
  },
  {
    id: 1509,
    country_id: 459,
    name: 'Orellana',
  },
  {
    id: 1510,
    country_id: 404,
    name: 'Mugla',
  },
  {
    id: 1511,
    country_id: 1320,
    name: 'Tshuapa',
  },
  {
    id: 1512,
    country_id: 1703,
    name: 'Boffa',
  },
  {
    id: 1513,
    country_id: 1640,
    name: 'Saint Catherine',
  },
  {
    id: 1514,
    country_id: 607,
    name: 'Gnagna',
  },
  {
    id: 1515,
    country_id: 296,
    name: 'Macvanski okrug',
  },
  {
    id: 1516,
    country_id: 32396817,
    name: 'Bogdanci',
  },
  {
    id: 1517,
    country_id: 353,
    name: 'Distrito Capital de Bogota',
  },
  {
    id: 1518,
    country_id: 32396817,
    name: 'Bogovinje',
  },
  {
    id: 1519,
    country_id: 1638,
    name: 'Bohinj',
  },
  {
    id: 1520,
    country_id: 488,
    name: 'Khorasan-e Shomali',
  },
  {
    id: 1521,
    country_id: 88407,
    name: 'Banten',
  },
  {
    id: 1522,
    country_id: 191038,
    name: 'Kgatleng',
  },
  {
    id: 1523,
    country_id: 1703,
    name: 'Boke',
  },
  {
    id: 1524,
    country_id: 98799,
    name: 'Hadjer Lamis',
  },
  {
    id: 1525,
    country_id: 227,
    name: "Yaroslavskaya oblast'",
  },
  {
    id: 1526,
    country_id: 1707,
    name: 'Bolama',
  },
  {
    id: 1527,
    country_id: 137919,
    name: 'Saint Mary',
  },
  {
    id: 1528,
    country_id: 155,
    name: 'Giurgiu',
  },
  {
    id: 1529,
    country_id: 227,
    name: "Orlovskaya oblast'",
  },
  {
    id: 1530,
    country_id: 119,
    name: 'Kvemo Kartli',
  },
  {
    id: 1531,
    country_id: 224,
    name: 'Yambol',
  },
  {
    id: 1532,
    country_id: 1179,
    name: 'Bomet',
  },
  {
    id: 1533,
    country_id: 593,
    name: 'Littoral',
  },
  {
    id: 1534,
    country_id: 3990,
    name: 'Costa Caribe Norte',
  },
  {
    id: 1535,
    country_id: 79146,
    name: 'Monsenor Nouel',
  },
  {
    id: 1536,
    country_id: 1179,
    name: 'Siaya',
  },
  {
    id: 1537,
    country_id: 98799,
    name: 'Mayo-Kebbi-Est',
  },
  {
    id: 1538,
    country_id: 50809,
    name: 'Misamis Occidental',
  },
  {
    id: 1539,
    country_id: 1176,
    name: 'Colon',
  },
  {
    id: 1540,
    country_id: 296,
    name: 'Borski okrug',
  },
  {
    id: 1541,
    country_id: 49477,
    name: 'Maha Sarakham',
  },
  {
    id: 1542,
    country_id: 2453,
    name: 'Masalli',
  },
  {
    id: 1543,
    country_id: 20,
    name: 'Evora',
  },
  {
    id: 1544,
    country_id: 155,
    name: 'Braila',
  },
  {
    id: 1545,
    country_id: 614,
    name: 'Bordj Bou Arreridj',
  },
  {
    id: 1546,
    country_id: 869895,
    name: 'Bolikhamxai',
  },
  {
    id: 1547,
    country_id: 227,
    name: "Lipetskaya oblast'",
  },
  {
    id: 1548,
    country_id: 607,
    name: 'Bale',
  },
  {
    id: 1549,
    country_id: 50809,
    name: 'Eastern Samar',
  },
  {
    id: 1550,
    country_id: 224,
    name: 'Vratsa',
  },
  {
    id: 1551,
    country_id: 1638,
    name: 'Markovci',
  },
  {
    id: 1552,
    country_id: 227,
    name: "Novgorodskaya oblast'",
  },
  {
    id: 1553,
    country_id: 1638,
    name: 'Borovnica',
  },
  {
    id: 1554,
    country_id: 224,
    name: 'Ruse',
  },
  {
    id: 1555,
    country_id: 488,
    name: 'Chahar Mahal va Bakhtiari',
  },
  {
    id: 1556,
    country_id: 57160,
    name: 'Nohiyahoi Tobei Jumhuri',
  },
  {
    id: 1557,
    country_id: 32396817,
    name: 'Bosilovo',
  },
  {
    id: 1558,
    country_id: 1247,
    name: 'Ouham',
  },
  {
    id: 1559,
    country_id: 614,
    name: 'Mascara',
  },
  {
    id: 1560,
    country_id: 23,
    name: 'Sassandra-Marahoue',
  },
  {
    id: 1561,
    country_id: 1247,
    name: 'Nana-Mambere',
  },
  {
    id: 1562,
    country_id: 614,
    name: 'Chlef',
  },
  {
    id: 1563,
    country_id: 15288356,
    name: 'Province Sud',
  },
  {
    id: 1564,
    country_id: 607,
    name: 'Kourweogo',
  },
  {
    id: 1565,
    country_id: 1638,
    name: 'Bovec',
  },
  {
    id: 1566,
    country_id: 7598,
    name: 'Santa Cruz',
  },
  {
    id: 1567,
    country_id: 14837,
    name: 'Saint Peter',
  },
  {
    id: 1568,
    country_id: 20,
    name: 'Braganca',
  },
  {
    id: 1569,
    country_id: 47,
    name: 'Blekinge lan',
  },
  {
    id: 1570,
    country_id: 155,
    name: 'Brasov',
  },
  {
    id: 1571,
    country_id: 245,
    name: 'Pardubicky kraj',
  },
  {
    id: 1572,
    country_id: 1638,
    name: 'Krizevci',
  },
  {
    id: 1573,
    country_id: 1040,
    name: 'Reunion',
  },
  {
    id: 1574,
    country_id: 5,
    name: 'Acre',
  },
  {
    id: 1575,
    country_id: 5,
    name: 'Distrito Federal',
  },
  {
    id: 1576,
    country_id: 1638,
    name: 'Braslovce',
  },
  {
    id: 1577,
    country_id: 401,
    name: 'Bratislavsky kraj',
  },
  {
    id: 1578,
    country_id: 1560,
    name: 'Brazzaville',
  },
  {
    id: 1579,
    country_id: 1638,
    name: 'Nazarje',
  },
  {
    id: 1580,
    country_id: 77580,
    name: 'Vega Alta',
  },
  {
    id: 1581,
    country_id: 1638,
    name: 'Brezice',
  },
  {
    id: 1582,
    country_id: 1638,
    name: 'Dobrova-Polhov Gradec',
  },
  {
    id: 1583,
    country_id: 1638,
    name: 'Brezovica',
  },
  {
    id: 1584,
    country_id: 1247,
    name: 'Haute-Kotto',
  },
  {
    id: 1585,
    country_id: 2345,
    name: 'Briceni',
  },
  {
    id: 1586,
    country_id: 33497,
    name: 'Saint Michael',
  },
  {
    id: 1587,
    country_id: 2817,
    name: 'Tasman',
  },
  {
    id: 1588,
    country_id: 266,
    name: 'Licko-senjska zupanija',
  },
  {
    id: 1589,
    country_id: 1638,
    name: 'Kranj',
  },
  {
    id: 1590,
    country_id: 245,
    name: 'Liberecky kraj',
  },
  {
    id: 1591,
    country_id: 748,
    name: 'Brocenu novads',
  },
  {
    id: 1592,
    country_id: 266,
    name: 'Sibensko-kninska zupanija',
  },
  {
    id: 1593,
    country_id: 2088,
    name: 'Brokopondo',
  },
  {
    id: 1594,
    country_id: 245,
    name: 'Kraj Vysocina',
  },
  {
    id: 1595,
    country_id: 1638,
    name: 'Starse',
  },
  {
    id: 1596,
    country_id: 556,
    name: 'Brussels Hoofdstedelijk Gewest',
  },
  {
    id: 1597,
    country_id: 32396817,
    name: 'Brvenica',
  },
  {
    id: 1598,
    country_id: 49477,
    name: 'Surin',
  },
  {
    id: 1599,
    country_id: 50809,
    name: 'Tawi-Tawi',
  },
  {
    id: 1600,
    country_id: 821,
    name: 'Bubanza',
  },
  {
    id: 1601,
    country_id: 719,
    name: 'Grand Bassa',
  },
  {
    id: 1602,
    country_id: 155,
    name: 'Bucuresti',
  },
  {
    id: 1603,
    country_id: 2345,
    name: 'Straseni',
  },
  {
    id: 1604,
    country_id: 674,
    name: 'Budapest',
  },
  {
    id: 1605,
    country_id: 266,
    name: 'Sisacko-moslavacka zupanija',
  },
  {
    id: 1607,
    country_id: 44,
    name: 'San Luis',
  },
  {
    id: 1608,
    country_id: 49477,
    name: 'Si Sa Ket',
  },
  {
    id: 1609,
    country_id: 49477,
    name: 'Nong Khai',
  },
  {
    id: 1610,
    country_id: 49477,
    name: 'Phetchabun',
  },
  {
    id: 1611,
    country_id: 49477,
    name: 'Kamphaeng Phet',
  },
  {
    id: 1612,
    country_id: 44,
    name: 'Ciudad Autonoma de Buenos Aires',
  },
  {
    id: 1613,
    country_id: 1739,
    name: 'Puntarenas',
  },
  {
    id: 1614,
    country_id: 1176,
    name: 'Copan',
  },
  {
    id: 1615,
    country_id: 2345,
    name: 'Gagauzia, Unitatea teritoriala autonoma',
  },
  {
    id: 1616,
    country_id: 4125,
    name: 'Jinja',
  },
  {
    id: 1617,
    country_id: 4125,
    name: 'Bugiri',
  },
  {
    id: 1618,
    country_id: 62,
    name: 'Appenzell Ausserrhoden',
  },
  {
    id: 1619,
    country_id: 224,
    name: 'Sofia (stolitsa)',
  },
  {
    id: 1620,
    country_id: 4125,
    name: 'Buikwe',
  },
  {
    id: 1621,
    country_id: 80,
    name: 'Region Metropolitana de Santiago',
  },
  {
    id: 1622,
    country_id: 266,
    name: 'Istarska zupanija',
  },
  {
    id: 1623,
    country_id: 821,
    name: 'Bujumbura Mairie',
  },
  {
    id: 1624,
    country_id: 674,
    name: 'Vas',
  },
  {
    id: 1625,
    country_id: 488,
    name: 'Azarbayjan-e Gharbi',
  },
  {
    id: 1626,
    country_id: 1320,
    name: 'Sud-Kivu',
  },
  {
    id: 1627,
    country_id: 4125,
    name: 'Bukedea',
  },
  {
    id: 1628,
    country_id: 1638,
    name: 'Rence-Vogrsko',
  },
  {
    id: 1629,
    country_id: 32396817,
    name: 'Skopje',
  },
  {
    id: 1630,
    country_id: 50809,
    name: 'Capiz',
  },
  {
    id: 1631,
    country_id: 404,
    name: 'Giresun',
  },
  {
    id: 1632,
    country_id: 404,
    name: 'Mus',
  },
  {
    id: 1633,
    country_id: 2325,
    name: 'Bulawayo',
  },
  {
    id: 1634,
    country_id: 4125,
    name: 'Buliisa',
  },
  {
    id: 1635,
    country_id: 1640,
    name: 'Saint Elizabeth',
  },
  {
    id: 1636,
    country_id: 2817,
    name: 'Manawatu-Wanganui',
  },
  {
    id: 1637,
    country_id: 2454,
    name: 'Diber',
  },
  {
    id: 1638,
    country_id: 2426,
    name: 'Samarqand',
  },
  {
    id: 1639,
    country_id: 1179,
    name: 'Bungoma',
  },
  {
    id: 1640,
    country_id: 1320,
    name: 'Ituri',
  },
  {
    id: 1641,
    country_id: 49477,
    name: 'Ubon Ratchathani',
  },
  {
    id: 1642,
    country_id: 69697,
    name: 'Dak Lak',
  },
  {
    id: 1643,
    country_id: 7563,
    name: 'Togdheer',
  },
  {
    id: 1644,
    country_id: 712,
    name: 'Busan-gwangyeoksi',
  },
  {
    id: 1645,
    country_id: 4125,
    name: 'Kalungu',
  },
  {
    id: 1646,
    country_id: 4125,
    name: 'Iganga',
  },
  {
    id: 1647,
    country_id: 88137,
    name: 'Sud',
  },
  {
    id: 1648,
    country_id: 1179,
    name: 'Kakamega',
  },
  {
    id: 1649,
    country_id: 50809,
    name: 'Agusan del Norte',
  },
  {
    id: 1650,
    country_id: 862868,
    name: 'Lumbini',
  },
  {
    id: 1651,
    country_id: 2426,
    name: 'Buxoro',
  },
  {
    id: 1652,
    country_id: 4125,
    name: 'Wakiso',
  },
  {
    id: 1653,
    country_id: 224,
    name: 'Veliko Tarnovo',
  },
  {
    id: 1654,
    country_id: 401,
    name: 'Zilinsky kraj',
  },
  {
    id: 1655,
    country_id: 88137,
    name: 'Nord',
  },
  {
    id: 1656,
    country_id: 69697,
    name: 'Ca Mau',
  },
  {
    id: 1657,
    country_id: 1190,
    name: 'Caaguazu',
  },
  {
    id: 1658,
    country_id: 53128,
    name: 'Zacapa',
  },
  {
    id: 1659,
    country_id: 79146,
    name: 'Puerto Plata',
  },
  {
    id: 1660,
    country_id: 275,
    name: 'Zulia',
  },
  {
    id: 1661,
    country_id: 911,
    name: 'Cabinda',
  },
  {
    id: 1662,
    country_id: 77580,
    name: 'Cabo Rojo',
  },
  {
    id: 1663,
    country_id: 458,
    name: 'Baja California Sur',
  },
  {
    id: 1664,
    country_id: 79146,
    name: 'Maria Trinidad Sanchez',
  },
  {
    id: 1665,
    country_id: 296,
    name: 'Moravicki okrug',
  },
  {
    id: 1666,
    country_id: 77580,
    name: 'Quebradillas',
  },
  {
    id: 1667,
    country_id: 266,
    name: 'Viroviticko-podravska zupanija',
  },
  {
    id: 1668,
    country_id: 802,
    name: 'Hefa',
  },
  {
    id: 1669,
    country_id: 275,
    name: 'Aragua',
  },
  {
    id: 1670,
    country_id: 77580,
    name: 'Caguas',
  },
  {
    id: 1671,
    country_id: 491,
    name: 'Tipperary',
  },
  {
    id: 1672,
    country_id: 2345,
    name: 'Cahul',
  },
  {
    id: 1673,
    country_id: 353,
    name: 'Sucre',
  },
  {
    id: 1674,
    country_id: 886,
    name: 'Al Qahirah',
  },
  {
    id: 1675,
    country_id: 338,
    name: 'Cajamarca',
  },
  {
    id: 1676,
    country_id: 50809,
    name: 'Romblon',
  },
  {
    id: 1677,
    country_id: 716,
    name: 'Cross River',
  },
  {
    id: 1678,
    country_id: 50809,
    name: 'Catanduanes',
  },
  {
    id: 1679,
    country_id: 50809,
    name: 'Samar',
  },
  {
    id: 1680,
    country_id: 338,
    name: 'Cusco',
  },
  {
    id: 1681,
    country_id: 458,
    name: 'Zacatecas',
  },
  {
    id: 1682,
    country_id: 20,
    name: 'Regiao Autonoma da Madeira',
  },
  {
    id: 1683,
    country_id: 458,
    name: 'Campeche',
  },
  {
    id: 1684,
    country_id: 338,
    name: 'El Callao',
  },
  {
    id: 1685,
    country_id: 50809,
    name: 'National Capital Region',
  },
  {
    id: 1686,
    country_id: 69697,
    name: 'Quang Ninh',
  },
  {
    id: 1687,
    country_id: 69697,
    name: 'Khanh Hoa',
  },
  {
    id: 1688,
    country_id: 911,
    name: 'Bie',
  },
  {
    id: 1689,
    country_id: 63604,
    name: 'Camaguey',
  },
  {
    id: 1690,
    country_id: 458,
    name: 'Baja California',
  },
  {
    id: 1691,
    country_id: 7598,
    name: 'Chuquisaca',
  },
  {
    id: 1692,
    country_id: 1176,
    name: 'Intibuca',
  },
  {
    id: 1693,
    country_id: 1703,
    name: 'Conakry',
  },
  {
    id: 1694,
    country_id: 2817,
    name: 'Waikato',
  },
  {
    id: 1695,
    country_id: 2345,
    name: 'Stinga Nistrului, unitatea teritoriala din',
  },
  {
    id: 1696,
    country_id: 53128,
    name: 'Chiquimula',
  },
  {
    id: 1697,
    country_id: 360931,
    name: 'Savanne',
  },
  {
    id: 1698,
    country_id: 1176,
    name: 'Olancho',
  },
  {
    id: 1699,
    country_id: 338,
    name: 'Ucayali',
  },
  {
    id: 1700,
    country_id: 77580,
    name: 'Camuy',
  },
  {
    id: 1701,
    country_id: 69697,
    name: 'Long An',
  },
  {
    id: 1702,
    country_id: 69697,
    name: 'Ho Chi Minh',
  },
  {
    id: 1703,
    country_id: 69697,
    name: 'Can Tho',
  },
  {
    id: 1704,
    country_id: 160047,
    name: 'Saint Peter Basseterre',
  },
  {
    id: 1705,
    country_id: 77580,
    name: 'Toa Baja',
  },
  {
    id: 1706,
    country_id: 35008,
    name: 'Santa Ana',
  },
  {
    id: 1707,
    country_id: 2931,
    name: 'Canillo',
  },
  {
    id: 1708,
    country_id: 1638,
    name: 'Cankova',
  },
  {
    id: 1709,
    country_id: 77580,
    name: 'Canovanas',
  },
  {
    id: 1710,
    country_id: 2345,
    name: 'Cantemir',
  },
  {
    id: 1711,
    country_id: 69697,
    name: 'Cao Bang',
  },
  {
    id: 1712,
    country_id: 69697,
    name: 'Dong Thap',
  },
  {
    id: 1713,
    country_id: 5618,
    name: 'Ningxia',
  },
  {
    id: 1714,
    country_id: 360931,
    name: 'Riviere du Rempart',
  },
  {
    id: 1715,
    country_id: 50809,
    name: 'Camarines Norte',
  },
  {
    id: 1716,
    country_id: 468,
    name: 'Central',
  },
  {
    id: 1717,
    country_id: 1190,
    name: 'San Pedro',
  },
  {
    id: 1718,
    country_id: 1190,
    name: 'Alto Paraguay',
  },
  {
    id: 1719,
    country_id: 275,
    name: 'Vargas',
  },
  {
    id: 1720,
    country_id: 275,
    name: 'Distrito Capital',
  },
  {
    id: 1721,
    country_id: 50809,
    name: 'Davao Oriental',
  },
  {
    id: 1722,
    country_id: 338,
    name: 'Ancash',
  },
  {
    id: 1723,
    country_id: 158,
    name: 'Soriano',
  },
  {
    id: 1724,
    country_id: 459,
    name: 'Loja',
  },
  {
    id: 1725,
    country_id: 3990,
    name: 'Managua',
  },
  {
    id: 1726,
    country_id: 158,
    name: 'Colonia',
  },
  {
    id: 1727,
    country_id: 748,
    name: 'Carnikavas novads',
  },
  {
    id: 1728,
    country_id: 77580,
    name: 'Carolina',
  },
  {
    id: 1729,
    country_id: 491,
    name: 'Leitrim',
  },
  {
    id: 1730,
    country_id: 491,
    name: 'Monaghan',
  },
  {
    id: 1731,
    country_id: 80,
    name: 'Valparaiso',
  },
  {
    id: 1732,
    country_id: 1739,
    name: 'Cartago',
  },
  {
    id: 1733,
    country_id: 1439,
    name: 'Tunis',
  },
  {
    id: 1734,
    country_id: 908860,
    name: 'Cascade',
  },
  {
    id: 1735,
    country_id: 137919,
    name: 'Saint George',
  },
  {
    id: 1736,
    country_id: 79146,
    name: 'Monte Cristi',
  },
  {
    id: 1737,
    country_id: 20,
    name: 'Castelo Branco',
  },
  {
    id: 1738,
    country_id: 50809,
    name: 'Zambales',
  },
  {
    id: 1739,
    country_id: 158,
    name: 'Rocha',
  },
  {
    id: 1740,
    country_id: 491,
    name: 'Kilkenny',
  },
  {
    id: 1741,
    country_id: 2817,
    name: 'Wellington',
  },
  {
    id: 1742,
    country_id: 390940,
    name: 'Isle of Man',
  },
  {
    id: 1743,
    country_id: 338,
    name: 'Piura',
  },
  {
    id: 1744,
    country_id: 77580,
    name: 'Catano',
  },
  {
    id: 1745,
    country_id: 53128,
    name: 'San Marcos',
  },
  {
    id: 1746,
    country_id: 748,
    name: 'Riebinu novads',
  },
  {
    id: 1747,
    country_id: 80,
    name: 'Maule',
  },
  {
    id: 1748,
    country_id: 2345,
    name: 'Causeni',
  },
  {
    id: 1749,
    country_id: 911,
    name: 'Bengo',
  },
  {
    id: 1750,
    country_id: 459,
    name: 'Pichincha',
  },
  {
    id: 1751,
    country_id: 3569,
    name: 'Guyane',
  },
  {
    id: 1752,
    country_id: 77580,
    name: 'Cayey',
  },
  {
    id: 1753,
    country_id: 160047,
    name: 'Saint Mary Cayon',
  },
  {
    id: 1754,
    country_id: 77580,
    name: 'Gurabo',
  },
  {
    id: 1755,
    country_id: 404,
    name: 'Kirikkale',
  },
  {
    id: 1756,
    country_id: 1638,
    name: 'Celje',
  },
  {
    id: 1757,
    country_id: 32396817,
    name: 'Centar Zupa',
  },
  {
    id: 1758,
    country_id: 404,
    name: 'Cankiri',
  },
  {
    id: 1759,
    country_id: 404,
    name: 'Tekirdag',
  },
  {
    id: 1760,
    country_id: 1638,
    name: 'Cerklje na Gorenjskem',
  },
  {
    id: 1761,
    country_id: 1638,
    name: 'Cerknica',
  },
  {
    id: 1762,
    country_id: 1638,
    name: 'Cerkno',
  },
  {
    id: 1763,
    country_id: 1638,
    name: 'Zetale',
  },
  {
    id: 1764,
    country_id: 2454,
    name: 'Elbasan',
  },
  {
    id: 1765,
    country_id: 1190,
    name: 'Neembucu',
  },
  {
    id: 1766,
    country_id: 338,
    name: 'Pasco',
  },
  {
    id: 1767,
    country_id: 353,
    name: 'Magdalena',
  },
  {
    id: 1768,
    country_id: 748,
    name: 'Cesu novads',
  },
  {
    id: 1769,
    country_id: 1638,
    name: 'Dobrepolje',
  },
  {
    id: 1770,
    country_id: 748,
    name: 'Cesvaines novads',
  },
  {
    id: 1772,
    country_id: 32,
    name: 'Ceuta',
  },
  {
    id: 1773,
    country_id: 2453,
    name: 'Abseron',
  },
  {
    id: 1774,
    country_id: 488,
    name: 'Sistan va Baluchestan',
  },
  {
    id: 1775,
    country_id: 49477,
    name: 'Lampang',
  },
  {
    id: 1776,
    country_id: 2228,
    name: 'Chaguanas',
  },
  {
    id: 1777,
    country_id: 53128,
    name: 'Alta Verapaz',
  },
  {
    id: 1778,
    country_id: 49477,
    name: 'Chai Nat',
  },
  {
    id: 1779,
    country_id: 910036,
    name: 'Chalan Pago-Ordot',
  },
  {
    id: 1780,
    country_id: 35008,
    name: 'Chalatenango',
  },
  {
    id: 1781,
    country_id: 7598,
    name: 'Oruro',
  },
  {
    id: 1782,
    country_id: 52126,
    name: 'Balochistan',
  },
  {
    id: 1783,
    country_id: 2568,
    name: 'Copperbelt',
  },
  {
    id: 1784,
    country_id: 862868,
    name: 'Gandaki',
  },
  {
    id: 1785,
    country_id: 53128,
    name: 'Retalhuleu',
  },
  {
    id: 1786,
    country_id: 153732,
    name: 'Chandigarh',
  },
  {
    id: 1787,
    country_id: 213370,
    name: 'Changhua',
  },
  {
    id: 1788,
    country_id: 712,
    name: 'Gyeongsangnam-do',
  },
  {
    id: 1789,
    country_id: 712,
    name: 'Jeollabuk-do',
  },
  {
    id: 1790,
    country_id: 35210,
    name: 'Tanga',
  },
  {
    id: 1791,
    country_id: 49477,
    name: 'Chanthaburi',
  },
  {
    id: 1792,
    country_id: 35008,
    name: 'San Miguel',
  },
  {
    id: 1793,
    country_id: 43444,
    name: 'Parwan',
  },
  {
    id: 1794,
    country_id: 160047,
    name: 'Saint Paul Charlestown',
  },
  {
    id: 1795,
    country_id: 49477,
    name: 'Sakon Nakhon',
  },
  {
    id: 1796,
    country_id: 479,
    name: 'Okinawa',
  },
  {
    id: 1797,
    country_id: 69697,
    name: 'An Giang',
  },
  {
    id: 1798,
    country_id: 20,
    name: 'Vila Real',
  },
  {
    id: 1799,
    country_id: 1439,
    name: 'Mahdia',
  },
  {
    id: 1800,
    country_id: 32396817,
    name: 'Gostivar',
  },
  {
    id: 1801,
    country_id: 614,
    name: 'Mila',
  },
  {
    id: 1802,
    country_id: 227,
    name: 'Altay, Respublika',
  },
  {
    id: 1803,
    country_id: 488,
    name: 'Khorasan-e Razavi',
  },
  {
    id: 1804,
    country_id: 153732,
    name: 'Meghalaya',
  },
  {
    id: 1805,
    country_id: 155043,
    name: 'Chittagong',
  },
  {
    id: 1806,
    country_id: 155043,
    name: 'Sylhet',
  },
  {
    id: 1807,
    country_id: 49477,
    name: 'Chiang Mai',
  },
  {
    id: 1808,
    country_id: 49477,
    name: 'Phayao',
  },
  {
    id: 1809,
    country_id: 49477,
    name: 'Loei',
  },
  {
    id: 1810,
    country_id: 49477,
    name: 'Chiang Rai',
  },
  {
    id: 1811,
    country_id: 213370,
    name: 'Chiayi',
  },
  {
    id: 1812,
    country_id: 53128,
    name: 'Suchitepequez',
  },
  {
    id: 1813,
    country_id: 53128,
    name: 'Quiche',
  },
  {
    id: 1814,
    country_id: 275,
    name: 'Falcon',
  },
  {
    id: 1815,
    country_id: 338,
    name: 'Lambayeque',
  },
  {
    id: 1816,
    country_id: 38404,
    name: 'North Western Province',
  },
  {
    id: 1817,
    country_id: 80,
    name: 'Aisen del General Carlos Ibanez del Campo',
  },
  {
    id: 1818,
    country_id: 53128,
    name: 'Chimaltenango',
  },
  {
    id: 1819,
    country_id: 2325,
    name: 'Manicaland',
  },
  {
    id: 1820,
    country_id: 80,
    name: "Libertador General Bernardo O'Higgins",
  },
  {
    id: 1821,
    country_id: 6783,
    name: 'Manica',
  },
  {
    id: 1822,
    country_id: 3990,
    name: 'Chinandega',
  },
  {
    id: 1823,
    country_id: 712,
    name: 'Chungcheongbuk-do',
  },
  {
    id: 1824,
    country_id: 338,
    name: 'Ica',
  },
  {
    id: 1825,
    country_id: 2568,
    name: 'Northern',
  },
  {
    id: 1826,
    country_id: 2325,
    name: 'Masvingo',
  },
  {
    id: 1827,
    country_id: 2345,
    name: 'Chisinau',
  },
  {
    id: 1828,
    country_id: 65437,
    name: 'Herrera',
  },
  {
    id: 1829,
    country_id: 2325,
    name: 'Harare',
  },
  {
    id: 1830,
    country_id: 275,
    name: 'Yaracuy',
  },
  {
    id: 1831,
    country_id: 57160,
    name: 'Sughd',
  },
  {
    id: 1832,
    country_id: 116,
    name: 'Pafos',
  },
  {
    id: 1833,
    country_id: 2568,
    name: 'Southern',
  },
  {
    id: 1834,
    country_id: 2568,
    name: 'Lusaka',
  },
  {
    id: 1835,
    country_id: 86,
    name: 'Poltavska oblast',
  },
  {
    id: 1836,
    country_id: 2817,
    name: 'Canterbury',
  },
  {
    id: 1837,
    country_id: 1179,
    name: 'Tharaka-Nithi',
  },
  {
    id: 1838,
    country_id: 49477,
    name: 'Nakhon Sawan',
  },
  {
    id: 1839,
    country_id: 712,
    name: 'Gangwon-do',
  },
  {
    id: 1840,
    country_id: 479,
    name: 'Yamanashi',
  },
  {
    id: 1841,
    country_id: 227,
    name: 'Kareliya, Respublika',
  },
  {
    id: 1842,
    country_id: 153732,
    name: 'Manipur',
  },
  {
    id: 1843,
    country_id: 77580,
    name: 'Ciales',
  },
  {
    id: 1844,
    country_id: 821,
    name: 'Cibitoke',
  },
  {
    id: 1845,
    country_id: 401,
    name: 'Kosicky kraj',
  },
  {
    id: 1846,
    country_id: 404,
    name: 'Erzincan',
  },
  {
    id: 1847,
    country_id: 2345,
    name: 'Cimislia',
  },
  {
    id: 1848,
    country_id: 1638,
    name: 'Komen',
  },
  {
    id: 1849,
    country_id: 1638,
    name: 'Cirkulane',
  },
  {
    id: 1850,
    country_id: 748,
    name: 'Livanu novads',
  },
  {
    id: 1851,
    country_id: 1176,
    name: 'Choluteca',
  },
  {
    id: 1852,
    country_id: 3990,
    name: 'Matagalpa',
  },
  {
    id: 1853,
    country_id: 1190,
    name: 'Alto Parana',
  },
  {
    id: 1854,
    country_id: 80919,
    name: 'Long Island',
  },
  {
    id: 1855,
    country_id: 160047,
    name: 'Saint Thomas Lowland',
  },
  {
    id: 1856,
    country_id: 44,
    name: 'Formosa',
  },
  {
    id: 1857,
    country_id: 77580,
    name: 'Coamo',
  },
  {
    id: 1858,
    country_id: 7598,
    name: 'Pando',
  },
  {
    id: 1859,
    country_id: 2345,
    name: 'Dubasari',
  },
  {
    id: 1860,
    country_id: 705616,
    name: 'Turks and Caicos Islands',
  },
  {
    id: 1861,
    country_id: 77580,
    name: 'Salinas',
  },
  {
    id: 1862,
    country_id: 35008,
    name: 'Cuscatlan',
  },
  {
    id: 1863,
    country_id: 353,
    name: 'Putumayo',
  },
  {
    id: 1864,
    country_id: 1739,
    name: 'Heredia',
  },
  {
    id: 1865,
    country_id: 1190,
    name: 'Canindeyu',
  },
  {
    id: 1866,
    country_id: 1190,
    name: 'Boqueron',
  },
  {
    id: 1867,
    country_id: 77580,
    name: 'Comerio',
  },
  {
    id: 1868,
    country_id: 338,
    name: 'Junin',
  },
  {
    id: 1869,
    country_id: 1190,
    name: 'Concepcion',
  },
  {
    id: 1870,
    country_id: 79146,
    name: 'La Vega',
  },
  {
    id: 1871,
    country_id: 63604,
    name: 'Pinar del Rio',
  },
  {
    id: 1872,
    country_id: 80919,
    name: 'Hope Town',
  },
  {
    id: 1873,
    country_id: 80,
    name: 'Atacama',
  },
  {
    id: 1874,
    country_id: 80,
    name: 'Coquimbo',
  },
  {
    id: 1875,
    country_id: 77580,
    name: 'Guayama',
  },
  {
    id: 1876,
    country_id: 77580,
    name: 'Hatillo',
  },
  {
    id: 1877,
    country_id: 35008,
    name: 'Morazan',
  },
  {
    id: 1878,
    country_id: 144816,
    name: 'Corozal',
  },
  {
    id: 1879,
    country_id: 63604,
    name: 'Villa Clara',
  },
  {
    id: 1880,
    country_id: 2756,
    name: 'Bormla',
  },
  {
    id: 1881,
    country_id: 77580,
    name: 'Ponce',
  },
  {
    id: 1882,
    country_id: 77580,
    name: 'Vega Baja',
  },
  {
    id: 1883,
    country_id: 79146,
    name: 'Sanchez Ramirez',
  },
  {
    id: 1884,
    country_id: 2228,
    name: 'Couva-Tabaquite-Talparo',
  },
  {
    id: 1885,
    country_id: 160047,
    name: 'Saint John Figtree',
  },
  {
    id: 1886,
    country_id: 1703,
    name: 'Coyah',
  },
  {
    id: 1887,
    country_id: 33497,
    name: 'Saint Philip',
  },
  {
    id: 1888,
    country_id: 1638,
    name: 'Crensovci',
  },
  {
    id: 1889,
    country_id: 360931,
    name: 'Pamplemousses',
  },
  {
    id: 1890,
    country_id: 79146,
    name: 'Independencia',
  },
  {
    id: 1891,
    country_id: 2345,
    name: 'Criuleni',
  },
  {
    id: 1893,
    country_id: 1638,
    name: 'Destrnik',
  },
  {
    id: 1894,
    country_id: 1638,
    name: 'Tabor',
  },
  {
    id: 1895,
    country_id: 32396817,
    name: 'Dolneni',
  },
  {
    id: 1896,
    country_id: 1638,
    name: 'Crnomelj',
  },
  {
    id: 1897,
    country_id: 459,
    name: 'Azuay',
  },
  {
    id: 1898,
    country_id: 3995,
    name: 'Terengganu',
  },
  {
    id: 1899,
    country_id: 1114524,
    name: 'Sint Maarten (Dutch Part)',
  },
  {
    id: 1900,
    country_id: 77580,
    name: 'Culebra',
  },
  {
    id: 1901,
    country_id: 360931,
    name: 'Plaines Wilhems',
  },
  {
    id: 1902,
    country_id: 1739,
    name: 'San Jose',
  },
  {
    id: 1903,
    country_id: 69697,
    name: 'Lam Dong',
  },
  {
    id: 1904,
    country_id: 69697,
    name: 'Da Nang',
  },
  {
    id: 1905,
    country_id: 1703,
    name: 'Dabola',
  },
  {
    id: 1906,
    country_id: 862868,
    name: 'Mahakali',
  },
  {
    id: 1907,
    country_id: 712,
    name: 'Daejeon-gwangyeoksi',
  },
  {
    id: 1908,
    country_id: 911987,
    name: 'Tsirang',
  },
  {
    id: 1909,
    country_id: 748,
    name: 'Kraslavas novads',
  },
  {
    id: 1910,
    country_id: 360931,
    name: 'Moka',
  },
  {
    id: 1911,
    country_id: 886,
    name: "Janub Sina'",
  },
  {
    id: 1912,
    country_id: 107,
    name: 'Dahuk',
  },
  {
    id: 1913,
    country_id: 479,
    name: 'Osaka',
  },
  {
    id: 1914,
    country_id: 79146,
    name: 'Dajabon',
  },
  {
    id: 1915,
    country_id: 200,
    name: 'Dakar',
  },
  {
    id: 1916,
    country_id: 1703,
    name: 'Dalaba',
  },
  {
    id: 1917,
    country_id: 909526,
    name: 'Omnogovi',
  },
  {
    id: 1918,
    country_id: 3126,
    name: 'Grevenmacher',
  },
  {
    id: 1919,
    country_id: 116,
    name: 'Lefkosia',
  },
  {
    id: 1920,
    country_id: 153732,
    name: 'Daman and Diu',
  },
  {
    id: 1921,
    country_id: 3677,
    name: 'Dimashq',
  },
  {
    id: 1922,
    country_id: 716,
    name: 'Yobe',
  },
  {
    id: 1923,
    country_id: 488,
    name: 'Tehran',
  },
  {
    id: 1924,
    country_id: 38404,
    name: 'Central Province',
  },
  {
    id: 1925,
    country_id: 488,
    name: 'Semnan',
  },
  {
    id: 1926,
    country_id: 50809,
    name: 'Bukidnon',
  },
  {
    id: 1927,
    country_id: 716,
    name: 'Sokoto',
  },
  {
    id: 1928,
    country_id: 144816,
    name: 'Stann Creek',
  },
  {
    id: 1930,
    country_id: 1176,
    name: 'El Paraiso',
  },
  {
    id: 1931,
    country_id: 23,
    name: 'Lacs',
  },
  {
    id: 1932,
    country_id: 50809,
    name: 'Zamboanga del Norte',
  },
  {
    id: 1933,
    country_id: 35210,
    name: 'Dar es Salaam',
  },
  {
    id: 1934,
    country_id: 20,
    name: 'Viana do Castelo',
  },
  {
    id: 1935,
    country_id: 83175,
    name: 'Dasoguz',
  },
  {
    id: 1936,
    country_id: 748,
    name: 'Daugavpils novads',
  },
  {
    id: 1937,
    country_id: 870933,
    name: 'Tanintharyi',
  },
  {
    id: 1938,
    country_id: 32396817,
    name: 'Debar',
  },
  {
    id: 1939,
    country_id: 2228,
    name: 'Penal-Debe',
  },
  {
    id: 1940,
    country_id: 614,
    name: 'El Oued',
  },
  {
    id: 1941,
    country_id: 910036,
    name: 'Dededo',
  },
  {
    id: 1942,
    country_id: 607,
    name: 'Mouhoun',
  },
  {
    id: 1943,
    country_id: 1439,
    name: 'Tozeur',
  },
  {
    id: 1944,
    country_id: 488,
    name: 'Kohgiluyeh va Bowyer Ahmad',
  },
  {
    id: 1945,
    country_id: 32396817,
    name: 'Delcevo',
  },
  {
    id: 1946,
    country_id: 909526,
    name: 'Selenge',
  },
  {
    id: 1947,
    country_id: 153732,
    name: 'Delhi',
  },
  {
    id: 1948,
    country_id: 32396817,
    name: 'Struga',
  },
  {
    id: 1949,
    country_id: 2454,
    name: 'Vlore',
  },
  {
    id: 1950,
    country_id: 227,
    name: "Smolenskaya oblast'",
  },
  {
    id: 1951,
    country_id: 32396817,
    name: 'Demir Kapija',
  },
  {
    id: 1952,
    country_id: 49477,
    name: 'Phrae',
  },
  {
    id: 1953,
    country_id: 12095,
    name: 'Dennery',
  },
  {
    id: 1954,
    country_id: 2426,
    name: 'Surxondaryo',
  },
  {
    id: 1955,
    country_id: 88407,
    name: 'Yogyakarta',
  },
  {
    id: 1956,
    country_id: 1638,
    name: 'Kanal',
  },
  {
    id: 1957,
    country_id: 862868,
    name: 'Seti',
  },
  {
    id: 1958,
    country_id: 48946,
    name: 'Tulkarm',
  },
  {
    id: 1959,
    country_id: 607,
    name: 'Tapoa',
  },
  {
    id: 1960,
    country_id: 7091,
    name: 'Musandam',
  },
  {
    id: 1961,
    country_id: 69697,
    name: 'Dien Bien',
  },
  {
    id: 1962,
    country_id: 65053,
    name: 'Diffa',
  },
  {
    id: 1963,
    country_id: 10203129,
    name: 'Dili',
  },
  {
    id: 1964,
    country_id: 224,
    name: 'Haskovo',
  },
  {
    id: 1965,
    country_id: 2756,
    name: 'Dingli',
  },
  {
    id: 1966,
    country_id: 3990,
    name: 'Carazo',
  },
  {
    id: 1967,
    country_id: 3990,
    name: 'Granada',
  },
  {
    id: 1968,
    country_id: 886,
    name: 'Qina',
  },
  {
    id: 1969,
    country_id: 1638,
    name: 'Divaca',
  },
  {
    id: 1970,
    country_id: 23,
    name: 'Goh-Djiboua',
  },
  {
    id: 1971,
    country_id: 614,
    name: 'Ouargla',
  },
  {
    id: 1972,
    country_id: 26,
    name: 'Mopti',
  },
  {
    id: 1973,
    country_id: 908783,
    name: 'Djibouti',
  },
  {
    id: 1974,
    country_id: 7830,
    name: 'Donga',
  },
  {
    id: 1975,
    country_id: 86,
    name: 'Kirovohradska oblast',
  },
  {
    id: 1976,
    country_id: 1638,
    name: 'Domzale',
  },
  {
    id: 1977,
    country_id: 1638,
    name: 'Dobje',
  },
  {
    id: 1978,
    country_id: 32396817,
    name: 'Sopiste',
  },
  {
    id: 1979,
    country_id: 1638,
    name: 'Dobrna',
  },
  {
    id: 1981,
    country_id: 1638,
    name: 'Dobrovnik',
  },
  {
    id: 1982,
    country_id: 1638,
    name: 'Brda',
  },
  {
    id: 1983,
    country_id: 1638,
    name: 'Skocjan',
  },
  {
    id: 1984,
    country_id: 35210,
    name: 'Dodoma',
  },
  {
    id: 1985,
    country_id: 74505,
    name: 'Ad Dawhah',
  },
  {
    id: 1986,
    country_id: 1638,
    name: 'Mirna Pec',
  },
  {
    id: 1987,
    country_id: 2453,
    name: 'Samkir',
  },
  {
    id: 1988,
    country_id: 3347,
    name: 'Domagnano',
  },
  {
    id: 1989,
    country_id: 1638,
    name: 'Salovci',
  },
  {
    id: 1990,
    country_id: 49477,
    name: 'Kalasin',
  },
  {
    id: 1991,
    country_id: 2345,
    name: 'Donduseni',
  },
  {
    id: 1992,
    country_id: 69697,
    name: 'Quang Tri',
  },
  {
    id: 1993,
    country_id: 69697,
    name: 'Quang Binh',
  },
  {
    id: 1994,
    country_id: 69697,
    name: 'Binh Phuoc',
  },
  {
    id: 1995,
    country_id: 5618,
    name: 'Qinghai',
  },
  {
    id: 1996,
    country_id: 77580,
    name: 'Dorado',
  },
  {
    id: 1997,
    country_id: 1638,
    name: 'Dornava',
  },
  {
    id: 1998,
    country_id: 2325,
    name: 'Mashonaland East',
  },
  {
    id: 1999,
    country_id: 47329,
    name: 'Bonaire',
  },
  {
    id: 2000,
    country_id: 65053,
    name: 'Dosso',
  },
  {
    id: 2001,
    country_id: 213370,
    name: 'Yunlin',
  },
  {
    id: 2002,
    country_id: 1439,
    name: 'Kebili',
  },
  {
    id: 2003,
    country_id: 20802,
    name: 'Dowa',
  },
  {
    id: 2004,
    country_id: 1638,
    name: 'Smarjeske Toplice',
  },
  {
    id: 2005,
    country_id: 296,
    name: 'Prizrenski okrug',
  },
  {
    id: 2006,
    country_id: 1638,
    name: 'Log-Dragomer',
  },
  {
    id: 2007,
    country_id: 1638,
    name: 'Dravograd',
  },
  {
    id: 2008,
    country_id: 1638,
    name: 'Mokronog-Trebelno',
  },
  {
    id: 2009,
    country_id: 266,
    name: 'Koprivnicko-krizevacka zupanija',
  },
  {
    id: 2010,
    country_id: 2345,
    name: 'Drochia',
  },
  {
    id: 2011,
    country_id: 224,
    name: 'Gabrovo',
  },
  {
    id: 2012,
    country_id: 2802,
    name: 'Dubayy',
  },
  {
    id: 2013,
    country_id: 86,
    name: 'Rivnenska oblast',
  },
  {
    id: 2014,
    country_id: 296,
    name: 'Branicevski okrug',
  },
  {
    id: 2015,
    country_id: 296,
    name: 'Toplicki okrug',
  },
  {
    id: 2016,
    country_id: 266,
    name: 'Grad Zagreb',
  },
  {
    id: 2017,
    country_id: 1703,
    name: 'Dubreka',
  },
  {
    id: 2018,
    country_id: 44983,
    name: 'Afar',
  },
  {
    id: 2019,
    country_id: 23,
    name: 'Montagnes',
  },
  {
    id: 2020,
    country_id: 266,
    name: 'Karlovacka zupanija',
  },
  {
    id: 2021,
    country_id: 146,
    name: 'Limpopo',
  },
  {
    id: 2022,
    country_id: 401,
    name: 'Trnavsky kraj',
  },
  {
    id: 2023,
    country_id: 1640,
    name: 'Trelawny',
  },
  {
    id: 2024,
    country_id: 748,
    name: 'Dundagas novads',
  },
  {
    id: 2025,
    country_id: 1179,
    name: 'Nyandarua',
  },
  {
    id: 2026,
    country_id: 491,
    name: 'Waterford',
  },
  {
    id: 2027,
    country_id: 80919,
    name: 'Harbour Island',
  },
  {
    id: 2028,
    country_id: 69697,
    name: 'Kien Giang',
  },
  {
    id: 2029,
    country_id: 2454,
    name: 'Durres',
  },
  {
    id: 2030,
    country_id: 57160,
    name: 'Dushanbe',
  },
  {
    id: 2031,
    country_id: 57160,
    name: 'Khatlon',
  },
  {
    id: 2032,
    country_id: 2426,
    name: 'Jizzax',
  },
  {
    id: 2033,
    country_id: 404,
    name: 'Duzce',
  },
  {
    id: 2034,
    country_id: 1638,
    name: 'Duplek',
  },
  {
    id: 2035,
    country_id: 32396817,
    name: 'Tetovo',
  },
  {
    id: 2036,
    country_id: 37528,
    name: 'Cayman Islands',
  },
  {
    id: 2037,
    country_id: 479,
    name: 'Miyazaki',
  },
  {
    id: 2038,
    country_id: 2817,
    name: 'Bay of Plenty',
  },
  {
    id: 2039,
    country_id: 2345,
    name: 'Edinet',
  },
  {
    id: 2040,
    country_id: 404,
    name: 'Edirne',
  },
  {
    id: 2041,
    country_id: 404,
    name: 'Karabuk',
  },
  {
    id: 2042,
    country_id: 1796,
    name: 'Austurland',
  },
  {
    id: 2043,
    country_id: 275,
    name: 'Merida',
  },
  {
    id: 2044,
    country_id: 716,
    name: 'Osun',
  },
  {
    id: 2045,
    country_id: 1233,
    name: 'Uusimaa',
  },
  {
    id: 2046,
    country_id: 716,
    name: 'Akwa Ibom',
  },
  {
    id: 2047,
    country_id: 614,
    name: 'El Bayadh',
  },
  {
    id: 2048,
    country_id: 459,
    name: 'Carchi',
  },
  {
    id: 2049,
    country_id: 1439,
    name: 'La Manouba',
  },
  {
    id: 2050,
    country_id: 53128,
    name: 'Izabal',
  },
  {
    id: 2051,
    country_id: 1439,
    name: 'Zaghouan',
  },
  {
    id: 2052,
    country_id: 56518,
    name: 'North Darfur',
  },
  {
    id: 2053,
    country_id: 1439,
    name: 'Gabes',
  },
  {
    id: 2054,
    country_id: 79146,
    name: 'Baoruco',
  },
  {
    id: 2055,
    country_id: 1176,
    name: 'Francisco Morazan',
  },
  {
    id: 2056,
    country_id: 2931,
    name: 'Ordino',
  },
  {
    id: 2057,
    country_id: 79146,
    name: 'Hato Mayor',
  },
  {
    id: 2058,
    country_id: 227,
    name: 'Kabardino-Balkarskaya Respublika',
  },
  {
    id: 2059,
    country_id: 404,
    name: 'Kilis',
  },
  {
    id: 2060,
    country_id: 1179,
    name: 'Uasin Gishu',
  },
  {
    id: 2061,
    country_id: 227,
    name: 'Kalmykiya, Respublika',
  },
  {
    id: 2062,
    country_id: 748,
    name: 'Ikskiles novads',
  },
  {
    id: 2063,
    country_id: 2817,
    name: 'Taranaki',
  },
  {
    id: 2064,
    country_id: 1179,
    name: 'Embu',
  },
  {
    id: 2065,
    country_id: 479,
    name: 'Gifu',
  },
  {
    id: 2066,
    country_id: 2931,
    name: 'Encamp',
  },
  {
    id: 2067,
    country_id: 748,
    name: 'Tukuma novads',
  },
  {
    id: 2068,
    country_id: 491,
    name: 'Clare',
  },
  {
    id: 2069,
    country_id: 491,
    name: 'Wexford',
  },
  {
    id: 2070,
    country_id: 1233,
    name: 'Etela-Savo',
  },
  {
    id: 2071,
    country_id: 1233,
    name: 'Lappi',
  },
  {
    id: 2072,
    country_id: 716,
    name: 'Enugu',
  },
  {
    id: 2073,
    country_id: 1176,
    name: 'Lempira',
  },
  {
    id: 2074,
    country_id: 107,
    name: 'Arbil',
  },
  {
    id: 2075,
    country_id: 909526,
    name: 'Orhon',
  },
  {
    id: 2076,
    country_id: 1638,
    name: 'Luce',
  },
  {
    id: 2077,
    country_id: 21795,
    name: 'Eschen',
  },
  {
    id: 2078,
    country_id: 53128,
    name: 'Escuintla',
  },
  {
    id: 2079,
    country_id: 77580,
    name: 'Vieques',
  },
  {
    id: 2080,
    country_id: 227,
    name: 'Kamchatskiy kray',
  },
  {
    id: 2081,
    country_id: 3990,
    name: 'Esteli',
  },
  {
    id: 2082,
    country_id: 479,
    name: 'Hiroshima',
  },
  {
    id: 2083,
    country_id: 1233,
    name: 'Satakunta',
  },
  {
    id: 2084,
    country_id: 802,
    name: 'HaMerkaz',
  },
  {
    id: 2085,
    country_id: 404,
    name: 'Gumushane',
  },
  {
    id: 2086,
    country_id: 1560,
    name: 'Cuvette-Ouest',
  },
  {
    id: 2087,
    country_id: 201580,
    name: 'Baa',
  },
  {
    id: 2088,
    country_id: 2154,
    name: 'Eysturoy',
  },
  {
    id: 2089,
    country_id: 909582,
    name: 'Eastern District',
  },
  {
    id: 2090,
    country_id: 77580,
    name: 'Fajardo',
  },
  {
    id: 2091,
    country_id: 49477,
    name: 'Uttaradit',
  },
  {
    id: 2092,
    country_id: 37176064,
    name: 'Funafuti',
  },
  {
    id: 2093,
    country_id: 870933,
    name: 'Chin',
  },
  {
    id: 2094,
    country_id: 909585,
    name: 'Niuas',
  },
  {
    id: 2095,
    country_id: 2345,
    name: 'Falesti',
  },
  {
    id: 2096,
    country_id: 43444,
    name: 'Farah',
  },
  {
    id: 2097,
    country_id: 97374,
    name: "'Ajlun",
  },
  {
    id: 2098,
    country_id: 2426,
    name: "Farg'ona",
  },
  {
    id: 2099,
    country_id: 1578,
    name: 'Vest-Agder',
  },
  {
    id: 2100,
    country_id: 200,
    name: 'Fatick',
  },
  {
    id: 2101,
    country_id: 43444,
    name: 'Badakhshan',
  },
  {
    id: 2102,
    country_id: 201580,
    name: 'Vaavu',
  },
  {
    id: 2103,
    country_id: 23,
    name: 'Savanes',
  },
  {
    id: 2104,
    country_id: 1439,
    name: 'Jendouba',
  },
  {
    id: 2105,
    country_id: 2756,
    name: 'Fgura',
  },
  {
    id: 2106,
    country_id: 53128,
    name: 'Peten',
  },
  {
    id: 2107,
    country_id: 2345,
    name: 'Floresti',
  },
  {
    id: 2108,
    country_id: 2756,
    name: 'Floriana',
  },
  {
    id: 2109,
    country_id: 2756,
    name: 'Fontana',
  },
  {
    id: 2110,
    country_id: 75285,
    name: 'Fontvieille',
  },
  {
    id: 2111,
    country_id: 1233,
    name: 'Kanta-Hame',
  },
  {
    id: 2112,
    country_id: 1646,
    name: 'Toliara',
  },
  {
    id: 2113,
    country_id: 4125,
    name: 'Kabarole',
  },
  {
    id: 2114,
    country_id: 3662,
    name: 'Haut-Ogooue',
  },
  {
    id: 2115,
    country_id: 191038,
    name: 'North East',
  },
  {
    id: 2116,
    country_id: 80919,
    name: 'City of Freeport',
  },
  {
    id: 2117,
    country_id: 5724,
    name: 'Western Area',
  },
  {
    id: 2118,
    country_id: 1176,
    name: 'Islas de la Bahia',
  },
  {
    id: 2119,
    country_id: 1578,
    name: 'Nord-Trondelag',
  },
  {
    id: 2120,
    country_id: 479,
    name: 'Shizuoka',
  },
  {
    id: 2121,
    country_id: 716,
    name: 'Katsina',
  },
  {
    id: 2122,
    country_id: 227,
    name: "Ivanovskaya oblast'",
  },
  {
    id: 2123,
    country_id: 74505,
    name: 'Ash Shamal',
  },
  {
    id: 2124,
    country_id: 191038,
    name: 'South East',
  },
  {
    id: 2125,
    country_id: 1707,
    name: 'Gabu',
  },
  {
    id: 2126,
    country_id: 712,
    name: 'Jeju-teukbyeoljachido',
  },
  {
    id: 2127,
    country_id: 77580,
    name: 'Toa Alta',
  },
  {
    id: 2128,
    country_id: 3662,
    name: 'Ogooue-Maritime',
  },
  {
    id: 2129,
    country_id: 35210,
    name: 'Kaskazini Unguja',
  },
  {
    id: 2130,
    country_id: 21795,
    name: 'Gamprin',
  },
  {
    id: 2131,
    country_id: 712,
    name: 'Incheon-gwangyeoksi',
  },
  {
    id: 2132,
    country_id: 153732,
    name: 'Sikkim',
  },
  {
    id: 2133,
    country_id: 2453,
    name: 'Ganca',
  },
  {
    id: 2134,
    country_id: 719,
    name: 'Nimba',
  },
  {
    id: 2135,
    country_id: 866998,
    name: 'Rotuma',
  },
  {
    id: 2136,
    country_id: 607,
    name: 'Poni',
  },
  {
    id: 2137,
    country_id: 224,
    name: 'Shumen',
  },
  {
    id: 2138,
    country_id: 607,
    name: 'Boulgou',
  },
  {
    id: 2139,
    country_id: 1796,
    name: 'Hofudborgarsvaedi',
  },
  {
    id: 2140,
    country_id: 43444,
    name: 'Paktiya',
  },
  {
    id: 2141,
    country_id: 2079,
    name: 'Klaipedos apskritis',
  },
  {
    id: 2142,
    country_id: 1179,
    name: 'Garissa',
  },
  {
    id: 2143,
    country_id: 7563,
    name: 'Nugaal',
  },
  {
    id: 2144,
    country_id: 911987,
    name: 'Gasa',
  },
  {
    id: 2145,
    country_id: 79146,
    name: 'Espaillat',
  },
  {
    id: 2146,
    country_id: 98799,
    name: 'Ville de Ndjamena',
  },
  {
    id: 2147,
    country_id: 227,
    name: "Tambovskaya oblast'",
  },
  {
    id: 2148,
    country_id: 1179,
    name: 'Kwale',
  },
  {
    id: 2149,
    country_id: 1320,
    name: 'Nord-Ubangi',
  },
  {
    id: 2150,
    country_id: 56518,
    name: 'Gedaref',
  },
  {
    id: 2151,
    country_id: 1638,
    name: 'Tisina',
  },
  {
    id: 2152,
    country_id: 35210,
    name: 'Geita',
  },
  {
    id: 2153,
    country_id: 2079,
    name: 'Marijampoles apskritis',
  },
  {
    id: 2154,
    country_id: 1320,
    name: 'Equateur',
  },
  {
    id: 2155,
    country_id: 56518,
    name: 'West Darfur',
  },
  {
    id: 2156,
    country_id: 1190,
    name: 'Caazapa',
  },
  {
    id: 2157,
    country_id: 2453,
    name: 'Goycay',
  },
  {
    id: 2158,
    country_id: 1985,
    name: 'Demerara-Mahaica',
  },
  {
    id: 2159,
    country_id: 2427,
    name: 'Zhambyl oblysy',
  },
  {
    id: 2160,
    country_id: 1638,
    name: 'Hajdina',
  },
  {
    id: 2161,
    country_id: 32396817,
    name: 'Gevgelija',
  },
  {
    id: 2162,
    country_id: 2756,
    name: 'Mgarr',
  },
  {
    id: 2163,
    country_id: 16175,
    name: 'Al Jabal al Gharbi',
  },
  {
    id: 2164,
    country_id: 2756,
    name: 'Ghasri',
  },
  {
    id: 2165,
    country_id: 2756,
    name: 'Ghaxaq',
  },
  {
    id: 2166,
    country_id: 43444,
    name: 'Ghazni',
  },
  {
    id: 2167,
    country_id: 1638,
    name: 'Razkrizje',
  },
  {
    id: 2168,
    country_id: 3374,
    name: 'Gibraltar',
  },
  {
    id: 2169,
    country_id: 2817,
    name: 'Gisborne',
  },
  {
    id: 2170,
    country_id: 821,
    name: 'Gitega',
  },
  {
    id: 2171,
    country_id: 1179,
    name: 'Elgeyo/Marakwet',
  },
  {
    id: 2172,
    country_id: 2454,
    name: 'Gjirokaster',
  },
  {
    id: 2173,
    country_id: 1638,
    name: 'Kosanjevica na Krki',
  },
  {
    id: 2174,
    country_id: 2345,
    name: 'Glodeni',
  },
  {
    id: 2175,
    country_id: 1638,
    name: 'Komenda',
  },
  {
    id: 2176,
    country_id: 5790,
    name: 'Omaheke',
  },
  {
    id: 2177,
    country_id: 479,
    name: 'Nara',
  },
  {
    id: 2178,
    country_id: 2325,
    name: 'Midlands',
  },
  {
    id: 2179,
    country_id: 1320,
    name: 'Lualaba',
  },
  {
    id: 2180,
    country_id: 2177,
    name: 'Artibonite',
  },
  {
    id: 2181,
    country_id: 488,
    name: 'Golestan',
  },
  {
    id: 2182,
    country_id: 2453,
    name: 'Goranboy',
  },
  {
    id: 2183,
    country_id: 119,
    name: 'Shida Kartli',
  },
  {
    id: 2184,
    country_id: 296,
    name: 'Kolubarski okrug',
  },
  {
    id: 2185,
    country_id: 1638,
    name: 'Gornja Radgona',
  },
  {
    id: 2186,
    country_id: 1638,
    name: 'Gornji Petrovci',
  },
  {
    id: 2187,
    country_id: 55408,
    name: 'Eastern Highlands',
  },
  {
    id: 2188,
    country_id: 479,
    name: 'Nagasaki',
  },
  {
    id: 2189,
    country_id: 1638,
    name: 'Zalec',
  },
  {
    id: 2190,
    country_id: 479,
    name: 'Shimane',
  },
  {
    id: 2191,
    country_id: 1638,
    name: 'Smartno pri Litiji',
  },
  {
    id: 2192,
    country_id: 1638,
    name: 'Grad',
  },
  {
    id: 2193,
    country_id: 32396817,
    name: 'Vrapciste',
  },
  {
    id: 2194,
    country_id: 1638,
    name: 'Kungota',
  },
  {
    id: 2195,
    country_id: 491,
    name: 'Longford',
  },
  {
    id: 2196,
    country_id: 719,
    name: 'Sinoe',
  },
  {
    id: 2197,
    country_id: 2817,
    name: 'West Coast',
  },
  {
    id: 2198,
    country_id: 32396817,
    name: 'Resen',
  },
  {
    id: 2199,
    country_id: 748,
    name: 'Liepaja',
  },
  {
    id: 2200,
    country_id: 2088,
    name: 'Saramacca',
  },
  {
    id: 2201,
    country_id: 5790,
    name: 'Otjozondjupa',
  },
  {
    id: 2202,
    country_id: 12095,
    name: 'Gros Islet',
  },
  {
    id: 2203,
    country_id: 1638,
    name: 'Grosuplje',
  },
  {
    id: 2204,
    country_id: 1638,
    name: 'Recica ob Savinji',
  },
  {
    id: 2205,
    country_id: 3995,
    name: 'Kelantan',
  },
  {
    id: 2206,
    country_id: 275,
    name: 'Carabobo',
  },
  {
    id: 2207,
    country_id: 459,
    name: 'Morona Santiago',
  },
  {
    id: 2208,
    country_id: 77580,
    name: 'Guanica',
  },
  {
    id: 2209,
    country_id: 53128,
    name: 'El Progreso',
  },
  {
    id: 2210,
    country_id: 77580,
    name: 'Guayanilla',
  },
  {
    id: 2211,
    country_id: 7598,
    name: 'El Beni',
  },
  {
    id: 2212,
    country_id: 77580,
    name: 'Guaynabo',
  },
  {
    id: 2213,
    country_id: 2756,
    name: 'Gudja',
  },
  {
    id: 2214,
    country_id: 614,
    name: 'Guelma',
  },
  {
    id: 2215,
    country_id: 158,
    name: 'Paysandu',
  },
  {
    id: 2216,
    country_id: 748,
    name: 'Gulbenes novads',
  },
  {
    id: 2217,
    country_id: 2426,
    name: 'Sirdaryo',
  },
  {
    id: 2218,
    country_id: 4125,
    name: 'Gulu',
  },
  {
    id: 2219,
    country_id: 2426,
    name: 'Xorazm',
  },
  {
    id: 2220,
    country_id: 716,
    name: 'Zamfara',
  },
  {
    id: 2221,
    country_id: 2756,
    name: 'Pieta',
  },
  {
    id: 2222,
    country_id: 2756,
    name: 'Gzira',
  },
  {
    id: 2223,
    country_id: 2756,
    name: "Ta' Xbiex",
  },
  {
    id: 2224,
    country_id: 911987,
    name: 'Haa',
  },
  {
    id: 2225,
    country_id: 69697,
    name: 'Ha Noi',
  },
  {
    id: 2226,
    country_id: 69697,
    name: 'Ha Giang',
  },
  {
    id: 2227,
    country_id: 69697,
    name: 'Ha Tinh',
  },
  {
    id: 2228,
    country_id: 35376,
    name: "Ha'il",
  },
  {
    id: 2229,
    country_id: 2405,
    name: 'Harjumaa',
  },
  {
    id: 2230,
    country_id: 2405,
    name: 'Laanemaa',
  },
  {
    id: 2231,
    country_id: 479,
    name: 'Iwate',
  },
  {
    id: 2232,
    country_id: 1439,
    name: 'Kairouan',
  },
  {
    id: 2233,
    country_id: 910036,
    name: 'Hagatna',
  },
  {
    id: 2234,
    country_id: 479,
    name: 'Yamaguchi',
  },
  {
    id: 2235,
    country_id: 69697,
    name: 'Hai Duong',
  },
  {
    id: 2236,
    country_id: 69697,
    name: 'Hai Phong',
  },
  {
    id: 2237,
    country_id: 404,
    name: 'Hakkari',
  },
  {
    id: 2238,
    country_id: 479,
    name: 'Ishikawa',
  },
  {
    id: 2239,
    country_id: 2756,
    name: 'Gharghur',
  },
  {
    id: 2240,
    country_id: 45412,
    name: 'Aakkar',
  },
  {
    id: 2241,
    country_id: 160047,
    name: 'Saint Thomas Middle Island',
  },
  {
    id: 2242,
    country_id: 2405,
    name: 'Laane-Virumaa',
  },
  {
    id: 2243,
    country_id: 1233,
    name: 'Keski-Pohjanmaa',
  },
  {
    id: 2244,
    country_id: 15326,
    name: 'Hamilton',
  },
  {
    id: 2245,
    country_id: 2756,
    name: 'Hamrun',
  },
  {
    id: 2246,
    country_id: 2426,
    name: 'Namangan',
  },
  {
    id: 2247,
    country_id: 44983,
    name: 'Hareri Hizb',
  },
  {
    id: 2248,
    country_id: 1439,
    name: 'Sousse',
  },
  {
    id: 2249,
    country_id: 488,
    name: 'Kermanshah',
  },
  {
    id: 2250,
    country_id: 404,
    name: 'Osmaniye',
  },
  {
    id: 2251,
    country_id: 2817,
    name: "Hawke's Bay",
  },
  {
    id: 2252,
    country_id: 49477,
    name: 'Trang',
  },
  {
    id: 2253,
    country_id: 63604,
    name: 'La Habana',
  },
  {
    id: 2254,
    country_id: 7091,
    name: 'Al Wusta',
  },
  {
    id: 2255,
    country_id: 47,
    name: 'Gotlands lan',
  },
  {
    id: 2256,
    country_id: 213370,
    name: 'Pingtung',
  },
  {
    id: 2257,
    country_id: 43444,
    name: 'Herat',
  },
  {
    id: 2258,
    country_id: 15288356,
    name: 'Province Nord',
  },
  {
    id: 2259,
    country_id: 479,
    name: 'Kagawa',
  },
  {
    id: 2260,
    country_id: 479,
    name: 'Miyagi',
  },
  {
    id: 2261,
    country_id: 479,
    name: 'Shiga',
  },
  {
    id: 2262,
    country_id: 2345,
    name: 'Hincesti',
  },
  {
    id: 2263,
    country_id: 201580,
    name: 'Laamu',
  },
  {
    id: 2264,
    country_id: 1638,
    name: 'Velike Lasce',
  },
  {
    id: 2265,
    country_id: 468,
    name: 'Volta',
  },
  {
    id: 2266,
    country_id: 69697,
    name: 'Hoa Binh',
  },
  {
    id: 2267,
    country_id: 1638,
    name: 'Hodos',
  },
  {
    id: 2268,
    country_id: 69697,
    name: 'Quang Nam',
  },
  {
    id: 2269,
    country_id: 4125,
    name: 'Hoima',
  },
  {
    id: 2270,
    country_id: 479,
    name: 'Ehime',
  },
  {
    id: 2271,
    country_id: 1179,
    name: 'Homa Bay',
  },
  {
    id: 2272,
    country_id: 212,
    name: "Homyel'skaya voblasts'",
  },
  {
    id: 2273,
    country_id: 867004,
    name: 'Guadalcanal',
  },
  {
    id: 2274,
    country_id: 1638,
    name: 'Horjul',
  },
  {
    id: 2275,
    country_id: 77580,
    name: 'Hormigueros',
  },
  {
    id: 2276,
    country_id: 245,
    name: 'Praha, Hlavni mesto',
  },
  {
    id: 2277,
    country_id: 607,
    name: 'Tuy',
  },
  {
    id: 2278,
    country_id: 404,
    name: 'Tunceli',
  },
  {
    id: 2279,
    country_id: 1638,
    name: 'Hrastnik',
  },
  {
    id: 2280,
    country_id: 1638,
    name: 'Zavrc',
  },
  {
    id: 2281,
    country_id: 213370,
    name: 'Hsinchu',
  },
  {
    id: 2282,
    country_id: 49477,
    name: 'Uthai Thani',
  },
  {
    id: 2283,
    country_id: 213370,
    name: 'Hualien',
  },
  {
    id: 2284,
    country_id: 911,
    name: 'Huambo',
  },
  {
    id: 2285,
    country_id: 338,
    name: 'Huancavelica',
  },
  {
    id: 2286,
    country_id: 338,
    name: 'Huanuco',
  },
  {
    id: 2287,
    country_id: 459,
    name: 'El Oro',
  },
  {
    id: 2288,
    country_id: 69697,
    name: 'Thua Thien-Hue',
  },
  {
    id: 2289,
    country_id: 53128,
    name: 'Huehuetenango',
  },
  {
    id: 2290,
    country_id: 43444,
    name: 'Helmand',
  },
  {
    id: 2291,
    country_id: 16175,
    name: 'Al Jufrah',
  },
  {
    id: 2292,
    country_id: 69697,
    name: 'Hung Yen',
  },
  {
    id: 2293,
    country_id: 1796,
    name: 'Sudurland',
  },
  {
    id: 2294,
    country_id: 2325,
    name: 'Matabeleland North',
  },
  {
    id: 2295,
    country_id: 614,
    name: 'Tamanrasset',
  },
  {
    id: 2296,
    country_id: 2345,
    name: 'Ialoveni',
  },
  {
    id: 2297,
    country_id: 2345,
    name: 'Leova',
  },
  {
    id: 2298,
    country_id: 716,
    name: 'Oyo',
  },
  {
    id: 2299,
    country_id: 50809,
    name: 'Southern Leyte',
  },
  {
    id: 2300,
    country_id: 7091,
    name: 'Az Zahirah',
  },
  {
    id: 2301,
    country_id: 35210,
    name: 'Simiyu',
  },
  {
    id: 2302,
    country_id: 1638,
    name: 'Idrija',
  },
  {
    id: 2303,
    country_id: 748,
    name: 'Iecavas novads',
  },
  {
    id: 2304,
    country_id: 1638,
    name: 'Ig',
  },
  {
    id: 2305,
    country_id: 479,
    name: 'Mie',
  },
  {
    id: 2306,
    country_id: 1638,
    name: 'Loska Dolina',
  },
  {
    id: 2307,
    country_id: 404,
    name: 'Igdir',
  },
  {
    id: 2308,
    country_id: 1233,
    name: 'Pohjois-Savo',
  },
  {
    id: 2309,
    country_id: 748,
    name: 'Ogres novads',
  },
  {
    id: 2310,
    country_id: 2756,
    name: 'Marsaskala',
  },
  {
    id: 2311,
    country_id: 1320,
    name: 'Sankuru',
  },
  {
    id: 2312,
    country_id: 1638,
    name: 'Ilirska Bistrica',
  },
  {
    id: 2313,
    country_id: 614,
    name: 'Illizi',
  },
  {
    id: 2314,
    country_id: 338,
    name: 'Moquegua',
  },
  {
    id: 2315,
    country_id: 716,
    name: 'Kwara',
  },
  {
    id: 2316,
    country_id: 35210,
    name: 'Iringa',
  },
  {
    id: 2317,
    country_id: 479,
    name: 'Saga',
  },
  {
    id: 2318,
    country_id: 2756,
    name: 'Mdina',
  },
  {
    id: 2319,
    country_id: 2453,
    name: 'Imisli',
  },
  {
    id: 2320,
    country_id: 479,
    name: 'Toyama',
  },
  {
    id: 2321,
    country_id: 2756,
    name: 'Mtarfa',
  },
  {
    id: 2322,
    country_id: 49477,
    name: 'Sing Buri',
  },
  {
    id: 2323,
    country_id: 748,
    name: 'Incukalna novads',
  },
  {
    id: 2324,
    country_id: 1190,
    name: 'Guaira',
  },
  {
    id: 2325,
    country_id: 6783,
    name: 'Inhambane',
  },
  {
    id: 2326,
    country_id: 353,
    name: 'Guainia',
  },
  {
    id: 2327,
    country_id: 80,
    name: 'Tarapaca',
  },
  {
    id: 2328,
    country_id: 338,
    name: 'Loreto',
  },
  {
    id: 2329,
    country_id: 50809,
    name: 'Basilan',
  },
  {
    id: 2330,
    country_id: 1796,
    name: 'Vestfirdir',
  },
  {
    id: 2331,
    country_id: 867012,
    name: 'Tafea',
  },
  {
    id: 2332,
    country_id: 1179,
    name: 'Isiolo',
  },
  {
    id: 2333,
    country_id: 227,
    name: 'Nenetskiy avtonomnyy okrug',
  },
  {
    id: 2334,
    country_id: 52126,
    name: 'Islamabad',
  },
  {
    id: 2335,
    country_id: 2453,
    name: 'Ismayilli',
  },
  {
    id: 2336,
    country_id: 224,
    name: 'Razgrad',
  },
  {
    id: 2337,
    country_id: 1638,
    name: 'Zagorje ob Savi',
  },
  {
    id: 2338,
    country_id: 1638,
    name: 'Izola',
  },
  {
    id: 2339,
    country_id: 2177,
    name: 'Sud-Est',
  },
  {
    id: 2340,
    country_id: 38404,
    name: 'Northern Province',
  },
  {
    id: 2341,
    country_id: 296,
    name: 'Podunavski okrug',
  },
  {
    id: 2342,
    country_id: 77580,
    name: 'San Lorenzo',
  },
  {
    id: 2343,
    country_id: 63604,
    name: 'Matanzas',
  },
  {
    id: 2344,
    country_id: 911987,
    name: 'Bumthang',
  },
  {
    id: 2345,
    country_id: 88407,
    name: 'Jakarta Raya',
  },
  {
    id: 2346,
    country_id: 1233,
    name: 'Pohjanmaa',
  },
  {
    id: 2347,
    country_id: 43444,
    name: 'Nangarhar',
  },
  {
    id: 2348,
    country_id: 53128,
    name: 'Jalapa',
  },
  {
    id: 2349,
    country_id: 2453,
    name: 'Calilabad',
  },
  {
    id: 2350,
    country_id: 716,
    name: 'Taraba',
  },
  {
    id: 2351,
    country_id: 88407,
    name: 'Jambi',
  },
  {
    id: 2352,
    country_id: 862868,
    name: 'Janakpur',
  },
  {
    id: 2353,
    country_id: 2405,
    name: 'Jarvamaa',
  },
  {
    id: 2354,
    country_id: 2405,
    name: 'Raplamaa',
  },
  {
    id: 2355,
    country_id: 63604,
    name: 'Sancti Spiritus',
  },
  {
    id: 2356,
    country_id: 748,
    name: 'Jaunjelgavas novads',
  },
  {
    id: 2357,
    country_id: 748,
    name: 'Jaunpiebalgas novads',
  },
  {
    id: 2358,
    country_id: 748,
    name: 'Jaunpils novads',
  },
  {
    id: 2359,
    country_id: 1638,
    name: 'Gorje',
  },
  {
    id: 2360,
    country_id: 77580,
    name: 'Municipio de Jayuya',
  },
  {
    id: 2361,
    country_id: 748,
    name: 'Nauksenu novads',
  },
  {
    id: 2362,
    country_id: 32396817,
    name: 'Jegunovce',
  },
  {
    id: 2363,
    country_id: 748,
    name: 'Jelgavas novads',
  },
  {
    id: 2364,
    country_id: 1638,
    name: 'Makole',
  },
  {
    id: 2365,
    country_id: 2177,
    name: "Grande'Anse",
  },
  {
    id: 2366,
    country_id: 919,
    name: 'Vayoc Jor',
  },
  {
    id: 2367,
    country_id: 802,
    name: 'Yerushalayim',
  },
  {
    id: 2368,
    country_id: 1638,
    name: 'Jesenice',
  },
  {
    id: 2369,
    country_id: 45412,
    name: 'Liban-Sud',
  },
  {
    id: 2370,
    country_id: 44983,
    name: 'Sumale',
  },
  {
    id: 2371,
    country_id: 716,
    name: 'Adamawa',
  },
  {
    id: 2372,
    country_id: 213370,
    name: 'Kinmen',
  },
  {
    id: 2373,
    country_id: 3990,
    name: 'Jinotega',
  },
  {
    id: 2374,
    country_id: 2405,
    name: 'Jogevamaa',
  },
  {
    id: 2375,
    country_id: 2405,
    name: 'Ida-Virumaa',
  },
  {
    id: 2376,
    country_id: 716,
    name: 'Plateau',
  },
  {
    id: 2377,
    country_id: 158,
    name: 'Lavalleja',
  },
  {
    id: 2378,
    country_id: 45412,
    name: 'Beqaa',
  },
  {
    id: 2379,
    country_id: 275,
    name: 'Nueva Esparta',
  },
  {
    id: 2380,
    country_id: 190317,
    name: 'Central Equatoria',
  },
  {
    id: 2381,
    country_id: 3990,
    name: 'Chontales',
  },
  {
    id: 2382,
    country_id: 77580,
    name: 'San Sebastian',
  },
  {
    id: 2383,
    country_id: 79146,
    name: 'Santiago',
  },
  {
    id: 2384,
    country_id: 77580,
    name: 'Municipio de Juncos',
  },
  {
    id: 2385,
    country_id: 2079,
    name: 'Taurages apskritis',
  },
  {
    id: 2386,
    country_id: 748,
    name: 'Jurmala',
  },
  {
    id: 2387,
    country_id: 1638,
    name: 'Sveti Jurij v Slovenskih Goricah',
  },
  {
    id: 2388,
    country_id: 1638,
    name: 'Jursinci',
  },
  {
    id: 2389,
    country_id: 4125,
    name: 'Kabale',
  },
  {
    id: 2390,
    country_id: 50809,
    name: 'Apayao',
  },
  {
    id: 2391,
    country_id: 43444,
    name: 'Kabul',
  },
  {
    id: 2392,
    country_id: 32396817,
    name: 'Ilinden',
  },
  {
    id: 2393,
    country_id: 716,
    name: 'Kaduna',
  },
  {
    id: 2394,
    country_id: 200,
    name: 'Kaffrine',
  },
  {
    id: 2395,
    country_id: 48946,
    name: 'Ramallah',
  },
  {
    id: 2396,
    country_id: 4125,
    name: 'Kibaale',
  },
  {
    id: 2397,
    country_id: 404,
    name: 'Kars',
  },
  {
    id: 2398,
    country_id: 35210,
    name: 'Shinyanga',
  },
  {
    id: 2399,
    country_id: 1179,
    name: 'Kajiado',
  },
  {
    id: 2400,
    country_id: 719,
    name: 'Margibi',
  },
  {
    id: 2401,
    country_id: 4125,
    name: 'Kalangala',
  },
  {
    id: 2402,
    country_id: 1320,
    name: 'Tanganyika',
  },
  {
    id: 2403,
    country_id: 88407,
    name: 'Sulawesi Tengah',
  },
  {
    id: 2404,
    country_id: 4125,
    name: 'Kaliro',
  },
  {
    id: 2405,
    country_id: 2756,
    name: 'Kalkara',
  },
  {
    id: 2406,
    country_id: 2405,
    name: 'Tartumaa',
  },
  {
    id: 2407,
    country_id: 479,
    name: 'Yamagata',
  },
  {
    id: 2408,
    country_id: 1638,
    name: 'Maribor',
  },
  {
    id: 2409,
    country_id: 1638,
    name: 'Kamnik',
  },
  {
    id: 2410,
    country_id: 4125,
    name: 'Kampala',
  },
  {
    id: 2411,
    country_id: 909440,
    name: 'Kampong Chaam',
  },
  {
    id: 2412,
    country_id: 909440,
    name: 'Kampong Chhnang',
  },
  {
    id: 2413,
    country_id: 909440,
    name: 'Kampong Spueu',
  },
  {
    id: 2414,
    country_id: 909440,
    name: 'Kampong Thum',
  },
  {
    id: 2415,
    country_id: 909440,
    name: 'Kampot',
  },
  {
    id: 2416,
    country_id: 4125,
    name: 'Kamuli',
  },
  {
    id: 2417,
    country_id: 32396817,
    name: 'Prilep',
  },
  {
    id: 2418,
    country_id: 43444,
    name: 'Kandahar',
  },
  {
    id: 2419,
    country_id: 7830,
    name: 'Alibori',
  },
  {
    id: 2420,
    country_id: 200,
    name: 'Matam',
  },
  {
    id: 2421,
    country_id: 1179,
    name: "Murang'a",
  },
  {
    id: 2422,
    country_id: 911987,
    name: 'Trashigang',
  },
  {
    id: 2423,
    country_id: 1703,
    name: 'Kankan',
  },
  {
    id: 2424,
    country_id: 716,
    name: 'Kano',
  },
  {
    id: 2425,
    country_id: 213370,
    name: 'Kaohsiung',
  },
  {
    id: 2426,
    country_id: 200,
    name: 'Kaolack',
  },
  {
    id: 2427,
    country_id: 49477,
    name: 'Pattani',
  },
  {
    id: 2428,
    country_id: 1179,
    name: 'Nandi',
  },
  {
    id: 2429,
    country_id: 49438,
    name: 'Osh',
  },
  {
    id: 2430,
    country_id: 227,
    name: 'Ingushetiya, Respublika',
  },
  {
    id: 2431,
    country_id: 153732,
    name: 'Puducherry',
  },
  {
    id: 2432,
    country_id: 488,
    name: 'Alborz',
  },
  {
    id: 2433,
    country_id: 5790,
    name: 'Karas',
  },
  {
    id: 2434,
    country_id: 32396817,
    name: 'Karbinci',
  },
  {
    id: 2435,
    country_id: 2405,
    name: 'Hiiumaa',
  },
  {
    id: 2436,
    country_id: 748,
    name: 'Ludzas novads',
  },
  {
    id: 2437,
    country_id: 1179,
    name: 'Kiambu',
  },
  {
    id: 2438,
    country_id: 191038,
    name: 'North West',
  },
  {
    id: 2439,
    country_id: 2568,
    name: 'North-Western',
  },
  {
    id: 2440,
    country_id: 4125,
    name: 'Kasese',
  },
  {
    id: 2441,
    country_id: 1439,
    name: 'Kasserine',
  },
  {
    id: 2442,
    country_id: 35210,
    name: 'Kigoma',
  },
  {
    id: 2443,
    country_id: 5790,
    name: 'Zambezi',
  },
  {
    id: 2444,
    country_id: 716,
    name: 'Benue',
  },
  {
    id: 2445,
    country_id: 32396817,
    name: 'Kavadarci',
  },
  {
    id: 2446,
    country_id: 2454,
    name: 'Tirane',
  },
  {
    id: 2447,
    country_id: 55408,
    name: 'New Ireland',
  },
  {
    id: 2448,
    country_id: 2568,
    name: 'Luapula',
  },
  {
    id: 2449,
    country_id: 607,
    name: 'Sanmatenga',
  },
  {
    id: 2450,
    country_id: 4125,
    name: 'Kayunga',
  },
  {
    id: 2451,
    country_id: 213370,
    name: 'Keelung',
  },
  {
    id: 2452,
    country_id: 1179,
    name: 'Migori',
  },
  {
    id: 2453,
    country_id: 88407,
    name: 'Sulawesi Tenggara',
  },
  {
    id: 2454,
    country_id: 2756,
    name: 'Kercem',
  },
  {
    id: 2455,
    country_id: 1179,
    name: 'Kericho',
  },
  {
    id: 2456,
    country_id: 224,
    name: 'Sliven',
  },
  {
    id: 2457,
    country_id: 1179,
    name: 'Nyamira',
  },
  {
    id: 2458,
    country_id: 1179,
    name: 'Kirinyaga',
  },
  {
    id: 2459,
    country_id: 49477,
    name: 'Mukdahan',
  },
  {
    id: 2460,
    country_id: 3677,
    name: 'Al Qunaytirah',
  },
  {
    id: 2461,
    country_id: 119,
    name: 'Imereti',
  },
  {
    id: 2462,
    country_id: 56518,
    name: 'Khartoum',
  },
  {
    id: 2463,
    country_id: 614,
    name: 'Khenchela',
  },
  {
    id: 2464,
    country_id: 227,
    name: 'Moskva',
  },
  {
    id: 2465,
    country_id: 49477,
    name: 'Yasothon',
  },
  {
    id: 2466,
    country_id: 5790,
    name: 'Kunene',
  },
  {
    id: 2467,
    country_id: 57160,
    name: 'Kuhistoni Badakhshon',
  },
  {
    id: 2468,
    country_id: 43444,
    name: 'Khost',
  },
  {
    id: 2469,
    country_id: 49477,
    name: 'Satun',
  },
  {
    id: 2470,
    country_id: 4125,
    name: 'Kiboga',
  },
  {
    id: 2471,
    country_id: 32396817,
    name: 'Kicevo',
  },
  {
    id: 2472,
    country_id: 26,
    name: 'Kidal',
  },
  {
    id: 2473,
    country_id: 35210,
    name: 'Morogoro',
  },
  {
    id: 2474,
    country_id: 1638,
    name: 'Kidricevo',
  },
  {
    id: 2475,
    country_id: 86,
    name: 'Kyiv',
  },
  {
    id: 2476,
    country_id: 88137,
    name: 'Ville de Kigali',
  },
  {
    id: 2477,
    country_id: 1179,
    name: 'Nakuru',
  },
  {
    id: 2478,
    country_id: 1179,
    name: 'Kilifi',
  },
  {
    id: 2479,
    country_id: 2405,
    name: 'Parnumaa',
  },
  {
    id: 2480,
    country_id: 2453,
    name: 'Xizi',
  },
  {
    id: 2481,
    country_id: 55408,
    name: 'West New Britain',
  },
  {
    id: 2482,
    country_id: 1320,
    name: 'Maniema',
  },
  {
    id: 2483,
    country_id: 1640,
    name: 'Kingston',
  },
  {
    id: 2484,
    country_id: 1320,
    name: 'Kinshasa',
  },
  {
    id: 2485,
    country_id: 2756,
    name: 'Kirkop',
  },
  {
    id: 2486,
    country_id: 107,
    name: 'Kirkuk',
  },
  {
    id: 2487,
    country_id: 821,
    name: 'Kirundo',
  },
  {
    id: 2488,
    country_id: 1320,
    name: 'Tshopo',
  },
  {
    id: 2489,
    country_id: 1179,
    name: 'Kisii',
  },
  {
    id: 2490,
    country_id: 1703,
    name: 'Kissidougou',
  },
  {
    id: 2491,
    country_id: 1179,
    name: 'Trans Nzoia',
  },
  {
    id: 2492,
    country_id: 4125,
    name: 'Buvuma',
  },
  {
    id: 2493,
    country_id: 35210,
    name: 'Mtwara',
  },
  {
    id: 2494,
    country_id: 4125,
    name: 'Kitgum',
  },
  {
    id: 2495,
    country_id: 1179,
    name: 'Kitui',
  },
  {
    id: 2496,
    country_id: 2154,
    name: 'Nordoyar',
  },
  {
    id: 2497,
    country_id: 296,
    name: 'Pecki okrug',
  },
  {
    id: 2498,
    country_id: 296,
    name: 'Zajecarski okrug',
  },
  {
    id: 2499,
    country_id: 35210,
    name: 'Kusini Unguja',
  },
  {
    id: 2500,
    country_id: 1638,
    name: 'Kobarid',
  },
  {
    id: 2501,
    country_id: 1638,
    name: 'Kobilje',
  },
  {
    id: 2502,
    country_id: 1638,
    name: 'Kocevje',
  },
  {
    id: 2503,
    country_id: 32396817,
    name: 'Kocani',
  },
  {
    id: 2504,
    country_id: 153732,
    name: 'Nagaland',
  },
  {
    id: 2505,
    country_id: 748,
    name: 'Kokneses novads',
  },
  {
    id: 2506,
    country_id: 55408,
    name: 'East New Britain',
  },
  {
    id: 2507,
    country_id: 1638,
    name: 'Preddvor',
  },
  {
    id: 2509,
    country_id: 200,
    name: 'Kolda',
  },
  {
    id: 2510,
    country_id: 227,
    name: 'Sankt-Peterburg',
  },
  {
    id: 2511,
    country_id: 1638,
    name: 'Lukovica',
  },
  {
    id: 2512,
    country_id: 69697,
    name: 'Binh Thuan',
  },
  {
    id: 2513,
    country_id: 2454,
    name: 'Shkoder',
  },
  {
    id: 2514,
    country_id: 32396817,
    name: 'Ohrid',
  },
  {
    id: 2515,
    country_id: 56518,
    name: 'White Nile',
  },
  {
    id: 2516,
    country_id: 1638,
    name: 'Ravne na Koroskem',
  },
  {
    id: 2517,
    country_id: 607,
    name: 'Boulkiemde',
  },
  {
    id: 2518,
    country_id: 1703,
    name: 'Kouroussa',
  },
  {
    id: 2519,
    country_id: 593,
    name: 'Extreme-Nord',
  },
  {
    id: 2520,
    country_id: 26,
    name: 'Sikasso',
  },
  {
    id: 2521,
    country_id: 227,
    name: 'Mariy El, Respublika',
  },
  {
    id: 2522,
    country_id: 49477,
    name: 'Ranong',
  },
  {
    id: 2523,
    country_id: 296,
    name: 'Raski okrug',
  },
  {
    id: 2524,
    country_id: 1638,
    name: 'Kranjska Gora',
  },
  {
    id: 2525,
    country_id: 909440,
    name: 'Kracheh',
  },
  {
    id: 2526,
    country_id: 32396817,
    name: 'Kratovo',
  },
  {
    id: 2527,
    country_id: 1638,
    name: 'Moravce',
  },
  {
    id: 2528,
    country_id: 32396817,
    name: 'Kriva Palanka',
  },
  {
    id: 2529,
    country_id: 1638,
    name: 'Nova Gorica',
  },
  {
    id: 2530,
    country_id: 909440,
    name: 'Kaoh Kong',
  },
  {
    id: 2531,
    country_id: 909440,
    name: 'Krong Kaeb',
  },
  {
    id: 2532,
    country_id: 1638,
    name: 'Krsko',
  },
  {
    id: 2533,
    country_id: 296,
    name: 'Rasinski okrug',
  },
  {
    id: 2534,
    country_id: 32396817,
    name: 'Krusevo',
  },
  {
    id: 2535,
    country_id: 913469,
    name: 'Belait',
  },
  {
    id: 2536,
    country_id: 88407,
    name: 'Kalimantan Tengah',
  },
  {
    id: 2537,
    country_id: 201580,
    name: 'Dhaalu',
  },
  {
    id: 2538,
    country_id: 2454,
    name: 'Kukes',
  },
  {
    id: 2539,
    country_id: 32396817,
    name: 'Strumica',
  },
  {
    id: 2540,
    country_id: 748,
    name: 'Kuldigas novads',
  },
  {
    id: 2541,
    country_id: 201580,
    name: 'Haa Dhaalu',
  },
  {
    id: 2542,
    country_id: 4125,
    name: 'Kumi',
  },
  {
    id: 2543,
    country_id: 55408,
    name: 'Chimbu',
  },
  {
    id: 2544,
    country_id: 43444,
    name: 'Kunduz',
  },
  {
    id: 2545,
    country_id: 1638,
    name: 'Majsperk',
  },
  {
    id: 2546,
    country_id: 479,
    name: 'Tottori',
  },
  {
    id: 2547,
    country_id: 2454,
    name: 'Lezhe',
  },
  {
    id: 2548,
    country_id: 2405,
    name: 'Saaremaa',
  },
  {
    id: 2549,
    country_id: 1638,
    name: 'Kuzma',
  },
  {
    id: 2550,
    country_id: 32533155,
    name: 'Manzini',
  },
  {
    id: 2551,
    country_id: 712,
    name: 'Gwangju-gwangyeoksi',
  },
  {
    id: 2552,
    country_id: 2453,
    name: 'Gadabay',
  },
  {
    id: 2553,
    country_id: 870933,
    name: 'Mandalay',
  },
  {
    id: 2554,
    country_id: 35210,
    name: 'Mbeya',
  },
  {
    id: 2555,
    country_id: 4125,
    name: 'Kyenjojo',
  },
  {
    id: 2556,
    country_id: 116,
    name: 'Lemesos',
  },
  {
    id: 2557,
    country_id: 116,
    name: 'Keryneia',
  },
  {
    id: 2558,
    country_id: 2756,
    name: 'Iklin',
  },
  {
    id: 2559,
    country_id: 75285,
    name: 'La Condamine',
  },
  {
    id: 2560,
    country_id: 77580,
    name: 'Rio Grande',
  },
  {
    id: 2561,
    country_id: 1176,
    name: 'Ocotepeque',
  },
  {
    id: 2562,
    country_id: 275,
    name: 'Tachira',
  },
  {
    id: 2563,
    country_id: 459,
    name: 'Cotopaxi',
  },
  {
    id: 2564,
    country_id: 77580,
    name: 'Lajas',
  },
  {
    id: 2565,
    country_id: 3990,
    name: 'Leon',
  },
  {
    id: 2566,
    country_id: 353,
    name: 'Vichada',
  },
  {
    id: 2567,
    country_id: 79146,
    name: 'La Romana',
  },
  {
    id: 2568,
    country_id: 1703,
    name: 'Labe',
  },
  {
    id: 2569,
    country_id: 12095,
    name: 'Laborie',
  },
  {
    id: 2570,
    country_id: 55408,
    name: 'Morobe',
  },
  {
    id: 2571,
    country_id: 862868,
    name: 'Sagarmatha',
  },
  {
    id: 2572,
    country_id: 869895,
    name: 'Xekong',
  },
  {
    id: 2573,
    country_id: 3662,
    name: 'Moyen-Ogooue',
  },
  {
    id: 2574,
    country_id: 1179,
    name: 'Lamu',
  },
  {
    id: 2575,
    country_id: 1638,
    name: 'Videm',
  },
  {
    id: 2576,
    country_id: 69697,
    name: 'Lang Son',
  },
  {
    id: 2577,
    country_id: 2453,
    name: 'Lankaran',
  },
  {
    id: 2578,
    country_id: 69697,
    name: 'Lao Cai',
  },
  {
    id: 2579,
    country_id: 50809,
    name: 'Siquijor',
  },
  {
    id: 2580,
    country_id: 77580,
    name: 'Lares',
  },
  {
    id: 2581,
    country_id: 77580,
    name: 'Las Marias',
  },
  {
    id: 2582,
    country_id: 77580,
    name: 'Las Piedras',
  },
  {
    id: 2583,
    country_id: 79146,
    name: 'Samana',
  },
  {
    id: 2584,
    country_id: 63604,
    name: 'Las Tunas',
  },
  {
    id: 2585,
    country_id: 870933,
    name: 'Shan',
  },
  {
    id: 2586,
    country_id: 1638,
    name: 'Lasko',
  },
  {
    id: 2587,
    country_id: 2228,
    name: 'San Juan-Laventille',
  },
  {
    id: 2588,
    country_id: 2088,
    name: 'Wanica',
  },
  {
    id: 2589,
    country_id: 1638,
    name: 'Lenart',
  },
  {
    id: 2590,
    country_id: 1638,
    name: 'Lendava',
  },
  {
    id: 2591,
    country_id: 2931,
    name: 'Escaldes-Engordany',
  },
  {
    id: 2592,
    country_id: 1638,
    name: 'Radovljica',
  },
  {
    id: 2593,
    country_id: 296,
    name: 'Jablanicki okrug',
  },
  {
    id: 2594,
    country_id: 191038,
    name: 'Kweneng',
  },
  {
    id: 2595,
    country_id: 911987,
    name: 'Lhuentse',
  },
  {
    id: 2596,
    country_id: 1320,
    name: 'Sud-Ubangi',
  },
  {
    id: 2597,
    country_id: 137919,
    name: 'Saint Paul',
  },
  {
    id: 2598,
    country_id: 3662,
    name: 'Estuaire',
  },
  {
    id: 2599,
    country_id: 6783,
    name: 'Niassa',
  },
  {
    id: 2600,
    country_id: 748,
    name: 'Lielvardes novads',
  },
  {
    id: 2601,
    country_id: 2756,
    name: 'Lija',
  },
  {
    id: 2602,
    country_id: 20802,
    name: 'Lilongwe',
  },
  {
    id: 2603,
    country_id: 748,
    name: 'Limbazu novads',
  },
  {
    id: 2604,
    country_id: 1640,
    name: 'Clarendon',
  },
  {
    id: 2605,
    country_id: 1638,
    name: 'Vransko',
  },
  {
    id: 2606,
    country_id: 1985,
    name: 'Upper Demerara-Berbice',
  },
  {
    id: 2607,
    country_id: 35210,
    name: 'Lindi',
  },
  {
    id: 2608,
    country_id: 1638,
    name: 'Beltinci',
  },
  {
    id: 2609,
    country_id: 4125,
    name: 'Lira',
  },
  {
    id: 2610,
    country_id: 32396817,
    name: 'Plasnica',
  },
  {
    id: 2611,
    country_id: 1638,
    name: 'Litija',
  },
  {
    id: 2612,
    country_id: 35210,
    name: 'Ruvuma',
  },
  {
    id: 2613,
    country_id: 748,
    name: 'Preilu novads',
  },
  {
    id: 2614,
    country_id: 1638,
    name: 'Ljubljana',
  },
  {
    id: 2615,
    country_id: 1638,
    name: 'Ljutomer',
  },
  {
    id: 2616,
    country_id: 32533155,
    name: 'Hhohho',
  },
  {
    id: 2617,
    country_id: 1179,
    name: 'Turkana',
  },
  {
    id: 2618,
    country_id: 1638,
    name: 'Logatec',
  },
  {
    id: 2619,
    country_id: 77580,
    name: 'Loiza',
  },
  {
    id: 2620,
    country_id: 748,
    name: 'Sejas novads',
  },
  {
    id: 2621,
    country_id: 32396817,
    name: 'Lipkovo',
  },
  {
    id: 2622,
    country_id: 7830,
    name: 'Mono',
  },
  {
    id: 2623,
    country_id: 3039,
    name: 'Maritime',
  },
  {
    id: 2624,
    country_id: 50809,
    name: 'Biliran',
  },
  {
    id: 2625,
    country_id: 55408,
    name: 'Manus',
  },
  {
    id: 2626,
    country_id: 50809,
    name: 'Surigao del Norte',
  },
  {
    id: 2627,
    country_id: 79146,
    name: 'San Pedro de Macoris',
  },
  {
    id: 2628,
    country_id: 200,
    name: 'Louga',
  },
  {
    id: 2629,
    country_id: 1638,
    name: 'Lovrenc na Pohorju',
  },
  {
    id: 2630,
    country_id: 32396817,
    name: 'Lozovo',
  },
  {
    id: 2631,
    country_id: 911,
    name: 'Luanda',
  },
  {
    id: 2632,
    country_id: 869895,
    name: 'Louang Namtha',
  },
  {
    id: 2633,
    country_id: 869895,
    name: 'Louangphabang',
  },
  {
    id: 2634,
    country_id: 911,
    name: 'Moxico',
  },
  {
    id: 2635,
    country_id: 211975,
    name: 'Bioko Sur',
  },
  {
    id: 2636,
    country_id: 748,
    name: 'Lubanas novads',
  },
  {
    id: 2637,
    country_id: 1320,
    name: 'Haut-Katanga',
  },
  {
    id: 2638,
    country_id: 911,
    name: 'Lunda Norte',
  },
  {
    id: 2639,
    country_id: 160047,
    name: 'Saint John Capisterre',
  },
  {
    id: 2640,
    country_id: 1640,
    name: 'Hanover',
  },
  {
    id: 2641,
    country_id: 1638,
    name: 'Piran',
  },
  {
    id: 2642,
    country_id: 213370,
    name: 'Nantou',
  },
  {
    id: 2643,
    country_id: 1179,
    name: 'Busia',
  },
  {
    id: 2644,
    country_id: 2756,
    name: 'Luqa',
  },
  {
    id: 2645,
    country_id: 77580,
    name: 'Luquillo',
  },
  {
    id: 2646,
    country_id: 4125,
    name: 'Luwero',
  },
  {
    id: 2647,
    country_id: 886,
    name: 'Al Uqsur',
  },
  {
    id: 2648,
    country_id: 5,
    name: 'Amapa',
  },
  {
    id: 2649,
    country_id: 453172,
    name: 'Macao',
  },
  {
    id: 2650,
    country_id: 1703,
    name: 'Macenta',
  },
  {
    id: 2651,
    country_id: 97374,
    name: 'Madaba',
  },
  {
    id: 2652,
    country_id: 55408,
    name: 'Madang',
  },
  {
    id: 2653,
    country_id: 201580,
    name: 'Meemu',
  },
  {
    id: 2654,
    country_id: 190321,
    name: 'Ash Shamaliyah',
  },
  {
    id: 2655,
    country_id: 748,
    name: 'Madonas novads',
  },
  {
    id: 2656,
    country_id: 213370,
    name: 'Penghu',
  },
  {
    id: 2657,
    country_id: 870933,
    name: 'Magway',
  },
  {
    id: 2658,
    country_id: 1646,
    name: 'Mahajanga',
  },
  {
    id: 2659,
    country_id: 201580,
    name: 'Alifu Alifu',
  },
  {
    id: 2660,
    country_id: 716,
    name: 'Borno',
  },
  {
    id: 2661,
    country_id: 20802,
    name: 'Machinga',
  },
  {
    id: 2662,
    country_id: 32396817,
    name: 'Makedonska Kamenica',
  },
  {
    id: 2663,
    country_id: 3662,
    name: 'Ogooue-Ivindo',
  },
  {
    id: 2664,
    country_id: 1179,
    name: 'Makueni',
  },
  {
    id: 2665,
    country_id: 35210,
    name: 'Njombe',
  },
  {
    id: 2666,
    country_id: 211975,
    name: 'Bioko Norte',
  },
  {
    id: 2667,
    country_id: 190318,
    name: "Al Bayda'",
  },
  {
    id: 2668,
    country_id: 190317,
    name: 'Upper Nile',
  },
  {
    id: 2669,
    country_id: 911,
    name: 'Malange',
  },
  {
    id: 2670,
    country_id: 201580,
    name: 'Maale',
  },
  {
    id: 2671,
    country_id: 748,
    name: 'Malpils novads',
  },
  {
    id: 2672,
    country_id: 35210,
    name: 'Mwanza',
  },
  {
    id: 2673,
    country_id: 50809,
    name: 'Camiguin',
  },
  {
    id: 2674,
    country_id: 4829,
    name: 'Mamoudzou',
  },
  {
    id: 2675,
    country_id: 201580,
    name: 'Noonu',
  },
  {
    id: 2676,
    country_id: 77580,
    name: 'Manati',
  },
  {
    id: 2677,
    country_id: 1640,
    name: 'Portland',
  },
  {
    id: 2678,
    country_id: 1179,
    name: 'Mandera',
  },
  {
    id: 2679,
    country_id: 1640,
    name: 'Manchester',
  },
  {
    id: 2680,
    country_id: 607,
    name: 'Zoundweogo',
  },
  {
    id: 2681,
    country_id: 88407,
    name: 'Kepulauan Bangka Belitung',
  },
  {
    id: 2682,
    country_id: 910036,
    name: 'Mangilao',
  },
  {
    id: 2683,
    country_id: 20802,
    name: 'Mangochi',
  },
  {
    id: 2684,
    country_id: 88407,
    name: 'Kalimantan Barat',
  },
  {
    id: 2685,
    country_id: 23,
    name: 'Woroba',
  },
  {
    id: 2686,
    country_id: 88407,
    name: 'Papua Barat',
  },
  {
    id: 2687,
    country_id: 6783,
    name: 'Maputo',
  },
  {
    id: 2688,
    country_id: 482134,
    name: 'Leribe',
  },
  {
    id: 2689,
    country_id: 2228,
    name: 'San Fernando',
  },
  {
    id: 2690,
    country_id: 65053,
    name: 'Maradi',
  },
  {
    id: 2691,
    country_id: 77580,
    name: 'Maricao',
  },
  {
    id: 2692,
    country_id: 2756,
    name: 'Marsa',
  },
  {
    id: 2693,
    country_id: 1179,
    name: 'Marsabit',
  },
  {
    id: 2694,
    country_id: 2756,
    name: 'Marsaxlokk',
  },
  {
    id: 2695,
    country_id: 4125,
    name: 'Masaka',
  },
  {
    id: 2696,
    country_id: 3990,
    name: 'Masaya',
  },
  {
    id: 2697,
    country_id: 482134,
    name: 'Maseru',
  },
  {
    id: 2698,
    country_id: 1320,
    name: 'Kasai Central',
  },
  {
    id: 2699,
    country_id: 275,
    name: 'Monagas',
  },
  {
    id: 2700,
    country_id: 21795,
    name: 'Mauren',
  },
  {
    id: 2701,
    country_id: 870933,
    name: 'Sagaing',
  },
  {
    id: 2702,
    country_id: 870933,
    name: 'Mon',
  },
  {
    id: 2703,
    country_id: 77580,
    name: 'Mayaguez',
  },
  {
    id: 2704,
    country_id: 43444,
    name: 'Faryab',
  },
  {
    id: 2705,
    country_id: 4125,
    name: 'Mayuge',
  },
  {
    id: 2706,
    country_id: 43444,
    name: 'Balkh',
  },
  {
    id: 2707,
    country_id: 2079,
    name: 'Telsiu apskritis',
  },
  {
    id: 2708,
    country_id: 748,
    name: 'Valmiera',
  },
  {
    id: 2709,
    country_id: 200,
    name: 'Diourbel',
  },
  {
    id: 2710,
    country_id: 4125,
    name: 'Mbale',
  },
  {
    id: 2711,
    country_id: 4125,
    name: 'Mbarara',
  },
  {
    id: 2712,
    country_id: 1320,
    name: 'Kasai Oriental',
  },
  {
    id: 2713,
    country_id: 1638,
    name: 'Medvode',
  },
  {
    id: 2714,
    country_id: 201580,
    name: 'Seenu',
  },
  {
    id: 2715,
    country_id: 200,
    name: 'Thies',
  },
  {
    id: 2716,
    country_id: 32,
    name: 'Melilla',
  },
  {
    id: 2717,
    country_id: 2756,
    name: 'Mellieha',
  },
  {
    id: 2718,
    country_id: 158,
    name: 'Cerro Largo',
  },
  {
    id: 2719,
    country_id: 55408,
    name: 'Southern Highlands',
  },
  {
    id: 2720,
    country_id: 44,
    name: 'Mendoza',
  },
  {
    id: 2721,
    country_id: 1638,
    name: 'Menges',
  },
  {
    id: 2722,
    country_id: 911,
    name: 'Kuando Kubango',
  },
  {
    id: 2723,
    country_id: 119,
    name: 'Guria',
  },
  {
    id: 2724,
    country_id: 748,
    name: 'Talsu novads',
  },
  {
    id: 2725,
    country_id: 1179,
    name: 'Meru',
  },
  {
    id: 2726,
    country_id: 1638,
    name: 'Metlika',
  },
  {
    id: 2727,
    country_id: 1638,
    name: 'Mezica',
  },
  {
    id: 2728,
    country_id: 32533155,
    name: 'Lubombo',
  },
  {
    id: 2729,
    country_id: 213370,
    name: 'Miaoli',
  },
  {
    id: 2730,
    country_id: 12095,
    name: 'Micoud',
  },
  {
    id: 2731,
    country_id: 1638,
    name: 'Miklavz na Dravskem Polju',
  },
  {
    id: 2732,
    country_id: 158,
    name: 'Rivera',
  },
  {
    id: 2733,
    country_id: 772,
    name: 'Sao Vicente',
  },
  {
    id: 2734,
    country_id: 2345,
    name: 'Telenesti',
  },
  {
    id: 2735,
    country_id: 2453,
    name: 'Mingacevir',
  },
  {
    id: 2736,
    country_id: 1638,
    name: 'Trebnje',
  },
  {
    id: 2737,
    country_id: 908860,
    name: 'Grand Anse Mahe',
  },
  {
    id: 2738,
    country_id: 1638,
    name: 'Mislinja',
  },
  {
    id: 2739,
    country_id: 4125,
    name: 'Mityana',
  },
  {
    id: 2740,
    country_id: 77580,
    name: 'Moca',
  },
  {
    id: 2741,
    country_id: 7563,
    name: 'Banaadir',
  },
  {
    id: 2742,
    country_id: 1179,
    name: 'Mombasa',
  },
  {
    id: 2743,
    country_id: 53128,
    name: 'Totonicapan',
  },
  {
    id: 2744,
    country_id: 75285,
    name: 'Monaco-Ville',
  },
  {
    id: 2745,
    country_id: 79146,
    name: 'Santiago Rodriguez',
  },
  {
    id: 2746,
    country_id: 911987,
    name: 'Monggar',
  },
  {
    id: 2747,
    country_id: 910036,
    name: 'Mongmong-Toto-Maite',
  },
  {
    id: 2748,
    country_id: 98799,
    name: 'Guera',
  },
  {
    id: 2749,
    country_id: 75285,
    name: 'Monte-Carlo',
  },
  {
    id: 2750,
    country_id: 158,
    name: 'Montevideo',
  },
  {
    id: 2751,
    country_id: 35210,
    name: 'Kilimanjaro',
  },
  {
    id: 2752,
    country_id: 2756,
    name: 'Mosta',
  },
  {
    id: 2753,
    country_id: 614,
    name: 'Mostaganem',
  },
  {
    id: 2754,
    country_id: 3662,
    name: 'Ngounie',
  },
  {
    id: 2755,
    country_id: 98799,
    name: 'Logone-Occidental',
  },
  {
    id: 2756,
    country_id: 55408,
    name: 'Western Highlands',
  },
  {
    id: 2757,
    country_id: 1638,
    name: 'Mozirje',
  },
  {
    id: 2758,
    country_id: 35210,
    name: 'Rukwa',
  },
  {
    id: 2759,
    country_id: 4125,
    name: 'Mpigi',
  },
  {
    id: 2760,
    country_id: 2756,
    name: 'Mqabba',
  },
  {
    id: 2761,
    country_id: 2756,
    name: 'Msida',
  },
  {
    id: 2762,
    country_id: 35210,
    name: 'Kusini Pemba',
  },
  {
    id: 2763,
    country_id: 4829,
    name: 'Mtsamboro',
  },
  {
    id: 2764,
    country_id: 869895,
    name: 'Khammouan',
  },
  {
    id: 2765,
    country_id: 869895,
    name: 'Viangchan',
  },
  {
    id: 2766,
    country_id: 2426,
    name: 'Qashqadaryo',
  },
  {
    id: 2767,
    country_id: 190318,
    name: "Ma'rib",
  },
  {
    id: 2768,
    country_id: 190318,
    name: 'Abyan',
  },
  {
    id: 2769,
    country_id: 35210,
    name: 'Mara',
  },
  {
    id: 2770,
    country_id: 459,
    name: 'Esmeraldas',
  },
  {
    id: 2771,
    country_id: 4125,
    name: 'Mukono',
  },
  {
    id: 2772,
    country_id: 748,
    name: 'Beverinas novads',
  },
  {
    id: 2773,
    country_id: 1638,
    name: 'Murska Sobota',
  },
  {
    id: 2774,
    country_id: 16175,
    name: 'Murzuq',
  },
  {
    id: 2775,
    country_id: 7091,
    name: 'Masqat',
  },
  {
    id: 2776,
    country_id: 1638,
    name: 'Muta',
  },
  {
    id: 2777,
    country_id: 821,
    name: 'Muyinga',
  },
  {
    id: 2778,
    country_id: 2426,
    name: "Qoraqalpog'iston Respublikasi",
  },
  {
    id: 2779,
    country_id: 821,
    name: 'Mwaro',
  },
  {
    id: 2780,
    country_id: 4125,
    name: 'Kiruhura',
  },
  {
    id: 2781,
    country_id: 69697,
    name: 'Tien Giang',
  },
  {
    id: 2782,
    country_id: 401,
    name: 'Trenciansky kraj',
  },
  {
    id: 2783,
    country_id: 20802,
    name: 'Mzimba',
  },
  {
    id: 2784,
    country_id: 911,
    name: 'Kwanza Norte',
  },
  {
    id: 2785,
    country_id: 49477,
    name: 'Nong Bua Lam Phu',
  },
  {
    id: 2786,
    country_id: 1638,
    name: 'Sveta Trojica v Slovenskih Goricah',
  },
  {
    id: 2788,
    country_id: 2756,
    name: 'Nadur',
  },
  {
    id: 2789,
    country_id: 2453,
    name: 'Naftalan',
  },
  {
    id: 2790,
    country_id: 77580,
    name: 'Naguabo',
  },
  {
    id: 2791,
    country_id: 53128,
    name: 'Solola',
  },
  {
    id: 2792,
    country_id: 201580,
    name: 'Kaafu',
  },
  {
    id: 2793,
    country_id: 1179,
    name: 'Nairobi City',
  },
  {
    id: 2794,
    country_id: 35376,
    name: 'Najran',
  },
  {
    id: 2795,
    country_id: 4125,
    name: 'Nakaseke',
  },
  {
    id: 2796,
    country_id: 2453,
    name: 'Naxcivan',
  },
  {
    id: 2797,
    country_id: 1638,
    name: 'Naklo',
  },
  {
    id: 2798,
    country_id: 16175,
    name: 'Nalut',
  },
  {
    id: 2799,
    country_id: 69697,
    name: 'Nam Dinh',
  },
  {
    id: 2800,
    country_id: 911,
    name: 'Namibe',
  },
  {
    id: 2801,
    country_id: 213370,
    name: 'Lienchiang',
  },
  {
    id: 2802,
    country_id: 1179,
    name: 'Laikipia',
  },
  {
    id: 2803,
    country_id: 77580,
    name: 'Naranjito',
  },
  {
    id: 2804,
    country_id: 1179,
    name: 'Narok',
  },
  {
    id: 2805,
    country_id: 80919,
    name: 'New Providence',
  },
  {
    id: 2806,
    country_id: 7830,
    name: 'Atacora',
  },
  {
    id: 2807,
    country_id: 2756,
    name: 'Naxxar',
  },
  {
    id: 2808,
    country_id: 870933,
    name: 'Nay Pyi Taw',
  },
  {
    id: 2809,
    country_id: 200,
    name: 'Saint-Louis',
  },
  {
    id: 2810,
    country_id: 2453,
    name: 'Neftcala',
  },
  {
    id: 2811,
    country_id: 32396817,
    name: 'Negotino',
  },
  {
    id: 2812,
    country_id: 2817,
    name: 'Nelson',
  },
  {
    id: 2813,
    country_id: 1985,
    name: 'East Berbice-Corentyne',
  },
  {
    id: 2814,
    country_id: 160047,
    name: 'Saint James Windward',
  },
  {
    id: 2815,
    country_id: 160047,
    name: 'Saint Paul Capisterre',
  },
  {
    id: 2816,
    country_id: 593,
    name: 'Adamaoua',
  },
  {
    id: 2817,
    country_id: 821,
    name: 'Ngozi',
  },
  {
    id: 2818,
    country_id: 65053,
    name: 'Niamey',
  },
  {
    id: 2819,
    country_id: 2088,
    name: 'Commewijne',
  },
  {
    id: 2820,
    country_id: 2088,
    name: 'Nickerie',
  },
  {
    id: 2822,
    country_id: 69697,
    name: 'Ninh Binh',
  },
  {
    id: 2823,
    country_id: 296,
    name: 'Nisavski okrug',
  },
  {
    id: 2824,
    country_id: 2345,
    name: 'Nisporeni',
  },
  {
    id: 2825,
    country_id: 2493,
    name: 'Dakhlet Nouadhibou',
  },
  {
    id: 2826,
    country_id: 2493,
    name: 'Nouakchott Nord',
  },
  {
    id: 2827,
    country_id: 1638,
    name: 'Sveti Andraz v Slovenskih Goricah',
  },
  {
    id: 2828,
    country_id: 1638,
    name: 'Novo Mesto',
  },
  {
    id: 2829,
    country_id: 32396817,
    name: 'Novo Selo',
  },
  {
    id: 2830,
    country_id: 20802,
    name: 'Ntchisi',
  },
  {
    id: 2831,
    country_id: 459,
    name: 'Sucumbios',
  },
  {
    id: 2832,
    country_id: 909585,
    name: 'Tongatapu',
  },
  {
    id: 2833,
    country_id: 2427,
    name: 'Astana',
  },
  {
    id: 2834,
    country_id: 56518,
    name: 'South Darfur',
  },
  {
    id: 2835,
    country_id: 870933,
    name: 'Ayeyarwady',
  },
  {
    id: 2836,
    country_id: 1179,
    name: 'Nyeri',
  },
  {
    id: 2837,
    country_id: 35210,
    name: 'Tabora',
  },
  {
    id: 2838,
    country_id: 1703,
    name: 'Nzerekore',
  },
  {
    id: 2839,
    country_id: 32396817,
    name: 'Cesinovo-Oblesevo',
  },
  {
    id: 2840,
    country_id: 32396817,
    name: 'Krivogastani',
  },
  {
    id: 2841,
    country_id: 2345,
    name: 'Ocnita',
  },
  {
    id: 2842,
    country_id: 3990,
    name: 'Nueva Segovia',
  },
  {
    id: 2843,
    country_id: 23,
    name: 'Denguele',
  },
  {
    id: 2844,
    country_id: 1638,
    name: 'Odranci',
  },
  {
    id: 2845,
    country_id: 32396817,
    name: 'Petrovec',
  },
  {
    id: 2846,
    country_id: 748,
    name: 'Erglu novads',
  },
  {
    id: 2847,
    country_id: 716,
    name: 'Imo',
  },
  {
    id: 2848,
    country_id: 2453,
    name: 'Oguz',
  },
  {
    id: 2849,
    country_id: 33497,
    name: 'Christ Church',
  },
  {
    id: 2850,
    country_id: 32396817,
    name: 'Vevcani',
  },
  {
    id: 2851,
    country_id: 748,
    name: 'Olaines novads',
  },
  {
    id: 2852,
    country_id: 224,
    name: 'Targovishte',
  },
  {
    id: 2853,
    country_id: 5790,
    name: 'Oshana',
  },
  {
    id: 2854,
    country_id: 911,
    name: 'Cunene',
  },
  {
    id: 2855,
    country_id: 5790,
    name: 'Omusati',
  },
  {
    id: 2856,
    country_id: 909526,
    name: 'Ovorhangay',
  },
  {
    id: 2857,
    country_id: 1638,
    name: 'Oplotnica',
  },
  {
    id: 2858,
    country_id: 144816,
    name: 'Orange Walk',
  },
  {
    id: 2859,
    country_id: 47329,
    name: 'Sint Eustatius',
  },
  {
    id: 2860,
    country_id: 2453,
    name: 'Beylaqan',
  },
  {
    id: 2861,
    country_id: 909526,
    name: 'Tov',
  },
  {
    id: 2862,
    country_id: 2345,
    name: 'Orhei',
  },
  {
    id: 2863,
    country_id: 1638,
    name: 'Ormoz',
  },
  {
    id: 2864,
    country_id: 10203129,
    name: 'Cova Lima',
  },
  {
    id: 2865,
    country_id: 5790,
    name: 'Ohangwena',
  },
  {
    id: 2866,
    country_id: 1578,
    name: 'Oslo',
  },
  {
    id: 2867,
    country_id: 79146,
    name: 'La Altagracia',
  },
  {
    id: 2868,
    country_id: 607,
    name: 'Kadiogo',
  },
  {
    id: 2869,
    country_id: 607,
    name: 'Yatenga',
  },
  {
    id: 2870,
    country_id: 2177,
    name: 'Nord-Est',
  },
  {
    id: 2871,
    country_id: 4829,
    name: 'Ouangani',
  },
  {
    id: 2872,
    country_id: 1560,
    name: 'Sangha',
  },
  {
    id: 2873,
    country_id: 1560,
    name: 'Cuvette',
  },
  {
    id: 2874,
    country_id: 4125,
    name: 'Oyam',
  },
  {
    id: 2875,
    country_id: 748,
    name: 'Ozolnieku novads',
  },
  {
    id: 2876,
    country_id: 119,
    name: 'Mtskheta-Mtianeti',
  },
  {
    id: 2877,
    country_id: 909440,
    name: 'Krong Pailin',
  },
  {
    id: 2878,
    country_id: 911987,
    name: 'Punakha',
  },
  {
    id: 2879,
    country_id: 869895,
    name: 'Champasak',
  },
  {
    id: 2880,
    country_id: 4125,
    name: 'Pallisa',
  },
  {
    id: 2881,
    country_id: 77580,
    name: 'Yauco',
  },
  {
    id: 2882,
    country_id: 4829,
    name: 'Pamandzi',
  },
  {
    id: 2883,
    country_id: 1638,
    name: 'Slovenj Gradec',
  },
  {
    id: 2884,
    country_id: 55408,
    name: 'Bougainville',
  },
  {
    id: 2885,
    country_id: 2756,
    name: 'Paola',
  },
  {
    id: 2886,
    country_id: 909440,
    name: 'Banteay Mean Chey',
  },
  {
    id: 2887,
    country_id: 79146,
    name: 'Barahona',
  },
  {
    id: 2888,
    country_id: 2088,
    name: 'Paramaribo',
  },
  {
    id: 2889,
    country_id: 1985,
    name: 'Essequibo Islands-West Demerara',
  },
  {
    id: 2890,
    country_id: 911987,
    name: 'Paro',
  },
  {
    id: 2891,
    country_id: 77580,
    name: 'Patillas',
  },
  {
    id: 2892,
    country_id: 49477,
    name: 'Phuket',
  },
  {
    id: 2894,
    country_id: 79146,
    name: 'El Seibo',
  },
  {
    id: 2895,
    country_id: 32396817,
    name: 'Pehcevo',
  },
  {
    id: 2896,
    country_id: 911987,
    name: 'Pemagatshel',
  },
  {
    id: 2897,
    country_id: 6783,
    name: 'Cabo Delgado',
  },
  {
    id: 2898,
    country_id: 2756,
    name: 'Pembroke',
  },
  {
    id: 2899,
    country_id: 77580,
    name: 'Penuelas',
  },
  {
    id: 2900,
    country_id: 1638,
    name: 'Rogasovci',
  },
  {
    id: 2901,
    country_id: 2228,
    name: 'Diego Martin',
  },
  {
    id: 2902,
    country_id: 69697,
    name: 'Ninh Thuan',
  },
  {
    id: 2903,
    country_id: 909440,
    name: 'Phnom Penh',
  },
  {
    id: 2904,
    country_id: 69697,
    name: 'Lai Chau',
  },
  {
    id: 2905,
    country_id: 69697,
    name: 'Tay Ninh',
  },
  {
    id: 2906,
    country_id: 69697,
    name: 'Ha Nam',
  },
  {
    id: 2907,
    country_id: 909440,
    name: 'Taakaev',
  },
  {
    id: 2908,
    country_id: 911987,
    name: 'Chhukha',
  },
  {
    id: 2909,
    country_id: 748,
    name: 'Rundales novads',
  },
  {
    id: 2910,
    country_id: 748,
    name: 'Ventspils novads',
  },
  {
    id: 2911,
    country_id: 748,
    name: 'Babites novads',
  },
  {
    id: 2912,
    country_id: 296,
    name: 'Pirotski okrug',
  },
  {
    id: 2913,
    country_id: 1703,
    name: 'Pita',
  },
  {
    id: 2914,
    country_id: 910036,
    name: 'Piti',
  },
  {
    id: 2915,
    country_id: 1638,
    name: 'Pivka',
  },
  {
    id: 2916,
    country_id: 1638,
    name: 'Kostel',
  },
  {
    id: 2917,
    country_id: 21795,
    name: 'Planken',
  },
  {
    id: 2918,
    country_id: 69697,
    name: 'Gia Lai',
  },
  {
    id: 2920,
    country_id: 14837,
    name: 'Saint Anthony',
  },
  {
    id: 2921,
    country_id: 1638,
    name: 'Podcetrtek',
  },
  {
    id: 2922,
    country_id: 1638,
    name: 'Smartno ob Paki',
  },
  {
    id: 2924,
    country_id: 1638,
    name: 'Podlehnik',
  },
  {
    id: 2925,
    country_id: 2228,
    name: 'Point Fortin',
  },
  {
    id: 2926,
    country_id: 1560,
    name: 'Pointe-Noire',
  },
  {
    id: 2927,
    country_id: 1638,
    name: 'Poljcane',
  },
  {
    id: 2928,
    country_id: 2405,
    name: 'Polvamaa',
  },
  {
    id: 2929,
    country_id: 1638,
    name: 'Polzela',
  },
  {
    id: 2930,
    country_id: 772,
    name: 'Paul',
  },
  {
    id: 2931,
    country_id: 908860,
    name: 'Port Glaud',
  },
  {
    id: 2932,
    country_id: 360931,
    name: 'Port Louis',
  },
  {
    id: 2933,
    country_id: 55408,
    name: 'National Capital District (Port Moresby)',
  },
  {
    id: 2934,
    country_id: 2228,
    name: 'Port of Spain',
  },
  {
    id: 2935,
    country_id: 886,
    name: "Bur Sa'id",
  },
  {
    id: 2936,
    country_id: 56518,
    name: 'Red Sea',
  },
  {
    id: 2937,
    country_id: 867012,
    name: 'Shefa',
  },
  {
    id: 2938,
    country_id: 772,
    name: 'Porto Novo',
  },
  {
    id: 2939,
    country_id: 7830,
    name: 'Oueme',
  },
  {
    id: 2940,
    country_id: 1638,
    name: 'Postojna',
  },
  {
    id: 2941,
    country_id: 3990,
    name: 'Rivas',
  },
  {
    id: 2942,
    country_id: 1638,
    name: 'Slovenska Bistrica',
  },
  {
    id: 2943,
    country_id: 772,
    name: 'Praia',
  },
  {
    id: 2944,
    country_id: 1638,
    name: 'Prebold',
  },
  {
    id: 2945,
    country_id: 1638,
    name: 'Sodrazica',
  },
  {
    id: 2946,
    country_id: 1638,
    name: 'Prevalje',
  },
  {
    id: 2947,
    country_id: 909440,
    name: 'Prey Veaeng',
  },
  {
    id: 2948,
    country_id: 2228,
    name: 'Princes Town',
  },
  {
    id: 2949,
    country_id: 296,
    name: 'Kosovsko-Mitrovacki okrug',
  },
  {
    id: 2950,
    country_id: 32396817,
    name: 'Probistip',
  },
  {
    id: 2951,
    country_id: 32396817,
    name: 'Tearce',
  },
  {
    id: 2952,
    country_id: 1638,
    name: 'Ptuj',
  },
  {
    id: 2953,
    country_id: 459,
    name: 'Galapagos',
  },
  {
    id: 2954,
    country_id: 338,
    name: 'Madre de Dios',
  },
  {
    id: 2955,
    country_id: 80,
    name: 'Magallanes',
  },
  {
    id: 2956,
    country_id: 144816,
    name: 'Toledo',
  },
  {
    id: 2957,
    country_id: 53128,
    name: 'Baja Verapaz',
  },
  {
    id: 2958,
    country_id: 2453,
    name: 'Bilasuvar',
  },
  {
    id: 2959,
    country_id: 3995,
    name: 'Wilayah Persekutuan Putrajaya',
  },
  {
    id: 2960,
    country_id: 459,
    name: 'Pastaza',
  },
  {
    id: 2961,
    country_id: 862868,
    name: 'Rapti',
  },
  {
    id: 2962,
    country_id: 2756,
    name: 'Qala',
  },
  {
    id: 2963,
    country_id: 2453,
    name: 'Samux',
  },
  {
    id: 2964,
    country_id: 2453,
    name: 'Qax',
  },
  {
    id: 2965,
    country_id: 2453,
    name: 'Qazax',
  },
  {
    id: 2966,
    country_id: 488,
    name: 'Qazvin',
  },
  {
    id: 2967,
    country_id: 488,
    name: 'Qom',
  },
  {
    id: 2968,
    country_id: 2756,
    name: 'Qormi',
  },
  {
    id: 2969,
    country_id: 2756,
    name: 'Qrendi',
  },
  {
    id: 2970,
    country_id: 69697,
    name: 'Quang Ngai',
  },
  {
    id: 2971,
    country_id: 2453,
    name: 'Quba',
  },
  {
    id: 2972,
    country_id: 6783,
    name: 'Zambezia',
  },
  {
    id: 2973,
    country_id: 69697,
    name: 'Binh Dinh',
  },
  {
    id: 2974,
    country_id: 911,
    name: 'Kwanza Sul',
  },
  {
    id: 2975,
    country_id: 2453,
    name: 'Qusar',
  },
  {
    id: 2976,
    country_id: 482134,
    name: 'Quthing',
  },
  {
    id: 2977,
    country_id: 2453,
    name: 'Qabala',
  },
  {
    id: 2978,
    country_id: 2756,
    name: 'Rabat Malta',
  },
  {
    id: 2979,
    country_id: 1638,
    name: 'Race-Fram',
  },
  {
    id: 2980,
    country_id: 1638,
    name: 'Radece',
  },
  {
    id: 2981,
    country_id: 1638,
    name: 'Radenci',
  },
  {
    id: 2982,
    country_id: 1638,
    name: 'Hoce-Slivnica',
  },
  {
    id: 2983,
    country_id: 1638,
    name: 'Radlje ob Dravi',
  },
  {
    id: 2984,
    country_id: 32396817,
    name: 'Radovis',
  },
  {
    id: 2985,
    country_id: 32396817,
    name: 'Rankovce',
  },
  {
    id: 2986,
    country_id: 2802,
    name: "Ra's al Khaymah",
  },
  {
    id: 2987,
    country_id: 38404,
    name: 'Sabaragamuwa Province',
  },
  {
    id: 2988,
    country_id: 1638,
    name: 'Sentjernej',
  },
  {
    id: 2989,
    country_id: 137919,
    name: 'Redonda',
  },
  {
    id: 2990,
    country_id: 1439,
    name: 'Tataouine',
  },
  {
    id: 2991,
    country_id: 748,
    name: 'Rezeknes novads',
  },
  {
    id: 2992,
    country_id: 2345,
    name: 'Rezina',
  },
  {
    id: 2993,
    country_id: 772,
    name: 'Ribeira Grande',
  },
  {
    id: 2994,
    country_id: 1638,
    name: 'Ribnica',
  },
  {
    id: 2995,
    country_id: 748,
    name: 'Riga',
  },
  {
    id: 2996,
    country_id: 77580,
    name: 'Rincon',
  },
  {
    id: 2997,
    country_id: 2228,
    name: 'Mayaro-Rio Claro',
  },
  {
    id: 2998,
    country_id: 2345,
    name: 'Riscani',
  },
  {
    id: 2999,
    country_id: 870106,
    name: 'Virgin Islands, British',
  },
  {
    id: 3000,
    country_id: 80919,
    name: 'South Eleuthera',
  },
  {
    id: 3001,
    country_id: 1638,
    name: 'Rogaska Slatina',
  },
  {
    id: 3002,
    country_id: 748,
    name: 'Rojas novads',
  },
  {
    id: 3003,
    country_id: 748,
    name: 'Ropazu novads',
  },
  {
    id: 3004,
    country_id: 39214,
    name: 'Saint David',
  },
  {
    id: 3005,
    country_id: 32396817,
    name: 'Rosoman',
  },
  {
    id: 3006,
    country_id: 748,
    name: 'Rugaju novads',
  },
  {
    id: 3007,
    country_id: 21795,
    name: 'Ruggell',
  },
  {
    id: 3008,
    country_id: 4125,
    name: 'Rukungiri',
  },
  {
    id: 3009,
    country_id: 821,
    name: 'Bururi',
  },
  {
    id: 3010,
    country_id: 5790,
    name: 'Kavango East',
  },
  {
    id: 3011,
    country_id: 97374,
    name: "Az Zarqa'",
  },
  {
    id: 3012,
    country_id: 821,
    name: 'Rutana',
  },
  {
    id: 3013,
    country_id: 821,
    name: 'Ruyigi',
  },
  {
    id: 3014,
    country_id: 190318,
    name: "Sa'dah",
  },
  {
    id: 3015,
    country_id: 21462,
    name: 'Mubarak al Kabir',
  },
  {
    id: 3016,
    country_id: 77580,
    name: 'San German',
  },
  {
    id: 3017,
    country_id: 77580,
    name: 'Sabana Grande',
  },
  {
    id: 3018,
    country_id: 79146,
    name: 'San Cristobal',
  },
  {
    id: 3019,
    country_id: 16175,
    name: 'Sabha',
  },
  {
    id: 3020,
    country_id: 2453,
    name: 'Sabirabad',
  },
  {
    id: 3021,
    country_id: 2756,
    name: 'Safi',
  },
  {
    id: 3022,
    country_id: 35185,
    name: 'Jersey',
  },
  {
    id: 3023,
    country_id: 1884978,
    name: 'Guernsey',
  },
  {
    id: 3024,
    country_id: 75285,
    name: 'Saint-Roman',
  },
  {
    id: 3025,
    country_id: 772,
    name: 'Boa Vista',
  },
  {
    id: 3026,
    country_id: 748,
    name: 'Salacgrivas novads',
  },
  {
    id: 3027,
    country_id: 7091,
    name: 'Zufar',
  },
  {
    id: 3028,
    country_id: 748,
    name: 'Salaspils novads',
  },
  {
    id: 3029,
    country_id: 748,
    name: 'Saldus novads',
  },
  {
    id: 3030,
    country_id: 20802,
    name: 'Salima',
  },
  {
    id: 3031,
    country_id: 79146,
    name: 'Hermanas Mirabal',
  },
  {
    id: 3032,
    country_id: 158,
    name: 'Salto',
  },
  {
    id: 3033,
    country_id: 2453,
    name: 'Salyan',
  },
  {
    id: 3034,
    country_id: 55408,
    name: 'Milne Bay',
  },
  {
    id: 3035,
    country_id: 911987,
    name: 'Samdrup Jongkhar',
  },
  {
    id: 3036,
    country_id: 911987,
    name: 'Samtse',
  },
  {
    id: 3037,
    country_id: 353,
    name: 'San Andres, Providencia y Santa Catalina',
  },
  {
    id: 3038,
    country_id: 3990,
    name: 'Rio San Juan',
  },
  {
    id: 3039,
    country_id: 275,
    name: 'Cojedes',
  },
  {
    id: 3040,
    country_id: 275,
    name: 'Apure',
  },
  {
    id: 3041,
    country_id: 2756,
    name: "Saint Julian's",
  },
  {
    id: 3042,
    country_id: 353,
    name: 'Guaviare',
  },
  {
    id: 3043,
    country_id: 3347,
    name: 'San Marino',
  },
  {
    id: 3044,
    country_id: 2756,
    name: "Saint Paul's Bay",
  },
  {
    id: 3045,
    country_id: 23,
    name: 'Bas-Sassandra',
  },
  {
    id: 3046,
    country_id: 160047,
    name: 'Saint Anne Sandy Point',
  },
  {
    id: 3047,
    country_id: 2228,
    name: 'Sangre Grande',
  },
  {
    id: 3048,
    country_id: 56518,
    name: 'Sennar',
  },
  {
    id: 3049,
    country_id: 2756,
    name: 'Sannat',
  },
  {
    id: 3050,
    country_id: 459,
    name: 'Santa Elena',
  },
  {
    id: 3051,
    country_id: 77580,
    name: 'Santa Isabel Municipio',
  },
  {
    id: 3052,
    country_id: 2756,
    name: "Saint Lucia's",
  },
  {
    id: 3053,
    country_id: 772,
    name: 'Sal',
  },
  {
    id: 3054,
    country_id: 910036,
    name: 'Santa Rita',
  },
  {
    id: 3055,
    country_id: 2756,
    name: 'Santa Venera',
  },
  {
    id: 3056,
    country_id: 63604,
    name: 'Santiago de Cuba',
  },
  {
    id: 3057,
    country_id: 179748,
    name: 'Principe',
  },
  {
    id: 3058,
    country_id: 79146,
    name: 'Distrito Nacional (Santo Domingo)',
  },
  {
    id: 3059,
    country_id: 65437,
    name: 'Ngobe-Bugle',
  },
  {
    id: 3060,
    country_id: 179748,
    name: 'Sao Tome',
  },
  {
    id: 3061,
    country_id: 867004,
    name: 'Choiseul',
  },
  {
    id: 3062,
    country_id: 1796,
    name: 'Nordurland vestra',
  },
  {
    id: 3063,
    country_id: 748,
    name: 'Saulkrastu novads',
  },
  {
    id: 3064,
    country_id: 911,
    name: 'Lunda Sul',
  },
  {
    id: 3065,
    country_id: 869895,
    name: 'Savannakhet',
  },
  {
    id: 3066,
    country_id: 909526,
    name: 'Dornogovi',
  },
  {
    id: 3067,
    country_id: 2228,
    name: 'Tobago',
  },
  {
    id: 3068,
    country_id: 21795,
    name: 'Schaan',
  },
  {
    id: 3069,
    country_id: 21795,
    name: 'Schellenberg',
  },
  {
    id: 3070,
    country_id: 614,
    name: 'Souk Ahras',
  },
  {
    id: 3071,
    country_id: 26,
    name: 'Segou',
  },
  {
    id: 3072,
    country_id: 88407,
    name: 'Kalimantan Utara',
  },
  {
    id: 3073,
    country_id: 1638,
    name: 'Semic',
  },
  {
    id: 3074,
    country_id: 1638,
    name: 'Sempeter-Vrtojba',
  },
  {
    id: 3075,
    country_id: 1638,
    name: 'Sencur',
  },
  {
    id: 3076,
    country_id: 2756,
    name: 'Isla',
  },
  {
    id: 3077,
    country_id: 909440,
    name: 'Mondol Kiri',
  },
  {
    id: 3078,
    country_id: 35008,
    name: 'Cabanas',
  },
  {
    id: 3079,
    country_id: 1638,
    name: 'Sentilj',
  },
  {
    id: 3080,
    country_id: 1638,
    name: 'Sentjur',
  },
  {
    id: 3081,
    country_id: 712,
    name: 'Seoul-teukbyeolsi',
  },
  {
    id: 3082,
    country_id: 3347,
    name: 'Serravalle',
  },
  {
    id: 3083,
    country_id: 1638,
    name: 'Sevnica',
  },
  {
    id: 3084,
    country_id: 83175,
    name: 'Lebap',
  },
  {
    id: 3085,
    country_id: 1638,
    name: 'Sezana',
  },
  {
    id: 3086,
    country_id: 2453,
    name: 'Samaxi',
  },
  {
    id: 3087,
    country_id: 2453,
    name: 'Saki',
  },
  {
    id: 3088,
    country_id: 2405,
    name: 'Valgamaa',
  },
  {
    id: 3089,
    country_id: 32396817,
    name: 'Stip',
  },
  {
    id: 3090,
    country_id: 909440,
    name: 'Siem Reab',
  },
  {
    id: 3091,
    country_id: 2756,
    name: 'Siggiewi',
  },
  {
    id: 3092,
    country_id: 1703,
    name: 'Siguiri',
  },
  {
    id: 3093,
    country_id: 748,
    name: 'Siguldas novads',
  },
  {
    id: 3094,
    country_id: 909440,
    name: 'Krong Preah Sihanouk',
  },
  {
    id: 3095,
    country_id: 35210,
    name: 'Katavi',
  },
  {
    id: 3096,
    country_id: 910036,
    name: 'Sinajana',
  },
  {
    id: 3097,
    country_id: 607,
    name: 'Leraba',
  },
  {
    id: 3098,
    country_id: 23,
    name: 'Zanzan',
  },
  {
    id: 3099,
    country_id: 213955,
    name: 'Singapore',
  },
  {
    id: 3100,
    country_id: 35210,
    name: 'Singida',
  },
  {
    id: 3101,
    country_id: 2228,
    name: 'Siparia',
  },
  {
    id: 3102,
    country_id: 4125,
    name: 'Sironko',
  },
  {
    id: 3103,
    country_id: 2453,
    name: 'Sirvan',
  },
  {
    id: 3104,
    country_id: 1638,
    name: 'Skofja Loka',
  },
  {
    id: 3105,
    country_id: 1638,
    name: 'Skofljica',
  },
  {
    id: 3106,
    country_id: 748,
    name: 'Skrundas novads',
  },
  {
    id: 3107,
    country_id: 2756,
    name: 'Sliema',
  },
  {
    id: 3108,
    country_id: 491,
    name: 'Sligo',
  },
  {
    id: 3109,
    country_id: 1638,
    name: 'Slovenske Konjice',
  },
  {
    id: 3110,
    country_id: 748,
    name: 'Valkas novads',
  },
  {
    id: 3111,
    country_id: 69697,
    name: 'Soc Trang',
  },
  {
    id: 3112,
    country_id: 911,
    name: 'Zaire',
  },
  {
    id: 3113,
    country_id: 3039,
    name: 'Centrale',
  },
  {
    id: 3114,
    country_id: 867012,
    name: 'Torba',
  },
  {
    id: 3115,
    country_id: 1638,
    name: 'Solcava',
  },
  {
    id: 3116,
    country_id: 2345,
    name: 'Soldanesti',
  },
  {
    id: 3117,
    country_id: 2507,
    name: 'Lower River',
  },
  {
    id: 3118,
    country_id: 3990,
    name: 'Madriz',
  },
  {
    id: 3119,
    country_id: 69697,
    name: 'Son La',
  },
  {
    id: 3120,
    country_id: 69697,
    name: 'Phu Yen',
  },
  {
    id: 3121,
    country_id: 2345,
    name: 'Soroca',
  },
  {
    id: 3122,
    country_id: 4125,
    name: 'Soroti',
  },
  {
    id: 3123,
    country_id: 2154,
    name: 'Vagar',
  },
  {
    id: 3124,
    country_id: 1638,
    name: 'Sostanj',
  },
  {
    id: 3125,
    country_id: 380155,
    name: 'Saint Mark',
  },
  {
    id: 3126,
    country_id: 12095,
    name: 'Soufriere',
  },
  {
    id: 3127,
    country_id: 32396817,
    name: 'Staro Nagoricane',
  },
  {
    id: 3128,
    country_id: 2345,
    name: 'Stefan Voda',
  },
  {
    id: 3129,
    country_id: 1638,
    name: 'Store',
  },
  {
    id: 3130,
    country_id: 1638,
    name: 'Straza',
  },
  {
    id: 3131,
    country_id: 32396817,
    name: 'Zelino',
  },
  {
    id: 3132,
    country_id: 32396817,
    name: 'Studenicani',
  },
  {
    id: 3133,
    country_id: 2453,
    name: 'Sumqayit',
  },
  {
    id: 3134,
    country_id: 7091,
    name: 'Janub ash Sharqiyah',
  },
  {
    id: 3135,
    country_id: 909440,
    name: 'Svaay Rieng',
  },
  {
    id: 3136,
    country_id: 1638,
    name: 'Bloke',
  },
  {
    id: 3137,
    country_id: 1638,
    name: 'Sveti Jurij',
  },
  {
    id: 3138,
    country_id: 32396817,
    name: 'Sveti Nikole',
  },
  {
    id: 3139,
    country_id: 1638,
    name: 'Sveti Tomaz',
  },
  {
    id: 3140,
    country_id: 2756,
    name: 'Swieqi',
  },
  {
    id: 3141,
    country_id: 870933,
    name: 'Yangon',
  },
  {
    id: 3142,
    country_id: 909440,
    name: 'Kandaal',
  },
  {
    id: 3143,
    country_id: 50809,
    name: 'Kalinga',
  },
  {
    id: 3144,
    country_id: 338,
    name: 'Tacna',
  },
  {
    id: 3145,
    country_id: 158,
    name: 'Tacuarembo',
  },
  {
    id: 3146,
    country_id: 712,
    name: 'Daegu-gwangyeoksi',
  },
  {
    id: 3147,
    country_id: 43444,
    name: 'Kapisa',
  },
  {
    id: 3148,
    country_id: 16175,
    name: 'Tarabulus',
  },
  {
    id: 3149,
    country_id: 65053,
    name: 'Tahoua',
  },
  {
    id: 3150,
    country_id: 213370,
    name: 'Taichung',
  },
  {
    id: 3151,
    country_id: 213370,
    name: 'Tainan',
  },
  {
    id: 3152,
    country_id: 213370,
    name: 'Taipei',
  },
  {
    id: 3153,
    country_id: 213370,
    name: 'Taitung',
  },
  {
    id: 3154,
    country_id: 908860,
    name: 'Takamaka',
  },
  {
    id: 3155,
    country_id: 43444,
    name: 'Takhar',
  },
  {
    id: 3156,
    country_id: 200,
    name: 'Tambacounda',
  },
  {
    id: 3157,
    country_id: 910036,
    name: 'Tamuning-Tumon-Harmon',
  },
  {
    id: 3158,
    country_id: 88407,
    name: 'Kepulauan Riau',
  },
  {
    id: 3159,
    country_id: 213370,
    name: 'Taoyuan',
  },
  {
    id: 3160,
    country_id: 2345,
    name: 'Taraclia',
  },
  {
    id: 3161,
    country_id: 1424,
    name: 'Laayoune-Sakia El Hamra (EH-partial)',
  },
  {
    id: 3162,
    country_id: 7598,
    name: 'Tarija',
  },
  {
    id: 3163,
    country_id: 43444,
    name: 'Uruzgan',
  },
  {
    id: 3164,
    country_id: 772,
    name: 'Tarrafal',
  },
  {
    id: 3165,
    country_id: 2756,
    name: 'Tarxien',
  },
  {
    id: 3166,
    country_id: 1179,
    name: 'Taita/Taveta',
  },
  {
    id: 3167,
    country_id: 119,
    name: 'Tbilisi',
  },
  {
    id: 3168,
    country_id: 6783,
    name: 'Tete',
  },
  {
    id: 3169,
    country_id: 482134,
    name: 'Berea',
  },
  {
    id: 3170,
    country_id: 69697,
    name: 'Thai Binh',
  },
  {
    id: 3171,
    country_id: 69697,
    name: 'Thai Nguyen',
  },
  {
    id: 3172,
    country_id: 47329,
    name: 'Saba',
  },
  {
    id: 3173,
    country_id: 870092,
    name: 'Anguilla',
  },
  {
    id: 3174,
    country_id: 911987,
    name: 'Thimphu',
  },
  {
    id: 3175,
    country_id: 201580,
    name: 'Gaafu Dhaalu',
  },
  {
    id: 3176,
    country_id: 69697,
    name: 'Binh Duong',
  },
  {
    id: 3177,
    country_id: 65053,
    name: 'Tillaberi',
  },
  {
    id: 3178,
    country_id: 26,
    name: 'Tombouctou',
  },
  {
    id: 3179,
    country_id: 614,
    name: 'Tindouf',
  },
  {
    id: 3180,
    country_id: 748,
    name: 'Jelgava',
  },
  {
    id: 3181,
    country_id: 614,
    name: 'Tissemsilt',
  },
  {
    id: 3183,
    country_id: 1638,
    name: 'Tolmin',
  },
  {
    id: 3184,
    country_id: 190317,
    name: 'Eastern Equatoria',
  },
  {
    id: 3185,
    country_id: 2453,
    name: 'Tovuz',
  },
  {
    id: 3186,
    country_id: 69697,
    name: 'Tra Vinh',
  },
  {
    id: 3187,
    country_id: 1638,
    name: 'Trbovlje',
  },
  {
    id: 3188,
    country_id: 158,
    name: 'Treinta y Tres',
  },
  {
    id: 3189,
    country_id: 21795,
    name: 'Triesen',
  },
  {
    id: 3190,
    country_id: 158,
    name: 'Flores',
  },
  {
    id: 3191,
    country_id: 1638,
    name: 'Trnovska Vas',
  },
  {
    id: 3192,
    country_id: 911987,
    name: 'Trongsa',
  },
  {
    id: 3193,
    country_id: 275,
    name: 'Trujillo',
  },
  {
    id: 3194,
    country_id: 77580,
    name: 'Trujillo Alto',
  },
  {
    id: 3195,
    country_id: 1638,
    name: 'Trzic',
  },
  {
    id: 3196,
    country_id: 1638,
    name: 'Trzin',
  },
  {
    id: 3197,
    country_id: 1320,
    name: 'Kongo Central',
  },
  {
    id: 3198,
    country_id: 5790,
    name: 'Oshikoto',
  },
  {
    id: 3199,
    country_id: 48946,
    name: 'Tubas',
  },
  {
    id: 3200,
    country_id: 275,
    name: 'Delta Amacuro',
  },
  {
    id: 3201,
    country_id: 338,
    name: 'Tumbes',
  },
  {
    id: 3202,
    country_id: 83175,
    name: 'Balkan',
  },
  {
    id: 3203,
    country_id: 1638,
    name: 'Turnisce',
  },
  {
    id: 3204,
    country_id: 913469,
    name: 'Tutong',
  },
  {
    id: 3205,
    country_id: 69697,
    name: 'Tuyen Quang',
  },
  {
    id: 3206,
    country_id: 201580,
    name: 'Raa',
  },
  {
    id: 3207,
    country_id: 911,
    name: 'Uige',
  },
  {
    id: 3208,
    country_id: 909526,
    name: 'Ulaanbaatar',
  },
  {
    id: 3209,
    country_id: 748,
    name: 'Stopinu novads',
  },
  {
    id: 3211,
    country_id: 909526,
    name: 'Bayan-Olgiy',
  },
  {
    id: 3212,
    country_id: 712,
    name: 'Ulsan-gwangyeoksi',
  },
  {
    id: 3213,
    country_id: 2802,
    name: 'Umm al Qaywayn',
  },
  {
    id: 3214,
    country_id: 74505,
    name: 'Umm Salal',
  },
  {
    id: 3215,
    country_id: 2345,
    name: 'Ungheni',
  },
  {
    id: 3216,
    country_id: 44,
    name: 'Tierra del Fuego',
  },
  {
    id: 3217,
    country_id: 77580,
    name: 'Utuado',
  },
  {
    id: 3218,
    country_id: 21795,
    name: 'Vaduz',
  },
  {
    id: 3219,
    country_id: 2154,
    name: 'Suduroy',
  },
  {
    id: 3220,
    country_id: 867334,
    name: "Fa'asaleleaga",
  },
  {
    id: 3221,
    country_id: 32396817,
    name: 'Valandovo',
  },
  {
    id: 3222,
    country_id: 2756,
    name: 'Valletta',
  },
  {
    id: 3223,
    country_id: 2405,
    name: 'Vorumaa',
  },
  {
    id: 3224,
    country_id: 919,
    name: 'Erevan',
  },
  {
    id: 3225,
    country_id: 32396817,
    name: 'Vasilevo',
  },
  {
    id: 3226,
    country_id: 748,
    name: 'Vecumnieku novads',
  },
  {
    id: 3227,
    country_id: 1638,
    name: 'Velenje',
  },
  {
    id: 3228,
    country_id: 32396817,
    name: 'Veles',
  },
  {
    id: 3229,
    country_id: 1638,
    name: 'Velika Polana',
  },
  {
    id: 3230,
    country_id: 1638,
    name: 'Verzej',
  },
  {
    id: 3231,
    country_id: 2756,
    name: 'Rabat Gozo',
  },
  {
    id: 3232,
    country_id: 3995,
    name: 'Wilayah Persekutuan Labuan',
  },
  {
    id: 3233,
    country_id: 908860,
    name: 'English River',
  },
  {
    id: 3234,
    country_id: 143,
    name: 'Wien',
  },
  {
    id: 3235,
    country_id: 69697,
    name: 'Phu Tho',
  },
  {
    id: 3236,
    country_id: 12095,
    name: 'Vieux Fort',
  },
  {
    id: 3237,
    country_id: 77580,
    name: 'Villalba',
  },
  {
    id: 3238,
    country_id: 69697,
    name: 'Nghe An',
  },
  {
    id: 3239,
    country_id: 69697,
    name: 'Vinh Long',
  },
  {
    id: 3240,
    country_id: 69697,
    name: 'Vinh Phuc',
  },
  {
    id: 3241,
    country_id: 1638,
    name: 'Vipava',
  },
  {
    id: 3242,
    country_id: 1638,
    name: 'Ivancna Gorica',
  },
  {
    id: 3243,
    country_id: 1638,
    name: 'Vitanje',
  },
  {
    id: 3244,
    country_id: 2756,
    name: 'Birgu',
  },
  {
    id: 3245,
    country_id: 1638,
    name: 'Vodice',
  },
  {
    id: 3246,
    country_id: 1638,
    name: 'Vojnik',
  },
  {
    id: 3247,
    country_id: 1638,
    name: 'Vrhnika',
  },
  {
    id: 3248,
    country_id: 2453,
    name: 'Agstafa',
  },
  {
    id: 3249,
    country_id: 1638,
    name: 'Vuzenica',
  },
  {
    id: 3250,
    country_id: 2817,
    name: 'Chatham Islands Territory',
  },
  {
    id: 3251,
    country_id: 1179,
    name: 'Wajir',
  },
  {
    id: 3252,
    country_id: 911987,
    name: 'Wangdue Phodrang',
  },
  {
    id: 3253,
    country_id: 3483,
    name: 'District of Columbia',
  },
  {
    id: 3254,
    country_id: 5790,
    name: 'Khomas',
  },
  {
    id: 3255,
    country_id: 2453,
    name: 'Xacmaz',
  },
  {
    id: 3256,
    country_id: 2756,
    name: 'Xaghra',
  },
  {
    id: 3257,
    country_id: 869895,
    name: 'Houaphan',
  },
  {
    id: 3258,
    country_id: 10203129,
    name: 'Ainaro',
  },
  {
    id: 3259,
    country_id: 2453,
    name: 'Goygol',
  },
  {
    id: 3260,
    country_id: 2756,
    name: 'Xewkija',
  },
  {
    id: 3261,
    country_id: 2756,
    name: 'Xghajra',
  },
  {
    id: 3262,
    country_id: 2756,
    name: 'Munxar',
  },
  {
    id: 3263,
    country_id: 77580,
    name: 'Yabucoa',
  },
  {
    id: 3264,
    country_id: 190317,
    name: 'Western Equatoria',
  },
  {
    id: 3265,
    country_id: 459,
    name: 'Zamora Chinchipe',
  },
  {
    id: 3266,
    country_id: 69697,
    name: 'Yen Bai',
  },
  {
    id: 3267,
    country_id: 716,
    name: 'Bayelsa',
  },
  {
    id: 3268,
    country_id: 2453,
    name: 'Yevlax',
  },
  {
    id: 3269,
    country_id: 910036,
    name: 'Yigo',
  },
  {
    id: 3270,
    country_id: 213370,
    name: 'Yilan',
  },
  {
    id: 3271,
    country_id: 910036,
    name: 'Yona',
  },
  {
    id: 3272,
    country_id: 2453,
    name: 'Daskasan',
  },
  {
    id: 3273,
    country_id: 2756,
    name: 'Zabbar',
  },
  {
    id: 3275,
    country_id: 35210,
    name: 'Mjini Magharibi',
  },
  {
    id: 3276,
    country_id: 43444,
    name: 'Nimroz',
  },
  {
    id: 3277,
    country_id: 2756,
    name: 'Zebbug Gozo',
  },
  {
    id: 3278,
    country_id: 2756,
    name: 'Zejtun',
  },
  {
    id: 3279,
    country_id: 32396817,
    name: 'Zelenikovo',
  },
  {
    id: 3280,
    country_id: 1638,
    name: 'Zelezniki',
  },
  {
    id: 3281,
    country_id: 65053,
    name: 'Zinder',
  },
  {
    id: 3282,
    country_id: 607,
    name: 'Oubritenga',
  },
  {
    id: 3283,
    country_id: 1638,
    name: 'Ziri',
  },
  {
    id: 3284,
    country_id: 20802,
    name: 'Zomba',
  },
  {
    id: 3285,
    country_id: 2493,
    name: 'Tiris Zemmour',
  },
  {
    id: 3286,
    country_id: 1638,
    name: 'Zrece',
  },
  {
    id: 3287,
    country_id: 2756,
    name: 'Zurrieq',
  },
  {
    id: 3288,
    country_id: 16175,
    name: 'An Nuqat al Khams',
  },
  {
    id: 3289,
    country_id: 1638,
    name: 'Zuzemberk',
  },
  {
    id: 3290,
    country_id: 719,
    name: 'Grand Gedeh',
  },
];

export default allRegions;
