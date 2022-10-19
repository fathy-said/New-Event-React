import React from "react";
import TitleHeader from "../global/TitleHeader";
import OurProgramsTab from "./OurProgramsTab";

const OurProgramsContainer = () => {
    return (
        <div className="program-box">
            <div className="container">
                <div className="text-center">
                    <TitleHeader
                        title="Our
"
                        titleSpan="Programs"
                        description="Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.
"
                    />
                </div>
                <OurProgramsTab />
            </div>
        </div>
    );
};

export default OurProgramsContainer;
