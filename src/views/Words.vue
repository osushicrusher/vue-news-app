<template>
    <div class="words">
        <BtnBox></BtnBox>
        <span @click="confirm()">確認ボタン</span>
        <span>いいねのみ表示する</span>
        <InputBox></InputBox>
        <WordsList></WordsList>
    </div>
</template>

<script>

import BtnBox from '../components/BtnBox'
import InputBox from '../components/InputBox'
import WordsList from '../components/WordsList'


export default {
    name: 'Words',
    components: {
        BtnBox,
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
    },
    methods: {

            confirm() {
                console.log(this.words)
                console.log(this.user.uid)
                console.log(this.wordsRef)
            },
        }
    }


</script>

<style scoped>


.words {
    margin: 0 auto;
    padding: 8px;
    width: 90%;
}

</style>