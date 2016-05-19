import React from 'react';
import ReactDOM, {render} from 'react-dom';

import TopBar from './_topbar.jsx';
import SideBar from './_sidebar.jsx';

render(<TopBar title="TopBar"/>, document.getElementById('topbar'));
render(<SideBar />, document.getElementById('sidebar'));