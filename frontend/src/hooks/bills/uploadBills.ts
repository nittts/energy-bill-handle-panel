import { Bill } from "@/@types/bill";
import { BILLS_QUERY_ID } from "@/constants/queryKeys";
import { uploadBills } from "@/services/bills";
import { useUpdateClientNumber } from "@/stores/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useGetCompanies from "../company/getCompanies";
import { useGetBillsGraphs } from ".";

const useUploadBills = () => {
  const queryClient = useQueryClient();
  const updateClientNumber = useUpdateClientNumber();
  const { refetchCompanies } = useGetCompanies();
  const { refetchBillGraphs } = useGetBillsGraphs();

  const onSuccess = (newBills: Bill[]) => {
    queryClient.setQueriesData<Bill[]>({ queryKey: [BILLS_QUERY_ID] }, (oldData) => {
      refetchCompanies();
      updateClientNumber(newBills[0].clientNumber);
      refetchBillGraphs();

      if (oldData) return [...oldData, ...newBills];

      return newBills;
    });
  };

  const { mutateAsync, status, error, data } = useMutation({ mutationFn: uploadBills, onSuccess });

  return {
    uploadBills: mutateAsync,
    uploadBillsStatus: status,
    uploadBillsError: error,
    uploadBillsResponse: data,
  };
};

export default useUploadBills;
