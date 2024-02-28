import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class HouseService {
    async getAllHouses() {
        const response = await api.get('api/houses')
        logger.log('Received Houses: ', response.data)
        const newHouses = response.data.map(housePOJO => new House(housePOJO))
        AppState.houses = newHouses
    }
}

export const houseService = new HouseService()