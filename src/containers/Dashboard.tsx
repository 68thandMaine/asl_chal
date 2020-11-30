import React, { Children, ReactChild } from 'react';
import styled from 'styled-components';

const MenuWrapper= styled.article`
position: relative;
z-index: 2;
box-shadow: -10px 0px 15px -1px rgba(68, 68, 68, 0.6);
`;


type DashboardProps ={
	leftPane: ReactChild;
	rightPane: ReactChild
 }

const Dashboard: React.FC<DashboardProps> = ({ leftPane, rightPane }) => {

	return (
		<section className="grid grid-cols-7">
			<article className="col-span-5 relative gap-0.5 z-0">
				{leftPane}
			</article>
			<MenuWrapper className="col-span-2 rounded-l-lg">
				{rightPane}
			</MenuWrapper>
		</section>
	);
}

export default Dashboard;