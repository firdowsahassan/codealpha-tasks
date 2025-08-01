const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let lastInput = '';
let resetNext = false;

function updateDisplay(value) {
  display.value = value;
}

// Check if last char is operator
function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

// Handle button clicks
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const num = btn.getAttribute('data-num');
    const op = btn.getAttribute('data-op');
    const isClear = btn.id === 'clear';
    const isEquals = btn.id === 'equals';
    const isDecimal = btn.id === 'decimal';

    if (isClear) {
      currentInput = '';
      updateDisplay('');
      return;
    }

    if (isEquals) {
      try {
        // Evaluate expression safely
        let result = eval(currentInput);
        if (result === Infinity || result === -Infinity) {
          updateDisplay('Error: Divide by zero');
        } else {
          updateDisplay(result);
          currentInput = result.toString();
        }
      } catch (e) {
        updateDisplay('Error');
        currentInput = '';
      }
      resetNext = true;
      return;
    }

    if (resetNext) {
      // After equals, new input clears old result if number pressed
      if (num) {
        currentInput = '';
      }
      resetNext = false;
    }

    if (num !== null) {
      // Append number
      currentInput += num;
      updateDisplay(currentInput);
      return;
    }

    if (op !== null) {
      // Prevent double operators
      if (currentInput === '') return; // do not start with operator
      if (isOperator(currentInput.slice(-1))) {
        currentInput = currentInput.slice(0, -1) + op;
      } else {
        currentInput += op;
      }
      updateDisplay(currentInput);
      return;
    }

    if (isDecimal) {
      // Prevent multiple decimals in current number chunk
      const parts = currentInput.split(/[\+\-\*\/]/);
      const lastNumber = parts[parts.length -1];
      if (!lastNumber.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
      }
      return;
    }
  });
});

// Keyboard support (bonus)
window.addEventListener('keydown', e => {
  const key = e.key;

  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/'].includes(key)) {
    // Simulate button press
    document.querySelectorAll('.btn').forEach(btn => {
      if (btn.getAttribute('data-num') === key || btn.getAttribute('data-op') === key) {
        btn.click();
      }
    });
  }

  if (key === 'Enter' || key === '=') {
    document.getElementById('equals').click();
  }

  if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
  }

  if (key === '.') {
    document.getElementById('decimal').click();
  }

  if (key.toLowerCase() === 'c') {
    document.getElementById('clear').click();
  }
});
