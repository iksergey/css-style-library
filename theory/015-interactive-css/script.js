function checkAnswers() {
    var answer1 = document.getElementById('answer1').value.toLowerCase();
    var answer2 = document.getElementById('answer2').value.toLowerCase();
    var answer3 = document.getElementById('answer3').value.toLowerCase();
    var answer4 = document.getElementById('answer4').value.toLowerCase();
    var answer5 = document.getElementById('answer5').value.toLowerCase();

    var correctAnswers = ['#333333', '#f1f1f1', '#4caf50', '#f9f9f9', 'label'];
    var userAnswers = [answer1, answer2, answer3, answer4, answer5];

    var correctCount = 0;

    for (var i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            correctCount++;
        }
    }

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = 'Результат: ' + correctCount + ' из ' + correctAnswers.length;

    if (correctCount === correctAnswers.length) {
        resultElement.innerHTML += ' <span style="color: green;">✅</span>';
    } else {
        resultElement.innerHTML += ' <span style="color: red;">❎</span>';
    }
}
