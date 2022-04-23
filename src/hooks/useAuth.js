const useAuth = (userEmail = '', userPassword = '') => {
  let auth = false;

  const email = localStorage.getItem("reactAppEmail") || userEmail;
  const password = localStorage.getItem("reactAppPassword") || userPassword;
  email === "user@gmail.com" && password === "12345678" ? auth = true : auth = false;

  return auth;
};

export default useAuth;
