import {InputStyle,InputFields, Label, ImgIcon} from "../../styled/Input.js"
import "../../index.css"
import iconEmail from "../../public/Email.svg"

const Input = ({TipoInput, NomeInput, PlaceholderInput, NameLabel, IconImg}) => {
    return(
        <InputFields className="input-fields">
        <InputStyle type="email" placeholder="" required/>
        <Label> <ImgIcon src={IconImg} alt="" className="imgIConEmail" />{NameLabel}</Label>
        </InputFields>
    )
}

export default Input;