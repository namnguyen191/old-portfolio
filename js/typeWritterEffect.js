export class TypeWriter {
  constructor(txtElement, words, waitTime = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.text = '';
    this.wordIndex = 0;
    this.wait = parseInt(waitTime, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current word index
    const currentIndex = this.wordIndex % this.words.length;

    // Get full text of current word
    const fullTxt = this.words[currentIndex];

    // Check if in deleting state
    if (this.isDeleting) {
      // Remove a char
      this.text = fullTxt.substring(0, this.text.length - 1);
    } else {
      // Add a char
      this.text = fullTxt.substring(0, this.text.length + 1);
    }

    // Insert text into element
    this.txtElement.innerHTML = `<span class="txt">${this.text}</span>`;

    // Initial Type Speed
    let typeSpeed = 145;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // Check if the word is complete
    if (!this.isDeleting && this.text === fullTxt) {
      // Pause at the end of the word
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.text === '') {
      // Change mode to writting
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before typing again
      typeSpeed = 500;
    }

    setTimeout(() => {
      this.type()
    }, typeSpeed);
  }
}

