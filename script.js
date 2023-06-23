function checkAnswers() {
    var answer1 = document.getElementById('answer1').value.toLowerCase();

    if (answer1 === 'lion'{
      document.getElementById('feedback').innerHTML = 'Congratulations! You got the answer correct!';
    } else {
      document.getElementById('feedback').innerHTML = 'Oops! One or more answers are incorrect. Please try again.';
    }
  }
  