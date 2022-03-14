import { Link } from 'react-router-dom';
import { Theme } from 'components/Theme';
import { useForm, FormActions } from 'contexts/FormContext';
import * as C from './styles';
import { ChangeEvent, useEffect, useState } from 'react';
import Modal from 'components/Modal';

export const FormStep3 = () => {


    const { state, dispatch } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch({ 
            type: FormActions.setCurrentStep, 
            payload: 3 });
    }, [dispatch])

    const handleNextStep = () => {
        if (state.email && state.github && state.linkedin !== ''){
            console.log(state);
        } else {
            setIsModalOpen(true);
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }


    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    const handleLinkedinChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setLinkedin,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                <h1>Legal, {state.name}! Onde te achamos?</h1>
                <p>Preencha os campos para conseguirmos entrar em contato.</p>

                <hr/>
                <label>
                    Qual o seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual o seu GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <label>
                    E o seu LinkeId?
                    <input
                        type="url"
                        value={state.linkedin}
                        onChange={handleLinkedinChange}
                    />
                </label>
                <Link to="/step2" className="backButton">
                   Voltar
                </Link>
                <C.Button onClick={handleNextStep}>Finalizar Cadastro</C.Button>
                {isModalOpen && (
                    <Modal closeModal={() => setIsModalOpen(false)}/>
                )}
            </C.Container>
        </Theme>
    )
}
