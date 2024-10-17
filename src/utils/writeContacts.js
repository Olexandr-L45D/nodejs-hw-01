import { writeFile } from "node:fs/promises";
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = contact => writeFile(PATH_DB, JSON.stringify(contact, null, 2));

// другий варіант передати в JSON.stringify(contact, null, 2) функцію updatedContacts яка прописана в окремому файлі
// export const writeContacts = async (updatedContacts) => {};
