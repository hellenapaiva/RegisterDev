import { CloseButtonStyled,  ModalStyled, TextModal } from "./styles";
import {AiOutlineClose} from 'react-icons/ai';


const Modal = ( { closeModal } : any) => {
       
return (
        <>
        <ModalStyled>
        
              <CloseButtonStyled onClick={closeModal}>
                <AiOutlineClose />
              </CloseButtonStyled>
        
          <TextModal>Preencha os dados.</TextModal>
        
        </ModalStyled>
      </>

    );
} 

export default Modal;