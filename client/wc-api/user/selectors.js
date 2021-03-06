/** @format */

/**
 * Internal dependencies
 */
import { DEFAULT_REQUIREMENT } from '../constants';

const getCurrentUserData = ( getResource, requireResource ) => (
	requirement = DEFAULT_REQUIREMENT
) => {
	const initalState = wcSettings.currentUserData;
	return requireResource( requirement, 'current-user-data' ).data || initalState;
};

export default {
	getCurrentUserData,
};
