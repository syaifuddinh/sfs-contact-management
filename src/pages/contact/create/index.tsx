import React from 'react';
import BackwardButton from "ui/button/backward";
import "assets/css/_form.page.scss";
import Button from "ui/button"
import Form from "../form"
import { useState } from "react"
import Constructor from "./constructor"
import { Contact } from "interfaces/contact";
import { useNavigate } from "react-router-dom";
import Layout from "layouts/index"

function CreatingContact() {
    const [isButtonDisabled, setIsButtonDisabled] = useState(Constructor.getDisability());
    const navigate = useNavigate();

    const onSubmit = () => {
        setIsButtonDisabled(true);
        Constructor.store(() => {
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
                    <h1>Create Contact</h1>
                </div>

                <div className="main">
                    <Form
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
                        Create Contact
                    </Button>
                </div>
            </div>
        </Layout>
  );
}

export default CreatingContact;
