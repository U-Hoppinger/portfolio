// База данных твоего резюме
const resumeData = {
  me: `
        <p>Junior front-end разработчик.</p>
        <p>30 лет, г. Ташкент.</p>
        <p>От IT-поддержки (Helpdesk) к созданию современных веб-интерфейсов и автоматизации.</p>
    `,
  soft: `
        <p>Командное взаимодействие.</p>
        <p>Клиент-ориентированность и работа с обратной связью.</p>
        <p>UAT тестирование и контроль качества UI/UX.</p>
    `,
  hard: `
        <p>VS Code, Git Bash, GitHub, Jira.</p>
        <p>SQL, DBeaver, Базы данных.</p>
        <p>Кассовые системы (ATOL, Evotor) и настройка сетей.</p>
    `,
  htmlcss: `
        <p>HTML5 (DOM).</p>
        <p>CSS3 (Flex/Grid, @media, webkit).</p>
    `,
  js: `
        <p>Асинхронность: Promise, async/await, Event Loop.</p>
        <p>Работа с API: REST, Axios, AJAX, AbortController.</p>
        <p>Глубокая работа с Массивами и Объектами (structuredClone).</p>
    `,
  react: `
        <p>Функциональные компоненты (.jsx).</p>
        <p>Hooks: useState, useEffect, useMemo, useRef.</p>
        <p>Props и управление стейтом.</p>
    `,
  projects: `
        <p><b>Веб-мессенджер:</b> REST API (mockapi), маршрутизация (GET/POST).</p>
        <p><b>Сервис выплат:</b> Автоматизация расчета бонусов.</p>
        <p><b>Log|Pass:</b> React-менеджер паролей с UI/UX дизайном.</p>
    `,
  info: `
        <p>Telegram: <a href="https://t.me/hoppinger_loo" target="_blank">@hoppinger_loo</a></p>
        <p>Телефон: +998 92 026 42 88</p>
        <p>E-mail: hoppinger@mail.ru</p>
        <p>Английский B1 (Технический)</p>
    `,
};

// Получаем элементы
const navList = document.getElementById("nav-list");
const contentDisplay = document.getElementById("content-display");
const listItems = navList.querySelectorAll("li");

// Слушаем клики по меню
navList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    // Если кликнули на уже активный пункт — ничего не делаем
    if (event.target.classList.contains("active")) return;

    listItems.forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");

    const targetId = event.target.getAttribute("data-target");

    // 1. Плавно скрываем текущий текст (добавляем класс с opacity: 0)
    contentDisplay.classList.add("hidden");

    // 2. Ждем 300мс (пока отработает CSS transition), затем меняем текст
    setTimeout(() => {
      contentDisplay.innerHTML = resumeData[targetId];

      // 3. Плавно проявляем новый текст (возвращаем opacity: 1)
      contentDisplay.classList.remove("hidden");
    }, 300); // 300 миллисекунд — точное время из CSS
  }
});
