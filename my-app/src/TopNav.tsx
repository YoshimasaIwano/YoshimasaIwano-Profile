import React from 'react';
import { NavLink } from 'react-router-dom'

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

const classAttribute = 'f3 ph2 mh2 b--solid br1 b--green link color-inherit '

function HomeNav(): JSX.Element {
    return (
        <NavLink to='Home' className={({ isActive }) => (
            isActive ? classAttribute + 'bg-dark-green': classAttribute + 'bg-green'
        )}>
            Home
        </NavLink>
    )
}

function ProjectNav(): JSX.Element {
    return (
        <NavLink to='Project' className={({ isActive }) => (
            isActive ? classAttribute + 'bg-dark-green': classAttribute + 'bg-green'
        )}>
            Project
        </NavLink>
    )
}

function ResumeNav(): JSX.Element {
    return (
        <NavLink to='Resume' className={({ isActive }) => (
            isActive ? classAttribute + 'bg-dark-green': classAttribute + 'bg-green'
        )}>
            Resume
        </NavLink>
    )
}

function GaleryNav(): JSX.Element {
    return (
        <NavLink to='Gallery' className={({ isActive }) => (
            isActive ? classAttribute + 'bg-dark-green': classAttribute + 'bg-green'
        )}>
            Gallery
        </NavLink>
    )
}