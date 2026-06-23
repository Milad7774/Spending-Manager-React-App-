import { useState } from "react";
import Nolist from "./Nolist";
import Purchase from "./Purchase";

const View = () =>{
    const [list, SetList] = useState(JSON.parse(localStorage.getItem('myspendings') || '[]'));

    const [notFound, setNotFound] = useState(list.length === 0);
    console.log(notFound, "After")

    function handleDelete(count){
        console.log('list before is:', list);
        const newList = list.filter((_, i) => i !== count);
        SetList(newList);
        localStorage.setItem('myspendings', JSON.stringify(newList));
        if(newList.length == 0){
            SetList([]);
            setNotFound(true);
        }
        console.log('list After: ', newList)
    }

    return(
        <div>
            {notFound && <Nolist/> }
            {!notFound && <Purchase list = {list} onDelete = {handleDelete} />}
        </div>
    )
}
export default View;