"use strict";

let resultBMI;
//calculate metric
function calculateMetricBMI(){
    //Check if all inputs are filled
    if( $('#input_kg').val() && $('#input_cm').val() ) {
        resultBMI = parseFloat($('#input_kg').val()) / Math.pow( parseFloat($('#input_cm').val()) / 100 ,2);
        resultBMI = Math.round( resultBMI * 10 ) / 10;
        $('#result_bmi').text(`${resultBMI} BMI`);
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
        $('#result_bmi').text(`${resultBMI} BMI`);
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