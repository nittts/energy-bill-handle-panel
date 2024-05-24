import { BillGraphs, BillGraphsParams, BillQueryParams, BillWithRelations } from "@/@types/bill";
import { api } from "./api";

const handleParams = (filters?: BillQueryParams) => {
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
  const response = await api.get("/bills", { params: handleParams(filters) });

  return response.data;
};

const getBillsById = async ({ id }: { id: string | null }): Promise<BillWithRelations> => {
  const response = await api.get(`/bills/${id}`);

  return response.data;
};

const uploadBills = async (formFiles: FormData) => {
  const response = await api.post("/bills/upload", formFiles);

  return response.data;
};

const getBillsGraphs = async (params?: BillGraphsParams): Promise<BillGraphs> => {
  const response = await api.get("/bills/graphs", { params: handleParams(params) });

  return response.data;
};

export { getBills, uploadBills, getBillsGraphs, getBillsById };
