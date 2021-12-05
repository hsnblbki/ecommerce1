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


    $("[data-product-quantity]").change(function(){
        var newQuantity=$(this).val();
        var parent=$(this).parents("[data-product-info]");
        var pricePerUnit=parent.attr("data-product-price");
        var totalPriceForProduct=newQuantity * pricePerUnit;
        parent.find(".total-price-for-product").text(totalPriceForProduct + "$");
        calculateTotalPrice();
    });

    $("[data-remove-from-cart]").click(function(){
        $(this).parents("[data-product-info]").remove();
        calculateTotalPrice();
    })

    function  calculateTotalPrice(){
        var totalPriceForAllProducts= 0 ;
        $("[data-product-info]").each(function(){
            var pricePerUnit=$(this).attr("data-product-price");
            var quantity=$(this).find("[data-product-quantity]").val();
            var totalPriceForProduct= pricePerUnit * quantity;
            totalPriceForAllProducts=totalPriceForAllProducts + totalPriceForProduct;
        });
        $("#total-price-for-all-products").text(totalPriceForAllProducts + "$");
    };
});