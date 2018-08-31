/** @format */
/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { noop } from 'lodash';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import AdvancedFilters from './advanced';
import Card from 'components/card';
import DatePicker from './date';
import FilterPicker from './filter';
import { H, Section } from 'layout/section';
import './style.scss';

const ReportFilters = ( { advancedConfig, filters, query, path } ) => {
	let advancedCard = false;
	switch ( query.filter ) {
		case 'compare':
			advancedCard = (
				<Card
					title={ __( 'Compare Products', 'wc-admin' ) }
					className="woocommerce-filters__compare"
				>
					<div className="woocommerce-filters__compare-body">
						<input type="search" />
						<div>Tokens</div>
					</div>
					<div className="woocommerce-filters__compare-footer">
						<Button onClick={ noop } isDefault>
							{ __( 'Compare', 'wc-admin' ) }
						</Button>
					</div>
				</Card>
			);
			break;
		case 'advanced':
			advancedCard = (
				<AdvancedFilters
					config={ advancedConfig }
					filterTitle={ __( 'Orders', 'wc-admin' ) }
					path={ path }
					query={ query }
				/>
			);
			break;
	}

	return (
		<Fragment>
			<H className="screen-reader-text">{ __( 'Filters', 'wc-admin' ) }</H>
			<Section component="div" className="woocommerce-filters">
				<div className="woocommerce-filters__basic-filters">
					<DatePicker key={ JSON.stringify( query ) } query={ query } path={ path } />
					{ !! filters.length && (
						<FilterPicker filters={ filters } query={ query } path={ path } />
					) }
				</div>
				{ false !== advancedCard && (
					<div className="woocommerce-filters__advanced-filters">{ advancedCard }</div>
				) }
			</Section>
		</Fragment>
	);
};

ReportFilters.propTypes = {
	advancedConfig: PropTypes.object,
	filters: PropTypes.array,
	path: PropTypes.string.isRequired,
	query: PropTypes.object,
};

ReportFilters.defaultProps = {
	advancedConfig: {},
	filters: [],
	query: {},
};

export default ReportFilters;