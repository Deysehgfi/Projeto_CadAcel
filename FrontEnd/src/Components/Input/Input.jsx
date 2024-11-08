import {InputStyle} from "../../styled/Input.js"
import "../../index.css"
import iconEmail from "../../public/Email.svg"

const Input = ({TipoInput, NomeInput, PlaceholderInput}) => {
    return(
        <>
        <div className="input-fields">
        <input type="email" placeholder="" required/>
        <label> <img src={iconEmail} alt="" className="imgIConEmail" />  Email</label>
        </div>
        </>
    )
}

export default Input;