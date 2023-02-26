//your code here
function countWords() {
			// Get the text from the textarea
			const text = document.getElementById("evaluatedText").value;

			// Count the number of words
			const wordCount = text.trim().split(/\s+/).length;

			// Update the word count in the h3 tag
			document.getElementById("wordCount").textContent = wordCount;
		}
