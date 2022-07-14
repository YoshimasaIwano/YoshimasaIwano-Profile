/* import libraries */
import { NavLink } from 'react-router-dom';

/*
    TopNav Component  
*/

type NavProps = {
    name: string;
}

function NavContent( { name }: NavProps ): JSX.Element {
    const classAttribute: string = 'f3 ph2 mh2 b--solid br1 b--green link color-inherit '
    return (
        <NavLink 
            to={name} 
            className={({ isActive }) => (
                isActive ? classAttribute + 'bg-dark-green': classAttribute + 'bg-green'
            )}
        >
            {name}
        </NavLink>
    )
} 

export function TopNav(): JSX.Element {
    /*
         --------------------------------------
        |                                      |
        |           *  Top Nav   *             |
        |                                      |
         --------------------------------------
        |                                      |
        |                                      |
        |            Main Contents             |
        |                                      |
        |                                      |
         --------------------------------------
        |                                      |
        |               Footer                 |
        |                                      |
         --------------------------------------
    */
    const navList: Array<string> = ["Home", "Project", "Resume", "Gallery"]
    return (
        <div className='flex justify-center items-center aspect-ratio-object h3 bg-light-green'>
            {navList.map((nav) => {
                return (
                    <NavContent name={nav} key={nav} />
                )
            })}
        </div>
    )
}
