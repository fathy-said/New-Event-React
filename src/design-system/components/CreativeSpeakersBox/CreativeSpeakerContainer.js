import React from "react";
import TitleHeader from "../global/TitleHeader";
import CreativeSpeaker from "./CreativeSpeaker";
import { SpeakerData } from "../../Data/AllData";
const CreativeSpeakerContainer = () => {
    return (
        <div className="slider-speaker-box">
            <TitleHeader
                title="creative"
                titleSpan="speakers"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                architecto"
            />
            <div className="container">
                {SpeakerData.length ? (
                    SpeakerData.map((el) => {
                        return (
                            <CreativeSpeaker
                                img={el.img}
                                key={el.id}
                                name={el.name}
                                description={el.description}
                            />
                        );
                    })
                ) : (
                    <h2 className="text-center d-block mx-auto text-capitalize">
                        {" "}
                        not found data
                    </h2>
                )}
            </div>
        </div>
    );
};

export default CreativeSpeakerContainer;
