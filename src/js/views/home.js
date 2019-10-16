import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Footer } from "../component/footer";
import { Context } from "../store/appContext.js";
export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="jumbotron mt-5 pb-0 jumbotron-fluid">
					<div className="nav justify-content-center">
						<h1 className="display-4">COOLIO TOYS</h1>
					</div>
				</div>
				<h1 />
				<div className="nav justify-content-center">
					<Context.Consumer>
						{({ store }) => {
							return store.product.map((elem, index) => {
								console.log("####", elem.photo);
								return (
									<Card
										name={elem.ProductName}
										price={elem.productPrice}
										description={elem.productDescription}
										image={elem.photo && elem.photo[0].PictureURL}
										age_group={elem.productAgeRange}
										weight={elem.weight}
										key={index}
										id={elem.ProductId}
										cricket={elem}
									/>
								);
							});
						}}
					</Context.Consumer>
				</div>
				{/*<h1>Recommended items</h1>
				<div className="nav justify-content-center">
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="https://picsum.photos/id/950/430/180" alt="Card image cap" />

						<div className="card-body">
							<button type="button" className="btn btn-link">
								<h5 className="card-title">Card title</h5>
							</button>

							<p className="card-text" />
							<span>$5.99</span>
							<a href="#" className="btn btn-primary">
								Add to cart
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="https://picsum.photos/id/450/430/180" alt="Card image cap" />

						<div className="card-body">
							<button type="button" className="btn btn-link">
								<h5 className="card-title">Card title</h5>
							</button>

							<p className="card-text" />
							<span>$5.99</span>
							<a href="#" className="btn btn-primary">
								Add to cart
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="https://picsum.photos/id/347/430/180" alt="Card image cap" />

						<div className="card-body">
							<button type="button" className="btn btn-link">
								<h5 className="card-title">Card title</h5>
							</button>

							<p className="card-text" />
							<span>$5.99</span>
							<a href="#" className="btn btn-primary">
								Add to cart
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="https://picsum.photos/id/330/430/180" alt="Card image cap" />

						<div className="card-body">
							<button type="button" className="btn btn-link">
								<h5 className="card-title">Card title</h5>
							</button>

							<p className="card-text" />
							<span>$5.99</span>
							<a href="#" className="btn btn-primary">
								Add to cart
							</a>
						</div>
					</div>
				</div>
				<h1>Items on sale</h1>
				<div className="nav justify-content-center">
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="https://picsum.photos/id/663/430/180" alt="Card image cap" />

						<div className="card-body">
							<button type="button" className="btn btn-link">
								<h5 className="card-title">Card title</h5>
							</button>

							<p className="card-text" />
							<span>$5.99</span>
							<a href="#" className="btn btn-primary">
								Add to cart
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="https://picsum.photos/id/766/430/180" alt="Card image cap" />

						<div className="card-body">
							<button type="button" className="btn btn-link">
								<h5 className="card-title">Card title</h5>
							</button>

							<p className="card-text" />
							<span>$5.99</span>
							<a href="#" className="btn btn-primary">
								Add to cart
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="https://picsum.photos/id/429/430/180" alt="Card image cap" />

						<div className="card-body">
							<button type="button" className="btn btn-link">
								<h5 className="card-title">Card title</h5>
							</button>

							<p className="card-text" />
							<span>$5.99</span>
							<a href="#" className="btn btn-primary">
								Add to cart
							</a>
						</div>
					</div>
					<div className="card" style={{ width: 350 }}>
						<img className="card-img-top" src="https://picsum.photos/id/31/430/180" alt="Card image cap" />

						<div className="card-body">
							<button type="button" className="btn btn-link">
								<h5 className="card-title">Card title</h5>
							</button>

							<p className="card-text" />
							<span>$5.99</span>
							<a href="#" className="btn btn-primary">
								Add to cart
							</a>
						</div>
					</div>
				</div>*/}
			</React.Fragment>
		);
	}
}
