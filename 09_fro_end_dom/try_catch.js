// error handling - try catch

function divide(a, b) {
    try {
      if (b == 0) {
        throw new Error("mistake chaa!!");
      }
      console.log(a / b);
    } catch (error) {
      console.log(error);
    }
  }
  
  divide(12, 6);
  