import React from "react";

export default function RegisterBox() {
    return (
        <div className="register">
            <div className="container">
                <div className="box-content">
                    <h2>
                        Register <span>Here</span>
                    </h2>
                    <h3>
                        New Event is a fully responsive one-page template for
                        events, conferences or workshops.
                    </h3>
                    <p>
                        This is a Bootstrap v3.3.6 layout that is responsive and
                        mobile friendly. You may download and modify this
                        template for your website. Please tell your friends
                        about templatemo.
                    </p>
                </div>
                <div className="box-form">
                    <form action="#">
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="last name" />
                        <input type="text" placeholder="phone number" />
                        <input type="email" placeholder="Email address" />
                        <input
                            type="submit"
                            value="register"
                            className="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
