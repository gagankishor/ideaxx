export const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return true;
  } else {
    return false;
  }
};

export const userToken = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return token;
  }else{
    return "Unauthenticated client"
  }
};
