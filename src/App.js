
import './App.css';
import Header from "./componenten/Header";
import DeliveryList from './componenten/DeliveryList';

// import { FaBeer } from 'react-icons/fa';
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// class Question extends React.Component {
//   render() {
//     return <h3> Lets go for a <FaBeer />? </h3>
//   }
// }
// class Question extends React.Component {
//   render() {
//     return <h3> Lets go for a <FaBeer />? </h3>
//   }
// }
function App() {
  return (
    <>
      <Header/>
      <h1>Delivery Tracking</h1>
      <DeliveryList/>
    </>
  );
}

export default App;
