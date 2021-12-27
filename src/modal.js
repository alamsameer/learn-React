import { useEffect,useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot=document.querySelector("#modal")

const Modal =({children})=>{
    const elRef=useRef(null);
    if(!elRef.current){
        elRef.current=document.createElement('div')
    }

    useEffect(()=>{
        modalRoot.appendChild(elRef.current);
        return ()=>modalRoot.removeChild(elRef.current) // cleaning eerytime the div so that it can't garbage the modalRoot
    },[])
    return createPortal(<div>{children}</div>,elRef.current)

}

export default Modal