import React from "react";
import { Header, Sidebar, ContentContainer, Docs, SingleMeal } from './components';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
	return (
		<Router>
			<Header></Header>
			<Switch>
				<Route exact path="/"><Home /></Route>
				<Route path="/home"><Home /></Route>
				<Route path="/docs"><Docs /></Route>
				<Route path="/meals/:mealName"><ContentContainer /></Route>
				<Route path="/mealingredient/:ingredient"><ContentContainer /></Route>
				<Route path="/country/:mealcountry"><ContentContainer /></Route>
				<Route path="/mealfierst/:meallater"><ContentContainer /></Route>
				<Route path="/meal/:mealtitle"><SingleMeal /></Route>
			</Switch>
			<Footer></Footer>
		</Router>

	);
}

export default App;
