import { HiInbox } from "react-icons/hi2";
import { ImHome  } from "react-icons/im";
import { RiSettings5Fill  } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const navbar = () => {
    return (
        <div className="navbar">
            <a href="" className="icon"><ImHome size="2rem" color="white"/></a>
            <a href="" className="icon"><HiInbox size="2rem" color="white"/></a>
            <a href="" className="icon"><TbTruckDelivery size="2rem" color="white"/></a>
            <a href="" className="icon"><RiSettings5Fill size="2rem" color="white"/></a>
        </div>
     );
}

export default navbar;