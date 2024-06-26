import { BillGraphs, BillGraphsParams } from "@/@types/bill";
import { BILLS_GRAPHS_ID } from "@/constants/queryKeys";
import { getBillsGraphs } from "@/services/bills";
import { QueryClient, useQuery } from "@tanstack/react-query";

const useBillsGraphs = (filters?: BillGraphsParams) => {
  const { data, status, error, refetch } = useQuery<BillGraphs>({
    queryKey: [BILLS_GRAPHS_ID, filters],
    queryFn: () => getBillsGraphs(filters),
    initialData: {} as BillGraphs,
    enabled: !!filters?.clientNumber,
    retry: 3,
  });

  const invalidateQuery = () => new QueryClient().invalidateQueries({ queryKey: [BILLS_GRAPHS_ID, filters] });

  return {
    billGraphs: data,
    getBillGraphsStatus: status,
    getBillGraphsError: error,
    invalidateBillGraphs: invalidateQuery,
    refetchBillGraphs: refetch,
  };
};

export default useBillsGraphs;
