import firebase from 'firebase/app' // firebase 全般の機能を利用するために必要
import 'firebase/auth' // ログイン機能を使うために読み込み
import 'firebase/firestore' // データベース機能を使うために読み込み

// firebaseの準備ができている場合のみに設定する 
if(!firebase.apps.length) {
    var firebaseConfig = {
        apiKey: "AIzaSyB1SXdLz9SGMuHsb1GhmVFB5SbamK-XfDk",
        authDomain: "final-952b0.firebaseapp.com",
        databaseURL: "https://final-952b0.firebaseio.com",
        projectId: "final-952b0",
        storageBucket: "final-952b0.appspot.com",
        messagingSenderId: "854707921818",
        appId: "1:854707921818:web:3cd2489ba54270b921d023",
        measurementId: "G-61C5GTFMCR"
    };
    firebase.initializeApp(firebaseConfig) // configによってfirebaseの設定を行う
}

const db = firebase.firestore() // データベースを定義

export {
    firebase,
    db,
}