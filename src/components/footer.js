import React, {Component} from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Logo from './img/logo-xbox.png'

const Footer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 130px 5vw 0 5vw;
  height: 90px;
  @media(max-width: 650px){
    margin: 130px 0 0 0;
  }
  div{
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
      color: #777777;
      font-size: 1.8vh;
      font-weight: 400;
      @media(max-width: 425px){
      font-size: 1.4vh;
    }
    }
  }
  @media(max-width: 650px){
    div{
      width: 200px;
      flex-direction: column;
    }
  }
`
const LogoImg = styled.img`
  width: 150px;
  height: 45px;
  @media(max-width: 650px){
    width: 130px;
    height: 37px;
  }
  @media(max-width: 425px){
    width: 110px;
    height: 33px;
  }
`

export default class App extends Component{

  render(){
    return(
      <Footer>
        <LogoImg src={Logo} alt="Logo do site"/>
        <div>
          <p>© Microsoft 2022</p>
          <p>Todos os direitos reservados</p>
        </div>
      </Footer>
    )
  }
}