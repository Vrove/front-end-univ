let ambilDataUserAsync = async () => {
    try {
        const response = await fetch('https://reqres.in/api/users');
        const data = await response.json();
        const users = data.data;
        console.log(users);
      } catch (error) {
        console.error(error);
    }
}
  
export default ambilDataUserAsync