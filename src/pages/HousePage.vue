<template>
    <section class="row">
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                    content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </section>
</template>


<script>
import Pop from '../utils/Pop.js';
import { houseService } from '../services/HouseService.js'
import { onMounted } from 'vue';

export default {
    setup() {

        async function getAllHouses() {
            try {
                await houseService.getAllHouses()
            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(() => {
            getAllHouses()
        })

        return {}
    }
}
</script>


<style lang="scss" scoped></style>