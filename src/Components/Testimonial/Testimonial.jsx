import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ServiceCards from "../ServiceCards/ServiceCards";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },

      loop: true,
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 1, spacing: 5 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 },
    },

    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="w-full flex justify-center items-center bg-base_light pt-16 pb-16">
      <div className="w-4/5">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <div className="flex gap-4 md:flex-col">
                <TestimonialCard />
              </div>
            </div>
            <div className="keen-slider__slide number-slide2">
              <div className="flex gap-4 md:flex-col">
                <TestimonialCard />
              </div>
            </div>
            <div className="keen-slider__slide number-slide3">
              <div className="flex gap-4 md:flex-col">
                <TestimonialCard />
              </div>
            </div>
            <div className="keen-slider__slide number-slide4">
              <div className="flex gap-4 md:flex-col">
                <TestimonialCard />
              </div>
            </div>
            <div className="keen-slider__slide number-slide5">
              <div className="flex gap-4 md:flex-col">
                <TestimonialCard />
              </div>
            </div>
            <div className="keen-slider__slide number-slide6">
              <div className="flex gap-4 md:flex-col">
                <TestimonialCard />
              </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="flex justify-center py-3 mt-6">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={
                    "border-0  w-3.5 h-3.5 bg-grey mx-1 rounded-full outline-none" +
                    (currentSlide === idx ? " bg-main_primary" : "")
                  }
                ></button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
