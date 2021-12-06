import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Artist from "./components/artist";
​
/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	return (
		<div className="container">
			<h1>Magic City Musiq</h1>
			<BrowserRouter>
				<Switch>
					<Route path={"/artist/:musicianmid"} component={Artist} />
					<Route path={"/"} component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};
​
interface AppProps { }
​
export default App;