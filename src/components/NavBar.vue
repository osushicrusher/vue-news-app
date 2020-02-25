<template>
  <div id="nav" class="nav">
    <router-link to="/" class="router-link">Home</router-link>
    <router-link to="/Words" class="router-link">Words</router-link>
    <span @click="login()" v-if="!isAuthenticated" class="login-btn">Login</span>
    <img v-if="isAuthenticated" :src="user.photoURL" class="avatar" />
  </div>
</template>

<script>

import { db, firebase } from '../plugins/firebase.js'
import { mapActions } from 'vuex'

export default {
  name: 'NavBar',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav {
  background-color: #313131;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  height: 10vh;
}

.router-link {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
}

.router-link-exact-active {
  background-color: #fff;
  color: #313131;
  text-decoration: none;
  padding: 6px;
}

.login-btn {
  color: #fff;
}

.avatar {
  border-radius: 50%;
  height: 50px;
  width: 50px;
}

</style>
