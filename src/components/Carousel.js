import React from 'react';

const Carousel = () => (
  <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
    <div className="carousel-inner relative md:h-[600px] h-[300px] w-full overflow-hidden">
      <div className="carousel-item active relative float-left w-full">
        <img
          src="https://www.interactivebrokers.hu/images/web/cryptocurrency-hero.jpg"
          className="block h-1/2 w-full"
          alt="Wild Landscape"
        />
      </div>
    </div>
  </div>
);

export default Carousel;
