import theme from '@/styles/theme'
import Element from './components/Element'
import { Container } from './styles'

const Mock = [
    {
        restaurantName: 'Instituo de Física',
        rowStatus: 'Moderada',
        colorRowStatus: theme.colors.yellow[500],
        updated: 'Atualizado há 10 minutos',
        moreInformation: [
            {
                icon: 'place',
                title: 'Ponto de referencia',
                text: 'Esquina 1'
            }
        ]
    }
]

export default function List() {
    return (
        <Container>
            {Mock.map(element => {
                return (
                    <Element
                        key={element.restaurantName}
                        restaurantName={element.restaurantName}
                        colorRowStatus={element.colorRowStatus}
                        moreInformation={element.moreInformation}
                        rowStatus={element.rowStatus}
                        updated={element.updated}
                    />
                )
            })}
        </Container>
    )
}
