import {Title, Descr} from "./Services.Styled"
import{arr} from "./ServicesArr"
function ServicePost(){
    return(
        <div>
        <div>
        {
            arr.map((value)=>{

                return(
                    <div>
                    <Title>{value.title}</Title>
                    <Descr>{value.descr}</Descr>
                    </div>
                )
            })
        }
            
        </div>
        <div>

        </div>
        </div>
    )
        

}

export default ServicePost;