import PostPopup from './Posts.PopUp';
import {useEffect, useState} from 'react'
import { Posts,NewPost,PostPage,TextDiv, ButtonDiv, ButtonStyled, Title, Descr} from './Posts.Styled';


function Post(){
    
    const [arr, setArr]=useState([]);
    const [popup, setPopup]=useState(false);
    const [title, setTitle]=useState("");
    const [descr, setDescr]=useState("");
    const [img, setImg]=useState("");
    useEffect(()=>{
        fetch('https://api.npoint.io/44c1c313d40c0811ad19')
    .then(response => response.json())
    .then(data => setArr(data));

    })
    
  
    const ButtonFun=()=>[
        setPopup(false)
    ]
    return(
        <PostPage>
        <Posts>
        {arr.map((value)=>{
            return(
                <NewPost key={value.id}>
                <TextDiv>
                <Title>{value.title}</Title>
                <Descr>{value.description}</Descr>
                </TextDiv>
                <ButtonDiv>
                <ButtonStyled 
                onClick={()=>{
                    setPopup(true);
                    setTitle(value.title);
                    setDescr(value.description)
                    setImg(value.image)
                }}>View More</ButtonStyled>
                </ButtonDiv>
                
                </NewPost>
            )
        })}
        </Posts>
        {popup&& <PostPopup 
            title={title} 
            descr={descr}
            img={img}
            ButtonFun={ButtonFun}
            ></PostPopup>}
        </PostPage>
    )
}


export default Post;