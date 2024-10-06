const isAuthenticated = () => {
  if (localStorage.getItem("auth") && localStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
  // return localStorage.getItem("auth") && localStorage.getItem("token"); // Change this to your actual authentication check
  // You can implement your authentication logic here
  // Return true if the user is authenticated, otherwise return false
};

export default isAuthenticated;
