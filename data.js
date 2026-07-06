/* DATA PROMO KECAK MOTOR - satu-satunya file yang perlu diedit tiap bulan.
   Semua angka diskon = BRUTO (persis Tabel Sales Program, termasuk PPN 11%).
   Halaman otomatis menghitung nilai bersih. gifts stock:false = kuota habis.
   Setelah edit: upload ulang folder deploy ke Netlify. */
window.KECAK_DATA = {
  "dealer": "Kecak Motor",
  "waNumber": "6287855909295",
  "lastUpdated": "2026-07-03",
  "periodStart": "2026-07-01",
  "periodEnd": "2026-07-31",
  "monthLabel": "Juli 2026",
  "ppnRate": 0.11,
  "showSegmentAmounts": true,
  "salespeople": {
    "wirajaya": {
      "name": "Wirajaya",
      "wa": "6287886406480"
    },
    "hesty": {
      "name": "Hesty",
      "wa": "6287860852525"
    },
    "diah": {
      "name": "Diah",
      "wa": "6285792032052"
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
  "trackEndpoint": "",
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
          "otr": 20440000
        },
        {
          "id": "mk2",
          "label": "CBS ISS Deluxe",
          "otr": 21240000
        },
        {
          "id": "ml2",
          "label": "DLX Smart Key",
          "otr": 21850000
        }
      ],
      "baseDiscGross": 222000,
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
        },
        {
          "label": "Jaket BeAT Sporty",
          "value": 150000,
          "stock": true,
          "desc": "Kuota terbatas, selama persediaan ada"
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
          "otr": 21380000
        }
      ],
      "baseDiscGross": 555000,
      "baseNote": "Program Street Warior",
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
    "genio": {
      "name": "Honda Genio",
      "category": "matic",
      "variants": [
        {
          "id": "ly2",
          "label": "CBS",
          "otr": 21710000
        },
        {
          "id": "lyp",
          "label": "CBS SPC Color",
          "otr": 21980000
        },
        {
          "id": "lz2",
          "label": "CBS ISS",
          "otr": 22170000
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
          "otr": 24850000,
          "discGross": 499500
        },
        {
          "id": "mr0c",
          "label": "Energetic (MR0C)",
          "otr": 24980000
        },
        {
          "id": "mrae",
          "label": "Fashion",
          "otr": 25200000,
          "discGross": 499500
        },
        {
          "id": "mrbe",
          "label": "Fashion (MRBE)",
          "otr": 25200000,
          "discGross": 499500
        },
        {
          "id": "mrbc",
          "label": "Fashion (MRBC)",
          "otr": 25330000
        },
        {
          "id": "mrac",
          "label": "Fashion (MRAC)",
          "otr": 25330000
        },
        {
          "id": "ms0e",
          "label": "Prestige",
          "otr": 26080000,
          "discGross": 499500
        },
        {
          "id": "msae",
          "label": "Stylish",
          "otr": 26080000,
          "discGross": 499500
        },
        {
          "id": "ms1e",
          "label": "Prestige (MS1E)",
          "otr": 26080000,
          "discGross": 499500
        },
        {
          "id": "msbe",
          "label": "Stylish (MSBE)",
          "otr": 26080000,
          "discGross": 499500
        },
        {
          "id": "mrbx",
          "label": "Fashion Special Color",
          "otr": 26985000
        },
        {
          "id": "ms1k",
          "label": "Kuromi Limited Edition",
          "otr": 27335000
        }
      ],
      "baseDiscGross": 333000,
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
          "otr": 26530000
        },
        {
          "id": "md1b",
          "label": "CBS ISS",
          "otr": 27460000
        },
        {
          "id": "ne0b",
          "label": "CBS ISS (NE0B)",
          "otr": 28420000
        },
        {
          "id": "nf0b",
          "label": "STD",
          "otr": 28820000,
          "discGross": 555000
        },
        {
          "id": "nf0c",
          "label": "STD (NF0C)",
          "otr": 28950000,
          "discGross": 555000
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
      "baseDiscGross": 2220000,
      "baseNote": "Run out Vario 160 generasi sebelumnya",
      "creditOnly": false,
      "segDiscGross": {
        "hotel": 2220000,
        "villa": 2220000,
        "kmp": 2220000,
        "sppg": 2220000,
        "tradein": 2220000
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
          "label": "Jaket Vario 160",
          "value": 150000,
          "stock": true,
          "desc": "Kuota terbatas, selama persediaan ada"
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
          "otr": 30260000
        },
        {
          "id": "my0b",
          "label": "CBS Nitro",
          "otr": 30510000
        },
        {
          "id": "mz0b",
          "label": "ABS",
          "otr": 33290000
        }
      ],
      "baseDiscGross": 333000,
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
        },
        {
          "label": "Jaket Vario 160",
          "value": 150000,
          "stock": true,
          "desc": "Kuota terbatas, selama persediaan ada"
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
          "otr": 31020000
        },
        {
          "id": "mf1d",
          "label": "CBS KC",
          "otr": 31210000
        },
        {
          "id": "mf1x",
          "label": "CBS Special Color",
          "otr": 33555000
        },
        {
          "id": "mg0b",
          "label": "ABS",
          "otr": 34120000
        },
        {
          "id": "mg1d",
          "label": "ABS KC",
          "otr": 34310000
        },
        {
          "id": "mgad",
          "label": "ABS SPC",
          "otr": 35910000
        },
        {
          "id": "mg1x",
          "label": "ABS Special Color",
          "otr": 36655000
        }
      ],
      "baseDiscGross": 0,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {
        "hotel": 666000,
        "villa": 666000,
        "kmp": 666000,
        "sppg": 666000,
        "tradein": 666000
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
          "otr": 35820000
        },
        {
          "id": "mv1",
          "label": "ABS",
          "otr": 39755000
        },
        {
          "id": "mw1",
          "label": "ABS RoadSync",
          "otr": 43215000
        }
      ],
      "baseDiscGross": 666000,
      "baseNote": "",
      "creditOnly": false,
      "segDiscGross": {
        "hotel": 999000,
        "villa": 999000,
        "kmp": 999000,
        "sppg": 999000,
        "ojol": 999000,
        "rentbike": 999000,
        "tradein": 999000
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
          "otr": 38920000
        },
        {
          "id": "nb0",
          "label": "ABS",
          "otr": 42080000
        },
        {
          "id": "nc0",
          "label": "ABS RoadSync",
          "otr": 43810000
        }
      ],
      "baseDiscGross": 3330000,
      "baseNote": "Run out ADV - cek tahun produksi unit ke sales",
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
          "otr": 19140000
        },
        {
          "id": "gd4",
          "label": "STD",
          "otr": 20860000
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
          "otr": 22430000
        },
        {
          "id": "gf5",
          "label": "CW",
          "otr": 23530000
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
          "otr": 28280000
        },
        {
          "id": "hjk",
          "label": "Exclusive",
          "otr": 28530000
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
          "otr": 29300000
        },
        {
          "id": "hdn",
          "label": "HRR",
          "otr": 29700000
        },
        {
          "id": "hdp",
          "label": "Matte Black",
          "otr": 29700000
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
          "otr": 25570000
        },
        {
          "id": "kg0",
          "label": "CW",
          "otr": 26230000
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
          "otr": 35310000
        },
        {
          "id": "js0",
          "label": "Special Edition",
          "otr": 36320000
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
          "otr": 35900000
        },
        {
          "id": "jxa",
          "label": "SE",
          "otr": 36410000
        }
      ],
      "baseDiscGross": 5600000,
      "baseNote": "Run out - khusus pembelian credit",
      "creditOnly": true,
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
          "otr": 39810000
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
          "otr": 40290000
        },
        {
          "id": "jm2",
          "label": "STD",
          "otr": 41000000
        },
        {
          "id": "jml",
          "label": "STD (JML)",
          "otr": 41000000
        },
        {
          "id": "kea",
          "label": "ABS (KEA)",
          "otr": 44540000
        },
        {
          "id": "ke0",
          "label": "ABS",
          "otr": 45250000
        }
      ],
      "baseDiscGross": 5600000,
      "baseNote": "Run out tipe tertentu - khusus credit, cek kode unit",
      "creditOnly": true,
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
    "cbr250rr": {
      "name": "Honda CBR250RR",
      "category": "sport",
      "variants": [
        {
          "id": "ka0",
          "label": "STD",
          "otr": 76070000
        },
        {
          "id": "kaa",
          "label": "STD (KAA)",
          "otr": 80440000
        },
        {
          "id": "kb0",
          "label": "ABS",
          "otr": 87800000
        },
        {
          "id": "kc0",
          "label": "ABS + QS",
          "otr": 91850000
        },
        {
          "id": "kca",
          "label": "ABS + QS (KCA)",
          "otr": 92450000
        },
        {
          "id": "kcb",
          "label": "ABS + QS (KCB)",
          "otr": 92450000
        }
      ],
      "baseDiscGross": 5600000,
      "baseNote": "Run out - khusus pembelian credit",
      "creditOnly": true,
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
      "baseDiscGross": 5600000,
      "baseNote": "Run out - khusus pembelian credit",
      "creditOnly": true,
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
