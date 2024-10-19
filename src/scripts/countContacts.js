
import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    const contact = await readContacts();
    return contact.length;
};

console.log(await countContacts());

//  В разі виконання скрипту count, у консоль має виводитись кількість контактів в масиві з файлу src / db / db.json, як це передбачено в завданні.Наразі повертається undefined https://prnt.sc/T4OLt0ugSB1Q
