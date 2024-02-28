import { api } from "./AxiosService.js"
import { logger } from "../utils/Logger.js"

class HouseService {
    async getAllHouses() {
        const response = await api.get('api/houses')
        logger.log('Recieved houses from api: ', response.data)
    }
}

export const houseService = new HouseService()