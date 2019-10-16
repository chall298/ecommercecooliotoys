import React from "react";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
// import { Button } from "reactstrap";
export const Card = props => {
	return (
		<Context.Consumer>
			{({ actions }) => {
				return (
					<React.Fragment>
						<div className="card" style={{ width: 350 }}>
							<img className="card-img-top" src={props.image} alt="Card image cap" />

							<div className="card-body">
								<div className="justify-content-center">
									<Link to={"/itempage/" + props.id}>
										<button type="button" className="btn btn-link">
											<h5 className="card-title">{props.name}</h5>
										</button>
									</Link>
								</div>
								<p className="card-text" />

								<div className="justify-content-center">${props.price}</div>
							</div>
							<div className="card-footer">
								<div className="justify-content-center">
									<Link
										to="#"
										className="btn btn-primary"
										onClick={e => {
											e.preventDefault();
											actions.addToCart(props.cricket);
										}}>
										Add to cart
									</Link>
								</div>
							</div>
						</div>
					</React.Fragment>
				);
			}}
		</Context.Consumer>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	price: PropTypes.string,
	image: PropTypes.string,
	cricket: PropTypes.object,
	id: PropTypes.number
};
