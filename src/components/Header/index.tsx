import logoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";
interface HeaderProps{
  onOpenNewTransctionsModal: () => void;
}

export function Header({onOpenNewTransctionsModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransctionsModal}>Nova transação</button>
      </Content>
    </Container>
  );
}
