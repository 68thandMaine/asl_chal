import React from 'react';
import styled from 'styled-components';
import { INotification } from '../../common/types';
import Button from '../button/Button';
import Notification from '../notification/Notification';
import LabeledInput from '../input/LabeledInput';

const StyledMenu = styled.article`
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
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
			<div >
				<h1>Airspace Link</h1>
				<h2 className="styledMenu__title">Engineering Challenge</h2>
				<p className='text-justify'>Use this application to determine if the flight for your drone will be approved or not.</p>
			
			<section>
				<LabeledInput 
					labelText="Location Name"
					placeholderText="Detroit Metropolitan Airport..."
					inputType="text"/>
				<section className="flex flex-row space-between">
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
			</div>
			<Notification 
				message={notificationData.message}/>
		</StyledMenu>
	)
}

export default Menu;