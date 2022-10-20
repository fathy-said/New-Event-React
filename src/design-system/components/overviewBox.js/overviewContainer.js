import React from "react";
import Overview from "./overview";

import { overviewData } from "../../Data/AllData";
const OverviewContainer = () => {
    return (
        <div className="row  all-overview" id="overview">
            {overviewData.length ? (
                overviewData.map((el) => {
                    return (
                        <Overview
                            key={el.id}
                            overviewIcon={el.icon}
                            overviewPr={el.description}
                            overviewTitle={el.title}
                        />
                    );
                })
            ) : (
                <h2 className="text-white text-center py-3 text-capitalize">
                    not found data
                </h2>
            )}
        </div>
    );
};

export default OverviewContainer;
