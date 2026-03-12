$(document).ready(function(){

$(".update-btn").click(function(){

let form = $(this).siblings(".update-form");

form.toggleClass("hidden");

console.log("Button clicked, toggling form visibility.");

});

});