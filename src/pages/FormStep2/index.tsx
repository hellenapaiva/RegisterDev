import { useNavigate } from 'react-router-dom';
import { Theme } from 'components/Theme';
import { useForm, FormActions } from 'contexts/FormContext';
import * as C from './styles';
import { useEffect, useState } from 'react';
import Modal from 'components/Modal';
import { SelectOption } from 'components/SelectOption';
import { Link } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';

export const FormStep2 = () => {

    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if(state.name === ''){
            navigate('/');
        } else {
            dispatch({ 
                type: FormActions.setCurrentStep, 
                payload: 2 });
        }
    }, [])

    const handleNextStep = () => {
        if (state.name !== ''){
            navigate('/step3');
        } else {
            setIsModalOpen(true);
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que condiz com o seu estado profissional.</p>

                <hr/>

                <SelectOption
                    title="Sou iniciante"
                    description="Comecei a programar há menos de 2 anos"
                    icon="🥳"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                />

                <SelectOption
                    title="Sou Programador profissional"
                    description="Já programo há 2 anos ou mais"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
                />  

               <Link to="/" className="backButton">
                   Voltar
                </Link>
                <C.Button onClick={handleNextStep}>Próximo</C.Button>
                {isModalOpen && (
                    <Modal closeModal={() => setIsModalOpen(false)}/>
                )}
            </C.Container>
        </Theme>
    )
}
