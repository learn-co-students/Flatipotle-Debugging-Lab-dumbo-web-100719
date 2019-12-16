import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Order from "./components/Order";
import uuid from "uuid";

class App extends Component {
	state = {
		orders: []
	};

	addOrder = (order, id) => {
		let newOrder = { ...order, id };
		this.setState({
			orders: this.state.orders.concat(newOrder)
		});
	};

	deleteOrder = id => {
		let filterdOrder = this.state.orders.filter(
			orderDelete => orderDelete.id !== id
		);
		this.setState({
			orders: [...filterdOrder]
		});
	};

	render() {
		const orders = this.state.orders.map((order, idx) => {
			return (
				<Order
					key={order.id}
					id={order.id}
					{...order}
					deleteOrder={this.deleteOrder}
				/>
			);
		});
		console.log(orders);
		return (
			<div className="App">
				<header className="App-header">
					<img
						src={require("./images/logo.png")}
						className="App-logo"
						alt="logo"
					/>
				</header>

				<Form orders={this.state.orders} addOrder={this.addOrder} />

				<div className="ui raised container segment">
					<h1 className="ui block header">All Orders</h1>
					<div className="ui three cards">{orders}</div>
				</div>
			</div>
		);
	}
}

export default App;
