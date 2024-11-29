import Formulario from "../Components/Formulario/Formulario.jsx";
import { SectionLogin, Logo } from "../styled/Section01.js";
import img01 from "../public/img01.png"
import logoCadAcel from "../public/Logo.png"
import { motion } from "framer-motion"

const Section01 = ({ FormTitulo }) => {
    return (
        <>
            <Logo src={logoCadAcel} alt="Logo do site" />
            <SectionLogin>
                <motion.img  initial={{x: 100 }} animate={{
                    x: 1, x: 0,
                    opacity: 1
                }} transition={{
                    default: { type: "spring" },
                    opacity: { ease: "linear" }, duration: 2
                }} className="img-Setion01" src={img01} alt="Ilustração com um cadeirante e um mulher deficiênte física" />
                <Formulario FormTitulo="Login" />
            </SectionLogin>
        </>
    )
}

export default Section01;