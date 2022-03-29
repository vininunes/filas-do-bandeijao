import styled from 'styled-components'

import theme from '@/styles/theme'

import { motion } from 'framer-motion'

export const Container = styled.div`
    width: 100%;

    padding-top: 1rem;
    padding-bottom: 1rem;

    border-bottom: 1px solid ${theme.colorsOpacity.white[10]};

    &:last-child {
        padding-bottom: 0rem;

        border-bottom: none;
    }
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    > div {
        display: flex;
        align-items: center;
    }
`

export const Indicator = styled.span`
    width: 1rem;
    height: 1rem;

    border-radius: 5px;

    background-color: aliceblue;
`

export const Content = styled.div`
    margin-left: 1rem;

    width: fit-content;
`

export const Title = styled.h3`
    font-size: 18px;

    color: ${theme.colors.white};
`

export const Subtitle = styled.p`
    font-size: 14px;

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

    width: 100%;

    overflow: hidden;
`

export const variantsBody = {
    open: {
        display: 'block',
        height: 'auto'
    },
    closed: {
        height: '0rem',
        transitionEnd: {
            display: 'none'
        }
    }
}

export const Text = styled.p`
    width: 100%;

    text-align: right;

    margin-top: 0.375rem;

    font-size: 12px;

    color: ${theme.colors.white};
`
