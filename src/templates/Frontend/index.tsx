import { Container } from "./styles";

type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({children}:FrontendProps) => {
    return (
        <Container>Teste Front {children}</Container>
    )
}

export default Frontend;