<<<<<<< HEAD
import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"
=======
import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
>>>>>>> 76d5bfa2e0183aa0b4a6c77d0e71c2aa290e24b2

class HouseService {
    async getAllHouses() {
        const response = await api.get('api/houses')
<<<<<<< HEAD
        logger.log('Recieved houses from api: ', response.data)
=======
        logger.log('Received Houses: ', response.data)
        const newHouses = response.data.map(housePOJO => new House(housePOJO))
        AppState.houses = newHouses
>>>>>>> 76d5bfa2e0183aa0b4a6c77d0e71c2aa290e24b2
    }
}

export const houseService = new HouseService()