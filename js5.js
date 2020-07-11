
const myCar = {
               name: "Priora",
               maxSpeed: "210", 
               width: 120, 
               height: 110
             };

const a = [
           "react",
           "angular",
           "redux",
           "vue"
          ];

const getPhoneNumber = () => {
  return "+7 (929) 892 - 23 05";
}

const getSquare = () => {
  return num * num;
}

function createObject(key, value) {
  if(!key) {
    console.log("не указан ключ");

  } else {
    return {
      [key]: value;
    }
  }
}