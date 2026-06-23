import { useState } from "react";
import toast from 'react-hot-toast';

const Create = () =>{
    const [list, setList] = useState(() => 
    JSON.parse(localStorage.getItem('myspendings') || '[]')
    );

    const success = () => toast.success('Operation completed successfully!');

    const failed = () => toast.error('All fields must be filled!');

    const [currency, setCurrency] = useState(() => JSON.parse(localStorage.getItem('currency')) || 'USD');

    const [today, setToday] = useState(new Date().toLocaleDateString('en-CA'));

    //input Data
    const [bought, setBought] = useState('');

    const [price, setPrice] = useState('');
    //Handle Data
    function handleData(e){
        e.preventDefault();
        if(bought === "" || price === ""){
            failed();
            return;
        }
        else{
            const noCommas = price.replace(/[^\d.]/g, '');
            const purchase = {
                bought: bought,
                money: noCommas,
                date: today,
                currency: currency
            }
            setList([...list, purchase]);
            localStorage.setItem('myspendings', JSON.stringify([...list, purchase]));
            setBought('');
            setPrice('');
            success();
        }
    }
    //Change currency
    function Change(currency){
        console.log(currency)
        currency == 'USD' ? localStorage.setItem('currency', JSON.stringify('SYP')) : localStorage.setItem('currency', JSON.stringify('USD'));
        setCurrency(JSON.parse(localStorage.getItem('currency')));
    }

    const formatPrice = (price) => {
        if(currency === 'USD'){
            return
        }
        const numbers = price.replace(/\D/g, '');
    
        return Number(numbers).toLocaleString();
    };

    return(
        <div className="div-form">
            <form onSubmit={handleData} className="form">
                <h1>Add New Purchase</h1>
                <span className="currency" onClick={() => Change(currency)} >{currency}</span>
                <div>
                <label htmlFor = "Spent-ON" >Bought:</label>
                <input type = "text" name = "Spent-on" id = "Spent-ON" value={bought} onChange={(e) => setBought(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor = "Money"> Price: </label>
                    <input type = "text" name = "money" id = "Money" value={price} onChange={(e) => setPrice(formatPrice(e.target.value) || e.target.value)} />
                </div>
                <div>
                    <label htmlFor = "Date"> Date: </label>
                    <input type="date" value={today}  onChange={(e) => setToday(e.target.value)}/>
                </div>
                <button type="submit"> Add </button>
            </form>
        </div>
    )
}
export default Create;