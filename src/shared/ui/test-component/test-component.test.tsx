import React from 'react';
import { screen, render } from '@testing-library/react';

import { TestComponent } from './test-component';

describe('Test component', () => {
	it('should render the title', () => {
		render(<TestComponent />);

		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test');
	});
});
