<script>

export default {
    name: 'Appointment',
    components: {},
}
</script>

<template>
    <div class="container">
        <h2 class="title">Запис на прийом</h2>
        <div class="appointment-container">
            <form action="" class="user-form">
                <label for="">
                    <input type="name" placeholder="ім'я">
                </label>
                <label for="">
                    <input type="text" placeholder="телефон">
                </label>
                <label for="">
                    <input type="text" placeholder="текст">
                </label>
            </form>
            <div class="chat-container">
                
            </div>
        </div>
    </div>
</template>

<style>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 64px;
    width: 100%;
    height: 100vh;
}

</style>