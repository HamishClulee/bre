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
        "content": {
          "imgs": [
            "Besakih-Temple-1.jpg",
            "tirta-empul-2.jpg",
            "Telaga-Waja-Rafting-Tour-1.jpg",
            "ubud-royal-place-1.jpg"
          ],
          "description": ["Bali Mother Temple Tour will give you the experience of visiting the Balinese Culture. The first stop will visit the Art Villages of Tohpati Village see the process to make of Batik traditional clothes. Celuk Village to see Gold and Silver Smith then Mas Village to see Wood Carving maker. The next stop is Tirta Empul Natural Spring Water Temple to see the Balinese do purification spiritually. Drive up to see the main attraction on this tour Besakih The mother temple, the massive complex of the temple with the highest volcano in Bali as background. On the way back to your hotel will visit Kehen Temple continues to explore the Traditional Balinese Village of Penglipuran."],
          "location": DEFAULTS.location,
          "tourstart": "08.30",
          "duration": "10 Hours",
          "itinerary": [
            {
              "time": "08.30",
              "text": "Depart from your Hotel"
            },
            {
              "time": "09.30",
              "text": "Art Villages: Tohpati, Celuk, Mas Village"
            },
            {
              "time": "11.00",
              "text": "Tirta Empul Natural Spring Water Temple"
            },
            {
              "time": "13.00",
              "text": "Lunch"
            },
            {
              "time": "14.00",
              "text": "Besakih, The Mother Temple"
            },
            {
              "time": "15.30",
              "text": "Kehen Temple"
            },
            {
              "time": "16.00",
              "text": "Penglipuran Traditional Vilages"
            },
            {
              "time": "18.30",
              "text": "Arrive at your Hotel"
            },

          ], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": ["Sunblock", "Some cash for personal expenses", "Your Camera for some great shots!"], // ["", ""]
        },
      },
      {
        "title": "Bali Eastern Part Tour",
        "price": 650000,
        "charged": CAR,
        "content": {
          "imgs": [
            "Tirta-gangga-park-4.jpg",
            "ubud-royal-place-1.jpg",
            "Mount-Batur-Sunrise-5.jpg",
            "Aling-aling-waterfall.jpg",
            "Telaga-Waja-Rafting-Tour-1.jpg"
          ],
          "description": ["Bali Eastern Part Tour will show the beautiful nature of the eastern part of the Island, the first stop will be one of directional temple Goa Lawah or Bat Cave temple. Then continue to stop at Traditional Salt Maker at Kusamba Village to see how local people make salt traditionally. Drive up to the next destination the old Water Temple Palace of Tirta Gangga. After that we will visit Taman Ujung Palace which offers nice view of mountain and ocean and a well-maintained garden and fish pond. The last stop on East Bali Tour is White Sand Beach or famous with Virgin Beach to relax before going back to your Hotel."],
          "location": DEFAULTS.location,
          "tourstart": "08.30",
          "duration": "10 Hours",
          "itinerary": [
            {
              "time": "08.30",
              "text": "Depart from your Hotel"
            },
            {
              "time": "09.30",
              "text": "Goa Lawah/Elephant Cave Temple"
            },
            {
              "time": "11.00",
              "text": "Traditional Salt Maker"
            },
            {
              "time": "13.00",
              "text": "Lunch"
            },
            {
              "time": "14.00",
              "text": "Tirta Gangga Water Palace"
            },
            {
              "time": "15.00",
              "text": "Taman Ujung Palace"
            },
            {
              "time": "16.00",
              "text": "White Sand Beach/Virgin Beach"
            },
            {
              "time": "18.30",
              "text": "Arrive at your Hotel"
            },
          ], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": ["Sunblock", "Swimsuit", "Some cash for personal expenses", "Your Camera for some great shots!"], // ["", ""]
        },
      },
      {
        "title": "Bali Northern Part Tour",
        "price": 700000,
        "charged": CAR,
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
          "description": ["Bali Northern Part Tour will explore the natural beauty of the northern part of the island, start with visiting Taman Ayun the Royal Family Temple, the temple which was built in 1634 surrounded by a moat and a beautiful garden with great stone carving style.  Then continue to drive up to the north to visit jungle natural pool at Aling Aling Waterfall where can slide and swim at a natural swimming pool. On the way back will stop at Bedugul to visit Ulun Danu Temple on the lake. The last stop will be at the traditional fruit market at Candikuning to see any tropical fruit that we produce in Bali."],
          "location": DEFAULTS.location,
          "tourstart": "08.30",
          "duration": "10 Hours",
          "itinerary": [
            {
              "time": "08.30",
              "text": "Depart from your Hotel"
            },
            {
              "time": "09.30",
              "text": "Taman Ayun Temple"
            },
            {
              "time": "10.30",
              "text": "Aling Aling Waterfall"
            },
            {
              "time": "13.00",
              "text": "Lunch"
            },
            {
              "time": "14.00",
              "text": "Bedugul/Ulun Danu Temple"
            },
            {
              "time": "16.00",
              "text": "Candikuning"
            },
            {
              "time": "18.30",
              "text": "Arrive at your Hotel"
            },
          ], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": ["Sunblock", "Swimsuit", "Some cash for personal expenses", "Your Camera for some great shots!"], // ["", ""]
        },
      },
      {
        "title": "Bali Bedugul and Tanah Lot Sunset Tour",
        "price": 600000,
        "charged": CAR,
        "content": {
          "imgs": [
            "taman-ayung-temple-6.jpg",
            "Bali-Ulun-Danu-Berata-2.jpg",
            "Bali-Tanah-Lot-Temple-17.jpg",
            "Mount-Batur-Sunrise-5.jpg",
            "Tirta-gangga-park-4.jpg",
            "bali-atv-ride-1.jpg"
          ],
          "description": ["Bali Bedugul and Tanah Lot Sunset Tour will start with visiting Taman Ayun Royal Family Temple, The temple was build in 1634 which surrounded by a moat and beautiful garden. Drive up to the top of the mountain to visit Bedugul, Ulun Danu Temple on the lake with a fascinating panorama with a green mountain as background. Next stop is the traditional fruit market in Candikuning, to get an experience of tropical fruit tasting. Then visit UNESCO world heritage rice terraces of Jatiluwih which refresh your eyes and mind with the green color of rice paddy grass. The last destination will be Tanah Lot Temple on the rock which was built offshore the sea. Here is one of the best sites to see the sunset."],
          "location": DEFAULTS.location,
          "tourstart": "08.30",
          "duration": "10 Hours",
          "itinerary": [
            {
              "time": "08.30",
              "text": "Depart from your Hotel"
            },
            {
              "time": "09.30",
              "text": "Taman Ayun Temple"
            },
            {
              "time": "11.00",
              "text": "Bedugul - Ulun Danu Temple"
            },
            {
              "time": "13.00",
              "text": "Lunch"
            },
            {
              "time": "14.00",
              "text": "Candikuning"
            },
            {
              "time": "15.30",
              "text": "Jatiluwih"
            },
            {
              "time": "16.00",
              "text": "Tanah Lot"
            },
            {
              "time": "18.30",
              "text": "Arrive at your Hotel"
            },
          ], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": ["Sunblock", "Some cash for personal expenses", "Your camera for some great shots!"], // ["", ""]
        },
      },
      {
        "title": "Bali Nusa Dua and Uluwatu Sunset Tour",
        "price": 550000,
        "charged": CAR,
        "content": {
          "imgs": [
            "Uluwatu-Temple-4.jpg",
            "Uluwatu-Temple-11.jpg",
            "bali-atv-ride-1.jpg",
            "Bali-Water-Ski-Tour-8.jpg",
            "Ayung-Rafting-1.jpg",
            "Besakih-Temple-1.jpg"
          ],
          "description": ["Bali Nusa Dua and Uluwatu Sunset Tour's main attraction is to see Kecak and Fire Dance during a beautiful sunset at Uluwatu. This tour will start with visiting white sandy Nusa Dua beach where also you can see the water blow when the tide hits the rock. Then visit Garuda Wisnu Kencana (GWK), which planned to be established a landmark or Bali mascot in the form of the giant statue of Lord of Wisnu ride His vehicle call Garuda.  Continue the tour to visit the beautiful tiny white sandy beaches, Padang Padang Beach. Then we visit the last and main attraction on this tour Uluwatu Temple on a high cliff where you can see a lot of monkeys around the temple. The sunset will perform traditional Kecak and Fire Dance which taken from Ramayana Story which perform by 60 dancers. On the way back to the Hotel you can enjoy the fresh seafood dinner at a local restaurant at Jimbaran Bay where the tables set up on the beach."],
          "tourstart": "08.30",
          "duration": "10 Hours",
          "itinerary": [
            {
              "time": "08.30",
              "text": "Depart from your Hotel"
            },
            {
              "time": "09.30",
              "text": "Nusa Dua Beach and Water Blow"
            },
            {
              "time": "11.00",
              "text": "Garuda Wisnu Kencana (GWK)"
            },
            {
              "time": "13.00",
              "text": "Lunch at GWK"
            },
            {
              "time": "14.00",
              "text": "Padang Padang Beach"
            },
            {
              "time": "16.00",
              "text": "Uluwatu Temple and watch Kecak and Fire Dance"
            },
            {
              "time": "17.00",
              "text": "Jimbaran Bay"
            },
            {
              "time": "18.30",
              "text": "Arrive at your Hotel"
            },
          ], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": ["Sunblock", "Swimsuit", "Some cash for personal expenses", "Your Camera for some great shots!"], // ["", ""]
        },
      },
      {
        "title": "Bali Ubud and Tanah Lot Sunset Tour",
        "price": 600000,
        "charged": CAR,
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
          "description": ["Bali Ubud and Tanah Lot Tour will start to see a traditional Barong and Keris Dance at Batubulan Village, then make a stop at Art Villages such as Batik traditional Clothes factory, Celuk village as the center of Gold and Silver Smith and Mas Village as the center of Wood Carving.  Continue the tour to Batuan Village temple which was built in 1910 and has a unique and artistic stone carving. After that explore the beauty of Sacred Monkey Forest Sanctuary in Ubud.  The next stop is the center of Ubud to explore the Ubud traditional art market and Ubud Palace. Last destination in this trip is Tanah Lot temple on the rock offshore the sea to enjoy one of the magnificent places to see the sunset in Bali."],
          "tourstart": "08.30",
          "duration": "10 Hours",
          "itinerary": [
            {
              "time": "08.30",
              "text": "Depart from your Hotel"
            },
            {
              "time": "09.30",
              "text": "Watch Barong and Keris Dance"
            },
            {
              "time": "10.30",
              "text": "Art Villages"
            },
            {
              "time": "11.00",
              "text": "Batuan Village Temple"
            },
            {
              "time": "13.00",
              "text": "Lunch"
            },
            {
              "time": "14.00",
              "text": "Monkey Forest"
            },
            {
              "time": "15.00",
              "text": "Ubud Art Market and Ubud Palace"
            },
            {
              "time": "16.00",
              "text": "Tanah Lot Temple"
            },
            {
              "time": "18.30",
              "text": "Arrive at your Hotel"
            },
          ], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": ["Sunblock", "Some cash for personal expense", "Your Camera for some great shots!"], // ["", ""]
        },
      },
      {
        "title": "Bali Ubud Waterfall Tour",
        "price": 550000,
        "charged": CAR,
        "content": {
          "imgs": [
            "TegenunganWaterfall02.jpg",
            "Tegalalang-Rice-Terrace-3.jpg",
            "Mount-Agung-Sunrise-10.jpg",
            "Bali-Water-Ski-Tour-8.jpg",
            "ubud-royal-place-1.jpg"
          ],
          "description": ["Ubud waterfall tour is a combination between culture and nature beauty, the first stop will be at Tegenungan Waterfall, a waterfall that has a stunning view along the way down and allow you to swim in there. Then we will direct you to visit Goa Gajah Elephant Cave Temple, one of the archeological site which has amazing relief and was built date back to 13th – 14th Century. Then drive up to see Tegalalang Rice Terraces. On the way back will make a stop to explore the Sacred Monkey Forest Sanctuary in the center of Ubud.",
          "After that will explore the traditional art market of Ubud Market where you can visit Ubud Royal Palace and Saraswati  Temple which located close to the market."
          ],
          "tourstart": "08.30",
          "duration": "10 Hours",
          "itinerary": [
            {
              "time": "08.30",
              "text": "Depart from your Hotel"
            },
            {
              "time": "09.30",
              "text": "Tegenungan Waterfalls"
            },
            {
              "time": "10.30",
              "text": "Goa Gajah (AKA The Elephant Cave) Temple"
            },
            {
              "time": "11.00",
              "text": "Monkey Forest"
            },
            {
              "time": "13.00",
              "text": "Lunch"
            },
            {
              "time": "14.00",
              "text": "Tegalalang Rice Terraces"
            },
            {
              "time": "15.30",
              "text": "Ubud Art Market"
            },
            {
              "time": "16.00",
              "text": "Ubud Royal Palace and Saraswati Temple"
            },
            {
              "time": "18.30",
              "text": "Arrive at your Hotel"
            },
          ], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": ["Sunblock", "Swimsuit", "Some cash for personal expenses", "Your Camera for some great shots!"], // ["", ""]
        },
      },
    ],
    "halfday": [
      {
        "title": "Bali Uluwatu Tour",
        "price": 450000,
        "charged": CAR,
        "content": {
          "imgs": [
            "Uluwatu-Temple-11.jpg",
            "Ayung-Rafting-1.jpg",
            "Bali-Ulun-Danu-Berata-2.jpg",
            "turbing.jpg",
            "Tirta-gangga-park-4.jpg"
          ],
          "description": ["The Uluwatu Tour will bring you to the wonderful memory with three different experiences as the feature of this package. This half-day tour is an exciting short trip to visit the Uluwatu Temple, the most famous Balinese temple in the south part of Bali. This temple has a breathtaking sunset view of rock cliff temple facing the Indian ocean. The temple is located right on the petrifying hill with the crevasse that exists on the right and left side. Then the tour continues to enjoy watching the Kecak and Fire Dance performance near the temple in an open-air theatre. This is a spectacular traditional Balinese dance with a group of people dancing with fire, and then the tour will continue to visit Jimbaran Bay Beach. Next, you can have a delicious seafood dinner on the beach. This place is located in the southern part of Bali with seafood restaurants along the beautiful beach."],
          "tourstart": "13.00",
          "duration": "6 Hours",
          "itinerary": ["Uluwatu Temple", "Watch Kecak and Fire Dance", "Jimbaran Bay Beach", "Fresh Seafood Dinner at the Bay"], // [{"" : ""}, {"" : ""}]
          "included": DEFAULTS.included,
          "notincluded": DEFAULTS.notincluded,
          "note": DEFAULTS.note,
          "bring": ["Sunblock", "Some cash for personal expenses", "Your Camera for some great shots!"], // ["", ""]
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