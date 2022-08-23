//import logo from './logo.svg';
import './App.css';
import './Footer/Footer';
import Footer from './Footer/Footer';
import HeroTitle from './HeroTitle/HeroTitle';
import WelcomeUser from './WelcomeUser/WelcomeUser';
import StopWatch from './StopWatch/StopWatch';
import Login from './Login/Login';
import Clock from './Clock/Clock/Clock';
import Counter from './Counter/Counter';
import ShoppingList from './ShoppingList/ShoppingList.js'
import Dashboard from './components/Dashboard/Dashboard';

function AppTest() {
  return (
    <>
    <div className="AppTest">
      <Clock></Clock>
      <h1>My react appTest</h1>
      <HeroTitle/>Joe
      <WelcomeUser username="Vladimir" notification="3"/>
      <WelcomeUser/>
      <Footer/>
      <StopWatch></StopWatch> 
      <Login></Login>
      Counter:
      <Counter enabled={true}></Counter>
      <Counter enabled={false}></Counter>
      <ShoppingList name="Vlad"></ShoppingList>
      <Dashboard/>
    </div>
    </>
  );
}

export default AppTest;
