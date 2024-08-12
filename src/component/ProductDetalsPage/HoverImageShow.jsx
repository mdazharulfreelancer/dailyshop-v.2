/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function HoverImageShow ({image, index, id})  {

    const [isHovering, setIsHovering] = useState(false)
const handleMouseOver = () => {
    setIsHovering(true);
};

  const handleMouseOut = () =>{
    setIsHovering(false)
  }
   

  return (
    <>

    {
        isHovering ? (
            <div className={` ${id === id ? "Block" : "Hidden" }  ProductDitalsLeftMainImageContainer`}>
            <div className='ProductDitalsLeftMainImage'>
                
                
                        <img src={image } alt='' />
                    
                
               
            </div>
          </div>
        ) : (
            <div className={`  ${isHovering ? "Hidden" : index === 0 ? "Block" : "Hidden" }  ProductDitalsLeftMainImageContainer`}>
            <div className='ProductDitalsLeftMainImage'>
                
                
                        <img src={image } alt='' />
                    
                
               
            </div>
          </div>
        )
    }
    

 

             
    

  

  </>
  
  


  )
}

export default HoverImageShow
