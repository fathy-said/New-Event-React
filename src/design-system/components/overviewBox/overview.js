import React from "react";
import "./Overview.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Overview = ({ overviewPr, overviewIcon, overviewTitle }) => {
    return (
        <>
            <div className="col-12 col-sm-6 col-md-4  overview-box">
                <span className="overview-icon">
                    <FontAwesomeIcon icon={overviewIcon} />
                </span>
                <h2>{overviewTitle}</h2>
                <p>{overviewPr}</p>
            </div>
        </>
    );
};

export default Overview;
