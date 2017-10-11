import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/modal.less';

class ModalWindow extends Component {

	componentDidMount() {
		document.querySelector('body').classList.add('overflow-hidden');
	}

	componentWillUnmount() {
		document.querySelector('body').classList.remove('overflow-hidden');
	}

	closeModal = (e) => {
		const { classList } = e.target;
		if (classList.contains('close-button') || classList.contains('modal-wrapper')) {
			this.props.onCloseModal();
		}
	}

	render() {
		const { children, title = "Modal Window" } = this.props;
		return (
			<div className="modal-wrapper" onClick={this.closeModal}>
				<div>
					<header>
						{title}
						<i className="fa fa-times-circle close-button"></i>
					</header>
					<main>
						{children}
					</main>
				</div>
			</div>
		);
	}
};

ModalWindow.propTypes = {
	title: PropTypes.string,
	onCloseModal: PropTypes.func
}

export default ModalWindow;