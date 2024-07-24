interface IGeoUserAddres {
  lat: string;
  lng: string;
}

interface IUserAddres {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeoUserAddres;
}

interface IUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddres;
  phone: string;
  website: string;
  company: IUserCompany,
}
