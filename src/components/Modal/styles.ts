import styled from "styled-components";


export const ModalStyled = styled.div`
  background: #fff;
  justify-content: space-between;
  box-shadow: 11px 9px 20px -18px rgba(0,0,0,0.37);
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  min-width: 30rem;
  z-index: 2;
`;

export const CloseButtonStyled = styled.button`
   background-color: #fff;
    display: flex;
    align-items: end;
    padding: 0 14px;
    height: 30px;
    border-radius: 5px;
    border: none;
    color:#000;
    font-size: 1.6em;
    margin-top: 10px;
    margin-left: 400px;
`;

export const TextModal = styled.div`
    color: #000;
    font-size: 26px;
    text-align: center;
    align-items: center ;
    padding: 20px;
    margin-bottom: 50px;
`;