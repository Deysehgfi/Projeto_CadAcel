
import { ContainerGit, BackgroundGit} from "../../styled/GitHub.js"
import { useState } from "react"


const GitHub = ({active})=>{
    const fechargit = () => {
        active(false)
    }
    return(
        <>
        <BackgroundGit onClick={fechargit}></BackgroundGit>
        <ContainerGit git={active} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente illum molestias, inventore soluta minus, saepe beatae sed eligendi neque nesciunt, sunt officiis eos iste! Ea molestiae tempore corporis culpa cum.</ContainerGit>
    
        </>
    )
}

export default GitHub;