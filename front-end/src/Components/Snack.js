import {Link} from "react-router-dom";

function Snack({ snack }){
    return (
        <div>
            <Link to={`/snacks/${snack.id}`}>-</Link>
        </div>
    )
}
export default Snack;