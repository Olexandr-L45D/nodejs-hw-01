import { readFile } from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
    const data = await readFile(PATH_DB, "utf-8");
    return JSON.parse(data);
};

// в цій функції просто зчитуєм з файлу по абсолютному шляху ,
// приводимо до рядка через розшифровку "utf-8" і в ретерні парсимо константу data
