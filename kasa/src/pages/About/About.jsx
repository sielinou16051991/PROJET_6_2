import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import React from "react";
import dataArray from "../../datas/dataArray.json"

export default function About() {

    return (
        <>
            {/*<div>{console.log(dataArray)}</div>*/}
            <AboutBanner />
            {dataArray.map((rule, id) =>(
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
