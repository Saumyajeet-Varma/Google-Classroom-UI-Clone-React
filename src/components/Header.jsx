/* eslint-disable */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons'

import Avatar from './Avatar'
import GoogleText from './GoogleText'

function Header() {
    return (
        <header className="flex justify-between items-center px-8 py-3 sticky top-0 bg-white shadow-gray-200 shadow-md">
            <div className='flex gap-5 items-center'>
                <FontAwesomeIcon icon={faBars} />
                <GoogleText />
                <h2 className='font-medium text-2xl text-gray-400'>Classroom</h2>
            </div>
            <div className='flex gap-5 items-center'>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faBars} />
                <Avatar src="/profileDp.jpg" alt="Avatar icon" size={40} />
            </div>
        </header>
    )
}

export default Header
