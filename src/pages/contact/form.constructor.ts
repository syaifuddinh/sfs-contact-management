import { Contact } from "interfaces/contact";

class FormConstructor {
    payload: Contact = {
        name: "",
        phoneNumber: "",
        email: "",
        address: ""
    };

    reset() {
        this.payload = {
            name: "",
            phoneNumber: "",
            email: "",
            address: ""
        }
    }

    setPayload(params: Contact) {
        this.payload = params;
    }

    setName(value: string) {
        this.payload.name = value;
    }


    setPhoneNumber(value: string) {
        this.payload.phoneNumber = value;
    }

    setEmail(value: string) {
        this.payload.email = value;
    }

    setAddress(value: string) {
        this.payload.address = value;
    }

}

export default new FormConstructor();