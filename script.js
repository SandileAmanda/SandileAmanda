function welcomeMessage() {
    alert("🌸 Welcome to Amanda The AI, your smart digital bestie! 💖");
}

function generateEmail() {

    let topic =
    document.getElementById("emailTopic").value;

    document.getElementById("output").innerHTML =

    `💌 Professional Email

    Subject: ${topic}

    Dear Sir/Madam,

    I hope you are doing well.

    I am writing regarding ${topic}.

    Kind Regards,
    Amanda`;
}

function summarizeNotes(){

    let notes =
    document.getElementById("notes").value;

    document.getElementById("output").innerHTML =

    `📝 Summary

    ${notes.substring(0,100)}

    ✨ Action Items:
    • Follow up
    • Complete required tasks`;
}

function createTask(){

    let task =
    document.getElementById("task").value;

    document.getElementById("output").innerHTML =

    `📅 Task Added Successfully

    ✅ ${task}`;
}

function researchTopic(){

    let topic =
    document.getElementById("research").value;

    document.getElementById("output").innerHTML =

    `🔍 Research Results

    Topic: ${topic}

    Amanda AI has generated a research overview for this topic.`;
}

function askAmanda(){

    let question =
    document.getElementById("question").value;

    document.getElementById("output").innerHTML =

    `💖 Amanda Says

    Thank you for your question:

    "${question}"

    I can help with emails, task planning,
    note summaries, research and career guidance.

    🌸✨🎀`;
}

