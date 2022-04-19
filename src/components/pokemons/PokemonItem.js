import classes from "./PokemonItem.module.css"
import Card
 from "../ui/Card";
function PokemonItem(props){
  return(
  <li>
    <Card>
    <div className={classes.item}>
      <img src={props.image} alt={props.poke_name} />
    </div>
    <div className={classes.content}>
      <h3>{props.poke_name}</h3>
      <p>{props.type}</p>
      <p>{props.description}</p>
    </div>
    <div className={classes.actions}>
      <button>Add to Team</button>
    </div>
    </Card>
  </li>
  )
}

export default PokemonItem;