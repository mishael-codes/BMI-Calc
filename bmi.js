function calculate(){
		let weight = document.getElementById("weight").value;
		let height = document.getElementById("height").value;
		let result = document.getElementById("result");
    let ans = (weight / height ** 2).toFixed(2);
    let blank = 0;
	
	if(result != blank){
		result.innerHTML = " ";
	}
	
	if(ans < 18.5){
		result.innerHTML += "Your BMI is " + ans + ". You 			are underweight."
	}
	else if(ans > 24.9){
		result.innerHTML += "Your BMI is " + ans + ". You 			are overweight."
	}
	else if(ans > 30){
		result.innerHTML += "Your BMI is " + ans + ". You are obese."
	}
	else{
		result.innerHTML += "Your BMI is " + ans + ". You 			are of normal weight."
	}

	if(weight == blank || height == blank){
			alert("Please add your height or weight!")
			result.innerHTML = "Your BMI is:" + " ";
	}
}

function reset(){
	let weight = document.getElementById("weight");
	let height = document.getElementById("height");
	weight.value = " ";
	height.value = " ";

	weight.placeholder = "0";
	height.placeholder = "0";

	let result = document.getElementById("result");
	result.innerHTML = "Your BMI is:";
}
