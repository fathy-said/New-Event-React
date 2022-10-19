import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SpeakerData } from "../../Data/AllData";
import CreativeSpeaker from "./CreativeSpeaker";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                breakpoints={{
                    200: {
                        slidesPerView: 2,
                    },
                    767: {
                        slidesPerView: 3,
                    },
                    851: {
                        slidesPerView: 4,
                    },
                    991: {
                        slidesPerView: 5,
                    },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {SpeakerData.length ? (
                    SpeakerData.map((el) => {
                        return (
                            <SwiperSlide key={el.id}>
                                <CreativeSpeaker
                                    img={el.img}
                                    name={el.name}
                                    description={el.description}
                                />
                            </SwiperSlide>
                        );
                    })
                ) : (
                    <h2 className="text-center d-block mx-auto text-capitalize">
                        not found data
                    </h2>
                )}
            </Swiper>
        </>
    );
}
