import PokeAPI from "../api/PokeAPI"
import { useNavigate } from 'react-router-dom'
function SignUpPage(props){
  
  //router params
  const navigate = useNavigate()

  //event handler
  const handleSignUp = async (evt) => {
    evt.preventDefault()

    let signUpData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    }
    console.log("SIGN UP INFO:", signUpData)
    const data = await PokeAPI.signUp(signUpData)

    if(data){
      navigate("/login") // redirects to home page
    }
  }

  return(
    <div>
      <h2>Sign Up Page</h2>
      <br/>
      <form onSubmit={ handleSignUp } method="POST">
        <label>Username:</label>
        <input name="username" placeholder="enter username" />
        <br/>
        <label>Password:</label>
        <input type="password" name="password" placeholder="create a password" />
        <br />
        <button type="submit">Sign Up!</button>
      </form>
    </div>
  )
}

export default SignUpPage;