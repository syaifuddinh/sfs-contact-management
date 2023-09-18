import { Contact } from "interfaces/contact";
import ContactService from "services/ContactService"
import { formatMoney } from "utils/string";

export default new class ShowingContact {
    payload: Contact = <Contact> {};

    async get(id: string) {
        const service = new ContactService();
        const data = await service.show(id);
        this.payload.name = data.name;
        this.payload.phoneNumber = data.phoneNumber;
        this.payload.email = data.email;
        this.payload.address = data.address;
    }
}