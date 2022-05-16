import React, {Component} from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Logo from './img/logo-xbox.png'

const Header = styled.section`
  margin: 0 5vw 0 5vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    cursor: pointer;
  }
`
const Lista = styled.ul`
  color: white;
  display: flex;
  list-style: none;
`
const ItemLista = styled.li`
  margin-left: 35px;
  font-size: 2vh;
  font-weight:600;
  text-transform: uppercase;
  transition: 0.4s;
  &:hover{
    cursor: pointer;
    text-decoration: underline 2px;
    color: #9BF00B;
  }
`
const Button = styled.button`
  text-transform: uppercase;
  height: 45px;
  width: 224px;
  border-style: none;
  background-color: #9BF00B;
  color: #0C0C0C;
  font-weight: 700;
  font-size: 1.8vh;
  transition: 0.7s;

  &:hover{
    cursor: pointer;
    background-color: #1BF01E;
  }

  @media(max-width: 1000px){
    width: 15vw;
    height: 35px;
  }
`

export default class App extends Component{

  render(){
    return(
      <Header>
      <img src={Logo} alt="Logo do site Xbox."/>
      <Lista>
        <ItemLista>Visão Geral</ItemLista>
        <ItemLista>Jogos</ItemLista>
        <ItemLista>Galeria</ItemLista>
        <ItemLista>Unbox</ItemLista>
      </Lista>
      <Button>Ver disponibilidade</Button>
      </Header>
    )
  }
}