import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { faEnvelope, faStar } from "@fortawesome/free-solid-svg-icons";
import HomePage from "./design-system/pages/Home/homePage";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
//  <i className="fa-sharp fa-solid fa-star"></i>
//         <FontAwesomeIcon icon={faStar} />
