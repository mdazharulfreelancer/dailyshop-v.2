import React, { useEffect, useState } from 'react';


  const sliderStyles = {
    position: "relative",
    height: "100%",
    transition :'0.8s'
  };
  
  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition :'0.8s'
  };
  const dotsContainerStyles ={
    display: 'flex',
    justifyContent : 'center',
    position: 'absolute',
    bottom : '8px',
    left: '35%',
  }
  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    transition :'0.8s',
   
  };


const SliderMobail = ({slide}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goprevious = () => { 
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const next = () => {
        const isLastSlide = currentIndex === slide.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
     }

     const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
      const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${slide[currentIndex].url})`,
      };

     useEffect(() => { 
            
            const interval = setInterval(() => {
                next();
            }, 4000);
            return () => clearInterval(interval);
     }, [currentIndex]);
  return (
   <>
          <div style={sliderStyles}>
    
        <div style={slideStylesWidthBackground}></div>
        <div style={dotsContainerStyles}>
          {slide.map((slide, slideIndex) => (
            <div
              style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
   </>
  )
}

export default SliderMobail
