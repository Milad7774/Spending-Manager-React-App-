const Purchase = ({list, onDelete}) =>{

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
        return formatted;
    };
console.log(sortedList)
    return(
        <div>
            <div className="div-table">
                <table className="table"><thead><tr><th>Item</th><th>Price</th><th>Date</th><th>Action</th></tr></thead><tbody>
                {sortedList.map((item, index) =>(<tr key={index}><td>{item.bought}</td><td>{formatPrice(item.money)} {item.currency}</td><td>{item.date}</td><td><span onClick={() => onDelete(index)}>&#x274C;</span></td></tr>))}
                </tbody>
                </table>
            </div>

            <div className="total">
                <div className="total-text" >Total is:</div>
                <div className="total-number" >{ formatPrice(totalUSD.toString())} USD / {formatPrice(totalSYP.toString())} SYP </div>
                <div className="total-number"> API Currency Converter (Soon!) </div>
                </div>

        </div>
    )
}
export default Purchase