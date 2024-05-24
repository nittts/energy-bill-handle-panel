export type Company = {
  id: string;
  clientNumber: string;
  name: string;
  streetAddress: string;
  district: string;
  address: string;
  cpfCnpj: string;
  stateSubscription: string;
};

export type CompanyQueryParams = {
  clientNumber?: string;
  cpfCnpj?: string;
  name?: string;
};
