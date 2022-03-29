import theme from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: auto;

    padding-top: 0.75rem;
`

export const Section = styled.span`
    display: flex;

    align-items: center;
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.white};
`

export const Content = styled.span`
    margin-left: 0.75rem;
`

export const Title = styled.h4`
    font-size: 14px;

    color: ${theme.colors.white};
`

export const Text = styled.p`
    font-size: 12px;

    color: ${theme.colors.white};
`
