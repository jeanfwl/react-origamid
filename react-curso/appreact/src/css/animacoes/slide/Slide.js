import React from 'react';
import styles from './Slide.module.css';

const Slide = ({ slides }) => {
  const [slide, setSlide] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * slide));
  }, [slide]);

  function slidePrev() {
    if (slide > 0) setSlide(slide - 1);
  }
  function slideNext() {
    if (slide < slides.length - 1) setSlide(slide + 1);
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
        ref={contentRef}
      >
        {slides.map(({ id, item }) => (
          <div key={id} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </div>
  );
};

export default Slide;
