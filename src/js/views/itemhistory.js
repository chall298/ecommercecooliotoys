import React from "react";

export class Itemhistory extends React.Component {
	render() {
		return (
			<div>
				<h1>Item history</h1>
				<div className="row">
					<div className="col border">Item</div>
					<div className="col border">Price</div>
					<div className="col border" />
				</div>
				<div className="row">
					<div className="col border">
						<div className="card" style={{ width: 350 }}>
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Details
								</a>
							</div>
						</div>
					</div>
					<div className="col border">$5.99</div>
					<div className="col border">
						<button type="button" className="btn btn-success">
							BUY
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col border">
						<div className="card" style={{ width: 350 }}>
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Details
								</a>
							</div>
						</div>
					</div>
					<div className="col border">$5.99</div>
					<div className="col border">
						<button type="button" className="btn btn-success">
							BUY
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col border">
						<div className="card" style={{ width: 350 }}>
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Details
								</a>
							</div>
						</div>
					</div>
					<div className="col border">$5.99</div>
					<div className="col border">
						<button type="button" className="btn btn-success">
							BUY
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col border">
						<div className="card" style={{ width: 350 }}>
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<a href="#" className="btn btn-primary">
									Details
								</a>
							</div>
						</div>
					</div>
					<div className="col border">$5.99</div>
					<div className="col border">
						<button type="button" className="btn btn-success">
							BUY
						</button>
					</div>
				</div>
			</div>
		);
	}
}
