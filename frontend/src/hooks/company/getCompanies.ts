import { CompanyQueryParams } from "@/@types/company";
import { COMPANY_QUERY_ID } from "@/constants/queryKeys";
import { getCompanies } from "@/services/company";
import { useQuery } from "@tanstack/react-query";

const useGetCompanies = (filters?: CompanyQueryParams) => {
  const { data, status, error, refetch } = useQuery({
    queryKey: [COMPANY_QUERY_ID, filters],
    queryFn: () => getCompanies(filters),
    initialData: [],
  });

  return {
    companies: data,
    getCompaniesStatus: status,
    getCompaniesError: error,
    refetchCompanies: refetch,
  };
};

export default useGetCompanies;
