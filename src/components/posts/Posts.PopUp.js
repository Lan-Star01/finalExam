import {Popup, PopupHead, ButtonFun, ImgDiv} from "./Posts.Styled"
import { FiX } from "react-icons/fi"


function PostPopup(props){
    
    return(
        <Popup>
        <PopupHead>
        <h1>{props.title}</h1>
        <ButtonFun onClick={props.ButtonFun}><FiX/></ButtonFun>
        </PopupHead>
        <ImgDiv style={{backgroundImage: `url(${props.img}`}}></ImgDiv>
        
        <p>{props.descr}</p>
        </Popup>
    )
}

export default PostPopup;