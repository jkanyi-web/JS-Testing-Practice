  function stringLength(string){
  let count = 0;

  for(let i = 0; i < string.length; i++) {
    if(string.length > 0 && string.length <= 10) {
      count++;
    } else {
      throw new Error('String Limit exceeded!!!')
    }
  }; 
  return count
}

module.exports = stringLength;