/* eslint-disable */
const CAR = "car"
const PERSON = "person"
const DEFAULTS = {
  "included": "The price you see listed on this page includes the tour guide, a comfortable air-conditioned vehicle, parking fees, any necessary Balinese dress and satisfaction guaranteed!",
  "notincluded": "Entrance fees, donations, tickets for performances, your meals, drinks and other personal expenses.",
  "note": "This tour is completely customizable and we are happy to adjust it to include or exclude anything you'd like. We do recommend finalizing your choices as early as possible on the morning of the tour, as weather conditions can alter the feasability of your choices.",
  "location": "Pick up from your hotel or villa."
}

const C = {
    "fullday": [
      {
        "title": "Bali Kintamani Volcano Tour",
        "price": 600000,
        "charged": CAR,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-kintamani-volcano-tour\/",
        "content": {
          "imgs": [
            "Barong-and-Kecak-Dance.jpg",
            "tirta-empul-2.jpg",
            "Kintamani-Village-7.jpg",
            "Tegalalang-Rice-Terrace-3.jpg"
          ],
          "description": ["Join us for a taste of Ubud's cultural and artistic heritage as well as panoramic views of Kintamani Mt. Batur's volcano and lake. You will also get to taste of famous Balinese coffee and stop for pictures at the island's most beautiful rice terraces, Tegalalang."],
          "location": DEFAULTS.location,
          "tourstart": "08.30",
          "duration": "10 Hours",
          "itinerary": [
            {
              "time": "08.30",
              "text": "Depart from your hotel"
            },
            {
              "time": "09.30",
              "text": "Batubulan Village - Barong and Keris Cultural Dance Show"
            },
            {
              "time": "10.30",
              "text": "Ubud Art Villages - Visit Celuk and Mas, famous for silversmithing and wood carving"
            },
            {
              "time": "11.00",
              "text": "Your choice: Holy Water Temple (Tirta Empul) or Elephant Cave (Goa Gajah)"
            },
            {
              "time": "13.00",
              "text": "Lunch"
            },
            {
              "time": "14.00",
              "text": "Mt. Batur Volcano and scenic Lake Batur"
            },
            {
              "time": "15.00",
              "text": "Visit a local coffee and spice plantation (taste the famous civet coffee)"
            },
            {
              "time": "15.30",
              "text": "Tegalalang Rice Terraces - for great photos of the sweeping rice terraces"
            },
            {
              "time": "16.00",
              "text": "Ubud - stop at key sites like Monkey Forest, Ubud Palace, Ubud Market"
            },
            {
              "time": "18.30",
              "text": "Arrive at your hotel"
            },
          ],
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": ["Sunblock", "Some cash for personal expenses", "Your camera for some great shots!"],
        },
      },
      {
        "title": "Bali Mother Temple Tour",
        "price": 650000,
        "charged": CAR,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-mother-temple-tour\/",
        "content": {
          "imgs": [
            "Besakih-Temple-1.jpg",
            "tirta-empul-2.jpg",
            "9.jpg",
            "Telaga-Waja-Rafting-Tour-1.jpg",
            "ubud-royal-place-1.jpg"
          ],
          "description": ["Bali Mother Temple Tour will give you the experience of visiting the Balinese Culture. The first stop will visit the Art Villages of Tohpati Village see the process to make of Batik traditional clothes. Celuk Village to see Gold and Silver Smith then Mas Village to see Wood Carving maker. The next stop is Tirta Empul Natural Spring Water Temple to see the Balinese do purification spiritually. Drive up to see the main attraction on this tour Besakih The mother temple, the massive complex of the temple with the highest volcano in Bali as background. On the way back to your hotel will visit Kehen Temple continues to explore the Traditional Balinese Village of Penglipuran."],
          "location": DEFAULTS.location,
          "tourstart": "08.30",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Bali Eastern Part Tour",
        "price": 650000,
        "charged": CAR,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-eastern-part-tour\/",
        "content": {
          "imgs": [
            "Tirta-gangga-park-4.jpg",
            "ubud-royal-place-1.jpg",
            "Mount-Batur-Sunrise-5.jpg",
            "Aling-aling-waterfall.jpg",
            "Telaga-Waja-Rafting-Tour-1.jpg"
          ],
          "description": [],
          "location": DEFAULTS.location,
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Bali Northern Part Tour",
        "price": 700000,
        "charged": CAR,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-northern-part-tour\/",
        "content": {
          "imgs": [
            "Aling-aling-waterfall.jpg",
            "taman-ayung-temple-6.jpg",
            "Bali-Ulun-Danu-Berata-2.jpg",
            "Bali-Water-Ski-Tour-8.jpg",
            "turbing.jpg",
            "TegenunganWaterfall02.jpg",
            "bali-atv-ride-1.jpg"
          ],
          "description": [],
          "location": DEFAULTS.location,
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Bali Bedugul and Tanah Lot Sunset Tour",
        "price": 600000,
        "charged": CAR,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-bedugul-and-tanah-lot-sunset-tour\/",
        "content": {
          "imgs": [
            "taman-ayung-temple-6.jpg",
            "Bali-Ulun-Danu-Berata-2.jpg",
            "Bali-Tanah-Lot-Temple-17.jpg",
            "Mount-Batur-Sunrise-5.jpg",
            "Tirta-gangga-park-4.jpg",
            "bali-atv-ride-1.jpg"
          ],
          "description": [],
          "location": DEFAULTS.location,
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Bali Nusa Dua and Uluwatu Sunset Tour",
        "price": 550000,
        "charged": CAR,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-nusa-dua-and-uluwatu-sunset-tour\/",
        "content": {
          "imgs": [
            "Uluwatu-Temple-4.jpg",
            "Uluwatu-Temple-11.jpg",
            "bali-atv-ride-1.jpg",
            "Bali-Water-Ski-Tour-8.jpg",
            "Ayung-Rafting-1.jpg",
            "Besakih-Temple-1.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Bali Ubud and Tanah Lot Sunset Tour",
        "price": 600000,
        "charged": CAR,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-ubud-and-tanah-lot-sunset-tour\/",
        "content": {
          "imgs": [
            "Bali-Tanah-Lot-Temple-17.jpg",
            "Barong-and-Kecak-Dance.jpg",
            "Batuan-Temple-1.jpg",
            "Uluwatu-Temple-4.jpg",
            "Bali-Ulun-Danu-Berata-2.jpg",
            "TegenunganWaterfall02.jpg",
            "bali-atv-ride-1.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Bali Ubud Waterfall Tour",
        "price": 550000,
        "charged": CAR,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-ubud-waterfall-tour\/",
        "content": {
          "imgs": [
            "TegenunganWaterfall02.jpg",
            "Tegalalang-Rice-Terrace-3.jpg",
            "Mount-Agung-Sunrise-10.jpg",
            "Bali-Water-Ski-Tour-8.jpg",
            "ubud-royal-place-1.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
    ],
    "halfday": [
      {
        "title": "Bali Uluwatu Tour",
        "price": 450000,
        "charged": CAR,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-uluwatu-tour\/",
        "content": {
          "imgs": [
            "Uluwatu-Temple-11.jpg",
            "Ayung-Rafting-1.jpg",
            "Bali-Ulun-Danu-Berata-2.jpg",
            "turbing.jpg",
            "Tirta-gangga-park-4.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Bali Tanah Lot Sunset Tour",
        "price": 450000,
        "charged": CAR,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-tanah-lot-sunset-tour\/",
        "content": {
          "imgs": [
            "taman-ayung-temple-6.jpg",
            "Bali-Tanah-Lot-Temple-17.jpg",
            "ubud-royal-place-1.jpg",
            "lempuyang-trekking-tour.jpg",
            "bali-atv-ride-1.jpg",
            "Besakih-Temple-1.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Bali Ubud Tour",
        "price": 450000,
        "charged": CAR,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-ubud-tour\/",
        "content": {
          "imgs": [
            "ubud-royal-place-1.jpg",
            "Mount-Agung-Sunrise-10.jpg",
            "bali-atv-ride-1.jpg",
            "lempuyang-trekking-tour.jpg",
            "Tirta-gangga-park-4.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      }
    ],
    "activities": [
      {
        "title": "WHITE WATER RAFTING ADVENTURES",
        "price": 600000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/white-water-rafting-adventures\/",
        "content": {
          "imgs": [
            "Ayung-Rafting-1.jpg",
            "Bali-Tanah-Lot-Temple-17.jpg",
            "Twin-Lake-Trekking.jpg",
            "Kintamani-Village-7.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Water Sports Packages",
        "price": 700000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/water-sports-packages\/",
        "content": {
          "imgs": [
            "Besakih-Temple-1.jpg",
            "Telaga-Waja-Rafting-Tour-1.jpg",
            "Mount-Agung-Sunrise-10.jpg",
            "Uluwatu-Temple-4.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Visit Bali Safari and Marine Park",
        "price": 700000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/visit-bali-safari-and-marine-park\/",
        "content": {
          "imgs": [
            "Mount-Agung-Sunrise-10.jpg",
            "Twin-Lake-Trekking.jpg",
            "Kintamani-Village-7.jpg",
            "bali-atv-ride-1.jpg"
          ],
          "description": [
          ],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Cycling Kintamani",
        "price": 600000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/cycling-kintamani\/",
        "content": {
          "imgs": [
            "Bali-Water-Ski-Tour-8.jpg",
            "Uluwatu-Temple-11.jpg",
            "Bali-Ulun-Danu-Berata-2.jpg",
            "Uluwatu-Temple-4.jpg"
          ],
          "description": [
          ],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "BALI RIVER TUBING",
        "price": 900000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-river-tubing\/",
        "content": {
          "imgs": [
            "Tirta-gangga-park-4.jpg",
            "Bali-Tanah-Lot-Temple-17.jpg",
            "taman-ayung-temple-6.jpg",
            "Uluwatu-Temple-4.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Acivity in Bali \u2013 ATV Ride",
        "price": 1100000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/acivity-in-bali-atv-ride\/",
        "content": {
          "imgs": [
            "bali-atv-ride-1.jpg",
            "Aling-aling-waterfall.jpg",
            "Uluwatu-Temple-4.jpg",
            "Sukempul.jpg",
            "Mount-Batur-Sunrise-5.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      }
    ],
    "trekking": [
      {
        "title": "Bali Mount Batur Sunrise Trekking",
        "price": 850000,
        "charged": PERSON,  
        "link": "https:\/\/baliclassictour.com\/tour\/bali-mount-batur-sunrise-trekking\/",
        "content": {
          "imgs": [
            "toya-bungkah.jpg",
            "Mount-Batur-Sunrise-5.jpg",
            "Besakih-Temple-1.jpg",
            "Mount-Agung-Sunrise-10.jpg",
            "Ayung-Rafting-1.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Mount Batur Sunrise Trekking & Natural Hot Spring",
        "price": 1100000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/mount-batur-sunrise-trekking-natural-hot-spring\/",
        "content": {
          "imgs": [
            "Mount-Batur-Sunrise-5.jpg",
            "toya-bungkah.jpg",
            "turbing.jpg",
            "Mount-Agung-Sunrise-10.jpg",
            "Telaga-Waja-Rafting-Tour-1.jpg",
            "Tirta-gangga-park-4.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Mount Batur Sunrise Trekking and White Water Rafting",
        "price": 1450000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/mount-batur-sunrise-trekking-and-white-water-rafting\/",
        "content": {
          "imgs": [
            "Twin-Lake-Trekking.jpg",
            "Mount-Batur-Sunrise-5.jpg",
            "toya-bungkah.jpg",
            "Ayung-Rafting-1.jpg",
            "9.jpg",
            "Mount-Agung-Sunrise-10.jpg",
            "Aling-aling-waterfall.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Mount Batur Sunrise Trekking and ATV Quad Ride",
        "price": 1750000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/mount-batur-sunrise-trekking-and-atv-quad-ride\/",
        "content": {
          "imgs": [
            "bali-atv-ride-1.jpg",
            "Mount-Batur-Sunrise-5.jpg",
            "bali-atv-ride-1.jpg",
            "toya-bungkah.jpg",
            "Kintamani-Village-7.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Bali Twin Lake Trekking Tour",
        "price": 850000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/bali-twin-lake-trekking-tour\/",
        "content": {
          "imgs": [
            "Bali-Ulun-Danu-Berata-2.jpg",
            "Twin-Lake-Trekking.jpg",
            "bali-atv-ride-1.jpg",
            "toya-bungkah.jpg",
            "Bali-Tanah-Lot-Temple-17.jpg",
            "Uluwatu-Temple-4.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Sekumpul Waterfalls Trekking Tour",
        "price": 800000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/sekumpul-waterfalls-trekking-tour\/",
        "content": {
          "imgs": [
            "Sukempul.jpg",
            "Bali-Ulun-Danu-Berata-2.jpg",
            "Bali-Tanah-Lot-Temple-17.jpg",
            "Bali-Water-Ski-Tour-8.jpg",
            "9.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Lempuyang Temple Trekking Tour",
        "price": 1550000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/lempuyang-temple-trekking-tour\/",
        "content": {
          "imgs": [
            "lempuyang-trekking-tour.jpg",
            "Tirta-gangga-park-4.jpg",
            "taman-ayung-temple-6.jpg",
            "Ayung-Rafting-1.jpg",
            "ubud-royal-place-1.jpg",
            "Twin-Lake-Trekking.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      },
      {
        "title": "Mount Agung Sunrise Trekking",
        "price": 1550000,
        "charged": PERSON,
        "link": "https:\/\/baliclassictour.com\/tour\/mount-agung-sunrise-trekking\/",
        "content": {
          "imgs": [
            "Mount-Agung-Sunrise-10.jpg",
            "Bali-Water-Ski-Tour-8.jpg",
            "Besakih-Temple-1.jpg",
            "bali-atv-ride-1.jpg"
          ],
          "description": [],
          "tourstart": "",
          "duration": "",
          "itinerary": [], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": [], // ["", ""]
        },
      }
    ]
  }

  export default { C }