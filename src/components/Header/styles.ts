import styled from 'styled-components'

import theme from '@/styles/theme'

import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: absolute;
    z-index: 1;

    width: 25rem;
    height: auto;

    border-radius: 10px;

    margin: 0.75rem;
    padding: 1rem;

    background-color: ${theme.background};

    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);

    backdrop-filter: blur(5px);

    transition: width 0.5s ease;

    @media only screen and (max-width: 600px) {
        width: calc(100vw - 1.5rem);
    }
`
export const variantsContainer = {
    open: {
        translateX: '0rem'
    },
    closed: {
        translateX: '-30rem'
    }
}

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: auto;

    cursor: pointer;
`

export const Title = styled.h3`
    font-size: 22px;

    color: ${theme.colors.white};
`

export const Button = styled.button`
    width: 2rem;
    height: 2rem;

    border: unset;
    border-radius: 5px;

    background-color: unset;

    cursor: pointer;

    transition: background-color 0.3s;

    &:hover {
        background-color: rgb(0, 0, 0, 0.15);
    }
`

export const IconButton = styled(motion.i)`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.white};
`

export const variantsIconButton = {
    open: {
        rotate: 180
    },
    closed: {
        rotate: 0
    }
}

export const Body = styled(motion.div)`
    display: none;

    overflow: hidden;
`

export const variantsBody = {
    open: {
        display: 'flex',
        height: 'auto'
    },
    closed: {
        height: '0rem',
        transitionEnd: {
            display: 'none'
        }
    }
}
