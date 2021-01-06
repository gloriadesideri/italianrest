import React from 'react'
import Navbar from "../Navbar/Navbar";

function Hero() {
    return(
        <section className="text-gray-700 body-font  " style={{background:'url(\'https://images.unsplash.com/photo-1555234557-062e321607cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80\') center center'}}>
            <div className="container mx-auto flex px-3 py-24 items-center justify-center flex-col">
                <img className="lg:w-1/12 max-w-xs text-light	  md:w-1/12 w-1/12 mb-10 object-cover object-center rounded" alt="hero"
                     src="https://dummyimage.com/720x600"/>
                <div className="text-center lg:w-2/3 w-full mt-12">
                    <div className="flex justify-center mb-20">
                        <Navbar/>
                    </div>
                    <h1 className="title-font sm:text-4xl text-9xl mt-24 font-old mb-4 text-gold">Eating good in Deliciousa</h1>
                    <p className='text-white font-weight-bolder text-sm '>COME EXPERIENCE OUR DELICIOUS FOOD</p>
                    <button className='rounded-pill bg-white px-12 py-3 text-black text-center text-sm mb-12'>Our menu</button>



                </div>
            </div>
        </section>
    )
}

export default Hero
