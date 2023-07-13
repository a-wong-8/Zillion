import React from "react";
import { useContext, useEffect, useRef, useState } from "react"
import ReactDOM from 'react-dom';
import './Modal.css'

const ModalContext = React.createContext();

export const ModalProvider = ({children}) => {

    const modalRef = useRef();
    const[value, setValue] = useState();

    useEffect(()=>{
        setValue(modalRef.current)
    },[])

    return (
        <>
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
        <div ref={modalRef}></div>
        </>
    )
}

export function Modal({onClose, children}) {
    const modalNode = useContext(ModalContext);
    
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="modal">
            <div id="modal-background" onClick={onClose}></div>
            <div id="modal-content">
                <div id="close-x" onClick={onClose}>✖️</div>
                {children}
            </div>
        </div>, modalNode
    )
}