import styled from 'styled-components';

export const H1 = styled.h1
`
color: blue;
font-size: 70px;
font-family: "Lucida Console", Monaco, monospace;
font-style: italic;
margin: 100px;
`


export const Div = styled.div
`
display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 20px auto;
  max-width: 1000px;
  background-color: coral;
`

export const P = styled.p 
`
font-family: "Lucida Console", Monaco, monospace;
font-size: 20px;
color: white;
`
export const H2 = styled.h2
`
font-size: 30px;
font-family: "Lucida Console", Monaco, monospace;
color: red;
text-decoration: underline;
`