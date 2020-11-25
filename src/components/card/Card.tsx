import React, { FC } from 'react';
import styled from 'styled-components';

const StyledCard = styled.article`
	background: #E9F1F5;
	width: 100%;
	border-top-right-radius: 1em;
	border-top-left-radius: 1em;
	height: 100vh;
`
const Card : React.FC<Props> = (props) => {
	return (
		<StyledCard>
				{props.children}
		</StyledCard>
	)
}

interface Props {
	children: Object[]
}
export default Card;