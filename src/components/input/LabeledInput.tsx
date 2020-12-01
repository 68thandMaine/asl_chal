import React from 'react';
import styled from 'styled-components';
import Label from './Label';
import Input from './Input';

const StyledLabeledInput = styled.div`
	margin-top: 10px;
`;

type LabeledInputProps = {
	labelText: string;
	placeholderText?: string;
	inputType: string
}

const LabeledInput: React.FC<LabeledInputProps> = ({labelText, placeholderText, inputType}) => {

	return (
		<StyledLabeledInput>
			<Label 
				labelText={labelText} />
			<Input 
				placeholderText={placeholderText}
				inputType={inputType}/>
		</StyledLabeledInput>
	)
}

export default LabeledInput;
