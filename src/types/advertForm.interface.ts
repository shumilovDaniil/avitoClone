export interface IAdvertFormFields {
  id: number;
  title: string;
  condition: "new" | "great" | "good" | "soso" | "need-repair";
  type: "sell-mine" | "bought-for-sale";
  specifications: ISpecifications;
  details: IDetails;
  address: string;
  price: number;
  contacts: IContacts;
}

export interface ISpecifications {
  producer: string;
  model: string;
}

export interface IDetails {
  description: string;
  photos: string | string[];
  videoLink: string;
}

export interface IContacts {
  message: boolean;
  phone: boolean;
  phoneAndMessage: boolean;
}
