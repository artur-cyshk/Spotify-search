import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popup } from './';
import '../styles/contextMenu.less';

class ContextMenu extends Component {

	constructor(props) {
		super(props);
		this.state = { menuVisible: false };
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	toggleState = () => {
		this.setState({ menuVisible: !this.state.menuVisible });
	}

	render() {
		const { children, title } = this.props;
		const { menuVisible } = this.state;
		return (
			<div className="context-menu">
				<i onClick={this.toggleState} className="fa fa-ellipsis-h"></i>
				{ menuVisible && 
					<Popup title={title}>
						{children}
					</Popup> 
				}
			</div>
		);
	}
};

ContextMenu.propTypes = {
	title: PropTypes.string
}

export default ContextMenu;