import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: block;
    align-items : center;
    justify-content: center;
    padding: 2rem;
    color: #39496A;
    background: red;//#FBFDFF;
    
`
export const Header = styled.div`
    width: 100%;
    display: flex;

    align-items : center;
    justify-content: center;

    margin-bottom: 2rem;
`

export const CodeBlock = styled.div`
    width: 100%;
    display: flex;

    align-items : center;
    justify-content: center;
`

export const AvatarPicture = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%; 
    margin-right: 0.5rem;
`

export const CommitText = styled.p`
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 14pt;
    line-height: 20px;
`