import { Bill } from "@/@types/bill";
import { BILLS_QUERY_ID } from "@/constants/queryKeys";
import { deleteBill } from "@/services/bills";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUploadBills = () => {
  const queryClient = useQueryClient();

  const onSuccess = (deletedBill: Bill) => {
    queryClient.setQueriesData<Bill[]>({ queryKey: [BILLS_QUERY_ID] }, (oldData) => {
      console.log(deletedBill);
      if (oldData) return oldData.filter((bill) => bill.id !== deletedBill.id);

      return [];
    });
  };

  const { mutateAsync, status, error } = useMutation({ mutationFn: deleteBill, onSuccess });

  return {
    deleteBills: mutateAsync,
    deleteBillsStatus: status,
    deleteBillsError: error,
  };
};

export default useUploadBills;
