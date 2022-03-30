import { useState } from 'react'
import IconProvider from '../IconProvider'
import List from '../List'
import { Container, Title, Text, Button, IconButton, variantsIconButton, variantsContainer } from './styles'

import { connect } from 'react-redux'
import { dispatchToProps, stateToProps } from '@/store/connect'
import { StateProps, DispatchProps } from '@/store/connect/types'

import { ComponentProps } from './types'

type Props = ComponentProps & StateProps & DispatchProps

function FooterComponent({ navigation, toggleStatusForm }: Props) {
    const { statusFormIsVisible } = navigation

    return (
        <Container animate={statusFormIsVisible ? 'open' : 'closed'} variants={variantsContainer}>
            <span>
                <Title>Indicar estado da fila</Title>
            </span>
            <Button onClick={() => toggleStatusForm()}>
                <IconButton>
                    <IconProvider icon={'navigateNext'} size={'medium'} />
                </IconButton>
            </Button>
        </Container>
    )
}

export default connect(stateToProps, dispatchToProps)(FooterComponent)
