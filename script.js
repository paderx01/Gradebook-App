function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  let average = sum / scores.length;
  return average;
}

function getGrade(score) {
    if (score <= 100) {
      console.log("A++");
      else (score <= 94) {
        console.log("A");
        else (score <= 89) {
          console.log("B");
          else (score <= 78) {
            console.log("C");
          }
        }
      }
    }
    }
    
    console.log(getGrade(96));
    console.log(getGrade(82));
    console.log(getGrade(56));

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
