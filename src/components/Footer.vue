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
    height: 50px;
    background-color: rgb(155, 156, 156);
    border-top:4px solid #111;
    color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
}

</style>