// first function : Leap Year Checker
//  Create a function that takes a year as input and determines whether it is a leap year or not.
//  Leap years are divisible by 4, but not by 100 unless they are also divisible by 400.
function Leap_Year_Checker(year) {
  if (year % 400 === 0) {
    return `${year} is a leap year`;
  } else if (year % 100 === 0) {
    return `${year} is not a leap year`;
  } else if (year % 4 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}

console.log(Leap_Year_Checker(1900));
console.log(Leap_Year_Checker(2000));
console.log(Leap_Year_Checker(2024));
console.log(Leap_Year_Checker(2023));

// second function Ticket Pricing
// Write a program that prompts the user to enter their age and then determines the price of a movie ticket based on the following criteria:

// .Children (age <= 12): $10
// .Teenagers (age 13-17): $15
// .Adults (age >= 18): $20

function Ticket_Pricing() {
  var input = prompt("Enter your age:");
  var age = parseInt(input);

  if (isNaN(age)) {
    console.log("Please enter a valid number for age.");
    return;
  }

  if (age >= 0 && age <= 12) {
    return "Ticket price: $10";
  } else if (age >= 13 && age <= 17) {
    return "Ticket price: $15";
  } else {
    return "Ticket price: $20";
  }
}
console.log(Ticket_Pricing());

// Third function : Weather Clothing Adviser
// Develop a program that asks the user for the current temperature and whether it is raining or not.
//  Based on this information, advise the user on what clothing to wear.
function Weather_Clothing_Adviser() {
  let temperature = parseInt(prompt("enter temperature"));
  let Weather = prompt("it's raining").toLowerCase();
  if (temperature < 10) {
    switch (Weather) {
      case "yes":
        return "It's cold and rainy. You should wear a warm coat, hat, and waterproof shoes.";
        break;
      case "no":
        return "It's cold but not raining. Wear a warm coat and possibly a hat.";
        break;
      default:
        return "enter yes or no";
    }
  } else if (temperature >= 10 && temperature < 20) {
    switch (Weather) {
      case "yes":
        return "It's cool and rainy. Wear a jacket or sweater with waterproof shoes.";
        break;
      case "no":
        return "It's cool but not raining. A light jacket or sweater should be enough.";
        break;
      default:
        return " enter yes or no";
        break;
    }
  } else {
    switch (Weather) {
      case "yes":
        return "It's warm and rainy. Wear a light raincoat or carry an umbrella.";
        break;
      case "no":
        return "It's warm and not raining. You can dress comfortably with lighter clothing.";
        break;
      default:
        "enter yes or no";
    }
  }
}
console.log(Weather_Clothing_Adviser());
