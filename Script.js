document.getElementById("send-btn").addEventListener("click", function () {
    let userInput = document.getElementById("user-input").value.trim();

    if (userInput) {
        addMessageToChat("user", userInput);

        let response = getChatbotResponse(userInput);
        setTimeout(function () {
            addMessageToChat("bot", response);
        }, 500);

        document.getElementById("user-input").value = "";
    }
});

function addMessageToChat(sender, message) {
    let chatLog = document.getElementById("chat-log");
    let messageElement = document.createElement("li");

    let avatar = document.createElement("span");
    avatar.classList.add("avatar", sender);
    avatar.innerText = sender === "user" ? "You" : "AI";

    let messageText = document.createElement("div");
    messageText.classList.add("message");
    messageText.innerText = message;

    messageElement.appendChild(avatar);
    messageElement.appendChild(messageText);

    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getChatbotResponse(userInput) {
    userInput = userInput.toLowerCase();
	if (userInput.includes("Hellow") || userInput.includes("hy")) {
        return " Welcome to my portfolio";
					
    }

    if (userInput.includes("skills") || userInput.includes("best at")) {
        return "I specialize in Frontend and Backend technologies such as HTML, CSS, JavaScript, React, Node.js, and Python. I'm also learning about AI!";
    }

    if (userInput.includes("work experience") || userInput.includes("intern")) {
        return "I've worked as an ICT Intern, Software Development Tutor, and currently I'm an Intern in Software Development with Capaciti. I’ve worked with languages such as C#, HTML, JavaScript, and more.";
    }

    if (userInput.includes("resume") || userInput.includes("cv")) {
        return "You can download my resume directly from this page or feel free to ask more questions about my experience!";
    }
	if (userInput.includes("about") || userInput.includes("background")) {
        return "Hi I'm Sipho Kupiso, a Software developer who creates HTML websites, CSS and JavaScript.  I'm interested in AI and i would like to create better project soon using AI";
					
    }
	if (userInput.includes("contact") || userInput.includes("contact_me")) {
        return "Contact : 073 561 0318 and email adress : zukisakups@gmail.com ";
					
    }
	if (userInput.includes("name") || userInput.includes("Name")) {
        return "my is Sipo  Kupiso";
					
    }
    return "Sorry, I didn't quite understand that. Can you please ask something else?";
}
