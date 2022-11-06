import React, { useState } from 'react';
import QueryEditor from './components/QueryEditor/QueryEditor';
import OutputGrid from './components/OutputGrid/OutputGrid';
import Header from './components/Header/Header';
import ExecuteQuery from './services/ApiService';

function App() {

	const [gridData, setGridData] = useState([]);
	const [showTable, setShowTable] = useState(false);

	const runQuery = (query) => {
		setShowTable(true);
		ExecuteQuery(query)
			.then((data) => {
				setGridData(data.data.products)
			})
			.catch(err => console.log(err));
	}

	return (
		<>
			<Header />
			<QueryEditor runQuery={runQuery} />
			{
				showTable ?
					<OutputGrid data={gridData} />
					: null
			}
		</>
	);
}

export default App;
