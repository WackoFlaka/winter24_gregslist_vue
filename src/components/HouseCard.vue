<template>
    <div class="card" style="width: 18rem;">
        <img :src="houseProp.imgUrl" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${{ houseProp.price }}</h5>
            <p class="card-text">{{ houseProp.bedrooms }} bds | {{ houseProp.bathrooms }} ba | {{ houseProp.levels }} Lvs
            </p>
            <img :src="houseProp.creator.picture" alt="" class="creator-logo">
        </div>
    </div>
</template>
  
<script>
import { House } from '../models/House';

export default {
    props: {
        houseProp: { type: House, required: true }
    },
    setup() {
        return {

        }
    }
}
</script>
  
<style scoped lang="scss">
img {
    height: 30vh;
    width: 30vh;
    object-fit: cover;
}

.card {
    width: 30vh !important;
}


.creator-logo {
    width: 5vh;
    height: 5vh;
    border-radius: 50%;
}
</style>