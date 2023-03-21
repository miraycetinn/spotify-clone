import {Icon} from "Icons";
import {NavLink} from "react-router-dom";

function Menu() {
    const classNameSelector=({isActive = false})=> isActive ? "h-10 flex gap-x-4 items-center text-sm font-semibold text-white rounded hover:text-white px-4 bg-active" :
        "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink to={"/"} className={classNameSelector}>
                        <span>
                            <Icon name="home"/>
                        </span>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"}
                             className={classNameSelector}>
                        <span>
                            <Icon name="search"/>
                        </span>
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/collection"}
                             className={classNameSelector}>
                         <span>
                            <Icon name="collection"/>
                        </span>
                        Your Library
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Menu