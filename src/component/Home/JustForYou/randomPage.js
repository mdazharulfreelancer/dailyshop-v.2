function getUniqueRandomNumber(numbers) { 
    if(lastFourRandomNumbers.length === numbers.length ){
        return null
    }
    let newRandomNumber;
    do {
      newRandomNumber = Math.floor(Math.random() * numbers.length );
    } while (lastFourRandomNumbers.includes(newRandomNumber) || newRandomNumber === 0 ) ;
     setRandomNumber(newRandomNumber )   
 
    setLastFourRandomNumbers((prev) => {
      const newLastFour = [...prev, newRandomNumber];
      return newLastFour;
    })

}
export default getUniqueRandomNumber