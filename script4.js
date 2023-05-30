$(document).ready(function() {
  var correctAnswers = ["Elephant", "Cheetah", "Great White Shark"];
  var totalQuestions = correctAnswers.length;

  $("#submit").click(function() {
      var score = 0;

      // Check each question for correct answers
      $("ul li").each(function(index) {
          var selectedAnswer = $(this).find("input:checked").val();
          if (selectedAnswer === correctAnswers[index]) {
              score++;
          }
      });

      // Calculate the percentage score
      var percentage = (score / totalQuestions) * 100;

      // Display the result
      $("#quiz").hide();
      $("#score").text("You scored " + percentage + "%");
  });
});