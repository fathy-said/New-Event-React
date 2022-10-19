import React, { useState } from "react";
import { DataTab1, DataTab2, DataTab3 } from "../../Data/AllData";
import OurProgramBox from "./OurProgramBox";
export default function OurProgramsTab() {
    const [Tab, setTab] = useState("tab1");
    let TabActive = (e) => {
        // remove active from all tab
        e.target.parentElement
            .querySelector(".active")
            .classList.remove("active");
        // add active from target tab

        e.target.classList.add("active");
    };
    let switchTab = (e) => {
        setTab(e);
    };

    return (
        <>
            <div className="program-tab">
                <div className="all-button">
                    <button
                        onClick={(e) => {
                            TabActive(e);
                            switchTab("tab1");
                        }}
                        className="active"
                    >
                        first day
                    </button>
                    <button
                        onClick={(e) => {
                            TabActive(e);
                            switchTab("tab2");
                        }}
                    >
                        second day
                    </button>
                    <button
                        onClick={(e) => {
                            TabActive(e);
                            switchTab("tab3");
                        }}
                    >
                        third day
                    </button>
                </div>
                <span></span>
            </div>
            <div className="all-box-program">
                {Tab === "tab2" ? (
                    DataTab2.length ? (
                        DataTab2.map((el) => {
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
                    )
                ) : Tab === "tab3" ? (
                    DataTab3.length ? (
                        DataTab3.map((el) => {
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
                    )
                ) : Tab === "tab1" ? (
                    DataTab1.length ? (
                        DataTab1.map((el) => {
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
                    )
                ) : null}
            </div>
        </>
    );
}
// {
//     DataTab1.length ? (
//         DataTab1.map((el) => {
//             return (
//                 <OurProgramBox
//                     key={el.id}
//                     roomMap={el.roomMap}
//                     time={el.time}
//                     title={el.title}
//                     name={el.name}
//                     description={el.description}
//                     img={el.img}
//                 />
//             );
//         })
//     ) : (
//         <h2 className=" text-center py-3 text-capitalize">not found data</h2>
//     );
// }
