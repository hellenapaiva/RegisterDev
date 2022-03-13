import styled from 'styled-components';

export const Container = styled.div<{ selected: boolean;}>`
    display: flex;
    border: 2px solid ${props => props.selected ? '#25cd89' : '#D3D5D4'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;

`;

export const Icon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(211, 213, 212, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;

`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 7px;
`;

export const Description = styled.div`
    font-size: 15px;
    color: #ACBED8;
`;