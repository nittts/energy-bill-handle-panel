import { BillGraphs, BillGraphsParams } from "@/@types/bill";
import { BILLS_GRAPHS_ID } from "@/constants/queryKeys";
import { getBillsGraphs } from "@/services/bills";
import { useQuery } from "@tanstack/react-query";

const useBillsGraphs = (filters?: BillGraphsParams) => {
  const { data, status, error } = useQuery<BillGraphs>({
    queryKey: [BILLS_GRAPHS_ID, filters],
    queryFn: () => getBillsGraphs(filters),
    initialData: {} as BillGraphs,
  });

  return {
    billGraphs: data,
    getBillGraphsStatus: status,
    getBillGraphsError: error,
  };
};

export default useBillsGraphs;
