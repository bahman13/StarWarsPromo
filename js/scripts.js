$(document).ready(function() { //проверка готовности елементов страницы(DOM-дерево)
    // Handler for .ready() called.
    $('.owl-carousel').owlCarousel({
        loop: true, //бесконечная прокрутка
        margin: 10, //расстояние между елементами
        nav: true, //елементы навигации
        navClass: ['slider__nav--left', 'slider__nav--right'], //прискоение стрелкам своих классов сбросит их настройи и позволит изменять
        responsive: { //адаптив
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
});