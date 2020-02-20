<template>
    <div class="btn-box">
        <select name="sort" size="1">
            <option value="新しい順">新しい順</option>
            <option value="古い順">古い順</option>
            <option value="アルファベット">アルファベット順</option>
            <option value="逆アルファベット順">逆アルファベット順</option>
        </select>
        <span class="btn-liked"><font-awesome-icon icon="heart" /></span>
        <span @click="login()" v-if="!isAuthenticated">Login</span>
        <img v-if="isAuthenticated" :src="user.photoURL" class="avatar" />
    </div>    
</template>

<script>

import { db, firebase } from '../plugins/firebase.js'
import { mapActions } from 'vuex'

export default {
    name: 'BtnBox',
    computed: {
        user() {
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
        ...mapActions(['setUser', 'setWords']),
        login() {
            const provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider)
                .then(result => {
                    const user = result.user
                    // 取得したユーザー情報をstoreのstateに格納
                    this.setUser(user)
                }).catch(err => {
                    window.alert(err)
                }).then(() => {
                    // ユーザー認証完了時、 実行する
                    // ユーザーのuidをコレクション名とする。
                    const wordsRef = db.collection(this.user.uid)
                    wordsRef.orderBy('createdAt').onSnapshot(querySnapshot => {
                    const obj = {}
                    querySnapshot.forEach(doc => {
                    obj[doc.id] = doc.data()
                    this.setWords(obj)
                    })
                })
            })
        }        
    }
}
</script>

<style>
.btn-box {
    background-color: cyan;
    display: flex;
    justify-content: space-around;
    padding: 12px;
}

.btn-liked {
    background-color: #fff;
    color: brown;
    font-size: 24px;
}

.avatar {
    height: 50px;
    width: 50px;
}
</style>