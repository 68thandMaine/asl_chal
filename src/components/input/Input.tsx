import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	&::placeholder {
		font-style: italic;
		
	};
	border: solid 3px #0367A6;
	border-radius: 2em;
	outline: none;
	padding: 0 10px ;
	width: 100%;
	padding: 5px 14px;
`;

type InputProps = {
	placeholderText?: string;
	inputType: string;
}

const Input: React.FC<InputProps> = ({placeholderText, inputType}) => {

	return (
		<StyledInput className={`styledInput__${inputType}`} placeholder={placeholderText} type={inputType}>
		</StyledInput>
	)
}

export default Input;
