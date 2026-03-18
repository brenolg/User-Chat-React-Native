const usersMock = {
  results: Array.from({ length: 30 }).map((_, index) => {
    const id = index + 1;
    const gender = index % 2 === 0 ? "male" : "female";

    return {
      gender,

      email: `user${id}@example.com`,
      phone: `(11) 9000-${String(1000 + id)}`,
      cell: `(11) 9800-${String(1000 + id)}`,

      name: {
        first: `User${id}`,
        last: `Test${id}`,
      },

      login: {
        uuid: `uuid-${id}`,
      },

      dob: {
        date: "1990-01-01T00:00:00.000Z",
        age: 30 + (id % 10),
      },

      location: {
        street: {
          number: 100 + id,
          name: `Street ${id}`,
        },
        city: "São Paulo",
        state: "SP",
        country: "Brazil",
        postcode: `0100${id}`,

        coordinates: {
          latitude: "-23.5505",
          longitude: "-46.6333",
        },

        // ✅ ADICIONADO
        timezone: {
          offset: "-3:00",
          description: "Brasilia Time",
        },
      },

      picture: {
        large: `https://randomuser.me/api/portraits/${gender === "male" ? "men" : "women"}/${id}.jpg`,
        medium: `https://randomuser.me/api/portraits/med/${gender === "male" ? "men" : "women"}/${id}.jpg`,
        thumbnail: `https://randomuser.me/api/portraits/thumb/${gender === "male" ? "men" : "women"}/${id}.jpg`,
      },

      // ✅ ADICIONADO
      id: {
        name: "CPF",
        value: `${Math.floor(Math.random() * 10000000000)}`,
      },
    };
  }),

  info: {
    seed: "mock",
    results: 30,
    page: 1,
    version: "1.4",
  },
};

export default usersMock;
