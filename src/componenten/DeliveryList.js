import { useState } from "react";
import Delivery from "./Delivery";

const DeliveryList = () => {
    
    const[delivery, setDelivery] = useState([
        { title: "Package from Rotterdam", ordernumber: "Order ID #14389-91751", button: "ON THE WAY", id: 1},
        { title: "Package from Amsterdam", ordernumber: "Order ID #14389-34134", button: "RECEIVED", id: 2},
        { title: "Package from Eindhoven", ordernumber: "Order ID #14389-56723", button: "RECEIVED", id: 3},
        { title: "Package from Barcelona", ordernumber: "Order ID #14389-74687", button: "RECEIVED", id: 4},
        { title: "Package from Paris", ordernumber: "Order ID #14389-23466", button: "RECEIVED", id: 5},
        { title: "Package from Toronto", ordernumber: "Order ID #14389-95678", button: "RECEIVED", id: 6},
        { title: "Package from Berlin", ordernumber: "Order ID #14389-24579", button: "RECEIVED", id: 7},
        { title: "Package from Vienna", ordernumber: "Order ID #14389-24578", button: "RECEIVED", id: 8},
        
    ]);
    return ( 
        <section className="delivery">
        {delivery.map((deliver) => ( 
        <Delivery title={deliver.title} ordernumber={deliver.ordernumber} button={deliver.button}/>
        ))}
        </section>
     );
}
 
export default DeliveryList;