import { useState } from "react";
import SignupFormPage from ".";
import { Modal } from "../../context/Modal";

export default function SignupFormModal () {
    const[showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={()=>setShowModal(true)}>New account</button>
            
            {showModal && (
            <Modal onClose={()=> setShowModal(false)}>
                <SignupFormPage/>
            </Modal>
            )}
        </>
    )
}