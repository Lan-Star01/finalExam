import Styled from 'styled-components'

export const Posts=Styled.h2`
color:white;
font-size:1em;
display:flex;
flex-wrap:wrap;
font-size: 16px;
`
export const NewPost=Styled.h2`
color: #162557;
margin:1em;
padding:1em;
width:20%;
flex: 1 1 40%;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`
export const ButtonStyled=Styled.button`
  background: #4863A0;
  border: 0;
  border-radius: 2px;
  color: #151B54;
  cursor: pointer;
  display: inline-block;
  font-family: Didot;
  font-size: 16px;
  font-weight: 500;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
`
export const ButtonDiv=Styled.div`
display:flex;
justify-content:flex-end;
align-content: flex-end;
`
export const TextDiv=Styled.div`
margin:0.5em;
`
export const Title=Styled.h2`
font-size:1.5em;
font-family: Hoefler Text;
font-weight:500;

`

export const Descr=Styled.p`
font-size:0.8em;
font-family: Hoefler Text;
font-weight:400;
    
`

export const Popup=Styled.div`
position: fixed;
background-color: #4863A0;
top: 5em;
left:23%;
width:50%;
font-size: 1em;
font-family: 'Roboto', sans-serif;
padding:2em;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export const PopupHead=Styled.div`
display:flex;
justify-content:space-between;
margin: 0 0 1em 0;
`

export const ButtonFun=Styled.button`
border: none;
background-color: transparent;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;

`
export const ImgDiv=Styled.div`
height: 300px; 
background-position: center; 
background-repeat: no-repeat; 
 background-size: cover; 
width:100%;
margin-bottom: 0.5em;
`

export const PostPage=Styled.div`
@media (max-width: 640px) { 
 
 ${ImgDiv}{
  height: 200px;
}
 
}
@media (min-width: 641px) {    
 
${ImgDiv}{
  height: 200px;
}

}
@media (min-width: 1008px) {
  ${ImgDiv}{
    height: 300px;
  }

}
`

