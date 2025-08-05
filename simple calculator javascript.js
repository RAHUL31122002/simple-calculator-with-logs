let expression = "";

function press(val) {
  expression += val;
  document.getElementById("display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}



function calculate() {
    try {
      let result = eval(expression);
      document.getElementById("display").value = result;
  
      // Save to backend
      fetch("/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ expression: expression, result: result })
      });
  
      expression = "";
    } catch (e) {
      document.getElementById("display").value = "Error";
      expression = "";
    }
  }
  
  function calculateTrig(func) {
      const inputField = document.getElementById("display");
      const value = parseFloat(inputField.value);
      let result;
  
      switch (func) {
          case 'sin':
              result = Math.sin(value * Math.PI / 180); // Degrees to radians
              break;
          case 'cos':
              result = Math.cos(value * Math.PI / 180);
              break;
          case 'tan':
              result = Math.tan(value * Math.PI / 180);
              break;
      }
  
      inputField.value = result.toFixed(5); // limit to 5 decimal places
  
      // Send result to backend log
      saveCalculation(`${func}(${value})`, result);
  }




  const localHistory = [];

function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = '';
}


function viewAllHistory() {
    const history = [
      "2+2 = 4",
      "3^2 = 9",
      "sin30 = 0.5",
      "cos60 = 0.5",
      "tan45 = 1",
      "sqrt(16) = 4",
      "10/5 = 2",
      "8*7 = 56",
      "100-50 = 50",
      "5+6*2 = 17",
      "sqrt(-4) = Imaginary or Undefined",
      "log(-5) = Imaginary or Undefined",
      "tan90 = Imaginary or Undefined",
      "9^0 = 1",
      "0/1 = 0",
      "5/0 = Infinity",
      "6+6 = 12",
      "4^3 = 64",
      "cos0 = 1",
      "sin90 = 1",
      "7-9 = -2",
      "1^100 = 1",
      "log(1) = 0",
      "sqrt(100) = 10",
      "cosec30 = 2",
      "cos180 = -1",
      "tan0 = 0",
      "11+22 = 33",
      "25*4 = 100",
      "81^(1/2) = 9",
      "49^(0.5) = 7",
      "3+3+3+3 = 12",
      "10^2 = 100",
      "log(100) = 4.60517",
      "log(0) = Imaginary or Undefined",
      "sin(270) = -1",
      "2^10 = 1024",
      "tan(180) = 0",
      "5*0 = 0",
      "0^0 = Imaginary or Undefined",
      "sqrt(-9) = Imaginary or Undefined",
      "9^2 = 81",
      "cos(360) = 1",
      "sin(0) = 0",
      "15/3 = 5",
      "log(10) = 2.30259",
      "0-10 = -10",
      "6*6 = 36",
      "7^2 = 49",
      "3^4 = 81",
      "tan(135) = -1",
      "sin(720) = 0",
      "cos(540) = 0",
      "8^0 = 1",
      "6^1 = 6",
      "2^3 + 5 = 13",
      "sin(90)+cos(0) = 2",
      "5^2 + 2^3 = 33",
      "20-25 = -5",
      "12*12 = 144",
      "144^(0.5) = 12",
      "tan(270) = Imaginary or Undefined",
      "log(-100) = Imaginary or Undefined",
      "9/3 = 3",
      "33+67 = 100",
      "100/10 = 10",
      "sqrt(1) = 1",
      "sin(30) + cos(60) = 1",
      "10^(-1) = 0.1",
      "4^0.5 = 2",
      "sin(180) = 0",
      "cos(90) = 0",
      "tan(89.999) ≈ 57295.77951",
      "tan(89.9999) ≈ 572957.21336",
      "0^1 = 0",
      "1^0 = 1",
      "1000 - 999 = 1",
      "1/0 = Infinity",
      "0/0 = Imaginary or Undefined",
      "log(0) = Imaginary or Undefined",
      "sin(-30) = -0.5",
      "cos(-60) = 0.5",
      "tan(-45) = -1",
      "3^0 = 1",
      "2^5 = 32",
      "7+3*2 = 13",
      "(7+3)*2 = 20",
      "100/0 = Infinity",
      "sqrt(-16) = Imaginary or Undefined",
      "2^2^2 = 16",
      "(2^2)^2 = 16",
      "2+(3*4)^2 = 146",
      "sin(9999) = 0.98797",
      "tan(9999) = -0.33498",
      "log(10000) = 9.21034",
      "sin(1080) = 0",
      "cos(1080) = 1",
      "123456 + 654321 = 777777",
      "1+2+3+4+5 = 15",
      "sqrt(0) = 0"
    ];
  
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = ''; // Clear previous entries
  
    history.forEach((entry, index) => {
      const li = document.createElement("li");
      li.textContent = `${index + 1}. ${entry}`;
  
      // Highlight imaginary or undefined results
      if (
        entry.toLowerCase().includes("imaginary") ||
        entry.toLowerCase().includes("undefined") ||
        entry.includes("Infinity")
      ) {
        li.style.color = "red";
        li.style.fontWeight = "bold";
      }
  
      historyList.appendChild(li);
    });
  }

  
  







function addToHtmlHistory(entry) {
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = entry;

  // Optional: Highlight imaginary in red
  if (entry.includes("Imaginary")) {
    li.style.color = "red";
    li.style.fontWeight = "bold";
  }

  historyList.appendChild(li);
}

function loadHistory() {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = '';

  // Optional: Shuffle order
  const shuffled = [...localHistory].sort(() => 0.5 - Math.random());

  shuffled.forEach(entry => {
    addToHtmlHistory(entry);
  });
}









function viewHistory() {
  fetch("/history")
    .then(res => res.json())
    .then(data => {
      const histDiv = document.getElementById("history");
      histDiv.innerHTML = "<h4>Calculation History:</h4>";
      data.forEach(entry => {
        histDiv.innerHTML += `<div>${entry.expression} = ${entry.result}</div>`;
      });
    });
}


function loadHistory() {
    fetch('http://localhost:8080/api/calculations')
        .then(response => response.json())
        .then(data => {
            const historyList = document.getElementById("historyList");
            historyList.innerHTML = ''; // Clear existing history

            data.forEach(calc => {
                const li = document.createElement("li");
                li.textContent = `${calc.expression} = ${calc.result}`;
                historyList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching history:", error);
        });
}
