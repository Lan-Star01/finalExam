import {ButtonStyled, PopupStyled, PopupHead,ButtonFun, Error, Input} from "./Services.Styled"
import { useForm } from "react-hook-form";
import { FiX } from "react-icons/fi"

function Popup(props){
    const {register, handleSubmit, formState:{errors}} = useForm();

    return(
        <PopupStyled>
        <PopupHead>
        <h2>Create new Service</h2>
        <ButtonFun onClick={props.ButtonFun}><FiX/></ButtonFun>
        </PopupHead>
        <form action="" onSubmit={handleSubmit(props.submit)}>
        <label htmlFor="">title*</label><br></br>
        <Input type="text" 
            size="25" 
            {...register("Title", {required: "This is required.", maxLength:{value:25, message:"max charachter size is 25"} })}
            placeholder="Service Title" 
            onChange={props.title} 
            onKeyPress={props.key}
        />
        {errors.Title
            ?<Error>{errors.Title.message}</Error> 
            :<p></p>}
       
        <label htmlFor="">Description*</label><br></br>
        <Input type="text"  
        {...register("Descr", {required: "This is required.", maxLength:{value:100, message:"max charachter size is 100"} })}
         onChange={props.descr} 
         onKeyPress={props.key}
         placeholder="Service Description" />
         {errors.Descr?<Error>{errors.Descr.message}</Error> 
        :<p></p>}
        <label for="img">Choose image:*</label><br></br>
        <Input type="file" accept="image/png, image/jpeg" size="20"
         {...register("Image", {required: "This is required."})}
         onChange={props.image}
         />
         {errors.Image
            ?<Error>{errors.Image.message}</Error> 
        :<p></p>}
        <ButtonStyled type="button" onClick={props.cancel} style={{backgroundColor: "grey"}}>close</ButtonStyled>
        <ButtonStyled type="submit" onClick={props.save}>Save changes</ButtonStyled>
        </form>
    
        </PopupStyled>
    )
}

export default Popup;