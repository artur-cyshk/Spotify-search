import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/popup.less';

class Popup extends Component {

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	render() {
		const { children, title } = this.props;
		return (
			<div className="popup">
				<header>
					{title}
					<i className="fa fa-times-circle close-button"></i>
				</header>
				<main>
					{children}
				</main>
			</div>
		);
	}
};

Popup.propTypes = {
	title: PropTypes.string
}

export default Popup;