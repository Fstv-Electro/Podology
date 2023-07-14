<template>
    <div class="banner">
        <div class="backdrop">
            <h1 class="banner__title">Здоров'я також впливає на вашу красу</h1>
            <button class="banner__button">Продукція</button>
        </div>
    </div>
    <div class="container">
        <p class="welcome">Ласкаво просимо до нашого центру подології та краси! Ми пропонуємо широкий спектр послуг для догляду за ногами та тілом, які допоможуть вам виглядати і почуватися найкращим чином.
        Наші досвідчені фахівці використовують найсучасніші технології та методи, щоб забезпечити вам ефективний і комфортний догляд. Ми пропонуємо широкий спектр послуг, включаючи:</p>
        <ul class="service-list">
            <li class="service-item podology">
                <h3 class="podology__title">Подологію</h3>
                <img src="../images/podology.jpg" alt="журнал із зображенням ніг і подологічний гель" class="podology__img">
            </li>
            <li class="service-item manicure">
                <h3 class="manicure__title">Манікюр</h3>
                <img src="../images/green.jpg" alt="гель-лак для нігтів зелений з блискітками" class="podology__img">
            </li>
            <li class="service-item pedicure">
                <h3 class="pedicure">Педікюр</h3>
                <img src="../images/podoplace2.jpg" alt="зелене крісло, підставка для ніг, чорний стілець" class="podology__img">
            </li>
            <li class="service-item eyelash lamination">
                <h3 class="eyelash lamination">Ламінування і татуаж</h3>
                <img src="../images/tools.jpg" alt="інструменти для татуажу і ламінування" class="podology__img">
            </li>
        </ul>
        <ul class="products">
            <li class="product__items"><img src="../images/camillen.png" alt="логотип каміллен 60 і ніжка на квітці" class="products__img"></li>
            <li class="product__items"><img src="../images/caremed-logo.png" alt="логотип кермед продуктс" class="products__img"></li>
            <li class="product__items"><img src="../images/Logo_retina.png" alt="логотип карт еффектів" class="products__img"></li>
            <li class="product__items"><img src="../images/podopharm-logo.png" alt="логотип подофарм" class="products__img"></li>
            <li class="product__items"><img src="../images/suda-logo.png" alt="логотип суда з червоною пташкою" class="products__img"></li>
            <li class="product__items"><img src="../images/veratin.webp" alt="логотип скінкер" class="products__img"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    components: {},
}
</script>

<style>

.banner {
    width: 100%;
    height: 378px;
    background-image: url('../images/pdbanner.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.backdrop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}

.banner__title {

    color: white;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

.welcome {
    margin-top: 32px;
    width: 70%;
}

.service-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 0;
    list-style: none;
}


.podology__img {
    display: block;
    width: 100%;
    height: 420px;
    border: 2px solid white;
    border-radius: 8px;

}

.products {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 16px 0;
    padding: 4px;
    max-height: 200px;
    list-style: none;
    border: 1px solid white;
    border-radius: 8px;

    gap: 16px;
}

.product__items {
    max-width: 372px;
}

.product__items img{
    aspect-ratio: 1 / 1;
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    border-radius: 8px;
}

</style>