import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	background: #7BEBB3;
	`;

	const Button : React.FC = () => {
		return (
			<StyledButton>
				Button!
			</StyledButton>
		)
	}

	export default Button;