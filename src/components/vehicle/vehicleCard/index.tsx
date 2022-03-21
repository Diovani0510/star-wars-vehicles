import { VehicleCardProps } from "types/vehicle"
import "./style.css"


export function VehicleCard(props: VehicleCardProps) {
    return (
        <div className="card">
            <div className="container card-container">
                <img className="card-image" src={props.imgUrl} alt="teste" />
                <span className="card-title">{props.name}</span>
                <span className="card-info"><strong className="card-info-bold">class:</strong>{` ${props.class}`}</span>
                <span className="card-info"><strong className="card-info-bold">speed:</strong>{` ${props.speed}`}</span>
                <span className="card-info"><strong className="card-info-bold">price:</strong>{` ${props.price}`}</span>
            </div>
        </div>
    )
}