import React from "react";

export class Review extends React.Component {
	render() {
		return (
			<div>
				<div className="d-flex justify-content-center ">
					<span className="rate-this-stars">
						<h5>Rate this page</h5>
						<ol className="rate-this-stars-list">
							<button type="button" className="btn btn-outline-primary">
								<i className="fas fa-star" />
							</button>
							<button type="button" className="btn btn-outline-primary">
								<i className="fas fa-star" />
							</button>
							<button type="button" className="btn btn-outline-primary">
								<i className="fas fa-star" />
							</button>
							<button type="button" className="btn btn-outline-primary">
								<i className="fas fa-star" />
							</button>
							<button type="button" className="btn btn-outline-primary">
								<i className="fas fa-star" />
							</button>
						</ol>
					</span>
				</div>
				<div className="d-flex justify-content-center">
					<span className="border border-success">
						Thanks for your feed back <i className="far fa-check-square" />{" "}
					</span>
				</div>
			</div>
		);
	}
}
