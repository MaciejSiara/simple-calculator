/* eslint-disable */
const path = require('path');
module.exports = {
	testEnvironment: 'jest-environment-jsdom',
	moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
	resetMocks: true,
	transform: {
		'^.+\\.js?$': 'babel-jest'
	}
};
/* eslint-enable */
