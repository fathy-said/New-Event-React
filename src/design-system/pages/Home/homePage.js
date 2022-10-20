import React from "react";
import AboutContainer from "../../components/About/AboutContainer";
import ContactContainer from "../../components/Contact/ContactContainer";
import CreativeSpeakerContainer from "../../components/CreativeSpeakersBox/CreativeSpeakerContainer";
import FooterContainer from "../../components/Footer/FooterContainer";
import HeaderContainer from "../../components/Header/HeaderContainer";
import NavbarBox from "../../components/Navbar/navbar";
import OurProgramsContainer from "../../components/OurPrograms/OurProgramsContainer";
import OurSponsorsContainer from "../../components/OurSponsors/OurSponsorsContainer";
import OverviewContainer from "../../components/overviewBox.js/overviewContainer";
import RegisterContainer from "../../components/Register/RegisterContainer";
import VenueContainer from "../../components/Venue/VenueContainer";
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
            <OurSponsorsContainer />
            <VenueContainer />
            <OurSponsorsContainer />

            <ContactContainer />
            <FooterContainer />
        </>
    );
};

export default HomePage;
