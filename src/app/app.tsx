import ReactDOM from 'react-dom/client';
import React from 'react';
import 'virtual:svg-icons-register';

import './styles/styles.scss';

import { Main } from '@pages/main';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
);
