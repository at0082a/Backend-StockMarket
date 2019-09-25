import React from 'react';
import logo from './logo.svg';
import Chart from './components/candlestickchart';
import { getData } from './components/utils';
import { TypeChooser } from "react-stockcharts/lib/helper";
import './App.css';


class App extends React.Component {
//   constructor (props) {
//   super(props);
//     this.state = {
//       data : {}
//     };
// }
	componentDidMount() {
		getData().then(data => {
      // console.log(data);
			this.setState({ data });
		});
	}
	render() {
		if (this.state == null) {
			return <div> Loading... </div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}

export default App;
