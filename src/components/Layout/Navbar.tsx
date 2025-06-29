import logo2 from '@/assets/logo2.svg'
import { Link } from 'react-router';
import { ModeToggle } from '../mode-toggler';


export default function Navbar(){
    return(
        <nav className="max-w-8xl mx-auto h-16 flex justify-between items-center gap-3 px-5" >
            <div className="flex items-center gap-2">
                <img className='h-8 w-8' src={logo2} alt="" /> <span className="font-bold ml-2">Task</span>Master
            <Link to={"/task"}>Task</Link>
            <Link to={"/user"}>User</Link>
            </div>
            <div className='ml-auto'>
                <ModeToggle></ModeToggle>
            </div>
        </nav>
    );
}