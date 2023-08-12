import React, {useEffect, useState} from "react";
import Card from "../../components/Card/Card";
import axios from "axios";
import Banner from "../../components/Banner/Banner";
import datas from '../../datas/Data.json'
import { Link } from "react-router-dom";

export default function Home () {
    const [data, setData] = useState([]);

    useEffect(() => {
        // console.log(data);
        // console.log(datas);
        setData(datas);
    }, []);
    console.log(data);
    return (
        <>
            <Banner />
            <div className="cards-container">
                {data.map((appart, id) =>(
                    <div className="card_logement" key={id}>
                        {/*<div> { console.log(appart)}</div>*/}
                        <Link to={`/logement/${appart.id}`} className="link_card_logement" >
                            <Card cover={appart.cover} title={appart.title} />
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
