	var i = 0; // used for slideLeft() to know which slide we are on
		var score = 0; // general score starts a 0

		$(document).ready(function() {
			$('#nameButton').attr('disabled',true);
			$('#name').keyup(function(){
				if($(this).val().length !=0)
					$('#nameButton').attr('disabled', false);            
				else
					$('#nameButton').attr('disabled',true);
			})
			$("#saveScore").click(function(){
				name = $("#name").val();
				message = $("#message").val();
				$.post('../save/', {"name": name, "score": score, "message": message, "game": 2}, function(data, textStatus, xhr) {
					/*optional stuff to do after success */
					$(location).attr('href','../');
				});
			})
		})

		var firstRun = function() {
			var userName = document.getElementById("userName");
			userName.innerHTML = document.getElementById("name").value;
			slideLeft();

		}

		var runGame = function(elem) { // passing elem to get element value
			calculateScore(elem);
			slideLeft();
		}

		var finalAnswer = function(elem) {
			calculateScore(elem);
			slideLeft();
			generateAnswer();
		}

		var generateAnswer = function() { // generate final answer according to score
			var finalScore = document.getElementById("finalScore");
			finalScore.innerHTML = score;

			var finalDescription = document.getElementById("finalDescription");
			var finalPicture = document.getElementById("finalPicture");


			if (score <= 5 ) {

				finalDescription.innerHTML = "You're not a gamer at all. Did you even have a childhood?!";
				finalPicture.className += " one";
			}
			else if (score <= 10) {
				finalDescription.innerHTML = "You're a noob. A noob is a person who really sucks at a game but refuses to learn/listen to people who are skilled. Many of them may have been playing the game for a while, but still suck at it. They usually have no hope.";
				finalPicture.className += " two";
			}
			else if (score <= 15) {
				finalDescription.innerHTML = "You're a Newbie. Newbs are those who are new to some tasks and are very beginner at it, possibly a little overconfident about it, but they are willing to learn and fix their errors to move out of that stage";
				finalPicture.className += " three";
			}
			else if (score <= 20) {
				finalDescription.innerHTML = "You're a beast at video games. You're very good at it. Sometimes you're so good at a certain skill that you have exceeded human comprehension, thus making you non-human.";
				finalPicture.className += " four";
			}
		}

		var calculateScore = function(elem) { // calculate score
			score += parseInt(elem.value);
			console.log(score);
		}

		var slideLeft = function() { // takes 600px from the left on two divs

			var first = document.getElementById("question"+i);
			var second = document.getElementById("question"+(i+1));

			firstStyle = window.getComputedStyle(first),
			firstLeft = firstStyle.getPropertyValue('left');

			secondStyle = window.getComputedStyle(second),
			secondLeft = secondStyle.getPropertyValue('left');

			firstNewLeft = parseInt(firstLeft) - 600;
			secondNewLeft = parseInt(secondLeft) - 600;

			first.style.left = firstNewLeft + "px";
			second.style.left = secondNewLeft + "px";
			i++;
		}

		