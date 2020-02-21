<template>
    <div class="row">
        <div class="card" v-for="result in limitedResults" :key="result.title">
            <a :href="result.url" class="card__link" target="_blank" ontouchstart="">
                <h1 class="card__ttl">{{ result.title }}</h1>
                <p class="card__abs">{{ result.abstract }}</p>
            </a>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Card',
    data() {
        return {
            results: []
        }
    },
    mounted() {
        axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OzPrAmqbJSZAeHADDLGPH2pYRpTn4czS")
            .then(res => {
                this.results = res.data.results
            })
    },
    computed: {
        limitedResults() {
            // resultsが15記事だけ表示する
            return this.results.slice(0, 15)
        }
    }
}
</script>

<style>

.row {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
}

.card {
    box-shadow: 0 0 5px rgba(0, 0, 0, .7);
    margin: 30px auto 0 auto;
    padding: 10px; 
    width: 85%;
}

.card:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, .9);
    transform: translateY(-10px) scale(1.1);
    transition: all .3s ease;
}

.card__link {
    color: #313131;
    text-decoration: none;
}

.card__ttl {
    background-color: blanchedalmond;
    font-size: 16px;
    padding: 10px;
    max-height: 62px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

.card__abs {
    background-color: violet;
    font-size: 16px;
    padding: 10px;
    max-height: 80px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
}


</style>