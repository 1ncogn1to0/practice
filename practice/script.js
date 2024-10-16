let userName = prompt("What is your name?");
let formattedName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();
alert("Hello " + formattedName);

function lifeInWeeks(age) {
    const maxAge = 90;
    let yearsLeft = maxAge - age;
    let days = yearsLeft * 365;
    let weeks = yearsLeft * 52;
    let months = yearsLeft * 12;
    console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`);
  }
  
  lifeInWeeks(56); 
  
  function bmiCalculator(weight, height) {
    let bmi = weight / (height * height);
    
    if (bmi < 18.5) {
      return `Your BMI is ${bmi.toFixed(2)}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return `Your BMI is ${bmi.toFixed(2)}, so you have a normal weight.`;
    } else {
      return `Your BMI is ${bmi.toFixed(2)}, so you are overweight.`;
    }
  }
  
  console.log(bmiCalculator(68, 1.75)); 

  function whoIsPaying(names) {
    let randomIndex = Math.floor(Math.random() * names.length);
    return `${names[randomIndex]} is going to buy lunch today.`;
  }
  
  console.log(whoIsPaying(["Aidana", "Bekbolat", "Mariya", "Aleksandr", "Diana"]));

  function fibonacciGenerator(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      let nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }
    return sequence.slice(0, n);
  }
  
  console.log(fibonacciGenerator(3)); 
  