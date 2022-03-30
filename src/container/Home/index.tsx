import { Container } from './styles'

import Map, { Marker, ViewState } from 'react-map-gl'

import env from '@/config/env'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import IconProvider from '@/components/IconProvider'
import { iconIF } from '@/assets/png'

import { connect } from 'react-redux'
import { dispatchToProps, stateToProps } from '@/store/connect'
import { StateProps } from '@/store/connect/types'
import StatusForm from '@/components/StatusForm'

type Props = StateProps

function Home({ navigation }: Props) {
    const { statusFormIsVisible } = navigation

    const [viewState, setViewState] = useState<ViewState>(null)
    const [userLocation, setUserLocation] = useState<any>()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(event => setUserLocation(event.coords))
    }, [])

    return (
        <Container>
            <Header />
            <Footer />
            <StatusForm />
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
                onClick={event => console.log(event.lngLat)}>
                <Marker latitude={-23.56065209531843} longitude={-46.73572426484927}>
                    {/* <IconProvider icon={'place'} size={'medium'} /> */}
                    <img src={iconIF} />
                </Marker>
            </Map>
        </Container>
    )
}

export default connect(stateToProps, dispatchToProps)(Home)
