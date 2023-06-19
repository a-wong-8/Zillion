import { useState } from "react";
import LoginForm from "./LoginForm";
import { Modal } from "../../context/Modal";

export default function LoginFormModal () {
    const[showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={()=>setShowModal(true)}>Sign in</button>
            
            {showModal && (
            <Modal onClose={()=> setShowModal(false)}>
                <LoginForm setShowModal={setShowModal}/>
            </Modal>
            )}
     </>
    )
}