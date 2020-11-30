import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
padding: 1em;
text-align: justify;
`;

const Menu: React.FC = () => {
	return (
		<StyledMenu>
			<h1 className="styledMenu__title text-center">Airspace Link Engineering Challenge</h1>
			<h2 className="styledMenu__instructions text-left">Instructions</h2>
			<p>Use this application to create flight plans with respect to the Detroit Metropolitan Airport's controlled airspace.</p>
		</StyledMenu>
	)
}

export default Menu;