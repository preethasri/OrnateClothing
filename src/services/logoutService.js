const LogOutHandler=(setAuth,navigate)=>{
    localStorage.removeItem("WB_USER");
    localStorage.removeItem("AUTH_TOKEN");
    setAuth({
        isAuthenticated:false,
        user:"",
        token:"",
    })
    navigate("/logout")
}
export default LogOutHandler;