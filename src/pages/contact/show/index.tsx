import React from 'react';
import "assets/css/_show.page.scss";
import { useState } from "react"
import { useEffect } from "react"
import { Product } from "interfaces/product";
import BackwardButton from "ui/button/backward";
import { useNavigate } from "react-router-dom"; 
import { useParams } from "react-router-dom"; 
import ContactModel from "models/contact/contact.show";
import DestroyingContactModel from "models/contact/contact.destroy";
import Layout from "layouts/index"
import EmailIcon from "assets/icons/gray-email.svg";
import LocationIcon from "assets/icons/gray-location.svg";
import Button from "ui/button"

function ShowingProduct() {
    const navigate = useNavigate();
    const params = useParams();
    const [payload, setPayload] = useState({...ContactModel.payload})
    const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(false);

    const getData = async (id: string) => {
        await ContactModel.get(id)
        setPayload({...ContactModel.payload})
    }

    const destroyData = async () => {
        const id = params.id as string;
        setIsDeleteButtonDisabled(true);
        await DestroyingContactModel.destroy(id);
        setIsDeleteButtonDisabled(false);
        navigate("/");
    }

    useEffect(() => {
        getData(params.id as string)
    }, [params.id])

  return (
        <Layout>
            <div className="show-container">
                <div className="heading">
                    <div className="heading_navigation">
                        <BackwardButton
                            onClick={() => navigate(-1)}
                        />
                        <h1>Detail Contact</h1>
                    </div>
                    <div className="heading_control">
                        <Button
                            variant="danger"
                            disabled={isDeleteButtonDisabled}
                            onClick={() => destroyData()}
                        >
                            Delete Contact
                        </Button>                        

                        <Button
                            variant="primary"
                            onClick={() => navigate(`/contact/${params.id}/edit`)}
                        >
                            Edit Contact
                        </Button>                        
                    </div>
                </div>

                <div className="main">
                    <div className="main_content">
                        <div className="main_content__title">
                            { payload.name }
                        </div>
                        <div className="main_content__phone">
                            { payload.phoneNumber }
                        </div>
                        <div className="main_content__email info">
                            <div className="image">
                                <img
                                    src={EmailIcon}
                                    alt="email-info"
                                    loading="lazy"
                                />
                            </div>
                            { payload.email }
                        </div>
                        <div className="main_content__address info">
                            <div className="image">
                                <img
                                    src={LocationIcon}
                                    alt="address-info"
                                    loading="lazy"
                                />
                            </div>

                            { payload.address }
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
  );
}

export default ShowingProduct;
