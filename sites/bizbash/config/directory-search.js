const markets = {
  name: 'Market',
  values: [
    {
      id: 2000027,
      name: 'Atlanta',
    },
    {
      id: 2000028,
      name: 'Atlantic City',
    },
    {
      id: 2000029,
      name: 'Austin',
    },
    {
      id: 2000023,
      name: 'Boston',
    },
    {
      id: 2000021,
      name: 'Chicago',
    },
    {
      id: 2000030,
      name: 'Dallas/Fort Worth',
    },
    {
      id: 2000031,
      name: 'Houston',
    },

    {
      id: 2000024,
      name: 'Las Vegas',
    },
    {
      id: 2000017,
      name: 'Los Angeles',
    },
    {
      id: 2000025,
      name: 'Miami/South Florida',
    },
    {
      id: 2000038,
      name: 'Montreal',
    },
    {
      id: 2000016,
      name: 'New York',
    },
    {
      id: 2000026,
      name: 'Orlando/Central Florida',
    },
    {
      id: 2000034,
      name: 'Philadelphia',
    },
    {
      id: 2000035,
      name: 'Phoenix/Scottsdale',
    },
    {
      id: 2000036,
      name: 'San Diego',
    },
    {
      id: 2000037,
      name: 'San Francisco',
    },
    {
      id: 2000020,
      name: 'Toronto',
    },

    {
      id: 2000018,
      name: 'Washington, D.C.',
    },
    {
      id: 3125552,
      name: 'Vancouver',
    },
  ],
};
const venueDirectory = {
  api: 'https://nwmj632le8.execute-api.us-east-1.amazonaws.com/test',
  featureExpression: '_score*((_time > featured_start && _time < featured_end) ? 100 : 1)',
  sort: 'featured desc, modified desc',
  pageSize: 25,
  type: 'Venue',
  facets: {
    market: markets,
    topic: {
      name: 'Categories',
      facetType: 'topic',
      values: [
        {
          id: 62670,
          name: 'Academic Facilities',
        },
        {
          id: 62671,
          name: 'Activity Venues',
          childFacets: [
            {
              id: 62672,
              name: 'Arcades/Virtual Reality Centers',
            },
            {
              id: 62673,
              name: 'Bowling Alleys',
            },
            {
              id: 62674,
              name: 'Cooking Schools & Tasting Venues',
            },
            {
              id: 62675,
              name: 'Dance Class Venues',
            },
            {
              id: 62676,
              name: 'Golf (Miniature or Driving Ranges)',
            },
            {
              id: 62677,
              name: 'Horseback Riding Centers',
            },
            {
              id: 62678,
              name: 'Other Activities',
            },
            {
              id: 62679,
              name: 'Pool & Billiard Halls',
            },
            {
              id: 62680,
              name: 'Sports Venues',
            },
            {
              id: 62681,
              name: 'Tour Buses & Vans',
            },
            {
              id: 62682,
              name: 'Wine Tasting Spaces',
            },
            {
              id: 62683,
              name: 'Wineries/Breweries/Distilleries',
            },
          ],
        },
        {
          id: 62684,
          name: 'Atriums/Lobbies (All Venues)',
        },
        {
          id: 62490,
          name: 'Ballrooms (All Venues)',
        },
        {
          id: 62491,
          name: 'Banquet & Reception Halls',
        },
        {
          id: 62492,
          name: 'Bars/Nightclubs/Lounges',
          childFacets: [
            {
              id: 62493,
              name: 'All Bars/Nightclubs/Lounges with Private Space/V.I.P. Rooms',
            },
            {
              id: 62494,
              name: 'All Bars/Nightclubs/Lounges with Semiprivate Space',
            },
            {
              id: 62495,
              name: 'Bars/Lounges',
            },
            {
              id: 62496,
              name: 'Beer Gardens',
            },
            {
              id: 62497,
              name: 'Breweries/Pubs',
            },
            {
              id: 62498,
              name: 'Hotel Bars',
            },
            {
              id: 62499,
              name: 'Large Nightclubs',
            },
            {
              id: 62500,
              name: 'Sports Bars',
            },
            {
              id: 62501,
              name: 'Wine/Champagne Bars',
            },
          ],
        },
        {
          id: 62685,
          name: 'Boats/Cruises',
          childFacets: [
            {
              id: 62686,
              name: 'Boats',
            },
            {
              id: 62687,
              name: 'Cruise Lines',
            },
            {
              id: 62688,
              name: 'Yachts',
            },
          ],
        },
        {
          id: 62689,
          name: 'Casinos',
        },
        {
          id: 62502,
          name: 'Conference Centers, Convention Centers & Auditoriums',
          childFacets: [
            {
              id: 62503,
              name: 'Auditoriums',
            },
            {
              id: 62504,
              name: 'Conference & Meeting Spaces',
            },
            {
              id: 62505,
              name: 'Conference Centers',
            },
            {
              id: 62506,
              name: 'Convention Centers',
            },
          ],
        },
        {
          id: 62690,
          name: 'Entertainment Venues/Performance Spaces',
          childFacets: [
            {
              id: 62691,
              name: 'Comedy Clubs',
            },
            {
              id: 62692,
              name: 'Movie Theaters',
            },
            {
              id: 62693,
              name: 'Music Clubs',
            },
            {
              id: 62694,
              name: 'Screening Rooms',
            },
            {
              id: 62695,
              name: 'Theaters/Performance Spaces',
            },
          ],
        },
        {
          id: 62696,
          name: 'Golf Courses/Country Clubs',
        },
        {
          id: 62697,
          name: 'Hotels',
          childFacets: [
            {
              id: 62698,
              name: 'Airport Hotels',
            },
            {
              id: 62699,
              name: 'All Hotels by Size',
            },
            {
              id: 62700,
              name: 'Conference Centers',
            },
            {
              id: 62701,
              name: 'Executive Suites',
            },
            {
              id: 62702,
              name: 'Full-Service Hotels',
            },
            {
              id: 62703,
              name: 'Hotels With Meeting/Event Space',
            },
            {
              id: 62704,
              name: 'Long-Term Accommodations',
            },
            {
              id: 62705,
              name: 'Luxury Hotels',
            },
            {
              id: 62706,
              name: 'Resorts/Spas & Retreats',
            },
            {
              id: 62707,
              name: 'Staff Accommodations',
            },
          ],
        },

        {
          id: 62507,
          name: 'Independent Event Spaces',
        },
        {
          id: 62708,
          name: 'Lake, River, or Oceanfront (All Venues)',
        },
        {
          id: 62508,
          name: 'Lofts/Photo Studios/Raw Spaces',
          childFacet: [
            {
              id: 62509,
              name: 'Pop-ups/Temporary Spaces',
            },
          ],
        },

        {
          id: 62709,
          name: 'Mansions/Houses',
        },
        {
          id: 62710,
          name: 'Movie Studios/Sound Stages',
        },
        {
          id: 62711,
          name: 'Museums/Cultural Spaces',
          childFacet: [
            {
              id: 62712,
              name: 'Art Galleries/Art Spaces/Auction Houses',
            },
            {
              id: 62713,
              name: 'Art Museums',
            },
            {
              id: 62714,
              name: 'Children\'s Museums',
            },
            {
              id: 62715,
              name: 'Cultural Organizations',
            },
            {
              id: 62716,
              name: 'Embassies & Consulates',
            },
            {
              id: 62717,
              name: 'Film/Media Museums',
            },
            {
              id: 62718,
              name: 'Historic Houses',
            },
            {
              id: 62719,
              name: 'Historical/Cultural Institutions',
            },
            {
              id: 62720,
              name: 'Science/Natural History Museums',
            },
          ],
        },
        {
          id: 62721,
          name: 'Outdoor Spaces',
          childFacet: [
            {
              id: 62722,
              name: 'All Outdoor Venues',
            },
            {
              id: 62723,
              name: 'Amphitheaters',
            },
            {
              id: 62724,
              name: 'Parks/Lawns/Plazas',
            },
            {
              id: 62725,
              name: 'Piers/Beaches',
            },
            {
              id: 62726,
              name: 'Swimming Pool Decks',
            },
          ],
        },
        {
          id: 62727,
          name: 'Private Clubs',
        },
        {
          id: 62728,
          name: 'Quick Trips',
          childFacet: [
            {
              id: 62729,
              name: 'Conference/Convention Centers',
            },
            {
              id: 62730,
              name: 'Event Spaces',
            },
            {
              id: 62731,
              name: 'Golf Courses/Clubs',
            },
            {
              id: 62732,
              name: 'Hotels/Inns/Casinos',
            },
            {
              id: 62733,
              name: 'Manor Houses',
            },
            {
              id: 62734,
              name: 'Museums/Attractions',
            },
            {
              id: 62735,
              name: 'Resorts/Retreats/Spas',
            },
            {
              id: 62736,
              name: 'Sports/Activity Venues',
            },
          ],
        },
        {
          id: 62737,
          name: 'Religious Spaces',
        },
        {
          id: 62738,
          name: 'Resorts',
        },
        {
          id: 62510,
          name: 'Restaurants',
          childFacet: [
            {
              id: 62511,
              name: 'All Restaurants',
            },
            {
              id: 62512,
              name: 'All Restaurants With Private Rooms',
            },
            {
              id: 62513,
              name: 'All Restaurants With Semiprivate Space',
            },
            {
              id: 62514,
              name: 'Asian Restaurants',
            },
            {
              id: 62515,
              name: 'Barbecue',
            },
            {
              id: 62516,
              name: 'Caribbean Restaurants',
            },
            {
              id: 62517,
              name: 'Casual American Restaurants',
            },
            {
              id: 62518,
              name: 'French Restaurants',
            },
            {
              id: 62519,
              name: 'German/Austrian Restaurants',
            },
            {
              id: 62520,
              name: 'Greek Restaurants',
            },
            {
              id: 62521,
              name: 'Hotel Restaurants',
            },
            {
              id: 62522,
              name: 'Indian Restaurants',
            },
            {
              id: 62523,
              name: 'Italian Restaurants',
            },
            {
              id: 62524,
              name: 'Japanese Including Sushi Restaurants',
            },
            {
              id: 62525,
              name: 'Kosher Restaurants',
            },
            {
              id: 62526,
              name: 'Latin Restaurants',
            },
            {
              id: 62527,
              name: 'Mediterranean Restaurants',
            },
            {
              id: 62528,
              name: 'Mexican Restaurants',
            },
            {
              id: 62529,
              name: 'New American Restaurants',
            },
            {
              id: 62530,
              name: 'Portuguese Restaurants',
            },
            {
              id: 62531,
              name: 'Russian/Eastern European Restaurants',
            },
            {
              id: 62532,
              name: 'Seafood Restaurants',
            },
            {
              id: 62533,
              name: 'Steak Houses',
            },
            {
              id: 62534,
              name: 'Thai/Vietnamese Restaurants',
            },
            {
              id: 62535,
              name: 'Vegetarian Restaurants',
            },
          ],
        },
        {
          id: 62739,
          name: 'Retail Venues',
        },
        {
          id: 62740,
          name: 'Spas (Day)/Relaxation Places/Salons',
        },
        {
          id: 62741,
          name: 'Stadiums/Arenas',
        },
        {
          id: 62742,
          name: 'Terraces/Roofs/Gardens/Patios (All Venues)',
          childFacet: [
            {
              id: 62743,
              name: 'Rooftops',
            },
          ],
        },
      ],
    },
  },
};

