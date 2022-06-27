const LogOutHandler=()=>{
    localStorage.removeItem("WB_USER");
    localStorage.removeItem("AUTH_TOKEN");
    
    
}
export default LogOutHandler;