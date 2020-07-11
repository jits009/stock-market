import React, { Component } from 'react';
import { connect } from 'react-redux';
import socketIOClient from "socket.io-client";
import { STOCK_ENDPOINT } from '../services/constants';

class App extends Component {

	componentDidMount() {
		const socket = socketIOClient(STOCK_ENDPOINT);
		socket.on("data", data => console.log('data: ', data))
	}

	renderStocks = () => {
		return (
			<tr>
				<th scope="row">1</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>Otto</td>
			</tr>
		)
	}

	render() {
		return (
			<div className="app">
				<div className="container">
					<div className="row">
						<div className="py-3">
							<h2>Stock Market App(Live)</h2>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="py-5">
								<table className="table table-striped">
									<thead>
										<tr>
											<th scope="col">#</th>
											<th scope="col">Ticker</th>
											<th scope="col">Price</th>
											<th scope="col">Last Updated</th>
										</tr>
									</thead>
									<tbody>
										{this.renderStocks()}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = () => ({

})

export default connect(mapStateToProps, {})(App);
