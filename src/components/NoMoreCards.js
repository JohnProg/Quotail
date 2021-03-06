var React = require('react-native');

var {
	View,
	Text,
	StyleSheet,
	Component,
} = React;

var GlobalConstants = require('../constants/GlobalConstants');



var NoMoreCards = React.createClass({
	
	render(){
		return(
			<View style={ styles.loading }>
				<Text style= { styles.word } > No more cards. </Text>
				<Text style= { styles.word }> Try activating another filter by going to </Text>
				<Text style= { styles.word }> Side menu > Scans > Hit a bolt </Text>
			</View>
		);
	}
});

var styles = StyleSheet.create({
	loading:{
		flex : 1,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop:200,
		backgroundColor:GlobalConstants.colors.gray_dark
	},
	word:{
		color: GlobalConstants.colors.text_white,
	}

});

module.exports = NoMoreCards;