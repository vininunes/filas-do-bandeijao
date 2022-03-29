import { Container } from './styles'

import Map, { ViewState } from 'react-map-gl'

import env from '@/config/env'
import { useState } from 'react'
import Header from '@/components/Header'

export default function Home() {
    const [viewState, setViewState] = useState<ViewState>(null)

    return (
        <Container>
            <Header />
            <Map
                {...viewState}
                onMove={event => setViewState(event.viewState)}
                initialViewState={{
                    longitude: -46.729814074270706,
                    latitude: -23.562668693769865,
                    zoom: 14.5
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle='mapbox://styles/mapbox/streets-v9'
                mapboxAccessToken={env.mapboxToken}
                maxBounds={[
                    [-46.779078543110245, -23.58418234374612],
                    [-46.6607033378379, -23.535484034820612]
                ]}
                onClick={event => console.log(event.lngLat)}></Map>
        </Container>
    )
}
