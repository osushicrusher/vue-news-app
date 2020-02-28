<template>
    <div class="row">
        <div class="card" v-for="result in limitedResults" :key="result.title">
            <a :href="result.url" class="card__link" target="_blank" ontouchstart="">
                <h1 class="card__ttl">{{ result.title }}</h1>
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
            // resultsが12記事だけ表示する
            return this.results.slice(0, 12)
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
    display: flex;
    align-items: center;
    margin: 30px auto 0 auto;
    padding: 10px;
    min-height: 160px;
    width: 85%;
}

.card:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, .7);
    transform: translateY(-6px) scale(1.05);
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
}

@media screen and (min-width: 768px) {
    .card {
        min-height: 200px;
        width: 40%;
    }

    .card__ttl {
        font-size: 18px;
    }
}

@media screen and (min-width: 1024px) {
    .card {
        min-height: 240px;
    }

    .card__ttl {
        font-size: 24px;
    }
}

@media screen and (min-width: 1440px) {
    .card {
        min-height: 280px;
    }

    .card__ttl {
        font-size: 30px;
    }
}

</style>