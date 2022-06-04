import React from 'react';
import { TopNav } from './TopNav';

/*  
    MainPage Component
*/

export function MainPage(): JSX.Element {
    return (
        <div 
            className="fixed top-0 left-0 h2 w-100 bg-light-green"
        >
            <TopNav />
        </div>
    );
}