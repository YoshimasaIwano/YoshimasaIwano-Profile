import React from 'react';


/*
    TopNav Component  
*/

export function TopNav(): JSX.Element {
    return (
        <div className='flex-m justify-center'>
            <a className='ph1 br1-ns bg-transparent'>
                Project
            </a>
            <a className='ph1 br1-ns bg-transparent'>
                Resume
            </a>
            <a className='ph1 br1-ns bg-transparent'>
                Gallery
            </a>
        </div>
    )
}