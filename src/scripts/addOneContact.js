import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    const contact = await readContacts();
    const newContact = createFakeContact();
    await writeContacts([...contact, newContact]);
};

addOneContact();

// щоб додати новий контакт треба одразу прочитати все що є readContacts()
// потім створити новий в функції createFakeContact();
//  і після розпилення масива контактів додати в кінець масиву [...contact, newСontact]
