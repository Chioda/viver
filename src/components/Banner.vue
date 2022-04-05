<template>
<section id="main-banner" class="mainSection bg-img-section img-fluid" style="background-image: url(img/Quadra.jpeg);"></section>
<div id="main-baner">
    <h2>Banner</h2>
</div>
</template>

<script>

export default{
    name: "Banner"
}


</script>

<style scoped>
    #main-banner {
        background-position: 0 -250;
        background-size:40%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        
    }
</style>