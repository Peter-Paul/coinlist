import Logo from "./logo";
import NavContent from "./navContent";

function Sidebar({name}) {
    return ( 
        <>
            <div className="ms-3 my-3">
                <Logo name={name} />
            </div>
            <NavContent/>
        </>
     );
}

export default Sidebar;