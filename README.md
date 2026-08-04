# Classifier

Классификатор файлов на HTML, CSS и JavaScript.

## Структура

| Файл | Роль |
|------|------|
| `classifier.js` + `classifier.css` + `index.html` | Постоянный движок |
| `content.js` | Переменная часть: список классификаций и данные |

Движок читает `window.CLASSIFIER_CONTENT` из `content.js` и строит интерфейс. Чтобы сменить набор классификаций, достаточно править `content.js`.

## Запуск

Откройте `index.html` в браузере (или через любой локальный static-сервер).
