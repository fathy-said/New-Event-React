import React from "react";
import AboutContainer from "../../components/About/AboutContainer";
import CreativeSpeakerContainer from "../../components/CreativeSpeakersBox/CreativeSpeakerContainer";
import TitleHeader from "../../components/global/TitleHeader";
import HeaderContainer from "../../components/Header/HeaderContainer";
import NavbarBox from "../../components/Navbar/navbar";
import OurProgramsContainer from "../../components/OurPrograms/OurProgramsContainer";
import OurSponsorsContainer from "../../components/OurSponsors/OurSponsorsContainer";
import Overview from "../../components/overviewBox.js/overview";
import OverviewContainer from "../../components/overviewBox.js/overviewContainer";
import RegisterContainer from "../../components/Register/RegisterContainer";
import WatchVideoContainer from "../../components/WatchVideo/WatchVideoContainer";
const HomePage = () => {
    return (
        <>
            <NavbarBox />
            <HeaderContainer />
            <AboutContainer />
            <OverviewContainer />
            <WatchVideoContainer />
            <CreativeSpeakerContainer />
            <OurProgramsContainer />
            <RegisterContainer />
        </>
    );
};

export default HomePage;
{
    /* <OverviewContainer />
            <CreativeSpeakerContainer />
            <OurProgramsContainer />
            <OurSponsorsContainer /> */
}
