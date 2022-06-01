import React, {Component} from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Xbox from './img/xbox.png'
import EffectXbox from './img/luz-verde.png'
import Controle from './img/controle-xbox.png'
import Farcry from './img/farcry.png'
import Forza from './img/forza.png'
import Fifa from './img/fifa.png'
import Minecraft from './img/minecraft.png'
import Seta from "./img/seta.png"
import Seta2 from "./img/seta2.png"


const Main = styled.section`
  position: relative;
  margin: 60px 5vw 0 5vw;
  @media(max-width: 768px){
    margin: 20px 5vw 0 5vw;
  }
`
const Title = styled.h1`
  color: white;
  text-align: center;
  font-size: 4vh;
  font-weight: 600;
  @media(max-width: 768px){
    font-size: 5vh;
  }
`
const SubTitle = styled.p`
  margin-top: 7px;
  color: #9BF00B;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.85vh;
  font-weight: 700;
  @media(max-width: 768px){
    font-size: 2vh;
  }
`
const XboxImg = styled.img`
  position: absolute;
  top: 200px;
  width: 100%;
  z-index: 3;
  @media(max-width: 768px){
    top: 130px;
    width: 90vw;
  }
`
const EffectImg = styled.img`
  margin-bottom: 100px;
  width: 100%;
  @media(max-width: 768px){
    display: none;
  }
`
const Control = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 26.5vh;
  @media(max-width: 768px){
    position: relative;
    height: 50vh;
    flex-direction: column;
    align-items: center;
    margin-top: 430px;
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
`
const TitleControl = styled.h2`
  color: #9BF00B;
  font-weight: 600;
  font-size: 3.9vh;
  @media(max-width: 470px){
    width: 40vw;
  }
  @media(max-width: 425px){
    width: 50vw;
  }
  @media(max-width: 375px){
    width: 60vw;
  }
`
const TCW = styled.span`
  color: white;
`
const AboutControl = styled.p`
  margin-top: 30px;
  color: #C0C0C0;
  font-weight: 500;
  font-size: 1.8vh;
  width: 40vw;
  @media(max-width: 768px){
    text-align: center;
    width: 80vw;
  }  
`
const ControlImg = styled.img`
  width: 400px;
  height: 240px;
  @media(max-width: 1300px){
    width: 300px;
    height: 190px;
  }
`
const Exclusive = styled.section`
  margin-top: 130px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const ImgGames = styled.img`
  width: 350px;
  height: 600px;
  margin-top: 30px;
  &:hover{
    cursor: pointer;
  }
  @media(max-width: 1600px){
    width: 320px;
    height: 550px;
  }
`
const Questions = styled.section`
  margin-top: 150px;
`
const TitleQuestion = styled.h2`
  color: #9BF00B;
  font-weight: 600;
  font-size: 3.9vh;
`
const QuestionOne = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  p{
    color: white;
    font-size: 2vh;
    font-weight: 500;
  }
  img{
    height: 1.6vh;
  }
`
const QuestionTwo = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  p{
    color: white;
    font-size: 2vh;
    font-weight: 500;
  }
  img{
    height: 1.6vh;
  }
`
const QuestionThree = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  p{
    color: white;
    font-size: 2vh;
    font-weight: 500;
  }
  img{
    height: 1.6vh;
  }
`
const Arrow = styled.img`
  position: absolute;
  right: 0;
`
const DropOpen = styled.div`
  p{
    color: #C0C0C0;
    font-size: 1.7vh;
    font-weight: 500;
    margin: 30px 0 0 40px;
  }
`
const LineSeparation = styled.span`
  height: 2px;
  width: 100%;
  background-color: #2E2E2E;
  margin-top: 40px;
`




export default class App extends Component{

state={
  dropDown1: false,
  dropDown2: false,
  dropDown3: false,
}

openDropdown1 = () =>{
    this.setState({
      dropDown1: !this.state.dropDown1,
    })
}
openDropdown2 = () =>{
    this.setState({
      dropDown2: !this.state.dropDown2,
    })
}
openDropdown3 = () =>{
    this.setState({
      dropDown3: !this.state.dropDown3,
    })
}


  render(){
    return(
      <Main>
        <Title>Xbox series X</Title>
        <SubTitle>Pedido antecipado</SubTitle>
        <XboxImg src={Xbox} alt="Imagem do Xbox SX"/>
        <EffectImg src={EffectXbox}/>

        <Control>
          <div>
            <TitleControl>Desempenho <TCW>aperfeiçoado</TCW></TitleControl>
            <AboutControl>O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.</AboutControl>
          </div>
          <ControlImg src={Controle}/>
        </Control>

        <Exclusive>
          <ImgGames src={Farcry} alt="Imagem do Jogo"/>
          <ImgGames src={Forza} alt="Imagem do Jogo"/>
          <ImgGames src={Fifa} alt="Imagem do Jogo"/>
          <ImgGames src={Minecraft} alt="Imagem do Jogo"/>
        </Exclusive>

        <Questions>
          <TitleQuestion>Perguntas <TCW>frequentes</TCW></TitleQuestion>
          <QuestionOne onClick={this.openDropdown1}>
            <p>Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?</p>
            <Arrow src={this.state.dropDown1===false ? Seta : Seta2} alt="Imagem setinha dropdown"/>
            {this.state.dropDown1 && (
              <DropOpen>
                <p>Os Xbox Series X e Series S têm retrocompatibilidade com jogos de consoles antigos da Microsoft, isto é, Xbox One, Xbox 360 e o Xbox original, primeiro de sua linha.</p>
              </DropOpen>
            )}
            <LineSeparation></LineSeparation>

          </QuestionOne>

          <QuestionTwo onClick={this.openDropdown2}>
            <p>O que está incluído no Xbox Series X?</p>
            <Arrow src={this.state.dropDown2===false ? Seta : Seta2} alt="Imagem setinha dropdown"/>
            {this.state.dropDown2 && (
              <DropOpen>
                <p>Um console Xbox Series X, controle, cabo HDMI de alta velocidade e cabo de alimentação estão inclusos.</p>
              </DropOpen>
            )}
            <LineSeparation></LineSeparation>

          </QuestionTwo>

          <QuestionThree onClick={this.openDropdown3}>
            <p>Como sei se minha TV é compatível com 4K?</p>
            <Arrow src={this.state.dropDown3===false ? Seta : Seta2} alt="Imagem setinha dropdown"/>
            {this.state.dropDown3 && (
              <DropOpen>
                <p>É preciso ter, pelo menos, uma entrada HDMI 2.1 (que suporta reprodução em 4K);</p>
              </DropOpen>
            )}
            <LineSeparation></LineSeparation>

          </QuestionThree>
        </Questions>
      </Main>
    )
  }
}