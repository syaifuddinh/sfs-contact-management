import React from 'react';
import TextInput from "ui/input/text";
import DescriptionInput from "ui/input/description";

import FormConstructor from "./form.constructor"
import { useState } from "react"
import { useEffect } from "react"
import { Contact } from "interfaces/contact";

type ContactFormType = {
    onChange: (value: Contact) => void;
    initiateValue?: Contact;
}

const ContactForm = ({ initiateValue, onChange }: ContactFormType) => {
  const [payload, setPayload] = useState(() => {
    if(initiateValue) {
        const val = {...initiateValue};
        FormConstructor.setName(val.name);
        FormConstructor.setAddress(val.address as string);
        FormConstructor.setPhoneNumber(val.phoneNumber);
        FormConstructor.setEmail(val.email);
    } else {
        FormConstructor.setName("");
        FormConstructor.setAddress("");
        FormConstructor.setPhoneNumber("");
        FormConstructor.setEmail("");  
    }

    return  {...FormConstructor.payload}
  }) ;
  const onUpdate = () => {
    console.log({ p: FormConstructor.payload})
    setPayload({...FormConstructor.payload});
    if(!onChange) return;
    onChange({...FormConstructor.payload} as Contact)
  }

  useEffect(() => {
    return () => {
        if(!initiateValue) FormConstructor.reset()
    }
  }, [])

  return (
    <div className="contact-form">
        <div className="row">
            <div className="col">
                <TextInput
                    label="Name"
                    placeholder="Ex : John / George / Etc"
                    onChange={(val: string) => {
                        FormConstructor.setName(val);
                        onUpdate();
                    }}
                    value={payload.name}
                />
                <TextInput
                    label="Phone number"
                    placeholder="Ex : 086803....."
                    onChange={(val: string) => {
                        FormConstructor.setPhoneNumber(val);
                        onUpdate();
                    }}
                    value={payload.phoneNumber}
                />
                <TextInput
                    label="Email"
                    placeholder="Ex : john@gmail.com"
                    onChange={(val: string) => {
                        FormConstructor.setEmail(val);
                        onUpdate();
                    }}
                    value={payload.email}
                />
            </div>

            <div className="col">
                <DescriptionInput
                    label="Address"
                    placeholder="Ex : Apple Street Number 12....."
                    onChange={(val: string) => {
                        FormConstructor.setAddress(val);
                        onUpdate();
                    }}
                    value={payload.address as string}
                />
            </div>
        </div>
    </div>
  );
}

export default ContactForm;
