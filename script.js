document.getElementById('check-btn').addEventListener('click', function() {
  const textInput = document.getElementById('text-input').value;
  const resultElement = document.getElementById('result');

  if (!textInput) {
    alert('Please input a value');
    return;
  }

  const isPalindrome = checkPalindrome(textInput);
  resultElement.textContent = textInput + ' is ' + (isPalindrome ? '' : 'not ') + 'a palindrome';
});

function checkPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
