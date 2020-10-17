
import styled from 'styled-components'

import TFTHeaderImg from '../images/tft.jpg'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.35)), url(${TFTHeaderImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 375px;

  @media (max-width: 768px){
    height: 200px;
  }

  @media (max-width: 480px){
    height: 100px;
  }
`

export default HeaderContainer;