import IconProvider from '@/components/IconProvider'
import theme from '@/styles/theme'
import { useState } from 'react'
import MoreInformation from '../MoreInformation'
import {
    Body,
    Button,
    Container,
    Content,
    Header,
    IconButton,
    Indicator,
    Subtitle,
    Text,
    Title,
    variantsBody,
    variantsIconButton
} from './styles'

import { ComponentProps } from './types'

type Props = ComponentProps

export default function Element({ restaurantName, rowStatus, colorRowStatus, moreInformation, updated }: Props) {
    const [moreInformationIsOpen, setMoreInformationIsOpen] = useState(false)

    return (
        <Container>
            <Header>
                <div>
                    <Indicator style={{ backgroundColor: colorRowStatus }} />
                    <Content>
                        <Title>{restaurantName}</Title>
                        <Subtitle style={{ color: colorRowStatus }}>{rowStatus}</Subtitle>
                    </Content>
                </div>
                <Button onClick={() => setMoreInformationIsOpen(!moreInformationIsOpen)}>
                    <IconButton animate={moreInformationIsOpen ? 'open' : 'closed'} variants={variantsIconButton}>
                        <IconProvider icon={'expandMore'} size={'medium'} />
                    </IconButton>
                </Button>
            </Header>
            <Body animate={moreInformationIsOpen ? 'open' : 'closed'} variants={variantsBody}>
                {moreInformation.map(information => {
                    return (
                        <MoreInformation
                            key={information.title}
                            icon={information.icon}
                            title={information.title}
                            text={information.text}
                        />
                    )
                })}
                <Text>{updated}</Text>
            </Body>
        </Container>
    )
}
