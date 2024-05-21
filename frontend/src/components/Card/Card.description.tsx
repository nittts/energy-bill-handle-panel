import { Bill } from "@/@types/bill";
import { FormattersUtils } from "@/utils/formatters";
import { Descriptions } from "antd";

function CardDescription(infos: Omit<Bill, 'id'>) {
  const {
    clientNumber = "",
    energyConsumption = 0,
    energyReimbursed = 0,
    gdEconomy = 0,
    gdTotal = 0,
    referenceMonth = new Date(),
  } = infos;

  const items = [
    { key: "CardDescription_clientNumber", label: "N. cliente", children: clientNumber },
    { key: "CardDescription_referenceMonth", label: "Mês de Referência", children: FormattersUtils.formatDate(referenceMonth) },
    { key: "CardDescription_energyConsumption", label: "Consumo de Energia Elétrica", children: FormattersUtils.formatNumber(energyConsumption) },
    { key: "CardDescription_energyReimbursed", label: "Energia Compensada", children: FormattersUtils.formatNumber(energyReimbursed) },
    { key: "CardDescription_gdTotal", label: "Valor total sem GD", children: FormattersUtils.formatCurrency(gdTotal) },
    { key: "CardDescription_gdEconomy", label: "Economia GD", children: FormattersUtils.formatCurrency(gdEconomy) },    
  ];

  return <Descriptions bordered size="small" items={items} column={{ xs: 1, lg: 1, md: 1, sm: 1, xl: 1, xxl: 1 }} />;
}

export default CardDescription;
