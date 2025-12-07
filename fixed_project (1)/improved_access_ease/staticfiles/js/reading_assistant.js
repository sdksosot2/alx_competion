document.addEventListener("mouseup", function () {
    let selection = window.getSelection();
    let selectedText = selection.toString().trim();

    // إزالة زر قديم
    let oldBtn = document.getElementById("speak-btn");
    if (oldBtn) oldBtn.remove();

    if (!selectedText.length) return;

    // الحصول على مكان النص المحدد
    let range = selection.getRangeAt(0);
    let rect = range.getBoundingClientRect();

    // إنشاء الزر
    let btn = document.createElement("button");
    btn.id = "speak-btn";
    btn.textContent = "🔊 Speak";
    btn.style.position = "absolute";
    btn.style.top = window.scrollY + rect.top - 40 + "px";
    btn.style.left = window.scrollX + rect.left + "px";
    btn.style.padding = "6px 10px";
    btn.style.background = "#007bff";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "6px";
    btn.style.cursor = "pointer";
    btn.style.zIndex = 999999;

    document.body.appendChild(btn);

    // عند الضغط على الزر
    btn.addEventListener("click", function () {
        try {
            speechSynthesis.cancel(); // إيقاف أي قراءة سابقة
            let utter = new SpeechSynthesisUtterance(selectedText);
            utter.lang = "en-US"; // لتغيير اللغة إلى العربية: "ar-EG"

            utter.onerror = function (err) {
                console.log("Speech Error:", err);
            };

            utter.onstart = function () {
                console.log("Speech started");
            };

            speechSynthesis.speak(utter);
        } catch (e) {
            console.log("Error:", e);
        }
    });
});
