//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  const data = {};
  if (!input) {
    return;
  }
  for (let i = 0; i < input.length; i++) {
    if (!data[input[i]]) {
      data[input[i]] = 1;
    } else if (input[i]) {
      return input[i];
    } else {
      return undefined;
    }
  }
}

//Bonus... What if we had this:
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
// return 5 because the pairs are before 2,2
