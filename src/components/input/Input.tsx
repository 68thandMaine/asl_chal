import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	border: solid 1.75px #47596B;
	color: black;
	border-radius: 1em;
	padding: 0 1em;
	margin: 0.75em 0;
	outline: none;
	max-width: 100%
`

const Input : React.FC = () => {
	return (
		<StyledInput placeholder="Hi it's me the input">
		</StyledInput>
	)
}

export default Input;