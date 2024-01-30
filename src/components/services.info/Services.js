import {useEffect, useState} from "react";
import {arr} from  "./ServicesArr"
import Popup from "./ServicesPopUp"
import {ButtonStyled, Title, Descr,NewService,Services,ImgDiv,ServicePage, TextDiv} from "./Services.Styled"

function Service() {
    
    const [popup, setPopup]=useState(false);
    const [service, setService]=useState(arr);
    const [title, setTitle]=useState("");
    const [descr, setDescr]=useState("");
    const [image, setImage]=useState("");
    const [save, setSave]=useState({})
    const [display, setDisplay]=useState("flex");
    
    const buttonHandler=()=>{
       setPopup(true)
    }
    const cancelHandler=()=>{
        setPopup(false)
     }
    const titleChange=(e)=>{
        setTitle(e.currentTarget.value)

    }
    const descrChange=(e)=>{
        setDescr(e.currentTarget.value)
    }
    const imageChange=(e)=>{
        const [file] = e.target.files;
        console.log(e.target.file)
        setImage(URL.createObjectURL(file));

    }
    const keyHandler=(e)=>{
        if(e.key === 'Enter'){
            console.log('enter press here! ')
          }
    }
    const ButtonFun=()=>{
        setPopup(false)
    }
    const submitHandler=(e, data)=>{
       
        setService((arr)=> [...arr, save])
        setPopup(false)
        setImage("")
    }

    useEffect(() => {
        setSave({title: title, descr: descr, img: image})
    },[title, descr,image]);

    return(
        <ServicePage>
        <ButtonStyled onClick={buttonHandler}>Add new service</ButtonStyled>
 
        {popup 
            ?<Popup cancel={cancelHandler} 
                    submit={submitHandler} 
                    title={titleChange} 
                    descr={descrChange} 
                    image={imageChange}
                    key={keyHandler}
                    ButtonFun={ButtonFun}/>
            :<h1></h1>
        }

        <Services>
        {
            service.map(element => {
                return(
                    <NewService key={element.id} style={{display: display}}>
                    <TextDiv>
                    <Title>{element.title}</Title>
                    <Descr>{element.descr}</Descr>
                    </TextDiv>
                    <ImgDiv style={{backgroundImage: `url(${element.img})`}}></ImgDiv>
        
                    </NewService>
                )
            })
        }
        </Services>
        
        </ServicePage>
    )
}

export default Service;