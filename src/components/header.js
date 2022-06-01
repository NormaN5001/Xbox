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
  @media(max-width: 1000px){
    margin: 0;
  }
  @media(max-width: 768px){
 
    flex-direction: column;
    height: 200px;
    img{
      margin-top: 10px;
    }
  }
`
const Lista = styled.ul`
  color: white;
  display: flex;
  list-style: none;
  @media(max-width: 768px){
    width: 100%;
    justify-content: space-evenly;
  }
`
const ItemLista = styled.li`
  margin-left: 25px;
  font-size: 2vh;
  font-weight:600;
  text-transform: uppercase;
  transition: 0.4s;
  &:hover{
    cursor: pointer;
    text-decoration: underline 2px;
    color: #9BF00B;
  }
  @media(max-width: 1000px){
    font-size: 1.6vh;
    margin-left: 20px;
  }
  @media(max-width: 768px){
    margin: 0;
    background-color: #272727;
    text-align: center;
    line-height: 28px;
    height: 30px;
    width: 100px;
    border-radius: 50px;
    &:hover{
    cursor: pointer;
    background-color: #9BF00B;
    color: #181818;
    text-decoration: none;
    }
  }
  @media(max-width: 425px){
    width: 70px;
    height: 28px;
    line-height: 26px;
    font-size: 1.3vh;
  }
  @media(max-width: 320px){
    font-size: 1.2vh;
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
    width: 170px;
    height: 35px;
    font-size: 1.6vh;
  }
  @media(max-width: 768px){
    width: 80vw;
    height: 45px;
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