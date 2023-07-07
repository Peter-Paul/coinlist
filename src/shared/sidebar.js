import Logo from "./logo";
import NavContent from "./navContent";

function Sidebar({name,handleLanguageChange,content}) {
    return ( 
        <>
            <div className="ms-3 my-3">
                <Logo name={name} />
            </div>
            <NavContent handleLanguageChange={handleLanguageChange} content={content}/>
        </>
     );
}

export default Sidebar;