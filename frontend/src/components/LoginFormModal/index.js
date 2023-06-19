import { useState } from "react";
import LoginForm from "./LoginForm";
import { Modal } from "../../context/Modal";

export default function LoginFormModal () {
    const[showModal, setShowModal] = useState(false);

    return (
        <>
            <a onClick={()=>setShowModal(true)}>Sign in</a>
            
            {showModal && (
            <Modal onClose={()=> setShowModal(false)}>
                <LoginForm setShowModal={setShowModal}/>
            </Modal>
            )}
     </>
    )
}