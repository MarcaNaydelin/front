import React from 'react'
import Temas from "./Temas";
import styled from 'styled-components'
import Temafront from './TemasFront';


 const Home = () => {
  return (
    <Padre>
      <Reports>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>

      </Reports>
    <section>
    <Temafront/>
<Juegos>
<h1>
  juegos
</h1>

<section><h4>datos</h4></section>
<section><h4>datos</h4></section>
<section><h4>datos</h4></section>
<section><h4>datos</h4></section>
<section><h4>datos</h4></section>
<section><h4>datos</h4></section>
</Juegos>
    </section>

    </Padre>
  )
}
export default Home
export const Padre = styled.article`
width:90%;
height:auto;
margin:2em auto;
& section{
  width:100%;
  height:auto;
display:flex;
justify-content:center;
align-items:center;
gap:2em;
}
`;
export const Reports = styled.article`
width:100%;
display:flex;
justify-content:center;
align-items:center;
gap:1em;
margin:2em auto;
& div{
height:10em;
border-radius:2em;
width:calc(100% / 6);
background-color:#D72825;
display:flex;
font-size:20px;
color:#fff;
justify-content:center;
align-items:center;
&:nth-child(2){
  background-color:#F87E00;
}
&:nth-child(3){
  background-color:#F04671;

}
&:nth-child(4){
  background-color:#209EBD;
}
&:nth-child(5){
  background-color:#FCB901;
}
&:nth-child(6){
  background-color:#A7C001;
}
}
`
export const Juegos = styled.article`
width:70vw;
border:solid 1px #0005;
height:35vh;
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:0.5em;
& h1{
width:100%;
height:2em;
background-color:#FCBE4B;
color:#fff;
display:flex;
justify-content:center;
align-items:center;
font-size:2em;

}
& section{
display:flex;
border:solid 1px #0005;
width:calc(80% / 4);
height:calc(80% / 2);
flex-wrap:wrap;
background-color:#FCBE4B;
position: relative;
& h4{
  position: absolute;
  content:"";
bottom:0.5em;
background-color:#F04671;
width:100%;
text-align:center;
}
}
`

