import React, { useState, useEffect } from 'react'
import Data from './data';
import { column1 } from './myarray';
import { column2 } from './myarray';
import { column3 } from './myarray';
import { column4 } from './myarray';


const Home = () => {

    return (
        <>  
            
            <div className='home-title-container'>
                <h1>galleria.</h1>
                <a href='/slideshow' className='link1'>START SLIDESHOW</a>
            </div>

         


           
            <div class="row"> 
                <div class="column">
                    {column1.map((item, index) => (
                        <div>
                         <p className='gallery-image-name'>{item.name}</p>
                         <p className='gallery-image-artist'>{item.artist.name}</p>     
                        <img  src={item.images.gallery} alt={`${item.name} Galle`} />
                        </div>
                     ))}
                    
                </div>
                <div class="column">
                    {column2.map((item, index) => (
                        <div>
                        <p className='gallery-image-name'>{item.name}</p>   
                        <p className='gallery-image-artist'>{item.artist.name}</p>      
                        <img  src={item.images.gallery} alt={`${item.name} Galle`} />
                        </div>
                     ))}
                    
                </div>  
                <div class="column">
                    {column3.map((item, index) => (
                        <div>
                        <p className='gallery-image-name'>{item.name}</p>  
                        <p className='gallery-image-artist'>{item.artist.name}</p>       
                        <img  src={item.images.gallery} alt={`${item.name} Galle`} />
                        </div>
                     ))}
                    
                </div>
                <div class="column">
                    {column4.map((item, index) => (
                        <div>
                        <p className='gallery-image-name'>{item.name}</p>   
                        <p className='gallery-image-artist'>{item.artist.name}</p>     
                        <img  src={item.images.gallery} alt={`${item.name} Galle`} />
                        </div>
                     ))}
               
                </div>
            </div>

            

           
                
            


        
        </>
      )


}

export default Home;