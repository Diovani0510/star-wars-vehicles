import { getVehicleImage } from "services/vehicle"
import { VehicleCardProps, VehicleResponse } from "types/vehicle"

const mapRequestResult = async (result: VehicleResponse) => {
    return {
        imgUrl: await getVehicleImage(result.name) || getVehicleImage(result.model) || "",
        name: result.name,
        class: result.vehicle_class,
        speed: parseFloat(result.max_atmosphering_speed),
        price: parseFloat(result.cost_in_credits),
    }
}

export async function mapRequestResults(results: Array<VehicleResponse>) {
    const vehicleCardPropList = new Array<VehicleCardProps>()
    // await console.log(results.map(result => mapRequestResult(result)))
    // vehicleCardPropList.push(results.map(result => await mapRequestResult(result)))

}