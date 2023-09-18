import React from 'react';
import BackwardButton from "ui/button/backward";
import "assets/css/_form.page.scss";
import Button from "ui/button"
import Form from "../form"
import { useState } from "react"
import { useEffect } from "react"
import Constructor from "./constructor"
import { Contact } from "interfaces/contact";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Layout from "layouts/index"
import ContactModel from "models/contact/contact.show";

function UpdatingContact() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [initiateValue, setInitiateValue] = useState({ name: "", address: "", phoneNumber: "", email: "" } as Contact)
    const navigate = useNavigate();
    const params = useParams();

    const getData = async (id: string) => {
        await ContactModel.get(id as string)
        setInitiateValue({...ContactModel.payload} as Contact)
        setIsButtonDisabled(false);
    }

    useEffect(() => {
        getData(params.id as string);
    }, [params.id])

    const onSubmit = () => {
        setIsButtonDisabled(true);
        Constructor.store(params.id as string, () => {
            navigate("/");
        }, () => {
            setIsButtonDisabled(false);
        });
    }

  return (
        <Layout>
            <div className="form-container">
                <div className="heading">
                    <BackwardButton
                        onClick={() => navigate(-1)}
                    />
                    <h1>Edit Contact</h1>
                </div>

                <div className="main">
                    <Form
                        key={initiateValue.name}
                        initiateValue={initiateValue}
                        onChange={(payload: Contact) => {
                            Constructor.setPayload(payload)
                            setIsButtonDisabled(Constructor.getDisability());
                        }}
                    />
                </div>

                <div className="footer">
                    <Button
                        variant="primary"
                        disabled={isButtonDisabled}
                        onClick={() => onSubmit()}
                    >
                        Update Contact
                    </Button>
                </div>
            </div>
        </Layout>
  );
}

export default UpdatingContact;
