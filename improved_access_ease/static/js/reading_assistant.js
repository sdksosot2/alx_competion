document.addEventListener("mouseup", function () {
    let selectedText = window.getSelection().toString().trim();

    // Remove old button if exists
    let oldBtn = document.getElementById("speak-btn");
    if (oldBtn) oldBtn.remove();

    // If no text selected → stop
    if (selectedText.length === 0) return;

    // Get position of selection
    let rect = window.getSelection().getRangeAt(0).getBoundingClientRect();

    // Create speak button
    let btn = document.createElement("button");
    btn.id = "speak-btn";
    btn.innerText = "Speak";
    btn.style.position = "absolute";
    btn.style.top = window.scrollY + rect.top - 30 + "px";
    btn.style.left = window.scrollX + rect.left + "px";
    btn.style.zIndex = 9999;

    document.body.appendChild(btn);

    // When clicked → speak selected text
    btn.addEventListener("click", function () {
        let utter = new SpeechSynthesisUtterance(selectedText);
        utter.lang = "en-US"; // لو عايز عربي استخدم: "ar-EG"
        speechSynthesis.speak(utter);
    });
});
