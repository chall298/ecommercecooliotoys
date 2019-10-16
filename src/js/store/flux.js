const getState = ({ getStore, setStore }) => {
	return {
		store: {
			product: [
				{
					/*{
					name: "toy1",
					price: 11,
					image: "https://picsum.photos/id/1070/430/180",
					description: "white",
					age_group: "1-2",
					weight: "123lbs",
					category: "",
					id: 1
				},
				{
					name: "toy2",
					price: 13,
					image: "https://picsum.photos/id/905/430/180",
					description: "yellow",
					age_group: "10-12",
					weight: "80lbs",
					category: "",
					id: 2
				},
				{
					name: "toy3",
					price: 15,
					image: "https://picsum.photos/id/295/430/180",
					description: "blue",
					age_group: "13+",
					weight: "2lbs",
					category: "",
					id: 3
				},
				{
					name: "toy4",
					price: 200,
					image: "https://picsum.photos/id/1060/430/180",
					description: "red",
					age_group: "5-7",
					weight: "24lbs",
					category: "",
					id: 4
				},
				{
					name: "toy5",
					price: 1155,
					image: "https://picsum.photos/id/962/430/180",
					description: "eggs",
					age_group: "1-29",
					weight: "12lbs",
					category: "",
					id: "5"
				},
				{
					name: "toy6",
					price: 1111,
					image: "https://picsum.photos/id/168/430/180",
					description: "hellooooo",
					age_group: "1-200",
					weight: "178lbs",
					category: "",
					id: 6
				},
				{
					name: "toy7",
					price: 1366,
					image: "https://picsum.photos/id/620/430/180",
					description: "yellowg",
					age_group: "10-126",
					weight: "804lbs",
					category: "",
					id: 7
				},
				{
					name: "toy8",
					price: 105,
					image: "https://picsum.photos/id/1049/430/180",
					description: "hiz",
					age_group: "16+",
					weight: "23bs",
					category: "",
					id: 8
				},
				{
					name: "toy9",
					price: 2006,
					image: "https://picsum.photos/id/3/430/180",
					description: "red",
					age_group: "5-79",
					weight: "249lbs",
					category: "",
					id: 9
				},
				{
					name: "toy10",
					price: 1155,
					image: "https://picsum.photos/id/585/430/180",
					description: "food",
					age_group: "11-29",
					weight: "124lbs",
					category: "",
					id: 10
				},
				{
					name: "toy11",
					price: 200000,
					image: "https://picsum.photos/id/415/430/180",
					description: "red and blue",
					age_group: "5-71",
					weight: "249lbs",
					category: "",
					id: 11
				},
				{
					name: "toy12",
					price: 115445,
					image: "https://picsum.photos/id/321/430/180",
					description: "meat",
					age_group: "13-29",
					weight: "128lbs",
					category: "",
					id: 12
                }*/
				}
			],
			products_on_sale: [
				{
					name: "game1",
					price: 11,
					image: "https://picsum.photos/id/1070/430/180",
					description: "white",
					age_group: "1-2",
					weight: "123lbs",
					category: "",
					id: 1
				},
				{
					name: "game2",
					price: 13,
					image: "https://picsum.photos/id/905/430/180",
					description: "yellow",
					age_group: "10-12",
					weight: "80lbs",
					category: "",
					id: 2
				},
				{
					name: "game3",
					price: 15,
					image: "https://picsum.photos/id/295/430/180",
					description: "blue",
					age_group: "13+",
					weight: "2lbs",
					category: "",
					id: 3
				},
				{
					name: "game4",
					price: 200,
					image: "https://picsum.photos/id/1060/430/180",
					description: "red",
					age_group: "5-7",
					weight: "24lbs",
					category: "",
					id: 4
				}
			],
			user: [
				{
					full_name: "ff",
					address: "",
					phone_number: "",
					e_mail: "",
					password: "",
					city: "",
					state: "",
					zip: "",
					username: ""
				}
			],
			cart: [
				/*{
					name: "mm",
					price: "aa",
					image: "https://picsum.photos/id/931/120/80",
					description: "ss",
					quantity: "33"
                }*/
			],
			token: null,
			tempLoggedUser: null
		},
		actions: {
			registerUser: (email, name, last, username, password) => {
				fetch("https://cohortix-fp-api.herokuapp.com/user", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: email,
						userFirstName: name,
						userLastName: last,
						userName: username,
						addresses: [],
						password: password
					})
				});
			},
			logout: () => {
				setStore({ token: null, tempLoggedUser: null });
			},
			authenticateLogin: (email, username) => {
				const store = getStore();
				const url = process.env.HOST + "/login";

				let loggedUser = store.user.find(item => {
					return item.email == email;
				});

				fetch("https://cohortix-fp-api.herokuapp.com/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						userName: username
					})
				})
					.then(response => response.json())
					.then(token => {
						if (typeof token.msg != "undefined") {
							// Notify.error(token.msg);
						} else {
							setStore({ token: token.jwt, tempLoggedUser: loggedUser });
							// history.push("/");
						}
					});
				// .then(changeStatus => {
				// 	fetch(`${process.env.HOST}/client/${loggedUser.client_id}`, {
				// 		method: "PUT",
				// 		headers: {
				// 			"Content-Type": "application/json",
				// 			authorization: "Bearer " + store.token
				// 		},
				// 		body: JSON.stringify({
				// 			client_login_status: true
				// 		})
				// 	});
				// })
				// .then(getClientBack => {
				// 	const url = process.env.HOST + "/client";
				// 	fetch(url, {
				// 		method: "GET",
				// 		headers: {
				// 			"Content-Type": "application/json"
				// 		}
				// 	})
				// 		.then(response => response.json())
				// 		.then(data => {
				// 			const store = getStore();
				// 			setStore({ client: data });
				// 		})
				// 		.catch(error => console.error("Error: It didn't work. Try again", error));
				// })
				// .catch(error => console.error("Error: It didn't work. Try again", error));
				setStore({ tempLoggedUser: loggedUser });
			},
			addToCart: koala => {
				var tempStore = getStore();
				let cartItem = tempStore.cart.find(products => {
					return products.ProductId === koala.ProductId;
				});
				if (!cartItem) {
					koala.quantity = 1;
					tempStore.cart.push(koala);
					setStore({ tempStore });
				}
			},
			deleteElement: index => {
				var tempStore = getStore();
				tempStore.cart.splice(index, 1);
				setStore({ tempStore });
			},
			updateQuantity: (id, math, history) => {
				const store = getStore();
				console.log("updateQuantity Id", id);
				let cartItem = store.cart.find(products => {
					return products.ProductId === id;
				});
				console.dir(cartItem);
				if (math === "add") {
					cartItem.quantity++;
				} else if (math === "minus" && cartItem.quantity > 0) {
					cartItem.quantity--;
				}

				setStore(store);
			}
		}
	};
};

export default getState;
