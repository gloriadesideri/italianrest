import React, {useState} from 'react'
import Carousel from "react-multi-carousel";

function Form() {
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [number,setNumber]=useState('3')
    const [service,setService]=useState('Lunch')
    const [res,setRes]=useState('Tomorrow')
    const [time,setTime]=useState('08:30')

    return(
        <section className="text-gray-700 body-font overflow-hidden ">
            <div className="container px-5  mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className='lg:w-1/2 w-full  h-72 '>
                        <Carousel
                            additionalTransfrom={0}
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className=""
                            containerClass="carousel-container"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024
                                    },
                                    items: 1
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0
                                    },
                                    items: 1
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464
                                    },
                                    items: 1
                                }
                            }}
                            showDots={true}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                            arrows
                        >
                            <img alt="ecommerce" src='https://images.unsplash.com/photo-1513862153653-f8b7324e1779?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60' className=" w-full  h-full object-cover object-center rounded"/>
                            <img alt="ecommerce" src='https://images.unsplash.com/photo-1513862153653-f8b7324e1779?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60' className=" w-full  h-full object-cover object-center rounded"/>
                            <img alt="ecommerce" src='https://images.unsplash.com/photo-1513862153653-f8b7324e1779?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhdmlvbGl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60' className=" w-full  h-full object-cover object-center rounded"/>

                        </Carousel>
                    </div>
                    <div className="lg:w-1/2 w-full lg:pr-10 text-left p-4 lg:py-6 mb-6 lg:mb-0 bg-white">
                        <h6 className='text-gray-700 font-weight-bold mb-4'>Table reservation</h6>
                       <form>
                           <div className='d-flex flew-wrap w-full mb-4 justify-content-center'>
                               <input className='rounded-pill py-1 px-3 mr-2 bg-grey-lighter border border-grey-lighter test-xs w-1/2 border-1 font font-weight-light border-gray-500 shadow-sm' placeholder='Full name' onChange={(e)=>setName(e.target.value)}/>
                               <input className='rounded-pill py-1 px-3 bg-grey-lighter border border-grey-lighter test-xs w-1/2 border-1 font-weight-light border-gray-500 shadow-sm' placeholder='Phone number' onChange={(e)=>setPhone(e.target.value)}/>

                           </div>

                           <div className='  text-left flew-wrap w-full '>
                               <label htmlFor='grid-state'
                                      className='text-sm text-left text-gray-500 font-weight-bolder'>Numbre of people</label>

                               <div className='text-left mr-2 flex flex-wrap justify-content-center '>
                               <button className={`${number=='1'?'border border-gold  bg-gold text-white':''} text-gray-500 font-weight-light text-xs mr-1  py-1 w-1/6  border border-gray-500 rounded-pill `} onClick={(e)=>{
                                   e.preventDefault()
                                   setNumber('1')}}>1</button>
                                   <button className={`${number=='2'?'border border-gold  bg-gold text-white':''}  text-gray-500 font-weight-light text-xs mr-1  w-1/6  py-1 border border-gray-500 rounded-pill `}onClick={(e)=>{
                                       e.preventDefault()
                                       setNumber('2')}}>2</button>
                                   <button className={`${number=='3'?'border border-gold  bg-gold text-white':''} text-gray-500 font-weight-light text-xs mr-1  w-1/6  py-1 border border-gray-500 rounded-pill `} onClick={(e)=>{
                                       e.preventDefault()
                                       setNumber('3')}}>3</button>
                                   <button className={`${number=='4'?'border border-gold  bg-gold text-white':''} text-gray-500 font-weight-light text-xs mr-1  w-1/6  py-1 border border-gray-500 rounded-pill `} onClick={(e)=>{
                                       e.preventDefault()
                                       setNumber('4')}}>4</button>
                                   <button className={`${number=='5'?'border border-gold  bg-gold text-white':''}  text-gray-500 font-weight-light text-xs mr-1  w-1/6  py-1 border border-gray-500 rounded-pill `} onClick={(e)=>{
                                       e.preventDefault()
                                       setNumber('5')}}>5</button>

                               </div>

                           </div>
                           <div className='  text-left flew-wrap w-full '>
                               <label htmlFor='grid-state'
                                      className='text-sm text-left text-gray-500 font-weight-bolder'>Services</label>

                               <div className='text-left mr-2 flex flex-wrap justify-content-between '>
                                   <button className={`${service=='Breakfast'?'border border-gold  bg-gold text-white':''} text-gray-500 font-weight-light text-xs px-6   py-1 w-1/4  border border-gray-500 rounded-pill `} onClick={(e)=>{
                                       e.preventDefault()
                                       setService('Breakfast')}}>Breakfast</button>
                                   <button className={`${service=='Lunch'?'border border-gold  bg-gold text-white':''}  text-gray-500 font-weight-light text-xs px-6  w-1/4  py-1 border border-gray-500 rounded-pill `}onClick={(e)=>{
                                       e.preventDefault()
                                       setService('Lunch')}}>Lunch</button>
                                   <button className={`${service=='Dinner'?'border border-gold  bg-gold text-white':''} text-gray-500 font-weight-light text-xs px-6 w-1/4  py-1 border border-gray-500 rounded-pill `} onClick={(e)=>{
                                       e.preventDefault()
                                       setService('Dinner')}}>Dinner</button>
                               </div>
                           </div>

                           <div className='  text-left flew-wrap w-full '>
                               <label htmlFor='grid-state'
                                      className='text-sm text-left text-gray-500 font-weight-bolder'>Time</label>

                               <div className='text-left mr-2 flex flex-wrap justify-content-center '>
                                   <button className={`${time=='19:30'?'border border-gold  bg-gold text-white':''} text-gray-500 font-weight-light text-xs mr-1  py-1 w-1/6  border border-gray-500 rounded-pill `} onClick={(e)=>{
                                       e.preventDefault()
                                       setTime('19:30')}}>19:30</button>
                                   <button className={`${time=='08:00'?'border border-gold  bg-gold text-white':''}  text-gray-500 font-weight-light text-xs mr-1  w-1/6  py-1 border border-gray-500 rounded-pill `}onClick={(e)=>{
                                       e.preventDefault()
                                       setTime('08:00')}}>08:00</button>
                                   <button className={`${time=='08:30'?'border border-gold  bg-gold text-white':''} text-gray-500 font-weight-light text-xs mr-1  w-1/6  py-1 border border-gray-500 rounded-pill `} onClick={(e)=>{
                                       e.preventDefault()
                                       setTime('08:30')}}>08:30</button>
                                   <button className={`${time=='09:00'?'border border-gold  bg-gold text-white':''} text-gray-500 font-weight-light text-xs mr-1  w-1/6  py-1 border border-gray-500 rounded-pill `} onClick={(e)=>{
                                       e.preventDefault()
                                       setTime('09:00')}}>09:00</button>
                                   <button className={`${time=='09:30'?'border border-gold  bg-gold text-white':''}  text-gray-500 font-weight-light text-xs mr-1  w-1/6  py-1 border border-gray-500 rounded-pill `} onClick={(e)=>{
                                       e.preventDefault()
                                       setTime('09:30')}}>09:30</button>

                               </div>

                           </div>




                           <div className='mt-4 px-2 w-full'>
                               <textarea className=' p-2 w-full rounded max-h-25 bg-grey-lighter border border-grey-lighter' placeholder='other info'></textarea>
                           </div>

                       </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Form
