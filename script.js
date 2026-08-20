function showMessage(){
    alert("🌸 Welcome to Amanda The AI!");
}

function askAmanda(){

    let question =
    document.getElementById("question").value;

    let response =
    document.getElementById("response");

    response.innerHTML =
    `
    💖 Amanda Says:

    Thank you for your question!

    "${question}"

    I am your smart digital bestie and
    I'm ready to help with emails,
    notes, tasks and research.
    `;
}
