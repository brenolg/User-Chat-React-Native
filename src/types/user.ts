type User = {
  gender: string;
  email: string;
  phone: string;
  cell: string;

  name: {
    first: string;
    last: string;
  };

  login: {
    uuid: string;
  };

  dob: {
    date: string;
    age: number;
  };

  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string | number;

    coordinates: {
      latitude: string;
      longitude: string;
    };
  };

  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export default User;
