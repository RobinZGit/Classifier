/**
 * Classifier — постоянный движок.
 * Читает window.CLASSIFIER_CONTENT из content.js и строит интерфейс.
 */
(function () {
  const content = window.CLASSIFIER_CONTENT;

  if (!content || !Array.isArray(content.classifications)) {
    document.getElementById("app").textContent =
      "Нет данных: проверьте content.js (CLASSIFIER_CONTENT.classifications).";
    return;
  }

  const app = document.getElementById("app");
  const title = document.createElement("h1");
  title.textContent = content.title || "Classifier";
  app.appendChild(title);

  const list = document.createElement("ul");
  list.className = "classifications";

  for (const item of content.classifications) {
    const li = document.createElement("li");
    li.textContent = item.name || "(без имени)";
    if (item.description) {
      const desc = document.createElement("p");
      desc.textContent = item.description;
      li.appendChild(desc);
    }
    list.appendChild(li);
  }

  app.appendChild(list);
})();
