import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { CheckoutForm } from "./views/checkoutForm";
import { Login } from "./views/login";
import { Gallery } from "./views/gallery";
import { UserRegistrationEdit } from "./views/userRegistrationEdit";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Createaccount } from "./views/createaccount";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Review } from "./views/review";
import { Itempage } from "./views/itempage";
import { Cart } from "./views/cart";
import { Itemhistory } from "./views/itemhistory";
import { ReturnPolicy } from "./views/returnpolicy";
//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />

							<Route path="/checkoutForm" component={CheckoutForm} />
							<Route path="/login" component={Login} />
							<Route path="/gallery" component={Gallery} />
							<Route path="/userRegistrationEdit" component={UserRegistrationEdit} />

							<Route path="/createaccount" component={Createaccount} />
							<Route path="/review" component={Review} />
							<Route path="/itempage/:theid" component={Itempage} />
							<Route path="/cart" component={Cart} />
							<Route path="/itemhistory" component={Itemhistory} />
							<Route path="/returnpolicy" component={ReturnPolicy} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
