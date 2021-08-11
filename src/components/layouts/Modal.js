import ReactDOM from 'react-dom';
import styled from 'styled-components';

const BDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
`;

const ModalOvrl = styled.div`
    position: fixed;
    top: 20vh;
    left: 15%;
    width: 70%;
    background-color: white;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;
    font-size: 25px;
    padding: 20px;
`;

const Backdrop = props => {
    return <BDrop />
}

const ModalOverlay = (props) => {
    return (
        <ModalOvrl>
            <div>{props.children}</div>
        </ModalOvrl>
    )
}

const portalElement = document.querySelector('#overlay');

const Modal = (props) => {
    return(
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal( <ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </>
    ) 
}

export default Modal;