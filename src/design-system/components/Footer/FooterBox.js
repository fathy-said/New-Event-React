import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const FooterBox = () => {
    return (
        <div className="footer">
            <div className="container">
                <h5>
                    copyright
                    <span>
                        <FontAwesomeIcon icon={faCopyright} />
                    </span>
                    2022 Your Company | Design
                    <span>Fathy Said</span>
                </h5>
                <div className="box-icon">
                    <span>
                        <a href="#">
                            <i class="fa-brands fa-twitter"></i>
                        </a>
                    </span>

                    <span>
                        <a href="#">
                            <i class="fa-brands fa-facebook-f"></i>
                        </a>
                    </span>

                    <span>
                        <a href="#">
                            <i class="fa-brands fa-google"></i>{" "}
                        </a>
                    </span>

                    <span>
                        <a href="#">
                            <i class="fa-brands fa-instagram"></i>{" "}
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FooterBox;
