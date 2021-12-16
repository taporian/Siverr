import { createGlobalStyle } from 'styled-components';

import latinext from './latin-ext.woff2';
import latin from './latin.woff2';
import vietnamese from './vietnamese.woff2';


export default createGlobalStyle`

    @font-face {
        font-family: 'Barlow';
        src: local('Barlow'), local('Barlow'),
        url(${latinext}) format('woff2'),
        url(${latin}) format('woff2'),
        url(${vietnamese}) format('woff2');
        font-weight: 400;
        font-style: normal;
    }
    
`;