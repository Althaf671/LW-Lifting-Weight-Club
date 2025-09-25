// hero.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, EffectFade } from "swiper/modules";

export default function Hero() {

    // slider videos
    const videoUrl = [
        // { id: "vid1", src: "https://res.cloudinary.com/dyxqjq1yp/video/upload/v1758729003/LW-video-1_uba5qu.mp4" },
        { id: "vid2", src: "https://res.cloudinary.com/dyxqjq1yp/video/upload/v1758759268/hero-vd-2_qd2g70.mp4" },
        { id: "vid3", src: "https://res.cloudinary.com/dyxqjq1yp/video/upload/v1758766172/4745810-uhd_3840_2160_25fps_mfd9bp.mp4" },
        { id: "vid4", src: "https://res.cloudinary.com/dyxqjq1yp/video/upload/v1758759268/hero-vd-2_qd2g70.mp4" },
    ];

    return (
        <section className="hero__section">
            <Swiper
                modules={[ Pagination, A11y, Autoplay, EffectFade ]}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                    return `<span class="${className} my-custom-bullet"></span>`;
                    }
                }}
                autoplay={{ delay: 3000 }}
                effect="fade"
                loop={true}
                className="slider__container"
                
            >
                {videoUrl.map((slider, i) => (
                    <SwiperSlide key={i}>
                        <div className="slider__content">
                            <label htmlFor="video-hero"></label>
                            <video
                                id="video-hero"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload='auto'
                                className="hero-video"
                                aria-label="People doing gym excerise"
                            >
                                <source  src={slider.src} />
                            </video>                                                   
                        </div> 
                    </SwiperSlide>
                ))}
            </Swiper>

            <h1>Elevate Your Gain.</h1>
        </section>
    );
};