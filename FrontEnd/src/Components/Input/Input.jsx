import {InputStyle,InputFields, Label, ImgIcon} from "../../styled/Input.js"
import "../../index.css"
import iconEmail from "../../public/Email.svg"

const Input = ({TipoInput, NomeInput, NameLabel, IconImg, tipoDeUseState, Index, FuncaoInput, valorinput}) => {
    return(
        <InputFields className="input-fields">
        <InputStyle tabIndex={Index} value={valorinput} type={TipoInput} name={NomeInput} placeholder=""  required/>
        <Label> <ImgIcon src={IconImg} alt="" className="imgIConEmail" />{NameLabel}</Label>
        </InputFields>
    )
}

export default Input;