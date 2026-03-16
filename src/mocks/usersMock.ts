const usersMock = {
  results: [
    {
      gender: "male",
      email: "george.bluth@example.com",
      phone: "(272) 790-0888",
      cell: "(489) 330-2385",

      name: {
        first: "George",
        last: "Bluth",
      },

      login: {
        uuid: "1",
      },

      dob: {
        date: "1988-03-08T15:13:16.688Z",
        age: 36,
      },

      location: {
        street: {
          number: 8929,
          name: "Valwood Pkwy",
        },
        city: "Billings",
        state: "Michigan",
        country: "United States",
        postcode: "63104",
        coordinates: {
          latitude: "-69.8246",
          longitude: "134.8719",
        },
      },

      picture: {
        large: "https://randomuser.me/api/portraits/men/1.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/1.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
      },
    },

    {
      gender: "female",
      email: "janet.weaver@example.com",
      phone: "(272) 790-0888",
      cell: "(489) 330-2385",

      name: {
        first: "Janet",
        last: "Weaver",
      },

      login: {
        uuid: "2",
      },

      dob: {
        date: "1991-07-15T11:20:10.000Z",
        age: 33,
      },

      location: {
        street: {
          number: 120,
          name: "Maple Street",
        },
        city: "Seattle",
        state: "Washington",
        country: "United States",
        postcode: "98101",
        coordinates: {
          latitude: "-45.3242",
          longitude: "120.9123",
        },
      },

      picture: {
        large: "https://randomuser.me/api/portraits/women/2.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/2.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
      },
    },

    {
      gender: "female",
      email: "emma.wong@example.com",
      phone: "(272) 790-0888",
      cell: "(489) 330-2385",

      name: {
        first: "Emma",
        last: "Wong",
      },

      login: {
        uuid: "3",
      },

      dob: {
        date: "1995-01-12T09:45:10.000Z",
        age: 29,
      },

      location: {
        street: {
          number: 45,
          name: "Queen Street",
        },
        city: "Toronto",
        state: "Ontario",
        country: "Canada",
        postcode: "M5H 2N2",
        coordinates: {
          latitude: "43.6532",
          longitude: "-79.3832",
        },
      },

      picture: {
        large: "https://randomuser.me/api/portraits/women/3.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/3.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
      },
    },

    {
      gender: "female",
      email: "eve.holt@example.com",
      phone: "(272) 790-0888",
      cell: "(489) 330-2385",

      name: {
        first: "Eve",
        last: "Holt",
      },

      login: {
        uuid: "4",
      },

      dob: {
        date: "1985-11-30T08:15:00.000Z",
        age: 38,
      },

      location: {
        street: {
          number: 88,
          name: "Sunset Boulevard",
        },
        city: "Los Angeles",
        state: "California",
        country: "United States",
        postcode: "90028",
        coordinates: {
          latitude: "34.0522",
          longitude: "-118.2437",
        },
      },

      picture: {
        large: "https://randomuser.me/api/portraits/women/4.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/4.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg",
      },
    },

    {
      gender: "male",
      email: "charles.morris@example.com",
      phone: "(272) 790-0888",
      cell: "(489) 330-2385",

      name: {
        first: "Charles",
        last: "Morris",
      },

      login: {
        uuid: "5",
      },

      dob: {
        date: "1990-04-02T13:25:00.000Z",
        age: 34,
      },

      location: {
        street: {
          number: 777,
          name: "Broadway",
        },
        city: "New York",
        state: "New York",
        country: "United States",
        postcode: "10001",
        coordinates: {
          latitude: "40.7128",
          longitude: "-74.0060",
        },
      },

      picture: {
        large: "https://randomuser.me/api/portraits/men/5.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/5.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
      },
    },

    {
      gender: "female",
      email: "tracey.ramos@example.com",
      phone: "(272) 790-0888",
      cell: "(489) 330-2385",

      name: {
        first: "Tracey",
        last: "Ramos",
      },

      login: {
        uuid: "6",
      },

      dob: {
        date: "1998-09-18T10:10:10.000Z",
        age: 26,
      },

      location: {
        street: {
          number: 300,
          name: "Ocean Drive",
        },
        city: "Miami",
        state: "Florida",
        country: "United States",
        postcode: "33101",
        coordinates: {
          latitude: "25.7617",
          longitude: "-80.1918",
        },
      },

      picture: {
        large: "https://randomuser.me/api/portraits/women/6.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/6.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
      },
    },
  ],

  info: {
    seed: "mock",
    results: 6,
    page: 1,
    version: "1.4",
  },
};

export default usersMock;
