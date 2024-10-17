
import { readContacts } from "../../utils/readContacts.js";

export const countContacts = async () => {
    const contact = await readContacts();
    return contact.lenght;
};

console.log(await countContacts());
