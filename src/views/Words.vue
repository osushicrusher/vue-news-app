<template>
    <div class="words">
        <InputBox></InputBox>
        <WordsList></WordsList>
    </div>
</template>

<script>

import InputBox from '../components/InputBox'
import WordsList from '../components/WordsList'


export default {
    name: 'Words',
    components: {
        InputBox,
        WordsList
    },
    computed: {
        user() { // 何回もthis.$store.state.hogeと記述しなくてもいいようにする
            return this.$store.state.user
        },
        words() {
            return this.$store.state.words
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated
        }
    }
}


</script>

<style scoped>


.words {
    margin: 0 auto;
    padding: 14px;
    width: 90%;
}

.search-box {
    text-align: center;
}

@media screen and (min-width: 1440px) {
    .words {
        display: flex;
        justify-content: flex-end;
        padding: 30px;
    }
}


</style>