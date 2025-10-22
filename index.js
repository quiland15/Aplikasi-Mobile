/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/page/App/App';
import {name as appName} from './app.json';
import SelamatDatang from './src/page/SelamatDatang';
import DaftarAkun from './src/page/DaftarAkun';

AppRegistry.registerComponent(appName, () => DaftarAkun);
