import styled from 'styled-components';

export const ImgBanner = styled.img`
    object-fit: cover;
    width: 100%;
    transition: ease-in-out 0.7s;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
`
export const BannerHomeTop = styled.div`
    min-height: 60vh;

    img{
        object-fit: cover;
        width: 100%;
        height: 70vh;
    }
`