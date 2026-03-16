const baseUsers = [
  {
    gender: "male",
    name: { first: "George", last: "Bluth" },
    picture: {
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
    },
  },
  {
    gender: "female",
    name: { first: "Janet", last: "Weaver" },
    picture: {
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg",
    },
  },
  {
    gender: "female",
    name: { first: "Emma", last: "Wong" },
    picture: {
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/3.jpg",
    },
  },
  {
    gender: "female",
    name: { first: "Eve", last: "Holt" },
    picture: {
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg",
    },
  },
  {
    gender: "male",
    name: { first: "Charles", last: "Morris" },
    picture: {
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
    },
  },
  {
    gender: "female",
    name: { first: "Tracey", last: "Ramos" },
    picture: {
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/6.jpg",
    },
  },
];

const usersMock = {
  results: Array.from({ length: 40 }).map((_, index) => {
    const base = baseUsers[index % baseUsers.length];

    return {
      gender: base.gender,
      email: `${base.name.first.toLowerCase()}.${base.name.last.toLowerCase()}${index}@example.com`,
      phone: "(272) 790-0888",
      cell: "(489) 330-2385",

      name: {
        first: base.name.first,
        last: base.name.last,
      },

      login: {
        uuid: String(index + 1),
      },

      dob: {
        date: "1990-01-01T00:00:00.000Z",
        age: 30,
      },

      location: {
        street: {
          number: 100 + index,
          name: "Main Street",
        },
        city: "New York",
        state: "NY",
        country: "United States",
        postcode: "10001",
        coordinates: {
          latitude: "40.7128",
          longitude: "-74.0060",
        },
      },

      picture: {
        large: base.picture.thumbnail.replace("thumb", "men"),
        medium: base.picture.thumbnail.replace("thumb", "med"),
        thumbnail: base.picture.thumbnail,
      },
    };
  }),

  info: {
    seed: "mock",
    results: 40,
    page: 1,
    version: "1.4",
  },
};

export default usersMock;
