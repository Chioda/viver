<template>
    <footer id="footer">
        <p>O seu portal do condomínio &copy;2022</p>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
#footer {
    position: fixed;
    bottom: 0;
    height: 30px;
    background-color: rgb(155, 156, 156);
    border-top:4px solid #111;
    color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    
}

</style>