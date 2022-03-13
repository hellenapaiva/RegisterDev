import styled from 'styled-components';

export const Container = styled.div`
    p{
        font-size: 16px;
        color: #ACBED8;
    }

    h1{
        margin: 0;
        padding: 0;
        font-size: 26px;
    }

    hr{
        height: 1px;
        border: 0;
        background-color: #467599;
        margin: 30px 0px;
    }

    label{
        font-size: 16px;

        input{
            display:block;
            margin-top: 10px;
            box-sizing: border-box;
            width: 100%;
            padding: 20px 10px;
            border: 2px solid #25cd89;
            border-radius: 10px;
            color: #fff;
            outline: 0;
            font-size: 16px;
            font-weight: bold;
            background-color: #1D3354;
        }

    }
    
    .backButton{
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #fff;
    }
    `;
    
export const Button = styled.button`
background-color: #25cd89;
color: #fff;
font-size: 16px;
font-weight: bold;
padding: 20px 40px;
border: 0;
border-radius: 10px;
cursor: pointer;
margin-top: 30px;
`;
