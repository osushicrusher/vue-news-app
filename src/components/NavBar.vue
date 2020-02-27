<template>
  <div id="nav" class="nav">
    <router-link to="/" class="router-link" ontouchstart="">Home</router-link>
    <router-link to="/Words" class="router-link" ontouchstart="">Words</router-link>
    <font-awesome-icon icon="sign-in-alt" class="login-btn" ontouchstart="" @click="login()" v-if="!isAuthenticated"/>
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
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  height: 10vh;
}

.router-link {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  padding: 2px 4px;
}

.router-link:hover {
  border-bottom: 2px solid #fff;
}

.router-link-exact-active {
  background-color: #fff;
  color: #313131;
  text-decoration: none;
}

.login-btn {
  color: #fff;
  font-size: 1.5em;
  padding: 2px;
}

.login-btn:hover {
  background-color: #fff;
  color: #313131;
}

.avatar {
  border-radius: 50%;
  height: 40px;
  width: 40px
}

@media screen and (min-width: 768px) {
  .nav {
    font-size: 26px;
    height: 14vh;
  }

  .avatar {
    height: 60px;
    width: 60px;
  }
}

@media screen and (min-width: 1024px) {
  .nav {
    font-size: 34px;
  }
}

@media screen and (min-width: 1440px) {
  .nav {
    font-size: 40px; 
  }
}

</style>
