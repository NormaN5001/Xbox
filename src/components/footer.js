import React, {Component} from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: #0C0C0C;
}
`

export default class App extends Component{

  render(){
    return(
      <div>
      <GlobalStyle/>
      </div>
    )
  }
}