import { Company } from "@/@types/company";
import { FormattersUtils } from "@/utils/formatters";
import { Descriptions } from "antd";

export default function BillInformationCompany({ company }: { company: Company }) {
  const {
    clientNumber = "",
    address = "",
    cpfCnpj = "",
    district = "",
    name = "",
    stateSubscription = "",
    streetAddress = "",
  } = company;

  const items = [
    { key: "companyDescription_name", label: "Nome do cliente", children: name },
    { key: "companyDescription_clientNumber", label: "N. cliente", children: clientNumber },
    { key: "companyDescription_address", label: "Endereço", children: address },
    { key: "companyDescription_streetAdress", label: "Local", children: streetAddress },
    { key: "companyDescription_cpfCnpj", label: "CPF / CNPJ", children: FormattersUtils.formatCnpjCpf(cpfCnpj) },
    { key: "companyDescription_district", label: "Distrito/Bairro", children: district },
    { key: "companyDescription_stateAddress", label: "Inscrição Estadual", children: stateSubscription },
  ];

  return <Descriptions bordered size="small" items={items} column={{ xs: 1, lg: 1, md: 1, sm: 1, xl: 1, xxl: 1 }} />;
}
