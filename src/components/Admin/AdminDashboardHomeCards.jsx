import React from 'react'
import { Car, CarFront, ShoppingBasket, ShoppingCart, Users } from "lucide-react"

const AdminDashboardHomeCards = ({  usedcars, orders, users , benz , bmw , honda , toyota , volkswagen }) => {
    return (
        <>

            <div className='w-full flex flex-col justify-center items-center gap-6 py-3 px-3' >
                <div className='w-full flex flex-row justify-center items-center gap-6 py-3 px-3'>
                    <div className='w-[25vw] h-[10vh] flex flex-row justify-center items-start px-2 shadow-md rounded-sm hover:text-cyan-500 '>
                        <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                            <p className='text-3xl font-bold'>
                                {users}
                            </p>
                            <p className='text-sm font-semibold px-1'>
                                Users
                            </p>
                        </div>
                        <div className='w-[30%] h-full flex justify-center items-center'>
                            <Users className='w-9 h-9' />
                        </div>
                    </div>
                    <div className='w-[25vw] h-[10vh] flex flex-row justify-center items-start px-2 shadow-md rounded-sm hover:text-cyan-500 '>
                        <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                            <p className='text-3xl font-bold'>
                                {benz}
                            </p>
                            <p className='text-sm font-semibold px-1'>
                                BenzCars
                            </p>
                        </div>
                        <div className='w-[30%] h-full flex justify-center items-center'>
                            <Car className='w-9 h-9' />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-row justify-center items-center gap-6 py-3 px-3'>
                    <div className='w-[25vw] h-[10vh] flex flex-row justify-center items-start px-2 shadow-md rounded-sm hover:text-cyan-500 '>
                        <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                            <p className='text-3xl font-bold'>
                                {bmw}
                            </p>
                            <p className='text-sm font-semibold px-1'>
                                BMWCars
                            </p>
                        </div>
                        <div className='w-[30%] h-full flex justify-center items-center'>
                            <Car className='w-9 h-9' />
                        </div>
                    </div>
                    <div className='w-[25vw] h-[10vh] flex flex-row justify-center items-start px-2 shadow-md rounded-sm hover:text-cyan-500 '>
                        <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                            <p className='text-3xl font-bold'>
                                {honda}
                            </p>
                            <p className='text-sm font-semibold px-1'>
                                HondaCars
                            </p>
                        </div>
                        <div className='w-[30%] h-full flex justify-center items-center'>
                            <Car className='w-9 h-9' />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-row justify-center items-center gap-6 py-3 px-3'>
                    <div className='w-[25vw] h-[10vh] flex flex-row justify-center items-start px-2 shadow-md rounded-sm hover:text-cyan-500 '>
                        <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                            <p className='text-3xl font-bold'>
                                {toyota}
                            </p>
                            <p className='text-sm font-semibold px-1'>
                                ToyotaCars
                            </p>
                        </div>
                        <div className='w-[30%] h-full flex justify-center items-center'>
                            <Car className='w-9 h-9' />
                        </div>
                    </div>
                    <div className='w-[25vw] h-[10vh] flex flex-row justify-center items-start px-2 shadow-md rounded-sm hover:text-cyan-500 '>
                        <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                            <p className='text-3xl font-bold'>
                                {volkswagen}
                            </p>
                            <p className='text-sm font-semibold px-1'>
                                volkswagenCars
                            </p>
                        </div>
                        <div className='w-[30%] h-full flex justify-center items-center'>
                            <Car className='w-9 h-9' />
                        </div>
                    </div>
                </div>

                <div className='w-full flex flex-row justify-center items-center gap-6 py-3 px-3'>
                    <div className='w-[25vw] h-[10vh] flex flex-row justify-center items-start px-2 shadow-md rounded-sm hover:text-cyan-500 '>
                        <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                            <p className='text-3xl font-bold'>
                                {usedcars}
                            </p>
                            <p className='text-sm font-semibold px-1'>
                                UsedCars
                            </p>
                        </div>
                        <div className='w-[30%] h-full flex justify-center items-center'>
                            <CarFront className='w-9 h-9' />
                        </div>
                    </div>
                    <div className='w-[25vw] h-[10vh] flex flex-row justify-center items-start px-2 shadow-md rounded-sm hover:text-cyan-500 '>
                        <div className='w-[70%] h-full flex flex-col justify-center items-start px-4'>
                            <p className='text-3xl font-bold'>
                                {orders}
                            </p>
                            <p className='text-sm font-semibold px-1'>
                                Orders
                            </p>
                        </div>
                        <div className='w-[30%] h-full flex justify-center items-center'>
                            <ShoppingBasket className='w-9 h-9' />
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default AdminDashboardHomeCards