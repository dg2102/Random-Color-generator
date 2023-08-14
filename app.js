function fetchData() {
    return new Promise((resolve, reject) => {
      // Asynchronous operation (e.g., fetching data from an API)
      // Resolve the Promise when the operation is successful
      // Reject the Promise if an error occurs
      setTimeout(() => {
        const data = 'Some data';
        resolve(data);
        // or reject(new Error('An error occurred'));
      }, 2000);
    });
  }
  
  fetchData()
    .then(data => {
      console.log('Data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  