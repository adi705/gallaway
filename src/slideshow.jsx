import React, { useState, useEffect } from 'react'
import Data from './data';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isPlaying) {
      intervalId = setInterval(() => {
        goToNext();
      }, 7000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, currentIndex]);

  useEffect(() => {
    // Calculate the progress width based on the current index and the total number of items
    const widthPercentage = (currentIndex / (Data.length - 1)) * 100;
    setProgressWidth(widthPercentage);
  }, [currentIndex]);


  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };

  const toggleSlideshow = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    setIsPlaying(false);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    /*setIsPlaying(true);*/
  };

  return (
    <>
    <div className='home-title-container'>
        <h1>galleria.</h1>
        <a href='/' className='link1'>HOME</a>
    </div>
 
    <div className="slideshow-container">

            {Data.map((item, index) => (  
           
           <div  key={index} 
            className={`slideshow-item ${
                index === currentIndex
                ? 'active'
                : index === currentIndex - 1 || (index === 0 && currentIndex === Data.length - 1)
                ? 'prev'
                : 'next'
                }`} >
                
               <div className='column1'>
                <div className='thumbnail-container'>    
                  <img className='thumbnail-image' src={Data[currentIndex].images.thumbnail} alt="wooooo" onClick={openLightbox}/>
                </div>
              
                <div className='title'>  
                    <h2>{Data[currentIndex].name}</h2>
                    <h3>{Data[currentIndex].artist.name}</h3>
                </div>

                <div className='artist-iimage-container'>
                    <img src={Data[currentIndex].artist.image} />  
                </div>
                </div>

                <div className='column2'>
                <p className='yea'> {Data[currentIndex].year}</p>

                <div className='desc-container'><p>{Data[currentIndex].description}</p></div>
                </div>
               

        

               </div>
                ))}

    </div>

      

      <div className='button-container'>
        <button className="prev-button" onClick={goToPrevious} disabled={currentIndex == 0}>
            &#8249; 
        </button>

            <button className="next-button" onClick={goToNext} disabled={ currentIndex== Data.length - 1}>
             &#8250;
        </button>

        <button className="tog-button link1 " onClick={toggleSlideshow}>
            {isPlaying ? 'Stop ' : 'Resume '}
        </button>


        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressWidth}%` }}></div>
        </div>
      </div>
      
      {isLightboxOpen && (
        <div className="lightbox">
          <span className="close-lightbox" onClick={closeLightbox}>&times;</span>
          <img
            src={Data[currentIndex].images.hero.large}
            alt="weee"
            className="lightbox-image"
          />
        </div>
      )}


    </>
  );
};

export default Slideshow;











