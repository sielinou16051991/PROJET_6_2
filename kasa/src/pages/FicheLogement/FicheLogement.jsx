import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import datas from "../../datas/Data.json"
import Gallery from "../../components/Gallery/Gallery";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Collapse from "../../components/Collapse/Collapse";

export default function FicheLogement () {
    const params = useParams();
    const navigate = useNavigate();
    console.log(params);

    const [pickedAppart, sePickedAppart] = useState();
    useEffect(() => {
        const getData = async () => {

            const data = datas;
            // const resp = await axios.get("/logements.json");
            console.log(data);
            const piked = data.find(({ id }) => id === params.id);
            data.map(() => sePickedAppart(piked));
            if (piked === undefined) {
                navigate("/404", { state : { message: "Impossible de récupérer les données"}});
            }

        };
        getData().then(r => console.log(r));
    }, []);

    const slidePics = pickedAppart && pickedAppart.pictures;
    const tags = pickedAppart && pickedAppart.tags;
    const equipments = pickedAppart && pickedAppart.equipments;

    const equip = pickedAppart && equipments.map((item, index) => (
        <li
            key={index}
            className='equipList'
        >
            {item}
        </li>
    ))
    return (
        pickedAppart && (
            <div key={params.id} className='fiche-container'>
                <Gallery slides={slidePics} />
                {/*FICHE LOGEMENT*/}
                <section className='hostInfo-container'>
                    <div className='title-tags-container'>
                        <div className='title-container redFont'>
                            <h1>{pickedAppart.title}</h1>
                            <h3>{pickedAppart.location}</h3>
                        </div>
                        <div className='tags-container'>
                            {tags.map(tag =>(
                                <Tag key={tag} tag={tag} />
                            ))}
                        </div>
                    </div>
                    <div className='rate-host-container'>
                        <div className='host-container redFont'>
                            <Host
                                hostName={pickedAppart.host.name}
                                hostPicture={pickedAppart.host.picture}
                            />
                        </div>
                        <div className='rate-container'>
                            <Rate score={pickedAppart.rating} />
                        </div>
                    </div>
                </section>
                <div className="collapse-fiche-container">
                    <Collapse
                        aboutTitle='Description'
                        aboutText={pickedAppart.description}
                    />
                    <Collapse
                        aboutTitle='Équipements'
                        aboutText={equip}
                    />
                </div>
            </div>
        )
    )
}
