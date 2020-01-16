/* Implement your solution here */

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
    }, ms);
  });
}


for (let i = 0; i < 5; i += 1) {
  delay(i * 1000)
    .then(() => {
      console.log(i);
    });
}

delay(1000)
  .then(() => {
    console.log('1');
  })

delay(2000)
  .then(() => {
    console.log('2');
  });
  
delay(3000)
  .then(() => {
    console.log('2');
  });


delay(1000)
  .then(() => {
    console.log('1');
    return delay(1000);
  })
  .then(() => {
    console.log('2');
    return delay(1000);
  })
  .then(() => {
    console.log('3');
    return delay(1000);
  })
  .then(() => {
    console.log('4');
    return delay(1000);
  })
  .then(() => {
    console.log('5');
  })
