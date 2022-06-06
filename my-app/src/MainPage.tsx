import React from 'react';
import { TopNav } from './TopNav';
import { Profile } from './Profile';
import { Project } from './Project';
import { Resume } from './Resume';
import { Gallery } from './Gallery';

/*  
    MainPage Component
*/

export function MainPage(): JSX.Element {
    return (
        <div 
            className="fixed top-0 left-0 relative vh-100 w-100 overflow-y-scroll"
        >
            <TopNav />
            <Profile />
            <Project />
            <Resume />
            <Gallery />
        </div>
    );
}