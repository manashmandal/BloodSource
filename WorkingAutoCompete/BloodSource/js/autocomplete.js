/**
 * Created by Manash on 6/20/2016.
 */


$(function() {
    var availableTags = [
        "Dhaka",
        "Khulna",
        "Chittagong",
        "Mymensingh",
        "Rangpur",
        "Jessore"
    ];
    $( "#tags" ).autocomplete({
        source: availableTags
    });
});