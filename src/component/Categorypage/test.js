useEffect(()=>{
    const handileClickDatpc = () =>{
      
      if (window.innerHeight + document.documentElement.scrollTop + 1 >=        document.documentElement.scrollHeight){
              //  console.log(randomNumber)
                dispatch(getCategoryProductPC(randomNumberpc))
                setRandomNumberpc(randomNumberpc + 1) 
                setdatapc((predata)=>[...predata, ...categoryroductpc ] )
 
      }     
    }     
      const pageLength = (pagecountproductpc - 2) * resultpagepc
      const dataLength = datapc.length
 
 
    if( !loadingpc) {
        if(dataLength < pageLength)  {
          
            window.innerWidth > 426  && (
              window.addEventListener('scroll', handileClickDatpc)  
             )   
          
       
        }  
     }
 
    
    return () => { 
        window.removeEventListener('load' ,handileClickDatpc)
        window.removeEventListener('scroll', handileClickDatpc)  ; 
   }
 
  },[dispatch,categoryroductpc,datapc ,randomNumberpc,loadingpc,pagecountproductpc ,resultpagepc])
 //pc------------------------------------------












 ----------------------------------------------------

 useEffect(()=>{
  setdatapc(categoryroductpc)
},[categoryroductpc])

const [lastFourRandomNumberspc , setLastFourRandomNumberspc] = useState([RanNum,5])
//console.log(lastFourRandomNumberspc)
const [randomNumberpc, setRandomNumberpc] = useState(5);  
  //function
  const getUniqueRandomNumberpc = (numbers) => { 
    console.log(numbers)
    console.log(lastFourRandomNumberspc)
    if(lastFourRandomNumberspc.length === numbers.length ){
        return null
    }
    let newRandomNumber;
    do {
      newRandomNumber = Math.floor(Math.random() * numbers.length );
    } while (lastFourRandomNumberspc.includes(newRandomNumber) || newRandomNumber === 0 || newRandomNumber === 1 || newRandomNumber === 5 ) ;
    setRandomNumberpc(newRandomNumber )   
 
     setLastFourRandomNumberspc((prev) => {
      const newLastFour = [...prev, newRandomNumber];
      return newLastFour;
    })

}

useEffect(()=>{
      const handlescoll = async() =>{
        if(window.innerHeight + document.documentElement.scrollTop + 1>=document.documentElement.scrollHeight) {
         // getUniqueRandomNumberpc(pageNumber(pagecountproductpc))
           await dispatch(getCategoryProductPC(2))
          setdatapc((pre) =>[...pre,...datapc])
        }
      }
      if( !loadingpc) {
          window.innerWidth > 426  && (
            window.addEventListener('scroll', handlescoll)      
          )      
     }
    
    return () => { 
        window.removeEventListener('scroll' ,handlescoll)
      
   }
},[randomNumberpc,pagecountproductpc, loadingpc])
