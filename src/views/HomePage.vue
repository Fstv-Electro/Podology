<template>
    <div class="banner">
        <div class="backdrop">
            <h1 class="banner__title">Здоров'я також впливає на вашу красу</h1>
        </div>
    </div>
    <div class="container">
        <div class="about-us">
            <h2>ПРО НАС</h2>
            <p class="welcome">Ласкаво просимо до нашого центру подології та краси! Ми пропонуємо широкий спектр послуг для догляду за ногами. руками та обличчям, які допоможуть вам виглядати і почуватися найкращим чином.
            Наші досвідчені фахівці використовують найсучасніші технології та методи, щоб забезпечити вам ефективний і комфортний догляд. Ми пропонуємо широкий спектр послуг, включаючи:</p>
        </div>
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
                <h3 class="eyelash lamination">Брові і вії</h3>
                <img src="../images/tools.jpg" alt="інструменти для татуажу і ламінування" class="podology__img">
            </li>
        </ul>
        <section class="features-section">
            <h2 class="features-title">Наші переваги</h2>
            <ul class="features">
                <li class="features__item">
                    <div class="features__box">
                        <img src="../images/center_room.jpg" alt="тіпси зі зразками, підставка для рук і манікюрний стіл" class="features__img">
                        <p class="features__descr">Комфорт</p>
                    </div>
                </li>

                <li class="features__item">
                    <div class="features__box">
                        <img src="../images/clrnails.jpg" alt="між сторінками журнали тіпси зі зразками кольорів гель-лаків" class="features__img">
                        <p class="features__descr">Широкий вибір</p>
                    </div>
                </li>
                <li class="features__item">
                    <div class="features__box">
                        <img src="../images/grey.jpg" alt="журнал, свічка, гель-лак і гель" class="features__img">
                        <p class="features__descr">Професійність</p>
                    </div>
                </li>
            </ul>
        </section>
        <section class="section-products">
            <ul class="products">
                <li class="product__items"><img src="../images/camillen.png" alt="логотип каміллен 60 і ніжка на квітці" class="products__img"></li>
                <li class="product__items"><img src="../images/caremed-logo.png" alt="логотип кермед продуктс" class="products__img"></li>
                <li class="product__items"><img src="../images/Logo_retina.png" alt="логотип карт еффектів" class="products__img"></li>
                <li class="product__items"><img src="../images/podopharm-logo.png" alt="логотип подофарм" class="products__img"></li>
                <li class="product__items"><img src="../images/suda-logo.png" alt="логотип суда з червоною пташкою" class="products__img"></li>
                <li class="product__items"><img src="../images/veratin.webp" alt="логотип скінкер" class="products__img"></li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    components: {},
}
</script>

<style scoped>

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
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 32px;
}

.about-us {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
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

@media (max-width: 374px) {
    .service-list {
        flex-direction: column;
    }

    .podology__img {
        max-width: 240px;
        height: 240px;
    }
}

@media (min-width: 374px) and (max-width: 768px) {
    
    .service-list {
        flex-direction: column;
    }

    .podology__img {
        width: 240px;
        height: 300px;
    }

}

@media (min-width: 678px) and (max-width: 1280px) {
    
    .service-list {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 64px;
    }

    .podology__img {
        width: 280px;
        height: 360px;
    }
}

.features-section {
    width: 100%;
    padding: 16px 0;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
}

.features-title {
    margin-bottom: 16px;
    text-transform: uppercase;
}

.features {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    gap: 16px;
    list-style: none;
}

.features__items {
    background-color: white;
}

.features__box {
    position: relative;
}

.features__descr {
    position: absolute;
    margin: 0;
    width: 100%;
    height: 32px;
    z-index: 100;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 8px 8px 0 0;
    background-color: rgba(0, 0, 0, 0.5);

}

.features__img {
    border-radius: 8px;
    max-width: 320px;
}

@media (max-width: 374px) {

    .features {
        flex-direction: column;
    }
    .features__img {
        max-width: 200px;
        height: 240px;
    }
}

@media (min-width: 374px) and (max-width: 768px) {

    .features {
        flex-direction: column;
    }
    .features__img {
        max-width: 240px;
        height: 280px;
    }
}

@media (min-width: 678px) and (max-width: 1280px) {

    .features {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 64px
    }
    .features__img {
        max-width: 280px;
        height: 320px;
    }
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
    background-color: white;

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