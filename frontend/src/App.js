import './App.css';
import {withRouter} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from './components/Routes';
import GlobalFonts from './fonts/fonts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/User/footer/Footer';

function App() {
  return (
    <div>
   
       <Routes/>
     
    <GlobalFonts/>
   <ToastContainer  autoClose={2000}/>
   
    </div>
  );
}

export default withRouter(App);
