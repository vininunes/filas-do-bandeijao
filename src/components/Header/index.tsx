import { useState } from 'react'
import IconProvider from '../IconProvider'
import List from '../List'
import { Container, Header, Title, Button, IconButton, Body, variantsIconButton, variantsBody } from './styles'

export default function HeaderComponent() {
    const [bodyIsOpen, setBodyIsOpen] = useState(false)

    return (
        <Container>
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
