let ambilDataUser = () => {
    fetch('https://reqres.in/api/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (users) {
        console.log(users.data);
    })
    .catch(function (error) {
        console.error(error);
    });
  }
  
export default ambilDataUser