import { Button, Flex, Result } from "antd";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const extra = [
    <Button type="primary" onClick={() => navigate(-1)}>
      Voltar
    </Button>,
  ];

  return (
    <Flex align="center" justify="center" style={{ height: "100vh" }}>
      <Result
        status="404"
        title="Página não encontrada"
        subTitle="Parece que a página que tentou visitar não existe."
        extra={extra}
      />
    </Flex>
  );
}

export default NotFound;
