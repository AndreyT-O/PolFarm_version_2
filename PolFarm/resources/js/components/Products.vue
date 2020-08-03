<template>
    <div class="row justify-content-around" >
        <div class="col-12 col-sm-9 col-md-6 col-lg-4 products__column" v-for="(product,index) in products" :key="index">
                <div class="products__card">
                    <div class="products__title">
                        <h4><span>{{product.title}}</span></h4>
                        <div class="products__arrows">
                            <img src="image/products/arrows.svg" @click="activeCard($event)" :id='index+1' alt="arrows">
                        </div>
                    </div>
                    <div class="products__body info">
                        <div :class="`info__image info__image-`+(index+1)">
                            <div class="transform">
                                <div class="image-product">
                                    <img :src="product.imageUrl" alt="product">
                                </div>
                                <!-- <img :src="product.imageUrl" alt="product"> -->
                                <div class="text-product">
                                    <div class="haveIt" :class="{haveIt_active: product.available}">
                                        <p>В наявності</p>
                                    </div>
                                    <p v-for="text in product.text" :key='text.id'>{{text}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="info__else">
                            <div class="see">
                                <img src="image/products/pdf.svg" alt="pdf">
                                <a href="#">Інструкція з використання</a>
                            </div>
                            <div class="see">
                                <img src="image/products/youtube.svg" alt="youtube">
                                <a href="#">Відеоогляд</a>
                            </div>
                        </div>
                        <div class="info__action action">
                            <div class="action__price">
                                <p><span>{{product.price}}</span><small>грн</small></p>
                            </div>
                            <div class="action__button btn" @click="scrollToCall('#call')">
                                <img src="image/products/shopping-cart.svg" alt="shopping-cart">
                                <a href="#call">Замовити</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            foo: 'bar',
            products: [
                {
                    title     : 'Білобіл форте',
                    imageUrl  : 'image/products/product_1.png',
                    text      : [
                        'Препарат Билобил® форте является препаратом растительного происхождения.',
                        'Повышает устойчивость организма к гипоксии, особенно тканей головного мозга.'
                    ],
                    price     : '10367',
                    available : true 
                },
                {
                    title     : 'Білобіл форте',
                    imageUrl  : 'image/products/product_1.png',
                    text      : [
                        'Препарат Билобил® форте является препаратом растительного происхождения.',
                        'Повышает устойчивость организма к гипоксии, особенно тканей головного мозга.'
                    ],
                    price     : '10367',
                    available : false  
                },
                {
                    title     : 'Мовалі',
                    imageUrl  : 'image/products/product_2.png',
                    text      : [
                        'Препарат Билобил® форте является препаратом растительного происхождения.',
                        'Повышает устойчивость организма к гипоксии, особенно тканей головного мозга.'
                    ],
                    price     : '1059',
                    available : false  
                },
                {
                    title     : 'Сіофор 850',
                    imageUrl  : 'image/products/product_3.png',
                    text      : [
                        'Препарат Билобил® форте является препаратом растительного происхождения.',
                        'Повышает устойчивость организма к гипоксии, особенно тканей головного мозга.'
                    ],
                    price     : '983',
                    available : false 
                },
                {
                    title     : 'Бетасерк',
                    imageUrl  : 'image/products/product_4.png',
                    text      : [
                        'Препарат Билобил® форте является препаратом растительного происхождения.',
                        'Повышает устойчивость организма к гипоксии, особенно тканей головного мозга.'
                    ],
                    price     : '2563',
                    available : false 
                },
                {
                    title     : 'Клостибегіт',
                    imageUrl  : 'image/products/product_5.png',
                    text      : [
                        'Препарат Билобил® форте является препаратом растительного происхождения.',
                        'Повышает устойчивость организма к гипоксии, особенно тканей головного мозга.'
                    ],
                    price     : '10230',
                    available : false 
                }
            ]
        }),
        methods: {
            scrollToCall: (e) => {
                $('html, body').animate({
                scrollTop: $(`${e}`).offset().top - 200
                }, 1100);
            },
            activeCard: (e) => {
                $(`.info__image`).not($(`.info__image-${e.target.id}`)).removeClass('read-info')
                $(`.info__image-${e.target.id}`).toggleClass('read-info');
            },
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
