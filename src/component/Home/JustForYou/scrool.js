React.useEffect(()=>{
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
   };

   const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      // User has scrolled to the bottom
      if (!loadingPhoneLeft && hasMoreleft) {
        setCurrentPageleft((prevPage) => prevPage + 2);
      }

      if (!loadingPhoneRight && hasMoreright) {
        setCurrentPageright((prevPage) => prevPage + 2);
      }
    }

   
  }; 
  
  
  React.useEffect(()=>{
    setDataleft((prevData) => [...prevData,...HomeJustForYouProductsPhoneLeft])
    setDataright((prevData) => [...prevData,...HomeJustForYouProductsPhoneRight])
    //console.log(HomeJustForYouProductsPhoneLeft)


    // Check if there is more data available
      setHasMoreleft(HomeJustForYouProductsPhoneLeft.length > 0);
       setHasMoreright(HomeJustForYouProductsPhoneRight.length > 0);    
       console.log(currentPageleft)
},[ HomeJustForYouProductsPhoneRight, currentPageleft])


      //scroll pagination
      const [dataleft, setDataleft] = useState([]);
      const [dataright, setDataright] = useState([])
      const [currentPageleft, setCurrentPageleft] = useState(1);
      const [currentPageright, setCurrentPageright] = useState(2);
      const [hasMoreleft, setHasMoreleft] = useState(true);
      const [hasMoreright, setHasMoreright] = useState(true);
