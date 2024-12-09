export const isAuthenticated = () => {
  // const token = localStorage.getItem("token");
  const token = "localStorage.getItem()";

  if (token) {
    return true;
  } else {
    return false;
  }
};

export const userToken = () => {
  // const token = localStorage.getItem("token");
  const token = "localStorage.getItem()";

  if (token) {
    return token;
  }else{
    return "Unauthenticated client"
  }
};
