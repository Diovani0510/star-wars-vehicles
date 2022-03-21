import { Content, Footer, Header, VehicleCard } from "components"
import { useEffect, useState } from "react"
import { getVehicles } from "services/vehicle"
import { VehicleCardProps } from "types/vehicle"
import "./style.css"

export function VehiclesListPage() {

    const [ vehiclesList, setVehiclesList ] = useState(new Array())

    useEffect(() => {
        setVehiclesList(getVehicles())
    }, [])

    const renderVehicleCardList = () => {
        const cardList = []
        for(let i = 0; i < 8; i++) {
            cardList.push(<VehicleCard key={i}/>)
        }
        return (
            <div className="card-list">{cardList}</div>   
        )
    }

    return (
        <div className="container">
            <Header />
            <Content>
                {renderVehicleCardList()}
            </Content>
            <Footer />
        </div>
    )
}