const Delivery = ({title, ordernumber, button}) => {
    return ( 
        <div >
                <h3>{title}</h3>
                <p>{ordernumber}</p>
                <button className="button">{button}</button>
        </div>
     );
}
 
export default Delivery;