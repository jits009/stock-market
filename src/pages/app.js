import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { STOCK_ENDPOINT } from '../services/constants';
import { updateStockMarket } from '../store/actions/stock';
import './style.css';

class App extends Component {

	componentDidMount() {
		this.initializeSocket()
	}

	initializeSocket() {
		const socket = new WebSocket(STOCK_ENDPOINT);

		// Listen for messages
		socket.addEventListener('message', this.props.updateStockMarket);

		// Listen for error
		socket.addEventListener('error', (error) => {
			console.log('Something went wrong', error);
		});
	}

	componentWillUnmount() {
		
	}

	renderStocks = () => {
		const { stocks } = this.props;
		console.log('stocks: ', stocks);

		return stocks.map((item, index) => {
			return (
				<tr key={item.name + index} className={item.gain ? item.gain > 0 ? 'stock-gain' : 'stock-loss' : ''}>
					<th scope="row">{index + 1}</th>
					<td>{item.name}</td>
					<td>{item.price}</td>
					<td>{moment(item.updated_at).fromNow()}</td>
				</tr>
			)
		})
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
								<table className="table table-bordered">
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

const mapStateToProps = (state) => ({
	stocks: state.stock.stocks
})

export default connect(mapStateToProps, { updateStockMarket })(App);
