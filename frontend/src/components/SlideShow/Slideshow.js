import React,{useEffect,useState,useRef} from 'react' 
import './slideshow.css';
const delay = 3000;

export default function Slideshow({slideimage}) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slideimage.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
    <br/>
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
       
          {slideimage.map((banner, index) => (
          <>
          
          <img
            className="slide"
            alt='Siver-banner'
            key={index}
            src={banner.slideimage}
          ></img>
          </>
        ))}
      </div>

      {/* <div className="slideshowDots">
        {banners.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div> */}
    </div>
    </>
  );
}

