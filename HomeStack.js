import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import App from './weebid/App';
import React from 'react';
import {Text, Stylesheet} from 'react-native';

const screens = {
	Home: {
		screen: App
	},
	User: {
		screen: Creds
	},

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);