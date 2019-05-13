const getRandomNumber = () =>
  new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 10 + 1);
    number === 10 ? reject('Error') : resolve(number);
  });

getRandomNumber()
  .then(number => {
    console.log(number);
    return getRandomNumber();
  })
  .then(number => {
    console.log(number);
    return getRandomNumber();
  })
  .then(number => {
    console.log(number);
  })
  .catch(err => console.log(err));

Promise.all([getRandomNumber(), getRandomNumber(), getRandomNumber()])
  .then(numbers => console.log(numbers))
  .catch(err => console.log(err));

Promise.race([getRandomNumber(), getRandomNumber(), getRandomNumber()])
  .then(numbers => console.log('race', numbers))
  .catch(err => console.log(err));
