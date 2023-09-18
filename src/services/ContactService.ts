import { db, table } from "config/firebase";
import {  getDocs } from 'firebase/firestore'
import { doc, setDoc, addDoc, collection, deleteDoc } from "firebase/firestore"; 
import { generateUUID } from "utils/string";

class ContactService {
    baseUrl = process.env.REACT_APP_API_URL; 

    async get() {
        const contact = table(db, "contacts");
        const { docs } = await getDocs(contact);
        const list = docs.map((doc: any) => doc.data());

        return this.parseList(list);
    }

    parseList(list: any[]) {
        const data = list.map((item: any) => {
            const address = item.address ? item.address : "-";
            return {...item, address}
        })

        return data;
    } 

    async show(id: string) {
        const contact = table(db, "contacts");
        const { docs } = await getDocs(contact);
        const list = docs.map((doc: any) => doc.data());
        const data = [...list].find((item: any) => item.id === id)

        return this.parseDetail(data);
    }

    parseDetail(item: any) {
        const address = item.address ? item.address : "-";
        return {...item, address};
    }

    async store(name: string, phoneNumber: string, email: string, address?: string) {
        const id = generateUUID();
        const contact = collection(db, "contacts");
        const ref = doc(contact, id);
        await setDoc(ref, {
          id,
          name,
          phoneNumber,
          email,
          address
        });
    }

    async update(id: string, name: string, phoneNumber: string, email: string, address?: string) {
        const contact = collection(db, "contacts");
        const ref = doc(contact, id);
        await setDoc(ref, {
          id,
          name,
          phoneNumber,
          email,
          address
        });
    }

    async destroy(id: string) {
        const contact = collection(db, "contacts");
        const ref = doc(contact, id);
        await deleteDoc(ref);
    }
}

export default ContactService;