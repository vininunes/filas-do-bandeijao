import { useState } from 'react'
import IconProvider from '../IconProvider'
import List from '../List'
import {
    Container,
    Header,
    Title,
    Button,
    IconButton,
    Body,
    variantsIconButton,
    variantsBody,
    variantsContainer
} from './styles'

import { connect } from 'react-redux'
import { dispatchToProps, stateToProps } from '@/store/connect'
import { StateProps, DispatchProps } from '@/store/connect/types'

type Props = StateProps & DispatchProps

function HeaderComponent({ navigation }: Props) {
    const { statusFormIsVisible } = navigation

    const [bodyIsOpen, setBodyIsOpen] = useState(false)

    return (
        <Container animate={!statusFormIsVisible ? 'open' : 'closed'} variants={variantsContainer}>
            <Header onClick={() => setBodyIsOpen(!bodyIsOpen)}>
                <Title>Filas do bandejão</Title>
                <Button>
                    <IconButton animate={bodyIsOpen ? 'open' : 'closed'} variants={variantsIconButton}>
                        <IconProvider icon={'expandMore'} size={'medium'} />
                    </IconButton>
                </Button>
            </Header>
            <Body animate={bodyIsOpen ? 'open' : 'closed'} variants={variantsBody}>
                <List />
            </Body>
        </Container>
    )
}

export default connect(stateToProps, dispatchToProps)(HeaderComponent)
