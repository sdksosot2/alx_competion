document.addEventListener("mouseup", function () {
    let selectedText = window.getSelection().toString().trim();

    // احذف الزر القديم إن وجد
    let oldBtn = document.getElementById("speak-btn");
    if (oldBtn) oldBtn.remove();

    // لو مفيش نص محدد
    if (selectedText.length === 0) return;

    // تحديد مكان ظهور الزر
    let range = window.getSelection().getRangeAt(0);
    let rect = range.getBoundingClientRect();

    let btn = document.createElement("button");
    btn.id = "speak-btn";
    btn.innerText = "🔊 Speak";

    btn.style.position = "absolute";
    btn.style.top = window.scrollY + rect.top - 35 + "px";
    btn.style.left = window.scrollX + rect.left + "px";
    btn.style.padding = "5px 10px";
    btn.style.backgroundColor = "#007bff";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";
    btn.style.zIndex = 9999;

    document.body.appendChild(btn);

    // تشغيل الصوت
    btn.addEventListener("click", function () {
        let utter = new SpeechSynthesisUtterance(selectedText);

        // اختيار اللغة تلقائياً حسب النص
        if (/[\u0600-\u06FF]/.test(selectedText)) {
            utter.lang = "ar-EG"; // العربية
        } else {
            utter.lang = "en-US"; // الإنجليزية
        }

        speechSynthesis.speak(utter);
    });

    // إخفاء الزر عند الضغط خارج النص
    document.addEventListener("click", function removeBtn(e) {
        if (e.target !== btn) {
            btn.remove();
            document.removeEventListener("click", removeBtn);
        }
    });
});
