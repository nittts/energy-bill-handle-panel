import { Bill } from "@/@types/bill";
import { BILLS_QUERY_ID } from "@/constants/queryKeys";
import { uploadBills } from "@/services/bills";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUploadBills = () => {
  const queryClient = useQueryClient();

  const onSuccess = (newBills: Bill[]) => {
    queryClient.setQueriesData<Bill[]>({ queryKey: [BILLS_QUERY_ID] }, (oldData) => {
      if (oldData) return [...oldData, ...newBills];

      return newBills;
    });
  };

  const { mutateAsync, status, error } = useMutation({ mutationFn: uploadBills, onSuccess });

  return {
    uploadBills: mutateAsync,
    uploadBillsStatus: status,
    uploadBillsError: error,
  };
};

export default useUploadBills;
