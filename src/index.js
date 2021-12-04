import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper.min.js';
import 'jquery/dist/jquery.min.js';
import '@fortawesome/fontawesome-free/js/all.min.js';

$(function(){
    $('#btn-shopping-cart').tooltip({ boundary: 'window' });

    $(".add-to-cart-btn").on('click',function(){
        alert("أضف المنتج الى عربة الشراء");
    });

    $("#copyright").text("جميع الحقوق محفوظة للمتجر لسنة " +  new Date().getFullYear());

    $('.product-option input[type="radio"]').change(function(){
        $(this).parents(".product-option").siblings().removeClass('active');
        $(this).parents(".product-option").addClass('active');
    });
});