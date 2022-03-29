import { Container, Section, Icon, Text, Content, Title } from './styles'

import IconProvider from '@/components/IconProvider'

import { ComponentProps } from './types'

type Props = ComponentProps

export default function MoreInformation({ icon, text, title }: Props) {
    return (
        <Container>
            <Section>
                <Icon>
                    <IconProvider icon={icon} size={'small'} />
                </Icon>
                <Content>
                    <Title>{title}</Title>
                    <Text>{text}</Text>
                </Content>
            </Section>
        </Container>
    )
}
