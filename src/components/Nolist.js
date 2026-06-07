import { Link } from "react-router-dom";

const Nolist = () =>{
    return(
        <div className="not-found">
            <div className="text">You Have not added any items yet!</div>
            <Link to='/Create'>Add Now!</Link>
        </div>
    )
}

export default Nolist;