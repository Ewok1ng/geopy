import ReactDOM from 'react-dom/client';
import React from 'react';

import { TestComponent } from '@shared/ui';

import '@app/styles/styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<TestComponent />
	</React.StrictMode>
);
