import DB from "../DB.json"
import Pick from "../components/Pick"
import { Link } from "react-router-dom";
 export const PicksPage = () => {
  
  return (
    <div className="container-post">
   { DB.map((items) => 
   <Link to={`/post/${items.Pick.name}`} key={items.Pick.name.split(".")[0]} >
    <Pick item={items} key={items.Pick.name.split(".")[0]}/>
    </Link>
  )}
    </div>
  )
  
}
