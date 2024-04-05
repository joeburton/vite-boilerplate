import { useState } from "react";
import styles from "./Carousel.module.css";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const numberSlides = 13;

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? numberSlides - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === numberSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className={styles.carousel}>
        <ul
          style={{
            transform: `translateX(-${(currentIndex * 100) / numberSlides}%)`,
          }}
        >
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
          <li>item 6</li>
          <li>item 7</li>
          <li>item 8</li>
          <li>item 9</li>
          <li>item 10</li>
          <li>item 11</li>
          <li>item 12</li>
          <li>item 13</li>
        </ul>
      </div>
      <div className={styles.carouselNavigation}>
        <span onClick={previous}> previous </span>
        <span className={styles.divide}> | </span>
        <span onClick={next}> next </span>
      </div>
    </>
  );
};
