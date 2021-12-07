import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Artist from "./components/artist";
​
/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	return (
		<div className="container">
			<p className = "logo-1">Magic City Musiq</p>
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