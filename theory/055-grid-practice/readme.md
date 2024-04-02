# Шахматная доска

![Шахматная доска](./img.png)

**Описание проекта**: Необходимо создать веб-страницу, на которой будет отображена шахматная доска с клетками черного и белого цвета.

**Требования к функциональности**:
- Вывести на страницу шахматную доску с размерами 8x8 клеток.
- Каждая клетка должна иметь размеры 50x50 пикселей.
- Клетки на доске должны чередоваться белые и черные клетки.
- Должна быть возможность дальнейшего расширения функциональности (например, добавление фигур или возможность хода по клику).

**Технические требования**:
- Использовать HTML для разметки веб-страницы.
- Использовать CSS для стилизации элементов.
- Использовать CSS Grid Layout для создания сетки клеток на шахматной доске.


**Выводы**:
- Необходимо предоставить HTML-код веб-страницы, содержащий шахматную доску.
- Код должен быть чистым, понятным и хорошо структурированным.
- Возможно добавление дополнительных функций в будущем на основе этой шахматной доски.

**Дедлайн**: не более двух часов

```html
<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Шахматная доска</title>
  <style>
    .chessboard {

    }

    .square {
    }

    .white {
      background-color: #eae0d0;
    }

    .black {
      background-color: #594a3d;
    }
  </style>
</head>

<body>
  <div class="chessboard">
    <!-- Клетки шахматной доски -->
    <div class="square white"></div>
    <div class="square black"></div>
    <div class="square white"></div>
    <div class="square black"></div>
    <div class="square white"></div>
    <div class="square black"></div>
    <div class="square white"></div>
    <div class="square black"></div>
    <!-- Черные клетки -->
    <div class="square black"></div>
    <div class="square white"></div>
    <div class="square black"></div>
    <div class="square white"></div>
    <div class="square black"></div>
    <div class="square white"></div>
    <div class="square black"></div>
    <div class="square white"></div>
    <!-- и так далее, чтобы заполнить всю доску -->
  </div>
</body>

</html>

```