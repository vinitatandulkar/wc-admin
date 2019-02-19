/** @format */
/**
 * External dependencies
 */
import { Component } from '@wordpress/element';
import { ENTER, SPACE } from '@wordpress/keycodes';
import PropTypes from 'prop-types';

/**
 * `MenuItem` is used to give the item an accessible wrapper, with the `menuitem` role and added keyboard functionality (`onInvoke`).
 * `MenuItem`s can also be deemed "clickable", though this is disabled by default because generally the inner component handles
 * the click event.
 */
class MenuItem extends Component {
	constructor() {
		super( ...arguments );
		this.onClick = this.onClick.bind( this );
		this.onKeyDown = this.onKeyDown.bind( this );
	}

	onClick( event ) {
		const { isClickable, onInvoke } = this.props;
		if ( isClickable && onInvoke ) {
			event.preventDefault();
			onInvoke();
		}
	}

	onKeyDown( event ) {
		const { onInvoke } = this.props;

		if ( onInvoke && ( event.keyCode === ENTER || event.keyCode === SPACE ) ) {
			event.preventDefault();
			onInvoke();
		}
	}

	render() {
		const { children, tabIndex } = this.props;

		return (
			<div
				role="menuitem"
				tabIndex={ tabIndex }
				onKeyDown={ this.onKeyDown }
				onClick={ this.onClick }
				className="woocommerce-ellipsis-menu__item"
			>
				{ children }
			</div>
		);
	}
}

MenuItem.propTypes = {
	/**
	 * A renderable component (or string) which will be displayed as the content of this item. Generally a `ToggleControl`.
	 */
	children: PropTypes.node,
	/**
	 * Boolean to control whether the MenuItem should handle the click event. Defaults to false, assuming your child component
	 * handles the click event.
	 */
	isClickable: PropTypes.bool,
	/**
	 * A function called when this item is activated via keyboard ENTER or SPACE; or when the item is clicked
	 * (only if `isClickable` is set).
	 */
	onInvoke: PropTypes.func,
	/**
	 * `tab-index` HTML property.
	 */
	tabIndex: PropTypes.number,
};

MenuItem.defaultProps = {
	isClickable: false,
	tabIndex: 0,
};

export default MenuItem;
