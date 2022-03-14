import styled from 'styled-components';

export const Container = styled.div`
     margin: 30px 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 16px;
    color: #FFF;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 14px;
    color: #ACBED8;
`;

export const IconArea = styled.div<{active: boolean}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#25cd89' : 'rgba(211, 213, 212, 0.2)'} ;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px ;
`;

export const Point = styled.div<{active: boolean}>`
    width: 6px;
    height: 6px;
    border: 3px solid rgba(211, 213, 212, 0.2);
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active ? '#25cd89' : 'rgba(211, 213, 212, 0.2)'} ;

`;