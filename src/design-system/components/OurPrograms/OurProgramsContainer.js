import React from "react";
import { programData } from "../../Data/AllData";
import OurProgramBox from "./OurProgramBox";
const OurProgramsContainer = () => {
    return (
        <div className="container">
            {programData.length ? (
                programData.map((el) => {
                    return (
                        <OurProgramBox
                            key={el.id}
                            roomMap={el.roomMap}
                            time={el.time}
                            title={el.title}
                            name={el.name}
                            description={el.description}
                            img={el.img}
                        />
                    );
                })
            ) : (
                <h2 className=" text-center py-3 text-capitalize">
                    not found data
                </h2>
            )}
        </div>
    );
};

export default OurProgramsContainer;
