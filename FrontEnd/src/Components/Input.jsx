import {InputStyle} from "../styled/Input.js"


const Input = ({TipoInput, NomeInput, PlaceholderInput}) => {
    return(
        <InputStyle type={TipoInput}
        name={NomeInput}
        placeholder={PlaceholderInput}
        required
        />
    )
}

export default Input;