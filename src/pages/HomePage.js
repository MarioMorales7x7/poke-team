import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PokeAPI from '../api/PokeAPI'
function HomePage(props){

  const renderAuthItems = () => {
    if (props.username === "") {
      return (
      <>
        <button><Link to="signup">Sign Up</Link></button>
        <button><Link to="login">Login to Account</Link></button>
      </>
      )
    }
  }

  return(
    <div>
      <h2>Pokemon Team Creator</h2>
      <p>Start making your own Pokemon Team!</p>
      <h4>Image PPPPPlaceholder</h4>
      { renderAuthItems() }
    </div>    
  );
}

export default HomePage;