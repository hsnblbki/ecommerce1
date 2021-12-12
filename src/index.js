import './scss/custom.scss';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper.min.js';
import 'jquery/dist/jquery.min.js';
import '@fortawesome/fontawesome-free/js/all.min.js';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import 'jquery-ui-touch-punch/jquery.ui.touch-punch.min.js';

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


    var citiesByCountry={
        sa:['الرياض','جدة'],
        eg:['القاهرة','الاسكندرية'],
        jo:['عمان','الرمثا'],
        sy:['دمشق','حلب','حمص']
    };
    $("#form-checkout select[name='country']").change(function(){
        var country=$(this).val();
        var cities=citiesByCountry[country];
        $("#form-checkout select[name='city']").empty();
        $("#form-checkout select[name='city']").append('<option disabled selected value="">اختر المدينة</option>');
        cities.forEach(function(city){
            var newOption=$('<option></option');
            newOption.text(city);
            newOption.val(city);
            $("#form-checkout select[name='city']").append(newOption);
        });
    });


    $("#form-checkout input[name='payment_method']").change(function(){
        var paymentMethod=$(this).val();
        if(paymentMethod === 'on_delivary'){
            $("#credit-card-info input").prop('desabled',true);
        }
        else{
            $("#credit-card-info input").prop('desabled',false);
        }
        $("#credit-card-info").toggle();
    });

    $("#price-range").slider({
        range: true,
        min: 50,
        max: 1000,
        step:50,
        values: [ 250, 800 ],
        slide: function( event, ui ) {
            $("#price-min").text(ui.values[0]);
            $("#price-max").text(ui.values[1]);
        }
    });

});