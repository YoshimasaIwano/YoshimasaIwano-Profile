import React from 'react';


/*
    TopNav Component  
*/

export function TopNav(): JSX.Element {
    return (
        <div className='flex justify-center items-center aspect-ratio-object h2'>
            <ProjectNav />
            <ResumeNav />
            <GaleryNav />
        </div>
    )
}

function ProjectNav(): JSX.Element {
    return (
        <a href='./' className='ph2 mh2 b--solid br1 b--green bg-green link color-inherit'>
            Project
        </a>
    )
}

function ResumeNav(): JSX.Element {
    return (
        <a href='./' className='ph2 mh2 b--solid br1 b--green bg-green link color-inherit'>
            Resume
        </a>
    )
}

function GaleryNav(): JSX.Element {
    return (
        <a href='./' className='ph2 mh2 b--solid br1 b--green bg-green link color-inherit'>
            Gallery
        </a>
    )
}