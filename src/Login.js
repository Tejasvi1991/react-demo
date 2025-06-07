function Login(){
    let loginComponent = "Login";
    let headingText = "This is Login Component";
    function doLogin(){
        alert("Welcome!!! You are logged in into the website");
    }
    return (
        <div className="Menu">
            <h1>{loginComponent}</h1>
            <h2>{headingText}</h2>
        <input type="text" placeholder="Username"/>
        <input type="password" placeholder="Password"/>
        <button onClick={doLogin}>Login</button>
    </div>
    );
}

export default Login;