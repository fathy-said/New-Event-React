import React from "react";
import OurSponsorsBox from "./OurSponsorsBox";
import { sponsorsData } from "../../Data/AllData";
const OurSponsorsContainer = () => {
    return (
        <div className="container d-flex justify-content-center ">
            {sponsorsData.length ? (
                sponsorsData.map((el) => {
                    return <OurSponsorsBox title={el.title} key={el.id} />;
                })
            ) : (
                <h2 className=" text-center py-3 text-capitalize">
                    not found data
                </h2>
            )}
        </div>
    );
};

export default OurSponsorsContainer;
