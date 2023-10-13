const fs = require('fs');

// Ім'я вхідного файлу з даними
const inputFile = 'data.json';

// Зчитуємо дані з файлу
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Помилка читання файлу', err);
        return;
    }

    try {
        // Парсимо JSON дані
        let jsonData = JSON.parse(data);

        // Обробляємо дані та формуємо потрібну інформацію
        let necessaryData = jsonData.map(item => `${item.exchangedate}:${item.rate}`);

        // Перетворюємо дані в рядок з роздільниками
        let outputData = necessaryData.join('\n');

        // Ім'я вихідного файлу
        let outputFile = 'output.txt';

        // Записуємо результат у вихідний файл
        fs.writeFile(outputFile, outputData, 'utf8', err => {
            if (err) {
                console.error('Помилка запису в файл', err);
                return;
            }
            console.log('Дані записані у файл output.txt');
        });
    } catch (jsonParseError) {
        console.error('Помилка:', jsonParseError);
    }
});
