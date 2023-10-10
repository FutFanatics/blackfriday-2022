import styled from 'styled-components';

export const BoxTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxMarca = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const BoxApp = styled.div`
    display: flex;
    background-color: #161616;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
`

export const BoxInstall = styled.div`
    display: flex;
    border: 2px solid #00DF5E;
    border-radius: 10px;
    width: 150px;
    height: 50px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    padding: 8px 20px;
    margin: 0px 8px;

    &:first-child{
        margin-left: 0px;
    }
`
export const BoxDesconto = styled.div`
    width: 50%;
    padding: 0px 8px;

    img{
        width: 100%;
        object-fit: cover;
    }
`

export const BoxForms = styled.div`
    background-color: #161616;
    padding: 20px 40px;
    border-radius: 20px;
`