"use strict";

// #########################
// ### Main Calculations ###
// #########################

let resultBMI;
//calculate metric
function calculateMetricBMI(){
    //Check if all inputs are filled
    if( $('#input_kg').val() && $('#input_cm').val() ) {
        resultBMI = parseFloat($('#input_kg').val()) / Math.pow( parseFloat($('#input_cm').val()) / 100, 2);
        resultBMI = Math.round( resultBMI * 10 ) / 10;
        if( parseFloat($('#input_cm').val()) > 0 ){
            $('#result_bmi').text(`${resultBMI} BMI`);
        }else{
            $('#result_bmi').text(``);
        }
    }else{
        $('#result_bmi').text(``);
    }
}

//calculate imperial
function calculateImperialBMI(){
    //Check if all inputs are filled
    if( $('#input_st').val() && $('#input_lbs').val() && $('#input_ft').val() && $('#input_in').val() ){
        let kgs = 6.35029 * parseFloat($('#input_st').val()) + 0.453592 * parseFloat($('#input_lbs').val());
        let meters = 0.3048 * parseFloat($('#input_ft').val()) + 0.0254 * parseFloat($('#input_in').val());
        resultBMI = kgs / Math.pow(meters, 2);
        resultBMI = Math.round( resultBMI * 10 ) / 10;
        if( meters > 0 ){
            $('#result_bmi').text(`${resultBMI} BMI`);
        }else{
            $('#result_bmi').text(``);
        }
    }else{
        $('#result_bmi').text(``);
    }
}

function calculateBMI() {
    if( $('#pick_metric').is(':checked') ) {
        calculateMetricBMI();
    }
    if( $('#pick_imperial').is(':checked') ) {
        calculateImperialBMI();
    }
}

// ###########################
// ### Range and Number Inputs
// ###########################

// Imperial Weight Range
$('#range_input_weight').on("input", function(){
    $('#input_st').val( ( parseInt( $(this).val() ) - parseInt( $(this).val() ) % 14 ) / 14 );
    $('#input_lbs').val( parseInt( $(this).val() ) % 14 );
})
$('#input_st').on("change", function(){
    //max 25
    if( parseInt( $(this).val() ) > 25 ){
        $(this).val(25);
    }
    let lbs = parseInt( $('#input_lbs').val() );
    if( parseInt( $(this).val() ) ){
        if(lbs){
            $('#range_input_weight').val( parseInt( $(this).val() ) * 14 + lbs );
        }else{
            $('#range_input_weight').val( parseInt( $(this).val() * 14 ) );
        }        
    }else if(lbs) {
        $('#range_input_weight').val( lbs );
    }else{
       $('#range_input_weight').val( 0 ); 
    }
})
$('#input_lbs').on("change", function(){
    //max 13
    if( parseInt( $(this).val() ) > 13 ){
        $(this).val(13);
    }
    let st = parseInt( $('#input_st').val() );
    if( parseInt( $(this).val() ) ){
        if(st){
            $('#range_input_weight').val( parseInt( $(this).val() ) + st * 14 );
        }else{
            $('#range_input_weight').val( parseInt( $(this).val() ) );
        }        
    }else if(st) {
        $('#range_input_weight').val( st * 14 );
    }else{
       $('#range_input_weight').val( 0 ); 
    }
})

// Imperial Height Range
$('#range_input_height').on("input", function(){
    $('#input_ft').val( ( parseInt( $(this).val() ) - parseInt( $(this).val() ) % 12 ) / 12 );
    $('#input_in').val( parseInt( $(this).val() ) % 12 );
})
$('#input_ft').on("change", function(){
    //max 8
    if( parseInt( $(this).val() ) > 8 ){
        $(this).val(8);
    }
    let lbs = parseInt( $('#input_in').val() );
    if( parseInt( $(this).val() ) ){
        if(lbs){
            $('#range_input_height').val( parseInt( $(this).val() ) * 12 + lbs );
        }else{
            $('#range_input_height').val( parseInt( $(this).val() * 12 ) );
        }        
    }else if(lbs) {
        $('#range_input_height').val( lbs );
    }else{
       $('#range_input_height').val( 0 ); 
    }
})
$('#input_in').on("change", function(){
    //max 11
    if( parseInt( $(this).val() ) > 11 ){
        $(this).val(11);
    }
    let st = parseInt( $('#input_ft').val() );
    if( parseInt( $(this).val() ) ){
        if(st){
            $('#range_input_height').val( parseInt( $(this).val() ) + st * 12 );
        }else{
            $('#range_input_height').val( parseInt( $(this).val() ) );
        }        
    }else if(st) {
        $('#range_input_height').val( st * 12 );
    }else{
       $('#range_input_height').val( 0 ); 
    }
})

// Metric Weight Range










// ########################################
// ### DENY CHARACTERS IN NUBMER INPUTs ###
// ########################################






// Calculate whenever value is changed if all values are inputted
$('#bmi_form input').on("change", calculateBMI);

// show/hide imperial/metric
$('#pick_metric').on("click", () => {
    $('#imperial_inputs').hide();
    $('#metric_inputs').show();
    // $('#metric_inputs').css("display","flex");
})
$('#pick_imperial').on("click", () => {
    $('#metric_inputs').hide();
    $('#imperial_inputs').show();
    // $('#imperial_inputs').css("display","flex");
})

$(function(){

    calculateBMI();


    // Warning Duplicate IDs
    $('[id]').each(function(){
        var ids = $('[id="'+this.id+'"]');
        if(ids.length>1 && ids[0]==this)
        console.warn('Multiple IDs #'+this.id);
    });

    $('[name]').each(function(){
        var names = $('[name="'+this.name+'"]');
        if(names.length>1 && names[0]==this)
        console.warn('Multiple names #'+this.name);
    });

})