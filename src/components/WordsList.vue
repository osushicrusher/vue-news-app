<template>
    <ul class="words__lists">
        <li v-for="(word, key) in words" :key="key" class="words__list">
            <div class="words__list-name">
                <span>{{ word.name }}</span>
                <font-awesome-icon icon="heart" class="like-btn" @click="likeWord(word, key)" :class="{ liked: word.isLiked }" />
                <font-awesome-icon icon="trash" class="remove-btn" @click="removeWord(key)" />
            </div>
            <div class="words__list-sentence">
                ・ {{ word.sentence }}
            </div>  
        </li>
    </ul>
</template>

<script>

import { db } from '../plugins/firebase'

export default {
    name: 'WordsList',
    computed: {
        user(){
            return this.$store.state.user
        },
        words() {
            return this.$store.state.words
        },
    },
    methods: {
        likeWord(word, key) {
            // like-btnをtoggleしてその都度、状態をfirestoreに反映させる
            const wordsRef = db.collection(this.user.uid)
            word.isLiked = !word.isLiked
            wordsRef.doc(key).update(word)
        },
        removeWord(key) {
            // remove-btnを押すと、その単語はfirestoreから削除される
            const wordsRef = db.collection(this.user.uid)
            wordsRef.doc(key).delete()
        }
    }
}
</script>

<style>

.words__lists {
    background-color: yellow;
}

.words__list {
    background-color: antiquewhite;
    border-radius: 10px;
    list-style: none;
    margin-top: 18px;
    overflow-wrap: break-word;
}

.words__list-name {
    background-color: cadetblue;
    color: #fff;
    padding: 8px;
    position: relative;
}

.like-btn {
    color: #313131;
    position: absolute;
    top: 50%;
    right: 20%;
    transform: translate(-50%, -50%);
}

.liked {
    color: brown;
}

.remove-btn {
    color: #313131;
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translate(-50%, -50%);
}

.words__list-sentence {
    background-color: palegoldenrod;
    padding: 10px;
}

@media screen and (min-width: 768px) {
    .words__lists {
        margin: 40px auto 0 auto;
        width: 90%;
    }
}

@media screen and (min-width: 1024px) {
    .words__lists {
        width: 80%;
    }
}

@media screen and (min-width: 1440px) {
    .words__lists {
        margin: 0;
        padding: 30px;
        width: 50%;
    }
}

</style>