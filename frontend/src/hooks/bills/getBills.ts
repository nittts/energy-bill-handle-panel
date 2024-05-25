import { BillQueryParams } from "@/@types/bill";
import { BILLS_QUERY_ID } from "@/constants/queryKeys";
import { getBills } from "@/services/bills";
import { useQuery } from "@tanstack/react-query";

const useGetBills = (filters?: BillQueryParams) => {
  const { data, status, error } = useQuery({
    queryKey: [BILLS_QUERY_ID, filters],
    queryFn: () => getBills(filters),
    initialData: [],
  });

  return {
    bills: data,
    getBillsStatus: status,
    getBillsError: error,
  };
};

export default useGetBills;
