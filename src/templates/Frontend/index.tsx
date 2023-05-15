import Header from "../../components/Header";
import { Container } from "./styles";

type FrontendProps = {
    children: React.ReactNode;
};

const Frontend = ({children}:FrontendProps) => {
    return (
        <Container>
            <Header></Header>
        </Container>
    )
}

export default Frontend;