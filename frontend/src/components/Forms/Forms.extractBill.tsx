import { Upload, Typography, Flex, Button, GetProp } from "antd";
import { RcFile, UploadFile, UploadProps } from "antd/es/upload";
import { useState } from "react";
import { MdInbox } from "react-icons/md";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const { Dragger } = Upload;
const { Text, Title } = Typography;

const DraggerContent = () => (
  <Flex align="center" justify="center" vertical style={{ height: "150px" }}>
    <MdInbox size={40} />
    <Text>Clique ou arraste as faturas aqui para enviar</Text>
    <Text type="secondary">Suporte para uma ou várias faturas.</Text>
  </Flex>
);

const progress = {
  strokeColor: { "0%": "#108ee9", "100%": "#87d068" },
  strokeWidth: 3,
  format: (percent: number | undefined) => percent && `${parseFloat(percent.toFixed(2))}%`,
};

function ExtractBillForm() {
  const [billList, setBillList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleUpload = () => {
    const formData = new FormData();

    billList.forEach((file) => {
      formData.append("files[]", file as FileType);
    });

    setUploading(true);

    console.log(formData); // insertUpload

    setUploading(false);
    setBillList([]);
  };
  const beforeUpload = (_: RcFile, fileList: RcFile[]) => {
    setBillList(fileList);
    return false;
  };
  const onRemove = (file: UploadFile) => {
    const index = billList.indexOf(file);
    const newBillList = billList.slice();
    newBillList.splice(index, 1);
    setBillList(newBillList);
  };

  return (
    <Flex vertical gap={10}>
      <Flex align="center" justify="space-between" gap={6} wrap="wrap">
        <Title level={4} style={{ margin: 0 }}>
          Adicionar Faturas
        </Title>
        <Button type="primary" loading={uploading} disabled={billList.length === 0} onClick={handleUpload}>
          {uploading ? "Enviando" : "Enviar arquivos"}
        </Button>
      </Flex>

      <Dragger
        accept="application/pdf"
        fileList={billList}
        progress={progress}
        beforeUpload={beforeUpload}
        onRemove={onRemove}
        showUploadList
        multiple
      >
        <DraggerContent />
      </Dragger>
    </Flex>
  );
}

export default ExtractBillForm;
