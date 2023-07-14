<script>

export default {
    name: 'ContactPage',
    components: {},
}
</script>

<template>
    <div class="container">
        <div class="contacts">
            <div class="address-phone">
                <p class="phone-name">Куценко Тяна:</p>
                <a href="tel:380677073500" class="phone">+380 677 07 35 00</a>
            </div>

            <address class="address-text">
                Київська обл., <br>
                м. Фастів, провулок Саєнка, 1
            </address>
        </div>

        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d640.0768655383621!2d29.91569958733158!3d50.08053011469259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d3551bd36e1507%3A0xc42ae0d64fca2d92!2z0L_QtdGALiDQkNC90LTRgNC40Y8g0KHQsNC10L3QutCwLCAx!5e0!3m2!1sru!2sua!4v1689324047927!5m2!1sru!2sua" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 64px;
    width: 100%;
    height: 100vh;
}

.contacts {
    color: white;
}

.address-phone {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
}

</style>