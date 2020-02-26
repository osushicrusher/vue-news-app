<template>
    <div class="input-box" @click="validateLogin()">
        <input type="text" v-model="newWordName" placeholder="Name" />
        <input type="text" v-model="newWordSentence" placeholder="example used in a practical way" />
        <button @click="addNewWord()" class="add-btn">Add</button>
    </div>    
</template>

<script>

import { db } from '../plugins/firebase.js'

export default {
    name: 'InputBox',
    data () {
        return {
            newWordName: '',
            newWordSentence: ''
        }
    },
    computed: {
        user() {
            return this.$store.state.user
        },
        isAuthenticated() {
            return this.$store.getters.isAuthenticated
        }
    },
    methods: {
        addNewWord() {
            // 1.単語名が明記されていること, 2.例文が明記されていることを条件とする
            if (this.newWordName && this.newWordSentence) {
                const act1 = {
                    name: this.newWordName, // 単語名
                    sentence: this.newWordSentence, // 例文の内容
                    isLiked: false, // お気に入り登録されているか
                    createdAt: new Date().getTime(), // 追加された時間を取得 orderBy()で昇順・降順に並び替える時に用いる                    
                }
                const wordsRef = db.collection(this.user.uid)
                wordsRef.add(act1).then(() => {
                    this.newWordName = ''
                    this.newWordSentence = ''
                })
            }
        },
        validateLogin() {
            // ログインが完了していない場合は、ログインをするよう促すalertを表示させる
            if(!this.isAuthenticated) {
                window.alert('If you want to put the word on your list, please log in with your Google account first !')
            }
        },
    }
    
}
</script>

<style>
.input-box {
    background-color: blueviolet;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 10px;
}

input[type="text"] {
    border: 0;
    padding: 10px;
    color: #313131;
    border: solid 1px #ccc;
    border-radius: 3px;
    margin-top: 10px;
}

input[type="text"]:focus {
    border: solid 2px blueviolet;
}

.add-btn {
    appearance: none;
    background-color: beige;
    border-radius: 20px;
    margin-top: 20px;
    padding: 6px;
}

@media screen and (min-width:768px) {
    .input-box {
        margin: 0 auto;
    }
}

</style>