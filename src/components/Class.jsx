/* eslint-disable */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faUsersRectangle } from '@fortawesome/free-solid-svg-icons'
import Avatar from './Avatar'

function Class({user}) {
    return (
        <div className='w-[300px] rounded-xl border-2 border-gray-300 divide-y-2 divide-y-gray-300 overflow-hidden bg-red-400'>
            <div className={`h-[100px] mb-auto bg-[${user.bgColor}]`}>
                <div className='relative w-full flex justify-end px-5 top-full -translate-y-[50%]'>
                    <Avatar src={user.img} alt="Classroom owner image" size={65} />
                </div>
                <div className='relative px-4 text-2xl top-[-50px] text-white font-semibold tracking-tight'>
                    <h1>{user.className}</h1>
                </div>
                <div className='relative top-[-30px] px-4 text-lg text-white'>
                    <h3>{user.username}</h3>
                </div>
            </div>
            <div className='h-[150px] bg-white'></div>
            <div className='flex items-center justify-end w-full mt-auto px-4 py-3 bg-white'>
                <div className='text-xl flex items-center gap-4'>
                    <FontAwesomeIcon icon={faUsersRectangle} />
                    <FontAwesomeIcon icon={faFolder} />
                </div>
            </div>
        </div>
    )
}

export default Class
