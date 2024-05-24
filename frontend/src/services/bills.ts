import { BillQueryParams } from "@/@types/bill";
import { api } from "./api";

const handleFilters = (filters?: BillQueryParams) => {
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

const getBills = async (filters?: BillQueryParams) => {
  const response = await api.get("/bills", { params: handleFilters(filters) });

  return response.data;
};

export { getBills };
