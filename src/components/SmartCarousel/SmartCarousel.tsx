import { useState, useRef } from "react";
import { ChevronRight, ChevronLeft } from "react-bootstrap-icons";

import styles from "./SmartCarousel.module.css";

interface Item {
  description: string;
  image: string;
}

interface CarouselInterface {
  items: Item[];
}

const CarouselItem = ({ image, description }: Item) => {
  return (
    <li>
      <img src={image} alt={description} />
    </li>
  );
};

export const SmartCarousel = ({ items }: CarouselInterface) => {
  const [itemPosition, setItemPosition] = useState<number>(0);

  const eleRef = useRef(null) as any;

  const previous = () => {
    if (itemPosition === 0) return;
    eleRef.current.style.transform = `translateX(-${itemPosition - 1}00%)`;
    setItemPosition((prevState) => prevState - 1);
  };

  const next = () => {
    if (itemPosition === items.length - 1) return;
    eleRef.current.style.transform = `translateX(-${itemPosition + 1}00%)`;
    setItemPosition((prevState) => prevState + 1);
  };

  const moveSlideToNewPos = (slidePos: number) => {
    console.log(slidePos);
    if (itemPosition === slidePos) return;
    eleRef.current.style.transform = `translateX(-${slidePos}00%)`;

    setItemPosition(slidePos);
  };

  return (
    <>
      <div data-testid='carousel' className={styles.carousel}>
        <div className={styles.left} onClick={previous}>
          <ChevronLeft color='white' size={20} />
        </div>
        <ul className={styles.items} ref={eleRef}>
          {items.map((item, i) => (
            <CarouselItem {...item} key={i} />
          ))}
        </ul>
        <div className={styles.right} onClick={next}>
          <ChevronRight color='white' size={20} />
        </div>
      </div>
      <ul className={styles.tracker}>
        {items.map((_item, i) => (
          <li
            className={`${itemPosition === i ? styles.green : styles.red}`}
            key={i}
            onClick={() => moveSlideToNewPos(i)}
          ></li>
        ))}
      </ul>
    </>
  );
};
