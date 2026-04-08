import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/images/kids.jpg";
import image2 from "../../assets/images/kids3.jpg";
import image3 from "../../assets/images/kids4.jpg";
import { CarouselWrapper } from "./ImageCarouselStyles";

class DemoCarousel extends Component {
  render() {
    return (
      <CarouselWrapper>
        <Carousel
          showStatus={false}
          showIndicators={false}
          width={"100%"}
          infiniteLoop={true}
          ariaLabel="Galería de fotos del centro Metas Logopedia"
          labels={{
            leftArrow: "Diapositiva anterior",
            rightArrow: "Diapositiva siguiente",
            item: "Ir a la diapositiva",
          }}
        >
          <div>
            <img
              src={image3}
              alt="Actividades con niños en Metas Logopedia"
              width={626}
              height={418}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <img
              src={image2}
              alt="Terapia del lenguaje para niños en A Coruña"
              width={1380}
              height={920}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <img
              src={image1}
              alt="Sesión de logopedia infantil en Metas"
              width={1380}
              height={1029}
              loading="lazy"
              decoding="async"
            />
          </div>
        </Carousel>
      </CarouselWrapper>
    );
  }
}
export default DemoCarousel;
