// R6 Quiz

// Button Event Listener

document.getElementById("btn").addEventListener("click", btnClicked);

// Set Variable Values

function btnClicked() {
  let ans1 = document.getElementById("input1").value.toLowerCase();
  let ans2 = document.getElementById("input2").value.toLowerCase();
  let ans3 = document.getElementById("input3").value.toLowerCase();
  let ans4 = document.getElementById("input4").value.toLowerCase();

  // Give feedback on answers

  if (ans1 === "edmonton") {
    document.getElementById("q1a").innerHTML = "Correct!";
  } else {
    document.getElementById("q1a").innerHTML = "Incorrect.";
  }
  if (ans2 === "15") {
    document.getElementById("q2a").innerHTML = "Correct!";
  } else {
    document.getElementById("q2a").innerHTML = "Incorrect.";
  }
  if (ans3 === "basketball") {
    document.getElementById("q3a").innerHTML = "Correct!";
  } else {
    document.getElementById("q3a").innerHTML = "Incorrect.";
  }
  if (ans4 === "harry ainly") {
    document.getElementById("q4a").innerHTML = "Correct!";
  } else {
    document.getElementById("q4a").innerHTML = "Incorrect.";
  }

  // Check answers

  let sc = 0;

  if (ans1 === "edmonton") {
    sc++;
  }
  if (ans2 === "15") {
    sc++;
  }
  if (ans3 === "basketball") {
    sc++;
  }
  if (ans4 === "harry ainly") {
    sc++;
  }

  // Display your grade

  if (sc === 0) {
    document.getElementById("score").innerHTML = "0/4 (0%)";
  } else if (sc === 1) {
    document.getElementById("score").innerHTML = "1/4 (25%)";
  } else if (sc === 2) {
    document.getElementById("score").innerHTML = "2/4 (50%)";
  } else if (sc === 3) {
    document.getElementById("score").innerHTML = "3/4 (75%)";
  } else if (sc === 4) {
    document.getElementById("score").innerHTML = "4/4 (100%)";
  }

  // Give feedback for grade

  if (sc === 3) {
    document.getElementById("msg").innerHTML = "Great!";
  } else if (sc === 4) {
    document.getElementById("msg").innerHTML = "awesome!";
  } else if (sc === 2) {
    document.getElementById("msg").innerHTML = "keep working hard!";
  } else if (sc === 1) {
    document.getElementById("msg").innerHTML = "almost!";
  } else if (sc === 0) {
    document.getElementById("msg").innerHTML = "not good.";
  }
}
