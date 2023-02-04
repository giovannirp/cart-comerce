import { HeaderContainer } from "./styles";
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

export function Header() {
  return(
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" width="80"  />
      </Link>
      <Link to="/cart">Carinho</Link>
    </HeaderContainer>
  )
}