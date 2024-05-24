import { CompanyQueryParams } from "@/@types/company";
import { api } from "./api";

const handleFilters = (filters?: CompanyQueryParams) => {
  const params: Record<string, string | Date | undefined> = {};

  if (filters) {
    type FilterKeys = keyof typeof filters;
    const keys: FilterKeys[] = Object.keys(filters) as FilterKeys[];

    keys.forEach((key) => {
      if (filters[key]) {
        params[key] = filters[key];
      }
    });
  }

  return params;
};

const getCompanies = async (filters?: CompanyQueryParams) => {
  const response = await api.get("/company", { params: handleFilters(filters) });

  return response.data;
};

export { getCompanies };
