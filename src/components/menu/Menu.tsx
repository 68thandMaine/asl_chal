import React from 'react';
import styled from 'styled-components';
import { INotification } from '../../common/types';
import Button from '../button/Button';
import Notification from '../notification/Notification';
import LabeledInput from '../input/LabeledInput';

const StyledMenu = styled.article`
	display: grid;
	grid-template-rows: 0.5fr 1.5fr 1fr;
	height: 100vh;
	padding: 1em;
	text-align: center;
`;

type MenuProps = {
	notificationData: INotification;
}

const Menu: React.FC<MenuProps> = ({notificationData}) => {
	return (
		<StyledMenu>
			<section className="mb-3">
				<h1>Airspace Link</h1>
				<h2 className="styledMenu__title">Engineering Challenge</h2>
				<p className='text-justify mt-'>To use this application, click the polygon icon in the upper left of the map and begin to trace a given flight path.</p>
			</section>
			<Notification 
				data={notificationData}/>
			<section>
				<LabeledInput 
					labelText="Location Name"
					placeholderText="Detroit Metropolitan Airport..."
					inputType="text"/>
				<section className="flex flex-row justify-around">
					<LabeledInput
						labelText="Lat"
						placeholderText="42.197"
						inputType="number"/>
					<LabeledInput
						labelText="Long"
						placeholderText="-83.349"
						inputType="number" />
				</section>
				<Button 
					buttonText="Search"/>
			</section>
		</StyledMenu>
	)
}

export default Menu;