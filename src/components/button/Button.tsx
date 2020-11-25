import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	color: red;
	`;

	const Button : React.FC = () => {
		return (
			<StyledButton>
				I'm the button
			</StyledButton>
		)
	}

	export default Button;