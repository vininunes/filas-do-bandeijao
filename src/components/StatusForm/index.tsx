import { useState } from 'react'
import { connect } from 'react-redux'
import { stateToProps, dispatchToProps } from '@/store/connect'
import { DispatchProps, StateProps } from '@/store/connect/types'
import IconProvider from '../IconProvider'
import List from '../List'
import {
    Container,
    Header,
    Title,
    Button,
    Icon,
    Body,
    Section,
    TitleSection,
    Text,
    Content,
    ButtonSection,
    variantsContainer
} from './styles'

type Props = StateProps & DispatchProps

function StatusFormComponent({ navigation, toggleStatusForm }: Props) {
    const { statusFormIsVisible } = navigation

    const [bodyIsOpen, setBodyIsOpen] = useState(false)

    function onClose() {
        statusFormIsVisible && toggleStatusForm()
    }

    return (
        <Container animate={statusFormIsVisible ? 'open' : 'closed'} variants={variantsContainer}>
            <Header onClick={() => setBodyIsOpen(!bodyIsOpen)}>
                <Title>Instituto de Física</Title>
                <Button onClick={() => onClose()}>
                    <Icon>
                        <IconProvider icon={'close'} size={'small'} />
                    </Icon>
                </Button>
            </Header>
            <Body>
                <Section>
                    <div>
                        <Icon>
                            <IconProvider icon={'group'} size={'small'} />
                        </Icon>
                        <Content>
                            <TitleSection>Estado</TitleSection>
                            <Text>Selecione o estado da fila</Text>
                        </Content>
                    </div>
                    <ButtonSection>Selecionar</ButtonSection>
                </Section>
                <Section>
                    <div>
                        <Icon>
                            <IconProvider icon={'place'} size={'small'} />
                        </Icon>
                        <Content>
                            <TitleSection>Ponto de referencia</TitleSection>
                            <Text>Selecione o ponto de referencia da fila</Text>
                        </Content>
                    </div>
                    <ButtonSection>Selecionar</ButtonSection>
                </Section>
                <Section>
                    <div>
                        <Icon>
                            <IconProvider icon={'speed'} size={'small'} />
                        </Icon>
                        <Content>
                            <TitleSection>Velocidade</TitleSection>
                            <Text>Selecione a velocidade da fila</Text>
                        </Content>
                    </div>
                    <ButtonSection>Selecionar</ButtonSection>
                </Section>
            </Body>
        </Container>
    )
}

export default connect(stateToProps, dispatchToProps)(StatusFormComponent)
