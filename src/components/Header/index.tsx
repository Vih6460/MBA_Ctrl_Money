import { HeaderContainer, HeaderContent, NewTransactionbutton } from "./styles";
import logoImg from '../../assets/logo.svg';

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <NewTransactionbutton>Nova transação</NewTransactionbutton>
            </HeaderContent>
        </HeaderContainer>
    )
}