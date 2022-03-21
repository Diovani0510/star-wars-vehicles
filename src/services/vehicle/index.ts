import axios from 'axios'
import { mapRequestResults } from 'helpers/vehicles'
import { VehicleCardProps } from 'types/vehicle'

const vehiclesApiBaseUrl = 'https://swapi.dev/api'
const VEHICLES_ENDPOINT = '/vehicles/'

const imagesApiBaseUrl = 'https://imsea.herokuapp.com/api/1?q='

export async function getVehicleImage(searchTerm: string) {
    let vehicleImage = ''

    return await axios({
        method: 'get',
        url: imagesApiBaseUrl + encodeURI(searchTerm)
    })
    .then(function (response) {
        const results = response.data.results
        
        if (results) {
            vehicleImage = results[0]
        }
    })
    .catch(function (error) {
        console.log(error)
    })
    .then(function () {
        return vehicleImage
    })
}

export async function getVehicles(url?:string) {
    const vehicles = new Array<VehicleCardProps>()
    let nextPageUrl:string

    return await axios({
            method: 'get',
            url: url || (vehiclesApiBaseUrl + VEHICLES_ENDPOINT)
        })
        .then(function (response) {
            const results = response.data.results
            
            if (results) {
                mapRequestResults(results)
            }
            
            nextPageUrl = response.data.next
        })
        .catch(function (error) {
            console.log(error)
        })
        .then(function () {
            return { vehicles, nextPageUrl }
        })
}