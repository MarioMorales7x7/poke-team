import PokeAPI from "../api/PokeAPI"
import { useNavigate } from 'react-router-dom'
function LoginPage(props){
  
  //router params
  const navigate = useNavigate()

  //event handler
  const handleLogin = async (evt) => {
    evt.preventDefault()

    let loginData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    }
    console.log("LOGIN INFO:", loginData)
    
    const data = await PokeAPI.login(loginData)

    if(data){
      props.setUsername(data.username)
      navigate("/") // redirects to home page
    }
  }

  return(
    <div>
      <h2>Login Page</h2>
      <br/>
      <form onSubmit={ handleLogin } method="POST">
        <label>Username:</label>
        <input name="username" placeholder="enter username" />
        <br/>
        <label>Password:</label>
        <input type="password" name="password" placeholder="create a password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage;