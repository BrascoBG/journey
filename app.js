function journey([arg1, arg2]){
  let budget = Number(arg1);
  let season = arg2.toLowerCase();
  let location;
  let type;

  if(budget <= 100){
    if(season === "summer"){
      budget *= 0.3;
      location = "Somewhere in Bulgaria";
      type = "Camp";
    } else if(season === "winter") {
      budget *= 0.7;
      location = "Somewhere in Bulgaria";
      type = "Hotel";
    } else{
      console.log("Winter or Summer?");
    }
  } else if(budget > 100 && budget <= 1000){
    if(season === "summer"){
      budget *= 0.4;
      location = "Somewhere in Balkans";
      type = "Camp";
    } else if(season === "winter"){
      budget *= 0.8;
      location = "Somewhere in Balkans";
      type = "Hotel";
    } else{
      console.log("Winter or Summer?");
    }
  } else if(budget > 1000 && budget <= 5000){
    budget *= 0.9;
    location = "Somewhere in Europe";
    type = "Hotel"
  } else{
    console.log("Budget must be between 0 and 5000");
  }

  if(location && budget){
    console.log(location);
    console.log(type + " - " + budget.toFixed(2));
  }
}

journey([1500 , "Summer"]);
