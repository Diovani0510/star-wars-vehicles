export type VehicleCardProps = {
    imgUrl: string,
    name: string,
    class: string,
    speed: string,
    price: string,
}

export type VehicleResponse = {
    cargo_capacity: string,
    consumables: string,
    cost_in_credits: string
    created: string,
    crew: string,
    edited: string,
    films: Array<string>
    length: string,
    manufacturer: string,
    max_atmosphering_speed: string,
    model: string,
    name: string,
    passengers: string,
    pilots: Array<string>
    url: string,
    vehicle_class: string,
}