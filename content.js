/**
 * Classifier — переменная часть.
 * Здесь живут классификации и связанные с ними данные.
 * Движок (classifier.js) не меняется при смене содержимого.
 */
window.CLASSIFIER_CONTENT = {
  title: "Классификатор файлов",
  classifications: [
    {
      id: "by-extension",
      name: "По расширению",
      description: "Группировка файлов по типу расширения (.pdf, .jpg, …).",
    },
    {
      id: "by-date",
      name: "По дате",
      description: "Группировка по дате изменения или создания.",
    },
  ],
};
