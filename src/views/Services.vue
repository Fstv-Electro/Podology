<script>

export default {
    name: 'Services',
    components: {},
}
</script>

<template>
    <div class="container">
        <h2 class="title">Список послуг</h2>
        <ul class="services">
            <li class="services__item item__type">
                <h3 class="type__title">Подологія, вирішення таких проблем:</h3>
                <ul class="type__list">
                    <li class="type__item">вросший ніготь</li>
                    <li class="type__item">деформованний ніготь</li>
                    <li class="type__item">грибок нігтів та стоп</li>
                    <li class="type__item">мозолі, натоптиші, тріщини</li>
                    <li class="type__item">бородавки</li>
                    <li class="type__item">забій нігтя та пластини</li>
                </ul>
            </li>
            <li class="services__item item__type">
                <h3 class="type__title">Манікюр та педикюр:</h3>
                <ul class="type__list">
                    <li class="type__item">Чистка</li>
                    <li class="type__item">покриття лаком</li>
                    <li class="type__item">покриття гель-лаком</li>
                    <li class="type__item">нарощення</li>
                    <li class="type__item">дизайн</li>
                </ul>
            </li>
            <li class="services__item item__type">
                <h3 class="type__title">Брові та вії:</h3>
                <ul class="type__list">
                    <li class="type__item">фарбування брів</li>
                    <li class="type__item">нарощування вій</li>
                    <li class="type__item">ламінування брів та вій</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 64px;
    width: 100%;
    height: 100vh;
}

.title {
    align-self: center;
}

.services {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    list-style: none;
}

.type__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    list-style: disc;
}


</style>