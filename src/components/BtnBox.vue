<template>
    <div class="btn-box">
        <select name="sort" size="1">
            <option value="新しい順">新しい順</option>
            <option value="古い順">古い順</option>
            <option value="アルファベット">アルファベット順</option>
            <option value="逆アルファベット順">逆アルファベット順</option>
        </select>
        <span class="btn-liked"><font-awesome-icon icon="heart" /></span>
    </div>   
</template>

<script>

export default {
    name: 'BtnBox',
}
</script>

<style>
.btn-box {
    background-color: cyan;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 12px;
}

.btn-liked {
    background-color: #fff;
    color: brown;
    font-size: 20px;
}
</style>