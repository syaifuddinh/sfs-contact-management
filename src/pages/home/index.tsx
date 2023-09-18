import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from "ui/button"
import CatalogueCard from "ui/catalogue-card"
import Pagination from "ui/pagination"
import SearchInput from "ui/input/search"
import "assets/css/_main.page.scss";
import "assets/css/_pagination.scss";
import { useNavigate } from "react-router-dom";
import Constructor from "./constructor";
import Layout from "layouts/index"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { setContacts } from "store/slices/contact";
import { search } from "store/slices/contact";
import { setPage } from "store/slices/contact";

function Home() {
    const navigate = useNavigate();
    const [payload, setPayload] = useState({...Constructor.payload});
    const [meta, setMeta] = useState({...Constructor.meta});
    const contact = useSelector((state: any) => state.contact);
    const dispatch = useDispatch();

    const onUpdate = () => {
        setPayload({...Constructor.payload});
        setMeta({...Constructor.meta});
    }

    const getData = async () => {
        await Constructor.get();
        dispatch(setContacts([...Constructor.list]))
        onUpdate();
    }

    useEffect(() => {
        getData();
    }, [])

  return (
    <Layout>
        <div className="header">
            <h1>CONTACT DATABASE</h1>
            <Button
                variant="primary"
                onClick={() => navigate("contact/create")}
            >
                Create Contact
            </Button>
        </div>

        <div className="subheading">
            <h2>Your Contacts</h2>

            <SearchInput
                value={payload.keyword}
                placeholder="Search contact..."
                onChange={(val: string) => {
                    Constructor.setKeyword(val);
                    onUpdate();
                    dispatch(search(val));
                    // getData()
                }}
            />
        </div>

        <div className="main">
            { contact.list.map((item: any) => (
                <div key={item.id} className="main_col">
                    <CatalogueCard
                        name={item.name}
                        phoneNumber={item.phoneNumber}
                        email={item.email}
                        address={item.address}
                        onClick={() => navigate(`contact/${item.id}`)}
                    />
                </div>
            )) }
        </div>

    </Layout>
  );
}

export default Home;
