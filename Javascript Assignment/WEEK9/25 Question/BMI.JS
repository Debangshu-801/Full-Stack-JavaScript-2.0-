function calbmi(weight,height){
    let BMI=weight/(height*height);
    console.log(BMI);
    if(BMI<18.5){
        console.log('Underweight');
    }
    else if(18.5<=BMI && BMI<24.9){
        console.log('Normal weight');
    }
    else if(25<=BMI && BMI<29.9){
        console.log('Overweight');
    }
    else if(BMI=>30){
        console.log('Obese');
    }
}

calbmi(26,1);