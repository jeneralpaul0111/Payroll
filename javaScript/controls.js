$(document).ready(function() {
    $('#basicPay').keyup(function() {
        $(this).attr('size', $(this).val().length)
    });
});