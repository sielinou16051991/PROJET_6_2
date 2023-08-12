import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import React from "react";
import data from "../../datas/Data.json"

export default function About() {

    return (
        <>
            <AboutBanner />
            {data.map((rule, id) =>(
                <Collapse
                    key={id}
                    aboutTitle={rule.aboutTitle}
                    aboutText={rule.aboutText}
                    aboutStyle='about-style'
                />
            ))}
        </>
    )
}
