import { useRouter } from "next/navigation";
import styled from "styled-components";
import { ArrowBackIcon } from "./icons/arrow-back-icon";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--secondary-text);
  border: none;
  cursor: pointer;
`
interface ButtonProps {
  navigate: string;
}

export function BackButton({ navigate }: ButtonProps) {
  const router = useRouter();

  const handleNavigate = () => {
    router.push(navigate);
  }

  return (
    <Button onClick={handleNavigate}>
        <ArrowBackIcon/>
        Voltar
    </Button>
  )
}