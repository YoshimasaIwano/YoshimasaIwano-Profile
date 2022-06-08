import React from 'react';


/*
    TopNav Component  
*/

export function TopNav(): JSX.Element {
    return (
        <div className='flex justify-center items-center aspect-ratio-object h3 bg-light-green'>
            <HomeNav />
            <ProjectNav />
            <ResumeNav />
            <GaleryNav />
        </div>
    )
}

function HomeNav(): JSX.Element {
    return (
        <a href='./Home' className='f3 ph2 mh2 b--solid br1 b--green bg-green link color-inherit'>
            Home
        </a>
    )
}

function ProjectNav(): JSX.Element {
    return (
        <a href='./Project' className='f3 ph2 mh2 b--solid br1 b--green bg-green link color-inherit'>
            Project
        </a>
    )
}

function ResumeNav(): JSX.Element {
    return (
        <a href='./Resume' className='f3 ph2 mh2 b--solid br1 b--green bg-green link color-inherit'>
            Resume
        </a>
    )
}

function GaleryNav(): JSX.Element {
    return (
        <a href='./Gallery' className='f3 ph2 mh2 b--solid br1 b--green bg-green link color-inherit'>
            Gallery
        </a>
    )
}