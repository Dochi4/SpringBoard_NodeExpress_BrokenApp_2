// your timeword solutio goes here
let words = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "thirty",
  "forty",
  "fifty",
];

function timeWord(timeWord) {
  if (typeof timeWord !== "string" || !timeWord.includes(":")) {
    console.log("Must be a Time String like 'x:y'");
    return "Must be a Time String like 'x:y'";
  }

  let [hours, minutes] = timeWord.split(":").map(Number);

  if (hours === 12 && minutes === 0) {
    return "noon";
  }
  if (hours === 0 && minutes === 0) {
    return "midnight";
  }

  let minResults;
  if (minutes === 0) {
    minResults = "o’clock";
  } else {
    minResults = minuteHandle(minutes);
  }
  let { hr, amPm } = hourHandling(hours);

  let convertTime = `${hr} ${minResults} ${amPm}`;
  return convertTime;
}

function minuteHandle(minutes) {
  if (minutes < 10) {
    let min = words[minutes - 1];

    return `oh ${min}`;
  } else {
    if (minutes < 20) {
      let min = words[minutes - 1];
      return min;
    } else {
      let tens = Math.floor(minutes / 10);
      let ones = minutes % 10;

      if (ones === 0) {
        return words[19 + tens - 2];
      } else {
        return words[19 + tens - 2] + " " + words[ones - 1];
      }
    }
  }
}

function hourHandling(hours) {
  if (hours === 12) {
    let hr = words[11];
    let amPm = "pm";
    return { hr, amPm };
  } else if (hours <= 12) {
    let hr = words[hours - 1];
    let amPm = "am";
    return { hr, amPm };
  } else if (hours > 12 && hours < 24) {
    let hr = words[hours - 13];
    let amPm = "pm";
    return { hr, amPm };
  }
}

// Code Assistance from https://www.geeksforgeeks.org/javascript-program-for-converting-given-time-to-words/

module.exports = timeWord;
