import theme from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 25rem;
    height: auto;

    border-radius: 10px;

    margin: 0.75rem ;
    padding: 1rem ;

    background-color: ${theme.background};

    backdrop-filter: blur(5px);

    transition: width 0.5s ease;

    @media only screen and (max-width: 600px) {
        width: calc(100vw - 1.5rem);
    }
`

export const Title = styled.h3`
    font-size: 22px;

    color: ${theme.colors.white};
`

export const Button = styled.button`
    width: 2rem;
    height: 2rem;
`
