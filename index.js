function scuberGreetingForFeet(ride){
  let greetingForFeet;
  if (ride <= 400){
    greetingForFeet = 'This one is on me!';
    return greetingForFeet;
  } else 
  if (ride>=2000 && ride<=2500){
    greetingForFeet = 'I will gladly take your thirty bucks.';
    return greetingForFeet;
  }else 
  if (ride >= 2500){
    greetingForFeet = 'No can do.';
    return greetingForFeet;
  }
}

function ternaryCheckCity(city){
  let cityResponse = (city === 'NYC') ? "Ok, sounds good." : "No go.";
  return cityResponse;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
  case 'generous':
  response = "Thank you so much."
  break;
  case 'not as generous':
  response = "Thank you."
  break;
  default:
    response = "Bye."
    break;
  }
  return response;
}