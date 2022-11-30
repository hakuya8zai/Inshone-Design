$('#header').load('header.html');
$('#footer').load('footer.html');
console.log("mainjs")

let a = $('#option1').val();
let b = $('input[name="options"]');
console.log(b);
console.log(a);

$('input[name="options"]').click(function(){
    totalRecal($(this).val());
});

function totalRecal(newCost){
    console.log(newCost);
$('#total-cost').text(newCost);
}