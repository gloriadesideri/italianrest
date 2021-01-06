import React from 'react'

function Navbar() {
    return(
        <header className="text-gray-700 body-font w-full ">
            <div className=" mx-auto flex   justify-content-center w-full">

                <div className="md:ml-auto md:mr-auto flex w-full    justify-center">
                    <a href='/' className="mr-5 text-white text-xs">HOME</a>
                    <a href='/menu/1' className="mr-5 text-white text-xs">MENU</a>
                    <a href='/delivery' className="mr-5 text-white text-xs">DELIVERY</a>
                    <a href='/tableReservation' className="mr-5 text-white text-xs">TABLE RESERVATION</a>
                    <a href='contact' className="text-white text-xs mr-5">CONTACT US</a>
                    <button className='rounded-pill d-inline border border-white -mt-2 py-2 px-4 mb-2 text-white text-center text-sm'>LOGIN/SIGNUP</button>


                </div>

            </div>
        </header>
    )
}

export default Navbar
