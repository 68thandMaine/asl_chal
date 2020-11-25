import React from 'react';

import Controls from '../components/controls/Controls'
import Map from '../components/map/Map'
import Button from '../components/button/Button'

const DashboardContainer: React.FC = () => {
	return (
		<section className={"grid grid-rows-5 h-full md:grid-cols-5"}>
			<div className={"row-span-4 md:col-span-4"}>
				<Map />
			</div>
			<div className={"row-span-1 md:col-span-1 md:h-screen "}>
				<Controls />
				<Button />
			</div>
		</section>
	)
}

export default DashboardContainer;