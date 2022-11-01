import React from "react";
import Aboutvideo from "../../../shard/img/about.jpg";
import "./WatchVideo.css";
export default function WatchVideo() {
    return (
        <div className="watch-video">
            <div className="container">
                <div className="box-content">
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
                    <p>
                        Quisque facilisis scelerisque venenatis. Nam vulputate
                        ultricies luctus. Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet.
                    </p>
                </div>
                <div className="box-img">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/HjDh-Wqk768"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
