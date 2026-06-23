import { replace } from "react-router-dom";

const Purchase = ({list, onDelete}) =>{

    let rate = 14200;
    let date = '2026-06-08';

    const sortedList = list.sort((a, b) => new Date(b.date) - new Date(a.date))
    console.log(sortedList)

    let totalUSD = 0;
    let totalSYP = 0;
    sortedList.map((item) =>{
        if(item.currency == 'USD'){
            totalUSD += Number(item.money);
        }
        else{
            totalSYP += Number(item.money);
        }
    })
    const formatPrice = (price) => {
        let formatted = '';
        for (let i = 0; i < price.length; i++) {
            formatted += price[i];
            if ((price.length - i) % 3 === 1 && (i + 1) !== price.length) {
                formatted += ',';
            }
        }
        formatted = formatted.replace(/[^\d,]/g, '')
        return formatted;
    };
    function fixedUSD(num){
        console.log(num, "entered")
        //primary numbers
        let primary = Math.floor(num);
        //dicimal
        let dicimal = primary > 0 ? num % primary : (num + 1) % (primary + 1);
        //convert to string
        dicimal = dicimal + ""
        //Get First two digits only
        let number  = dicimal[2] + dicimal[3];

        console.log(primary,'Primary')
        console.log(dicimal,'dicimal')
        console.log(number, "number")
        let result = (primary + '') + '.' + (number)
        return result;
    }
    return(
        <div>
            <div className="div-table">
                <table className="table"><thead><tr><th>Item</th><th>Price</th><th>Date</th><th>Action</th></tr></thead><tbody>
                {sortedList.map((item, index) =>(<tr key={index}><td>{item.bought}</td><td>{item.currency === 'USD'? item.money : formatPrice(item.money)} {item.currency}</td><td>{item.date}</td><td><span onClick={() => onDelete(index)}>&#x274C;</span></td></tr>))}
                </tbody>
                </table>
            </div>

            <div className="total">
                <div style={{marginTop: '10px'}}>
                <span className="total-text">Spent:</span>
                <span className="total-number" >{ totalUSD} USD / {formatPrice(totalSYP.toString())} SYP </span>
                </div>
                <div>
                <span className="total-text" >Total is:</span>
                <span className="total-number"> {fixedUSD(totalUSD + (totalSYP/rate))} USD / {formatPrice((totalSYP + (totalUSD*rate)).toString())} SYP </span>
                </div>
                </div>

        </div>
    )
}
export default Purchase