import { IndianRupee, X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { addOrder } from '../api/api'
import { toast } from 'sonner'

const HondaCarsCards = ({ name, img, price, description ,auth,uid,pid}) => {
    const [showPurchase, setShowPurchase] = useState(false)
    const phoneRef = useRef(0)
    const addressRef = useRef('')
    const handleBuy = async (e) => {
        e.preventDefault()
        const order = {
            uid: uid,
            pid: pid,
            total: price,
            phone: phoneRef.current.value,
            address: addressRef.current.value
        }
        try {
            const response = await addOrder(order)
            if (response.status === 200) {
                toast.success("Order Placed")
                setShowPurchase(false)
            }
        } catch (error) {
            toast.error("Error while placing order")
            console.log(error)
        }
    }
  return (
    <>
    <div className="w-full px-8 h-55 flex flex-col justify-center gap-2 bg-white rounded-lg shadow-black shadow-sm p-2">
                <div className="flex gap-2">
                    <div className=" relative mx-4 -mt-6 overflow-hidden rounded-x bg-clip-border shadow-lg text-white w-1/2 h-[40%]">
                        <img src={img} alt={name} className="bg-purple-200 w-full h-45 shrink-0 rounded-lg" />
                    </div>
                    <div className=" w-1/2 h-[40%] flex flex-col gap-3 text-black">
                        <h3 className="font-bold text-3xl">{name}</h3>
                        <p className=" font-sans  leading-relaxed text-inherit antialiased flex flex-row text-lg items-center">
                            <IndianRupee className='h-5 w-6' /> {price}
                        </p>
                        <div className=" pt-0 w-full">
                            <button type="button" className=" w-full hover:bg-black bg-gray-700 font-bold text-white rounded p-2" onClick={() => { setShowPurchase(!showPurchase) }}>
                                Order Now
                            </button>
                        </div>
                        <div className="w-[full] ">
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            {showPurchase && (
                <>
                    <div className="absolute top-0 left-0 z-50 h-screen w-screen flex justify-center items-center bg-black/40 ">
                        <div className='h-[55%] w-1/3 flex flex-col justify-center items-center bg-white shadow-2xl rounded-md'>
                            <div className='h-full w-full flex flex-col justify-center items-center text-lg font-semibold'>
                                <div className="h-[20%] w-[80%] flex flex-row justify-center items-center">
                                    <h1 className='w-1/2 text-left text-xl my-6 font-bold text-cyan-500'>Complete Purchase</h1>
                                    <div className="w-1/2 flex justify-end items-center text-red-500 cursor-pointer" onClick={() => { setShowPurchase(!showPurchase) }}>
                                        <X className="h-8 w-8 border-2 p-1  border-red-500 rounded-full  hover:bg-red-500 hover:text-white" />
                                    </div>
                                </div>
                                <form className='h-[70%] w-[80%] flex flex-col justify-center items-center gap-8' onSubmit={handleBuy}>
                                    <input ref={phoneRef} type="number" name="" id="phone" placeholder='Phone' className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm' required autoFocus />
                                    <textarea ref={addressRef} name="" id="address" className='w-full shadow-sm outline-none bg-[#f5f5f7] border-b-2 border-transparent p-4 focus:shadow-lg focus:border-b-2 focus:border-cyan-400 rounded-sm ' cols='8' rows='6' placeholder='Shipping Address' />
                                    <button type="submit" className="w-full h-[3rem]  shadow-lg shadow-gray-400 hover:shadow-cyan-400 bg-cyan-500 text-white rounded-sm outline-none">Complete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )

            }
    </>
  )
}

export default HondaCarsCards