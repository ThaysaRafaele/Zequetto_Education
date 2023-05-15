import Button from "../Botão";
import Logo from "../Logo";
import Menu from "../Menu";
import { Box } from "./styles";

const Header = () => {
    return(
        <Box>
            <Logo />
            <Menu />
            <Button />
        </Box>
    );
}

export default Header;