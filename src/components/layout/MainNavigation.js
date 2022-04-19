import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation(){
  return <header className={classes.header}>
    <div className={classes.logo}>
      Pokemon Team App
    </div>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='create-team'>Create Team</Link>
        </li>
        <li>
          <Link to='your-team'>Your Team</Link>
        </li>
      </ul>
    </nav>
  </header>
}

export default MainNavigation;