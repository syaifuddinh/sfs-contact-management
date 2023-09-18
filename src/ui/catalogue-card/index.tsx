import React from "react";
import EmailIcon from "assets/icons/gray-email.svg";
import LocationIcon from "assets/icons/gray-location.svg";

type CatalogueCardType = {
    name: string;
    phoneNumber: string;
    email: string;
    address: string;
    onClick: () => void;
};

const CatalogueCard = ({ name, phoneNumber, email, address, onClick }: CatalogueCardType) => {

    return (
        <div
            className="catalogue-card"
            onClick={onClick}
        >
            <div className="catalogue-card_main">
                <div className="catalogue-card_main__title">
                    { name }
                </div>
                <div className="catalogue-card_main__phone">
                    { phoneNumber }
                </div>
                <div className="catalogue-card_main__email info">
                    <div className="image">
                        <img
                            src={EmailIcon}
                            alt="email-info"
                            loading="lazy"
                        />
                    </div>
                    <div className="content">                        
                        { email }
                    </div>
                </div>
                <div className="catalogue-card_main__address info">
                    <div className="image">
                        <img
                            src={LocationIcon}
                            alt="address-info"
                            loading="lazy"
                        />
                    </div>


                    <div className="content">
                        { address }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CatalogueCard;