const supplierDirectory = {
  api: 'https://nwmj632le8.execute-api.us-east-1.amazonaws.com/test',
  featureExpression: '_score*((_time > featured_start && _time < featured_end) ? 100 : 1)',
  sort: 'featured desc, modified desc',
  pageSize: 25,
  type: 'Supplier',
  facets: {
    market: markets,
    topic: {
      name: 'Categories',
      facetType: 'topic',
      values: [
        {
          id: 62536,
          name: 'Activations/Activities/Experiences',
          childFacets: [
            {
              id: 62537,
              name: 'Activations/Photo & Video Booths',
            },
            {
              id: 62538,
              name: 'Arts & Crafts',
            },
            {
              id: 62539,
              name: 'Augmented and Virtual Reality',
            },
            {
              id: 62540,
              name: 'Body/Face Painting',
            },
            {
              id: 62541,
              name: 'Cooking Schools',
            },
            {
              id: 62542,
              name: 'Harbor Cruises',
            },
            {
              id: 62543,
              name: 'Harbour Cruises',
            },
            {
              id: 62544,
              name: 'Interactive Event Technology',
            },
            {
              id: 62545,
              name: 'Paintball',
            },
            {
              id: 62546,
              name: 'Shooting Sports',
            },
            {
              id: 62547,
              name: 'Spa and Salon Services/Treatments',
            },
            {
              id: 62548,
              name: 'Sporting Event Tickets',
            },
            {
              id: 62549,
              name: 'Tastings',
            },
            {
              id: 62550,
              name: 'Teambuilding Activities',
            },
            {
              id: 62551,
              name: 'Theatrical Experiences',
            },
            {
              id: 62552,
              name: 'Ticket Agents/Brokers',
            },
            {
              id: 62553,
              name: 'Tours',
            },
            {
              id: 62554,
              name: 'Wine Tastings',
            },
          ],
        },
        {
          id: 62555,
          name: 'Audiovisual Services',
          childFacets: [
            {
              id: 62556,
              name: 'Audiovisual Equipment Rentals',
            },
            {
              id: 62557,
              name: 'Audiovisual Production Companies (Full-Service)',
            },
            {
              id: 62558,
              name: 'Cell Phones/Walkie Talkies',
            },
            {
              id: 62559,
              name: 'Internet/Satellite Communications',
            },
            {
              id: 62560,
              name: 'Lighting Design/Equipment Companies',
            },
            {
              id: 62561,
              name: 'Projection/Mapping',
            },
            {
              id: 62562,
              name: 'Sound Design/Equipment Companies',
            },
            {
              id: 62563,
              name: 'Video Streaming/Platforms',
            },
            {
              id: 62564,
              name: 'Webcasting',
            },
          ],
        },
        {
          id: 62565,
          name: 'Catering/Food Services',
          childFacets: [
            {
              id: 62571,
              name: 'Decor/Design/Flowers',
            },
            {
              id: 62566,
              name: 'Food Trucks',
            },
            {
              id: 62567,
              name: 'Full-Service Caterers',
            },
            {
              id: 62568,
              name: 'Full-Service Caterers With Planning Capabilities',
            },
            {
              id: 62569,
              name: 'Light/Office Caterers',
            },
            {
              id: 62570,
              name: 'Specialists',
            },
          ],
        },
        {
          id: 62744,
          name: 'Collaboration',
        },
        {
          id: 62572,
          name: 'Decor Supply Companies',
          childFacets: [
            {
              id: 62573,
              name: 'Event Design Companies With Planning Capabilities',
            },
            {
              id: 62574,
              name: 'Event Design/Decor Companies',
            },
            {
              id: 62575,
              name: 'Floral Designers',
            },
            {
              id: 62576,
              name: 'Floral Suppliers',
            },
            {
              id: 62577,
              name: 'Plant Rentals',
            },
          ],
        },
        {
          id: 62745,
          name: 'Decor/Design/Flowers',
          childFacets: [
            {
              id: 62746,
              name: 'Decor Supply Companies',
            },
            {
              id: 62747,
              name: 'Event Design Companies With Planning Capabilities',
            },
            {
              id: 62748,
              name: 'Event Design/Decor Companies',
            },
            {
              id: 62749,
              name: 'Floral Designers',
            },
            {
              id: 62750,
              name: 'Floral Suppliers',
            },
            {
              id: 62751,
              name: 'Plant Rentals',
            },
          ],
        },
        {
          id: 62752,
          name: 'Destination Management',
        },
        {
          id: 62578,
          name: 'Entertainment',
          childFacets: [
            {
              id: 62579,
              name: 'Bands/Orchestras/Musicians',
            },
            {
              id: 62580,
              name: 'Celebrity Wrangling',
            },
            {
              id: 62581,
              name: 'Choirs/Singers',
            },
            {
              id: 62582,
              name: 'Cigar Rollers',
            },
            {
              id: 62583,
              name: 'DJs',
            },
            {
              id: 62584,
              name: 'Modeling Agents/Brokers',
            },
            {
              id: 62585,
              name: 'Music Programming',
            },
            {
              id: 62586,
              name: 'Original Music Production',
            },
            {
              id: 62587,
              name: 'Performers',
            },
            {
              id: 62588,
              name: 'Speakers',
            },
            {
              id: 62589,
              name: 'Talent Agents/Brokers',
            },
            {
              id: 62590,
              name: 'Visual Artists',
            },
            {
              id: 62591,
              name: 'Writers',
            },
          ],
        },
        {
          id: 62592,
          name: 'Event Production',
          childFacets: [
            {
              id: 62593,
              name: 'Event Production Companies',
            },
            {
              id: 62594,
              name: 'Float Design/Production',
            },
            {
              id: 62595,
              name: 'Set and Stage Design/Construction',
            },
            {
              id: 62596,
              name: 'Stage Management/Stagehands',
            },
          ],
        },
        {
          id: 62753,
          name: 'Event Technology',
          childFacets: [
            {
              id: 62754,
              name: 'App Builders',
            },
            {
              id: 62755,
              name: 'Audience Response Systems',
            },
            {
              id: 62756,
              name: 'Electronic Seating Chart Tools',
            },
            {
              id: 62757,
              name: 'Event Management Tools',
            },
            {
              id: 62758,
              name: 'Event Measurement Tools',
            },
            {
              id: 62759,
              name: 'Lead Retrieval/Management Systems',
            },
            {
              id: 62760,
              name: 'Online/Virtual Meeting Technology',
            },
            {
              id: 62761,
              name: 'Social Media Management Tools',
            },
            {
              id: 62762,
              name: 'Web Services',
            },
          ],
        },
        {
          id: 62597,
          name: 'Event/Meeting Planning & Marketing/PR',
          childFacets: [
            {
              id: 62598,
              name: 'Event Planning & Marketing Firms',
            },
            {
              id: 62599,
              name: 'Firms with Industry Specialties',
            },
            {
              id: 62600,
              name: 'Firms with Planning Specialties',
            },
            {
              id: 62601,
              name: 'Meeting Planning Firms',
            },
            {
              id: 62602,
              name: 'Public Relations Firms',
            },
            {
              id: 62603,
              name: 'Social & Wedding Planning Firms',
            },
          ],
        },
        {
          id: 62763,
          name: 'Gifts/Premiums/Awards',
          childFacets: [
            {
              id: 62764,
              name: 'Awards',
            },
            {
              id: 62765,
              name: 'Gift Bags/Packaging',
            },
            {
              id: 62766,
              name: 'Gifts/Premiums',
            },
            {
              id: 62767,
              name: 'Luxury Corporate Gifts',
            },
          ],
        },
        {
          id: 62768,
          name: 'Industry Resources',
          childFacets: [
            {
              id: 62769,
              name: 'Charitable Organizations/Donation Recipients',
            },
            {
              id: 62770,
              name: 'Educational Institutions',
            },
            {
              id: 62771,
              name: 'Industry Associations',
            },
          ],
        },
        {
          id: 62772,
          name: 'Invitations/Registration',
          childFacets: [
            {
              id: 62773,
              name: 'Calligraphy',
            },
            {
              id: 62774,
              name: 'Graphic Design',
            },
            {
              id: 62775,
              name: 'Invitation Design',
            },
            {
              id: 62776,
              name: 'Mailing Houses',
            },
            {
              id: 62777,
              name: 'Name Tags/Lanyards',
            },
            {
              id: 62778,
              name: 'Online Invitation/Registration Tools',
            },
          ],
        },
        {
          id: 62779,
          name: 'Photography/Videography',
          childFacets: [
            {
              id: 62781,
              name: 'Photographers',
            },
            {
              id: 62782,
              name: 'Videographers',
            },
          ],
        },
        {
          id: 62780,
          name: 'Photo Framing/Albums',
        },
        {
          id: 62783,
          name: 'Professional & Planning Support Services',
          childFacets: [
            {
              id: 62784,
              name: 'Accounting Services',
            },
            {
              id: 62785,
              name: 'Auction Services',
            },
            {
              id: 62786,
              name: 'Calendar Services',
            },
            {
              id: 62787,
              name: 'Insurance Services',
            },
            {
              id: 62788,
              name: 'Language/Translation Services',
            },
            {
              id: 62789,
              name: 'Legal Services',
            },
            {
              id: 62790,
              name: 'Office Supplies',
            },
          ],
        },
        {
          id: 62604,
          name: 'Rentals/Props',
          childFacets: [
            {
              id: 62605,
              name: 'Air Conditioning/Heating/Generators',
            },
            {
              id: 62606,
              name: 'Casino & Table Games',
            },
            {
              id: 62607,
              name: 'Charging Stations',
            },
            {
              id: 62608,
              name: 'Computer Rentals/Services',
            },
            {
              id: 62609,
              name: 'Costumes/Wardrobe',
            },
            {
              id: 62610,
              name: 'Furniture',
            },
            {
              id: 62611,
              name: 'Games',
            },
            {
              id: 62612,
              name: 'Hardware',
            },
            {
              id: 62613,
              name: 'Lifts/Cherry Pickers',
            },
            {
              id: 62614,
              name: 'Musical Instruments',
            },
            {
              id: 62615,
              name: 'Pipe/Drape',
            },
            {
              id: 62616,
              name: 'Portable Restrooms',
            },
            {
              id: 62617,
              name: 'Props',
            },
            {
              id: 62618,
              name: 'Red Carpet/Velvet Ropes',
            },
            {
              id: 62619,
              name: 'Searchlights',
            },
            {
              id: 62620,
              name: 'Tables/Tabletop Rentals',
            },
            {
              id: 62621,
              name: 'Tents/Canopies/Inflatable Event Structures',
            },
          ],
        },
        {
          id: 62791,
          name: 'Security/Fire & Medical Services',
          childFacets: [
            {
              id: 62793,
              name: 'Background Searches',
            },
            {
              id: 62794,
              name: 'Bomb/Contraband Detection Dogs',
            },
            {
              id: 62795,
              name: 'Event Permits',
            },
            {
              id: 62796,
              name: 'Event Security',
            },
            {
              id: 62797,
              name: 'Fire Marshall',
            },
            {
              id: 62798,
              name: 'Fireproofing',
            },
            {
              id: 62799,
              name: 'Personal/Executive Protection',
            },
          ],
        },
        {
          id: 62792,
          name: 'Ambulance/Paramedics',
        },
        {
          id: 62800,
          name: 'Signage/Banners/Printing',
          childFacets: [
            {
              id: 62801,
              name: 'Banners/Step-and-Repeats',
            },
            {
              id: 62802,
              name: 'Bus Wrapping/Vehicle Graphics',
            },
            {
              id: 62803,
              name: 'Mobile Billboards',
            },
            {
              id: 62804,
              name: 'Printing Companies',
            },
            {
              id: 62805,
              name: 'Signs',
            },
          ],
        },
        {
          id: 62806,
          name: 'Special Effects',
          childFacets: [
            {
              id: 62807,
              name: 'Bubble Machines',
            },
            {
              id: 62808,
              name: 'Confetti',
            },
            {
              id: 62809,
              name: 'Fireworks',
            },
            {
              id: 62810,
              name: 'Fog Machines',
            },
            {
              id: 62811,
              name: 'Full-Service Special Effects Companies',
            },
            {
              id: 62812,
              name: 'Pyrotechnics',
            },
            {
              id: 62813,
              name: 'Snow Machines',
            },
          ],
        },
        {
          id: 62814,
          name: 'Staffing',
          childFacets: [
            {
              id: 62815,
              name: 'Babysitting/Childcare',
            },
            {
              id: 62816,
              name: 'Bartenders',
            },
            {
              id: 62817,
              name: 'Coat Check Staff',
            },
            {
              id: 62818,
              name: 'Hospitality/Greeters',
            },
            {
              id: 62819,
              name: 'Interpreters',
            },
            {
              id: 62820,
              name: 'Janitorial Services',
            },
            {
              id: 62821,
              name: 'Medical/Emergency Support',
            },
            {
              id: 62822,
              name: 'Office Support',
            },
            {
              id: 62823,
              name: 'Stage Management/Stagehands',
            },
            {
              id: 62824,
              name: 'Wait Staff',
            },
          ],
        },
        {
          id: 62825,
          name: 'Trade Show Services',
          childFacets: [
            {
              id: 62826,
              name: 'Booth Design',
            },
            {
              id: 62827,
              name: 'Drayage',
            },
            {
              id: 62828,
              name: 'Lead Retrieval/Management Systems',
            },
            {
              id: 62829,
              name: 'Research/Attendee Qualifying Services',
            },
            {
              id: 62830,
              name: 'Show Management Firms',
            },
            {
              id: 62831,
              name: 'Trade Show Marketing Firms',
            },
          ],
        },
        {
          id: 62832,
          name: 'Transportation/Parking Services',
          childFacets: [
            {
              id: 62833,
              name: 'Airlines',
            },
            {
              id: 62834,
              name: 'Bus Services/Rentals',
            },
            {
              id: 62835,
              name: 'Car Rentals',
            },
            {
              id: 62836,
              name: 'Car/Taxi/Van Services',
            },
            {
              id: 62837,
              name: 'Cruise Ships',
            },
            {
              id: 62838,
              name: 'Delivery Services',
            },
            {
              id: 62839,
              name: 'Drayage',
            },
            {
              id: 62840,
              name: 'Helicopter Services/Rentals',
            },
            {
              id: 62841,
              name: 'Limousine Services/Rentals',
            },
            {
              id: 62842,
              name: 'Private Jet Services/Rentals',
            },
            {
              id: 62843,
              name: 'Specialty Transportation',
            },
            {
              id: 62844,
              name: 'Truck/Van Services/Rentals',
            },
            {
              id: 62845,
              name: 'Valet Parking',
            },
          ],
        },
      ],
    },
  },
};

module.exports = {
  venueDirectory,
  supplierDirectory,
};
