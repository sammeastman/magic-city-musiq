import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./client/components/Home";
import Admin from "./client/components/Admin";
import artist from "./client/components/artist";
import eventCards from "./client/components/eventCards";

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	return (
		<div className="container">
			<p className = "logo-1">Magic City Musiq</p>
			<hr />
			<BrowserRouter>
				<Switch>
					<Route path={"/admin/:eventeid"} component={Admin} />
					<Route path={"/"} component={Home} />
					<Route path={"/artist/:musicianmid"} component={artist} />
					<Route path={'/eventCards/:eventeid'} component={eventCards} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

interface AppProps { }

export default App;
