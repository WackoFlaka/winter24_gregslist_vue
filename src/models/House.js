export class House {
    constructor(data) {
        this.id = data.id
        this.bathrooms = data.bathrooms
        this.bedrooms = data.bedrooms
        this.levels = data.levels
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.description = data.description
        this.creator = data.creator
        this.createdAt = new Date(data.createdAt)

    }
}