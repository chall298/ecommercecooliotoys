import React, { useMemo, useEffect } from "react";

export const PaypallButton = ({ total }) => {
	useEffect(() => {
		paypal.Button.render(
			{
				// Configure environment
				env: "sandbox",
				client: {
					sandbox: "demo_sandbox_client_id",
					production: "demo_production_client_id"
				},
				// Customize button (optional)
				locale: "en_US",
				style: {
					size: "small",
					color: "gold",
					shape: "pill"
				},

				// Enable Pay Now checkout flow (optional)
				commit: true,

				// Set up a payment
				payment: function(data, actions) {
					return actions.payment.create({
						transactions: [
							{
								amount: {
									total: total,
									currency: "USD"
								}
							}
						]
					});
				},
				// Execute the payment
				onAuthorize: function(data, actions) {
					return actions.payment.execute().then(function() {
						// Show a confirmation message to the buyer
						setSuccess(true);
						window.alert("Thank you for your purchase!");
					});
				}
			},
			"#paypal-button"
		);
	}, []);

	return useMemo(() => <div id="paypal-button" />, []);
};
