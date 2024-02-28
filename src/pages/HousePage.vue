<template>
<<<<<<< HEAD
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
=======
  <div class="container">
    <section class="row">
      <div class="col-12 my-2">
        <h1>Welcome to House Listing!</h1>
      </div>
    </section>

    <section class="row">
      <div v-for="house in houses" :key="house.id" class="col-md-4 mb-3">
        <!-- <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div> -->
        <HouseCard :houseProp="house" />
      </div>
    </section>
  </div>
</template>
  
<script>
import Pop from '../utils/Pop'
import { houseService } from '../services/HouseService'
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState';
import HouseCard from '../components/HouseCard.vue';


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

    return {
      houses: computed(() => AppState.houses),
    }
  },
  components: { HouseCard, HouseCard }
}
</script>
  
<style scoped lang="scss"></style>
>>>>>>> 76d5bfa2e0183aa0b4a6c77d0e71c2aa290e24b2
