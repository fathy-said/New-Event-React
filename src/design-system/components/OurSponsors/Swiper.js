import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import OurSponsorsBox from "./OurSponsorsBox";
import { sponsorsData } from "../../Data/AllData";
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
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 2,
                    },
                    851: {
                        slidesPerView: 3,
                    },
                    991: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {sponsorsData.length ? (
                    sponsorsData.map((el) => {
                        return (
                            <SwiperSlide key={el.id}>
                                <OurSponsorsBox title={el.title} key={el.id} />
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
