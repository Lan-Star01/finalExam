import Styled from 'styled-components'

export const ButtonStyled=Styled.button`
    background-color: #4863A0; 
    border: none;
    color: white;
    padding: 15px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`

export const PopupStyled=Styled.div`
position: fixed;
background-color: white;
top: 5em;
left:23%;
width:50%;
font-size: 1em;
font-family: 'Roboto', sans-serif;
padding:2em;

`
export const Services=Styled.h2`
color:white;
font-size:1em;
display:flex;
flex-wrap:wrap;
font-size: 16px;


`
export const NewService=Styled.h2`
color:white;
background-color: #4863A0;
margin:1em;
width:20%;
flex: 1 1 40%;
display:flex;

`
export const Title=Styled.h2`
font-family: 'Roboto', sans-serif;
font-weight:400;
font-size:1.5em;

`

export const Descr=Styled.p`
font-family: 'Roboto', sans-serif;
font-weight:400;
font-size:1em;
    
`
export const TextDiv=Styled.div`
margin:1em;
`

export const ImgDiv=Styled.div`
height:10em;; 
background-position: center; 
background-repeat: no-repeat; 
 background-size: cover; 
width:100%;
margin: 1em;
`
export const Img=Styled.img`
height: 500px; 
width:100%;
`

export const ImgStyled=Styled.div`
font-size: 16px;
font-family: 'Roboto', sans-serif;
color:white;
height: 500px; 
background-position: center; 
background-repeat: no-repeat; 
background-size: cover; 
width:100%;
overflow: hidden;
`

export const PopupHead=Styled.div`
display:flex;
justify-content:space-between;
margin: 0 0 1em 0;
`
export const ButtonFun=Styled.button`
border: none;
background-color:transparent;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
`

export const Error=Styled.p`
color:#e0a500;
`

export const Input=Styled.input`
width: 100%;
width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid grey;
`

export const ServicePage=Styled.div`
margin:1.5em;


@media (max-width: 640px) {   
   ${PopupStyled}{
       font-size:0.8em;
   }
   ${Title}{
        font-size:1em;
   }
   
   ${Descr}{
        font-size:0.8em;
   }
   
 }
 @media (min-width: 641px) {     
  
}
 @media (min-width: 1008px) {
   
 }
`