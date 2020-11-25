import React from 'react';
import Card from '../card/Card';
import Input from '../input/Input';

const Controls : React.FC = () => { 
	return (
		<aside className={"flex h-full md:h-screen flex-col justify-around md:justify-end md:pb-24"}>
			<Card>
				<Input />
				<Input/>
			</Card>
		</aside>
	)
}

export default Controls;