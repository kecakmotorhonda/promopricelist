/* DATA PROMO KECAK MOTOR - satu-satunya file yang perlu diedit tiap bulan.
   Semua angka diskon = BRUTO (persis Tabel Sales Program, termasuk PPN 11%).
   Halaman otomatis menghitung nilai bersih. gifts stock:false = kuota habis.
   Setelah edit: upload ulang folder deploy ke Netlify. */
window.KECAK_DATA = {
  "dealer": "Kecak Motor",
  "waNumber": "6287855909295",
  "lastUpdated": "2026-10-02",
  "periodStart": "2026-10-01",
  "periodEnd": "2026-10-31",
  "monthLabel": "Oktober 2026",
  "ppnRate": 0.11,
  "showSegmentAmounts": true,
  "salespeople": {
    "regy": {
      "name": "Regy",
      "wa": "6281816661644"
    },
    "arik": {
      "name": "Arik",
      "wa": "6287862557487"
    },
    "sukreni": {
      "name": "Sukreni",
      "wa": "6281916594711"
    },
    "hesty": {
      "name": "Hesty",
      "wa": "6287860852525"
    },
    "rofik": {
      "name": "Rofik",
      "wa": "6281547627944"
    },
    "wira": {
      "name": "Wira",
      "wa": "6287886406480"
    },
    "richard": {
      "name": "Richard",
      "wa": "6285737370251"
    },
    "diah": {
      "name": "Diah",
      "wa": "6285792032052"
    },
    "suli": {
      "name": "Suli",
      "wa": "6281358268675"
    },
    "tjok-krisna": {
      "name": "Tjok Krisna",
      "wa": "6287860215866"
    },
    "lode": {
      "name": "Lode",
      "wa": "6287761514894"
    },
    "risky": {
      "name": "Risky",
      "wa": "6281337794294"
    },
    "christian": {
      "name": "Christian",
      "wa": "6281314750593"
    }
  },
  "credit": {
    "flatMonthly": 0.022,
    "minDpPct": 0.1,
    "tenors": [
      24,
      36,
      48,
      60
    ]
  },
  "trackEndpoint": "https://script.google.com/macros/s/AKfycbyG7fykH943YJVWT-7hIqA453M4nP3rv2ha2CLezHb5w2GiUMEDodU6luaE-6sxtaQ/exec",
  "segments": [
    {
      "id": "umum",
      "label": "Umum",
      "note": ""
    },
    {
      "id": "hotel",
      "label": "Karyawan Hotel",
      "note": "Wajib tunjukkan ID card karyawan"
    },
    {
      "id": "villa",
      "label": "Karyawan Villa / Guest House",
      "note": "Wajib tunjukkan ID card karyawan"
    },
    {
      "id": "ojol",
      "label": "Driver OJOL",
      "note": "Wajib tunjukkan akun aplikasi aktif"
    },
    {
      "id": "rentbike",
      "label": "Usaha Rent Bike",
      "note": "Wajib bukti usaha rental"
    },
    {
      "id": "kmp",
      "label": "Koperasi Merah Putih",
      "note": "Wajib tunjukkan ID karyawan"
    },
    {
      "id": "sppg",
      "label": "Karyawan SPPG",
      "note": "Wajib tunjukkan ID karyawan"
    },
    {
      "id": "tradein",
      "label": "Tukar Tambah (motor <155cc)",
      "note": "Motor lama matic di bawah 155cc"
    }
  ],
  "categories": {
    "matic": "Matic",
    "cub": "Cub / Bebek",
    "sport": "Sport",
    "ev": "Motor Listrik"
  },
  "units": {
    "beat-sporty": {
      "name": "Honda BeAT Sporty",
      "category": "matic",
      "variants": [
        {
          "id": "mj2",
          "label": "CBS",
          "otr": 20580000
        },
        {
          "id": "mk2",
          "label": "CBS ISS Deluxe",
          "otr": 21380000,
          "discGross": 555000
        },
        {
          "id": "ml2",
          "label": "DLX Smart Key",
          "otr": 21990000,
          "discGross": 555000
        }
      ],
      "baseDiscGross": 222000,
      "baseNote": "Direct Gift Beat Sporty",
      "creditOnly": false,
      "segDiscGross": {
        "hotel": 555000,
        "villa": 555000,
        "kmp": 555000,
        "sppg": 555000
      },
      "gifts": [
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "beat-street": {
      "name": "Honda BeAT Street",
      "category": "matic",
      "variants": [
        {
          "id": "mm2",
          "label": "STD",
          "otr": 21520000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {
        "hotel": 555000,
        "villa": 555000,
        "kmp": 555000,
        "sppg": 555000
      },
      "gifts": [
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "genio": {
      "name": "Honda Genio",
      "category": "matic",
      "variants": [
        {
          "id": "ly2",
          "label": "CBS",
          "otr": 21940000
        },
        {
          "id": "lyp",
          "label": "CBS SPC Color",
          "otr": 22210000
        },
        {
          "id": "lz2",
          "label": "CBS ISS",
          "otr": 22420000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {
        "hotel": 666000,
        "villa": 666000,
        "kmp": 666000,
        "sppg": 666000
      },
      "gifts": [
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "scoopy": {
      "name": "Honda Scoopy",
      "category": "matic",
      "variants": [
        {
          "id": "mr0e",
          "label": "Energetic",
          "otr": 25070000
        },
        {
          "id": "mr0c",
          "label": "Energetic (MR0C)",
          "otr": 25180000
        },
        {
          "id": "mrae",
          "label": "Fashion",
          "otr": 25420000,
          "discGross": 1110000
        },
        {
          "id": "mrbe",
          "label": "Fashion (MRBE)",
          "otr": 25420000,
          "discGross": 1110000
        },
        {
          "id": "mrbc",
          "label": "Fashion (MRBC)",
          "otr": 25530000,
          "discGross": 1110000
        },
        {
          "id": "mrac",
          "label": "Fashion (MRAC)",
          "otr": 25530000,
          "discGross": 1110000
        },
        {
          "id": "ms0e",
          "label": "Prestige",
          "otr": 26300000
        },
        {
          "id": "msae",
          "label": "Stylish",
          "otr": 26300000
        },
        {
          "id": "ms1e",
          "label": "Prestige (MS1E)",
          "otr": 26300000
        },
        {
          "id": "msbe",
          "label": "Stylish (MSBE)",
          "otr": 26300000
        },
        {
          "id": "ms1k",
          "label": "Kuromi Limited Edition",
          "otr": 26690000
        },
        {
          "id": "mrbx",
          "label": "Fashion Special Color",
          "otr": 27575000,
          "discGross": 1110000
        }
      ],
      "baseDiscGross": 555000,
      "baseNote": "Sales Discount Scoopy ROTI (non-Fashion)",
      "creditOnly": false,
      "segDiscGross": {
        "hotel": 555000,
        "villa": 555000,
        "kmp": 555000,
        "sppg": 555000
      },
      "gifts": [
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Helm eksklusif Scoopy Kalcer",
          "value": 122100,
          "stock": true,
          "desc": "Khusus varian warna spesial"
        }
      ]
    },
    "vario-125": {
      "name": "Honda Vario 125",
      "category": "matic",
      "variants": [
        {
          "id": "mc1b",
          "label": "CBS",
          "otr": 25610000
        },
        {
          "id": "nd0b",
          "label": "CBS (ND0B)",
          "otr": 26710000
        },
        {
          "id": "md1b",
          "label": "CBS ISS",
          "otr": 27460000
        },
        {
          "id": "ne0b",
          "label": "CBS ISS (NE0B)",
          "otr": 28600000
        },
        {
          "id": "nf0b",
          "label": "STD",
          "otr": 29000000,
          "discGross": 666000
        },
        {
          "id": "nf0c",
          "label": "STD (NF0C)",
          "otr": 29130000,
          "discGross": 666000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {
        "hotel": 666000,
        "villa": 666000,
        "kmp": 666000,
        "sppg": 666000
      },
      "gifts": [
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "vario-160": {
      "name": "Honda Vario 160",
      "category": "matic",
      "variants": [
        {
          "id": "lv1a",
          "label": "CBS",
          "otr": 29960000
        },
        {
          "id": "lv1b",
          "label": "CBS (LV1B)",
          "otr": 30010000
        },
        {
          "id": "lvea",
          "label": "CBS (LVEA)",
          "otr": 30210000
        },
        {
          "id": "lveb",
          "label": "CBS (LVEB)",
          "otr": 30260000
        },
        {
          "id": "lw1a",
          "label": "ABS",
          "otr": 32990000
        },
        {
          "id": "lw1b",
          "label": "ABS (LW1B)",
          "otr": 33040000
        }
      ],
      "baseDiscGross": 1110000,
      "baseNote": "Super Deals Vario 160",
      "creditOnly": false,
      "segDiscGross": {
        "hotel": 1110000,
        "villa": 1110000,
        "kmp": 1110000,
        "sppg": 1110000,
        "tradein": 1110000
      },
      "gifts": [
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "vario-evo-160": {
      "name": "Honda Vario EVO 160",
      "category": "matic",
      "variants": [
        {
          "id": "myab",
          "label": "CBS",
          "otr": 30390000
        },
        {
          "id": "my0b",
          "label": "CBS Nitro",
          "otr": 30640000
        },
        {
          "id": "mz0b",
          "label": "ABS",
          "otr": 33440000,
          "discGross": 1110000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "stylo-160": {
      "name": "Honda Stylo 160",
      "category": "matic",
      "variants": [
        {
          "id": "mf0b",
          "label": "CBS",
          "otr": 31200000
        },
        {
          "id": "mf1d",
          "label": "CBS KC",
          "otr": 31390000
        },
        {
          "id": "mf1x",
          "label": "CBS Special Color",
          "otr": 33735000
        },
        {
          "id": "mg0b",
          "label": "ABS",
          "otr": 34250000
        },
        {
          "id": "mg1d",
          "label": "ABS KC",
          "otr": 34440000
        },
        {
          "id": "mgad",
          "label": "ABS SPC",
          "otr": 36040000
        },
        {
          "id": "mg1x",
          "label": "ABS Special Color",
          "otr": 36785000
        }
      ],
      "baseDiscGross": 555000,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {
        "hotel": 666000,
        "villa": 666000,
        "kmp": 666000,
        "sppg": 666000,
        "tradein": 555000
      },
      "gifts": [
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Helm eksklusif Stylo Y2K",
          "value": 122100,
          "stock": true,
          "desc": "Khusus varian warna spesial"
        }
      ]
    },
    "pcx-160": {
      "name": "Honda PCX 160",
      "category": "matic",
      "variants": [
        {
          "id": "mt1",
          "label": "CBS",
          "otr": 36060000
        },
        {
          "id": "mv1",
          "label": "ABS",
          "otr": 39760000
        },
        {
          "id": "mw1",
          "label": "ABS RoadSync",
          "otr": 43220000
        }
      ],
      "baseDiscGross": 3330000,
      "baseNote": "Super Deals PCX 160",
      "creditOnly": false,
      "segDiscGross": {
        "hotel": 3330000,
        "villa": 3330000,
        "kmp": 3330000,
        "sppg": 3330000,
        "tradein": 3330000
      },
      "gifts": [
        {
          "label": "Gratis Servis + Oli (paket KPB)",
          "value": 317000,
          "stock": true,
          "desc": "Free Supermatic & oli SPX2 di servis berkala"
        },
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "adv-160": {
      "name": "Honda ADV 160",
      "category": "matic",
      "variants": [
        {
          "id": "na0",
          "label": "CBS",
          "otr": 38970000
        },
        {
          "id": "nb0",
          "label": "ABS",
          "otr": 42110000
        },
        {
          "id": "nc0",
          "label": "ABS RoadSync",
          "otr": 43860000
        }
      ],
      "baseDiscGross": 3330000,
      "baseNote": "Super Deals ADV - semua tahun rakit",
      "creditOnly": false,
      "segDiscGross": {
        "hotel": 3330000,
        "villa": 3330000,
        "kmp": 3330000,
        "sppg": 3330000,
        "tradein": 3330000
      },
      "gifts": [
        {
          "label": "Gratis Servis + Oli (paket KPB)",
          "value": 317000,
          "stock": true,
          "desc": "Free Supermatic & oli SPX2 di servis berkala"
        },
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Free Raincoat",
          "value": 0,
          "stock": true,
          "desc": "Khusus ADV CBS RD produksi 2023-2025"
        }
      ]
    },
    "revo": {
      "name": "Honda Revo",
      "category": "cub",
      "variants": [
        {
          "id": "gb4",
          "label": "Fit",
          "otr": 19330000
        },
        {
          "id": "gd4",
          "label": "STD",
          "otr": 21050000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "supra-x-125": {
      "name": "Honda Supra X 125",
      "category": "cub",
      "variants": [
        {
          "id": "ge5",
          "label": "SW",
          "otr": 22680000
        },
        {
          "id": "gf5",
          "label": "CW",
          "otr": 23750000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "supra-gtr-150": {
      "name": "Honda Supra GTR 150",
      "category": "cub",
      "variants": [
        {
          "id": "hj9",
          "label": "STD",
          "otr": 28550000
        },
        {
          "id": "hjk",
          "label": "Exclusive",
          "otr": 28800000
        }
      ],
      "baseDiscGross": 1110000,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "sonic-150r": {
      "name": "Honda Sonic 150R",
      "category": "sport",
      "variants": [
        {
          "id": "hd7",
          "label": "STD",
          "otr": 29570000
        },
        {
          "id": "hdn",
          "label": "HRR",
          "otr": 29970000
        },
        {
          "id": "hdp",
          "label": "Matte Black",
          "otr": 29970000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "cb150-verza": {
      "name": "Honda CB150 Verza",
      "category": "sport",
      "variants": [
        {
          "id": "kf0",
          "label": "SW",
          "otr": 25830000
        },
        {
          "id": "kg0",
          "label": "CW",
          "otr": 26490000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "cb150r": {
      "name": "Honda CB150R Streetfire",
      "category": "sport",
      "variants": [
        {
          "id": "jr0",
          "label": "STD",
          "otr": 36040000
        },
        {
          "id": "js0",
          "label": "Special Edition",
          "otr": 37050000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "cb150x": {
      "name": "Honda CB150X",
      "category": "sport",
      "variants": [
        {
          "id": "jx0",
          "label": "STD",
          "otr": 36020000
        },
        {
          "id": "jxa",
          "label": "SE",
          "otr": 36530000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "crf150l": {
      "name": "Honda CRF150L",
      "category": "sport",
      "variants": [
        {
          "id": "es7",
          "label": "STD",
          "otr": 40050000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "cbr150r": {
      "name": "Honda CBR150R",
      "category": "sport",
      "variants": [
        {
          "id": "jmm",
          "label": "STD (JMM)",
          "otr": 40580000
        },
        {
          "id": "jm2",
          "label": "STD",
          "otr": 41290000
        },
        {
          "id": "jml",
          "label": "STD (JML)",
          "otr": 41290000
        },
        {
          "id": "kea",
          "label": "ABS (KEA)",
          "otr": 44840000
        },
        {
          "id": "ke0",
          "label": "ABS",
          "otr": 45550000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "icon-e": {
      "name": "Honda ICON e:",
      "category": "ev",
      "variants": [
        {
          "id": "mx0",
          "label": "STD",
          "otr": 28378000
        }
      ],
      "baseDiscGross": 11603500,
      "baseNote": "Diskon + Runout EV + Sales Support Tambahan EV",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "cuv-e": {
      "name": "Honda CUV e:",
      "category": "ev",
      "variants": [
        {
          "id": "mn0",
          "label": "STD",
          "otr": 55112000
        },
        {
          "id": "mp0",
          "label": "RoadSync Duo",
          "otr": 60312000
        }
      ],
      "baseDiscGross": 24420000,
      "baseNote": "Diskon + Runout EV + Sales Support Tambahan EV",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Voucher baterai (2 baterai)",
          "value": 12000000,
          "stock": true,
          "desc": "Voucher pembelian baterai - tidak mengurangi harga unit"
        },
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    },
    "em1-e": {
      "name": "Honda EM1 e:",
      "category": "ev",
      "variants": [
        {
          "id": "me0a",
          "label": "Charger",
          "otr": 46353000
        },
        {
          "id": "mh0a",
          "label": "Charger (MH0A)",
          "otr": 46853000
        }
      ],
      "baseDiscGross": 21980000,
      "baseNote": "Diskon + Runout EV + Sales Support Tambahan EV",
      "creditOnly": false,
      "segDiscGross": {},
      "gifts": [
        {
          "label": "Voucher baterai (1 baterai)",
          "value": 6000000,
          "stock": true,
          "desc": "Voucher pembelian baterai - tidak mengurangi harga unit"
        },
        {
          "label": "Jaket #cari_aman",
          "value": 150000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        },
        {
          "label": "Safety Tools",
          "value": 270000,
          "stock": true,
          "desc": "Selama persediaan masih ada"
        }
      ]
    }
  },
  "companies": {
    "kumala-pantai": {
      "name": "Hotel Kumala Pantai",
      "segment": "hotel"
    },
    "alila-seminyak": {
      "name": "Alila Seminyak",
      "segment": "hotel"
    },
    "hard-rock": {
      "name": "Hard Rock Hotel",
      "segment": "hotel"
    },
    "w-hotel": {
      "name": "W Hotel",
      "segment": "hotel"
    },
    "potato-head": {
      "name": "Potato Head",
      "segment": "hotel"
    },
    "kembali-villas": {
      "name": "Kembali Villas",
      "segment": "villa"
    }
  }
};
