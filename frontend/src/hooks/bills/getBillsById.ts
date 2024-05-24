import { VIEW_BILL_ID } from "@/constants/queryKeys";
import { getBillsById } from "@/services/bills";
import { useQuery } from "@tanstack/react-query";

const useGetBillsById = (filters: { id: string | null }) => {
  const { data, status, error } = useQuery({
    queryKey: [VIEW_BILL_ID, filters],
    queryFn: () => getBillsById(filters),
    enabled: !!filters.id,
  });

  return {
    bill: data,
    getBillStatus: status,
    getBillError: error,
  };
};

export default useGetBillsById;
