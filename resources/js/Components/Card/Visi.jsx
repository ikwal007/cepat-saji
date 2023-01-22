import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { FaMotorcycle } from 'react-icons/fa'
import { ImSpoonKnife } from 'react-icons/im'

const Visi = ({ icon, title, body }) => {
    const icons = () => {
        if (icon == 'BsFillCartFill') {
            return (
                <BsFillCartFill />
            )
        } else if (icon == 'FaMotorcycle') {
            return (
                <FaMotorcycle />
            )
        } else {
            return (
                <ImSpoonKnife />
            )
        }
    }
    return (
        <div className="flex w-full px-2 space-x-4 items-center mb-5">
            <div className="avatar placeholder">
                <div className="bg-base-200 text-neutral rounded-full w-10 h-10">
                    {icons()}
                </div>
            </div>
            <div className='capitalize'>
                <h2 className='font-bold md:text-lg'>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Visi
