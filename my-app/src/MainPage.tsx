import React from 'react';
import { TopNav } from './TopNav';
import { Project } from './Project';

/*  
    MainPage Component
*/

export function MainPage(): JSX.Element {
    return (
        <div 
            className="fixed top-0 left-0 relative h2 w-100 bg-light-green"
        >
            <TopNav />
            <Project />
        </div>
    );
}