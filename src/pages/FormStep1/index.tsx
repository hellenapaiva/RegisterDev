import { useNavigate } from 'react-router-dom';
import { Theme } from 'components/Theme';
import { useForm, FormActions } from 'contexts/FormContext';
import * as C from './styles';
import { ChangeEvent, useEffect, useState } from 'react';
import Modal from 'components/Modal';

export const FormStep1 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch({ 
            type: FormActions.setCurrentStep, 
            payload: 1 });
    }, [])

    const handleNextStep = () => {
        if (state.name !== ''){
            navigate('/step2');
        } else {
            setIsModalOpen(true);
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com o seu nome completo</p>

                <hr/>
                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus 
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <C.Button onClick={handleNextStep}>Próximo</C.Button>
                {isModalOpen && (
                    <Modal closeModal={() => setIsModalOpen(false)}/>
                )}
            </C.Container>
        </Theme>
    )
}