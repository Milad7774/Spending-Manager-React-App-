const Purchase = ({list, onDelete}) =>{

    fetch('https://liranews.info/api/public/v1/price/usdsypd')
    .then(response => response.json())
    .then(data => console.log(data));

    const sortedList = list.sort((a, b) => new Date(b.date) - new Date(a.date))

    let total = 0;
    sortedList.map((item) =>{
        total += Number(item.money);
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
                <div className="total-number" >{ formatPrice(total.toString())} </div>
                </div>

        </div>
    )
}
export default Purchase