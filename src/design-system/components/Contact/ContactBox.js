import React from "react";

const ContactBox = () => {
    return (
        <div className="contact">
            <div className="container">
                <div className="box-content">
                    <h2>
                        new <span>event</span>
                    </h2>

                    <p>
                        This is a Bootstrap v3.3.6 layout that is responsive and
                        mobile friendly. You may download and modify this
                        template for your website. Please tell your friends
                        about templatemo.
                    </p>
                    <p>
                        This is a Bootstrap v3.3.6 layout that is responsive and
                        mobile friendly. You may download and modify this
                        template for your website. Please tell your friends
                        about templatemo.
                    </p>
                    <p>
                        This is a Bootstrap v3.3.6 layout that is responsive and
                        mobile friendly. You may download and modify this
                        template for your website. Please tell your friends
                        about templatemo.
                    </p>
                    <button className="submit">download Now </button>
                </div>
                <div className="box-form">
                    <form action="#">
                        <h2>
                            keep in <span>touch</span>
                        </h2>
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
};

export default ContactBox;
