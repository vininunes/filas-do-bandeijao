import styled from 'styled-components'
import theme from '@/styles/theme'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    overflow: hidden;
`

export const Body = styled.div`
    position: absolute;
    z-index: 0;
    transform: translateY(3.75rem);

    display: flex;

    height: calc(100vh - 3.75rem);
    width: 100vw;

    background-color: ${theme.colors.gray[100]};
`
