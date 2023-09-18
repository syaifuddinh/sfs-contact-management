import { Contact } from "interfaces/contact";
import ContactService from "services/ContactService"
import { showMessage } from "utils/notification";
import { showErrorMessage } from "utils/notification";

class CreatingProductConstructor {    
    payload: Contact = <Contact> {
        name: "",
        phoneNumber: "",
        email: "",
        address: ""
    };

    getDisability = () => {
        const payload = this.payload;
        return !payload.name.trim() || !payload.phoneNumber.trim() ||  !payload.email.trim();
    }

    setPayload(payload: Contact) {
        this.payload = payload;
    }

 
    async store(id: string, callback: () => void, finishedCallback: () => void) {
        const service = new ContactService();
        const payload = this.payload;
        await service.update(id, payload.name, payload.phoneNumber, payload.email, payload.address);
        showMessage("Contact updated successfully")
        callback();
        finishedCallback()
    }    

}

export default new CreatingProductConstructor();