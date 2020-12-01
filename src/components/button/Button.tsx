import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	background: #D96F32;
	color:#fff;
	border-radius: 2em;
	outline: none;
	width: 300px;
	margin: 1em;
	&:focus {
		outline: 0;
	}
`;

type ButtonProps = {
	buttonText: string
}

const Button: React.FC<ButtonProps> = ({buttonText}) => {
	return (
		<StyledButton>{buttonText}</StyledButton>
	)
}

export default Button;
