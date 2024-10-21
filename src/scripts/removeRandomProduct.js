
import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const removeRandomProduct = async () => {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    // прочитав данні по шляху
    const dataPars = JSON.parse(data);
    // розпарсив данні по шляху
    const randomIndex = Math.floor(Math.random() * dataPars.length);
    // на розпрасеному масиві викликаю 2 методи рандомного створення індекса Math.floor(Math.random() з округленням до меншого цілого числа
    dataPars.splice(randomIndex,
        1);
    // тепер для видалення по індексу використ метод splice() - JS метод видалення заданої кількості
    await fs.writeFile(PATH_DB, JSON.stringify(dataPars,
        null,
        2));
    // методом врайт -  з використанням стрінгіфай знову записую мутований обєкт по шляху на бекенд
};
removeRandomProduct();

// "remove-delletrandom": "node src/scripts/removeRandomProduct.js"
