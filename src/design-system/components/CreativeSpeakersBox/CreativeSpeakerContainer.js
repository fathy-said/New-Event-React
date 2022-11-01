import React from "react";
import TitleHeader from "../global/TitleHeader";
import CreativeSpeaker from "./CreativeSpeaker";
import { SpeakerData } from "../../Data/AllData";
import Swiper from "./Swiper";
import "./CreativeSpeaker.css";
const CreativeSpeakerContainer = () => {
    return (
        <div className="slider-speaker-box" id="speakers">
            <TitleHeader
                title="creative"
                titleSpan="speakers"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                architecto"
            />
            <div className="container">
                <Swiper />
            </div>
        </div>
    );
};

export default CreativeSpeakerContainer;
