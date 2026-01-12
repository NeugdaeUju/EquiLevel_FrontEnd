import React from 'react';
import { FaXmark } from "react-icons/fa6";
import '../assets/scss/modaleRaces.scss';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode
};

const ModalRaces: React.FC<ModalProps> = ({isOpen, onClose, title, children}) => {
    if (!isOpen) return null;

    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className="mdoal" onClick={(e) => e.stopPropagation}>
                <div className='modal-header'>
                    {title && <h2>{title}</h2>}
                    <button className="modal-colse" onClick={onClose}>
                        <FaXmark/>
                    </button>
                </div>

                <div className='modal-content'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default ModalRaces