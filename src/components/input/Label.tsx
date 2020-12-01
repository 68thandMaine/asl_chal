import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
	font-size: 1.25rem;
	font-weight: 450;
	display: block;
	text-align: left;
	margin-bottom: 0.25em;
	padding-left: 0.5em;
`;

type LabelProps = {
	labelText: string;
}

const Label: React.FC<LabelProps> = ({labelText}) => {

	return (
		<StyledLabel>
			{labelText}
		</StyledLabel>
	)
}

export default Label;
