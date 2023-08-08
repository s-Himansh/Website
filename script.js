// Text Typing Animation
const textsToType = [
    "Himanshu Sharma",
    "a Passionate Problem Solver",
    "a Data Science Enthusiast",
    "a Tech Enthusiast"
];

const typingTextElement = document.getElementById('typing-text');
const dynamicTextElement = document.getElementById('dynamic-text');
const typingInterval = 120; 

let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < textsToType[textIndex].length) {
        dynamicTextElement.textContent += textsToType[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingInterval);
    } else {
        dynamicTextElement.classList.add('highlight-text');
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        dynamicTextElement.textContent = textsToType[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, typingInterval);
    } else {
        textIndex = (textIndex + 1) % textsToType.length;
        setTimeout(typeText, 500);
    }
}

typeText();
