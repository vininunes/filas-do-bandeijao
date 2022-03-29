export interface ComponentProps {
    restaurantName: string
    rowStatus: string
    colorRowStatus: string
    moreInformation: MoreInformation[]
    updated: string
}

export interface MoreInformation {
    icon: string
    title: string
    text: string
}
