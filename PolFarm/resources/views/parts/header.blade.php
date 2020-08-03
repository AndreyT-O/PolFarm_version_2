<!-- Header -->
<header class="header">
    <!-- Header top -->
    <div class="container-fluid header__nav" data-aos="fade-down">
        <div class="row">
            <!-- Logo -->
            <div class="col-3 col-md-3 col-lg-3">
                <div class="header__logo">
                    <image src="image/header/logo.svg" alt="logo">
                </div>
            </div>
            <!-- End logo -->
            <!-- Menu -->
            <div class="col-8 col-md-8 col-lg-9 header__menu menu">
                <!-- Form list -->
                <div class="menu__list list">
                    <ul class='list__products'>
                        <li class='list__item'><a href="">Про нас</a></li>
                        <li class='list__item'><a href="">Товари</a></li>
                        <li class='list__item'><a href="">Доставка і оплата</a></li>
                        <li class='list__item'><a href="">Відгуки покупців</a></li>
                    </ul>
                </div>
                <!-- End form list -->
                <!-- Form language buttons -->
                <div class="menu__language" @click='checkLanguage($event)'>
                    <span class='ua active'>ua</span>
                    <span class='line'></span>
                    <span class='ru'>ru</span>
                </div>
                <!-- End form language buttons -->
                <!-- Form iphones -->
                <div class="menu__tel">
                    <div class="menu__viber viber">
                        <a href="tel:0664706090">066 <span>470 60 90</span></a>
                        <image src="image/header/viber.svg" alt="viber">
                    </div>
                    <div class="menu_viber viber">
                        <a href="tel:0967815577">096 <span> 781 55 77</span></a>
                        <image src="image/header/viber.svg" alt="viber">
                    </div>
                </div>
                <!-- End form iphones -->
                <!-- Form burger -->
                <div class="menu__burger" @click='activeBurger'>
                    <span></span>
                </div>
                <!-- End form burger -->
                <!-- Form sidebar -->
                <div class="menu__sidebar sidebar">
                    <div class="col-12 sidebar__header">
                        <div class="sidebar__language" @click='checkLanguage($event)'>

                        </div>
                        <div class="sidebar__tel">

                        </div>
                    </div>
                    <div class="col-12 sidebar__footer">

                    </div>
                </div>
                <!-- End form sidebar -->
            </div>
            <!-- End menu -->
        </div>
    </div>
    <!-- End header top -->
    <!-- Header bottom-->
    <div class="container header__title" data-aos="zoom-in-right" data-aos-duration="1500">
        <div class="row">
            <div class="col-12 col-md-7 title">
                <h2 class='title__text'>
                    Ліки з Польщі
                    за найкращими
                    цінами
                </h2>
                <div class="title__button btn" @click="scrollToCall('#call')">
                    <a href="#call">Замовити</a>
                </div>
            </div>
        </div>    
    </div>
    <!-- End header bottom-->
</header>