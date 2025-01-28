import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCalendar, faGear, faBoxArchive, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <div className="w-1/5 divide-y-2 divide-y-gray-500">
            <ul className='px-8 py-5 flex flex-col gap-3'>
                <li className='flex gap-4 text-gray-500 font-medium'>
                    <div className='text-lg'><FontAwesomeIcon icon={faHouse} /></div>
                    <div className='flex-grow text-md'>Home</div>
                </li>
                <li className='flex gap-4 text-gray-500 font-medium'>
                    <div className='text-lg'><FontAwesomeIcon icon={faCalendar} /></div>
                    <div className='flex-grow text-md'>Calendar</div>
                </li>
            </ul>
            <ul className='px-8 py-5 flex flex-col gap-3'>
                <ul className='flex gap-4 text-gray-500 font-medium'>
                    <div className='text-lg'><FontAwesomeIcon icon={faGraduationCap} /></div>
                    <div className='flex-grow text-md'>Enrolled</div>
                </ul>
            </ul>
            <ul className='px-8 py-5 flex flex-col gap-3'>
            <li className='flex gap-4 text-gray-500 font-medium'>
                    <div className='text-lg'><FontAwesomeIcon icon={faBoxArchive} /></div>
                    <div className='flex-grow text-md'>Archieved Classes</div>
                </li>  
                <li className='flex gap-4 text-gray-500 font-medium'>
                    <div className='text-lg'><FontAwesomeIcon icon={faGear} /></div>
                    <div className='flex-grow text-md'>Settings</div>
                </li>   
            </ul>
        </div>
    )
}

export default Sidebar
