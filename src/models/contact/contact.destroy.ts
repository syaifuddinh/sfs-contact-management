import { Contact } from "interfaces/contact";
import ContactService from "services/ContactService"
import { formatMoney } from "utils/string";
import { showMessage, showErrorMessage } from "utils/notification"; 

export default new class DestroyingContact {
    async destroy(id: string) {
        const service = new ContactService();
        const data = await service.destroy(id);
        showMessage("Contact deleted successfully");
    }
}