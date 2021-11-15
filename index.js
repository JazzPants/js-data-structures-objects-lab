// Write your solution in this file!
/*
If you open up test/indexTest.js, you will see that in the beforeEach block
 we initialize our driver array values so that you can focus on what really matters
  — understanding how to manipulate arrays in JavaScript.
  */

  const driver = {
      driverName: "Aladdin"
  };

  function updateDriverWithKeyAndValue(driver, key, value) {
      const newDriver = {...driver};
      newDriver[key] = value;
      return newDriver;
  }
  
const newDriver = updateDriverWithKeyAndValue(driver, 'driverName', 'Jafar');
console.log(newDriver.driverName);
console.log(driver.driverName);


  function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
      driver[key] = value;
      return driver;
  }

  function deleteFromDriverByKey(driver, key) {
      const newDriver = {...driver};
      delete newDriver[key];
      return newDriver;
  }

  function destructivelyDeleteFromDriverByKey(driver, key) {
      delete driver[key];
      return driver;
  }