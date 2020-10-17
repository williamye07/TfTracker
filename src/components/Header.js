
import styled from 'styled-components'

const Header = styled.div`
  font-size: 40px;
  font-family: 'Arvo', serif;

  @media (max-width: 768px){
    font-size: 30px;
  }

  @media (max-width: 480px){
    font-size: 20px;
  }
`

export default Header;