import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Admin from "./components/Admin";
import bio from "./components/bio";
import eventCards from "./components/eventCards";

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	return (
		<div className="container">
			<h1>Magic City Musiq</h1>
			<BrowserRouter>
				<Switch>
					<Route path={"/admin/:eventeid"} component={Admin} />
					<Route path={"/"} component={Home} />
					<Route path={"/bio/:musicianmid"} component={bio} />
					<Route path={'/eventCards/:eventeid'} component={eventCards} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

interface AppProps { }

export default App;
