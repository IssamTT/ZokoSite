import { NavLink } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";


const Toolbars = () => {

    return (
        < div className="bg-red-500 w-full p-4 shadow-md" >
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white font-bold">
                        <img src="IMG_1362.jpg" className="absolute top-0 left-0 w-20 h-auto object-cover" />
                    </div>
                    <div className="flex space-x-4">
                        <NavLink className='mr-3' style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })} to='/'>Accueil</NavLink>
                        <DropdownMenu />
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Toolbars;
