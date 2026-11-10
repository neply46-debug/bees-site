const form = document.getElementById("answer-form");
const input = document.getElementById("answer-input");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const answer = input.value.trim().toLowerCase();

    // Сбрасываем классы
    result.className = "result";

    if (answer === "я уважаю пчелок") {
        result.classList.add("good");
        result.innerHTML = `
            <p>правильный ответ!</p>
            <div class="bee good">🐝</div>
        `;
    } else if (answer === "я не уважаю пчелок") {
        result.classList.add("evil");
        result.innerHTML = `
            <p>мы знаем где ты живешь</p>
            <div class="bee evil">🐝</div>
        `;
    } else {
        result.classList.add("neutral");
        result.innerHTML = `<p>хм, странный ответ... попробуй ещё раз 🤔</p>`;
    }
});