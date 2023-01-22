import { Head } from '@inertiajs/inertia-react'
import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, Mousewheel } from 'swiper/core'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Nav from '@/Components/Navbar/Nav'
import Footer from '@/Components/Footer/Footer'
import { HiShoppingCart } from 'react-icons/hi'

SwiperCore.use([Pagination, Navigation])

const OrderMenu = props => {
    const [swiperRef, setSwiperRef] = useState(null)
    const [cartShow, setCartShow] = useState(false)
    const [cartDataFood, setCartDataFood] = useState([])
    const [cartDataDring, setCartDataDring] = useState([])

    const [addProduct, setAddProduct] = useState({
        productName: '',
        productPrice: '',
        quantity: 1,
    })

    const handleUpdateProduct = e => {
        e.preventDefault()
        setCartDataFood([...cartDataFood, addProduct])
        setAddProduct({
            productName: '',
            productPrice: '',
            quantity: 1,
        })
    }

    console.log('ini cart data', cartDataFood)

    return (
        <div className="flex flex-wrap">
            <Head title="Order Menu" />
            <Nav props={props} />
            {cartShow == true ? (
                <div className="absolute flex top-0 bottom-0 w-full z-50 bg-base-100">
                    <div className="flex flex-col w-full space-y-3 p-5 overflow-y-scroll">
                        <div className="w-full flex justify-between items-center space-x-6 mb-10">
                            <div className="alert shadow-lg">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="stroke-info flex-shrink-0 w-6 h-6">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    <div>
                                        <h3 className="font-bold">
                                            Total Price
                                        </h3>
                                        <div className="text-xs">
                                            Rp. 150000
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-none">
                                    <button className="btn btn-info text-white btn-sm">
                                        See
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => setCartShow(false)}
                                className="btn btn-outline btn-info group btn-circle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 group-hover:text-base-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                                content
                            </div>
                            <div className="divider"></div>
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                                content
                            </div>
                            <div className="divider"></div>
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                                content
                            </div>
                            <div className="divider"></div>
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                                content
                            </div>
                            <div className="divider"></div>
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                                content
                            </div>
                            <div className="divider"></div>
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                                content
                            </div>
                            <div className="divider"></div>
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                                content
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-full">
                    <div className="flex flex-col w-full lg:flex-row p-5 md:p-0 md:px-20 md:py-32">
                        <div className="grid flex-grow h-20 card bg-base-300 rounded-box place-items-center font-bold uppercase">
                            total price Rp. 100000
                        </div>
                        <div className="divider lg:divider-horizontal">OR</div>
                        <button
                            onClick={() => setCartShow(true)}
                            className="grid flex-grow h-20 card bg-base-300 hover:bg-info hover:text-base-100 transition duration-700 ease-in-out rounded-box place-items-center">
                            <HiShoppingCart className="w-8 h-8" />
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center space-y-5 p-5 md:p-0 md:px-20 md:py-32 min-h-[300px]">
                        <h3 className="font-bold text-xl uppercase">Makanan</h3>
                        <Swiper
                            onSwiper={setSwiperRef}
                            slidesPerView={1}
                            centeredSlides={true}
                            spaceBetween={80}
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            className="w-full">
                            <SwiperSlide className="flex justify-center p-5">
                                <form
                                    onSubmit={handleUpdateProduct}
                                    className="card w-60 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="/assets/imgs/static/pizza-sayur.png"
                                            alt="Shoes"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">pizza</h2>
                                        <input
                                            defaultValue={'pizza'}
                                            onSubmi={e =>
                                                setAddProduct({
                                                    ...addProduct,
                                                    productName: e.target.defaultValue,
                                                })
                                            }
                                            type="hidden"
                                            className="input input-bordered w-full max-w-xs"
                                            disabled={true}
                                        />
                                        <p>Rp. 50000</p>
                                        <input
                                            defaultValue={50000}
                                            onChange={e =>
                                                setAddProduct({
                                                    ...addProduct,
                                                    productPrice:
                                                        e.target.defaultValue,
                                                })
                                            }
                                            type="hidden"
                                            className="input input-bordered w-full max-w-xs"
                                            disabled={true}
                                        />
                                        <div className="card-actions">
                                            <button type='submit'
                                                className="btn btn-primary">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center p-5">
                                <div className="card w-60 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="/assets/imgs/static/pizza-sayur-keju.png"
                                            alt="Shoes"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">pizza</h2>
                                        <p>Rp. 50000</p>
                                        <div className="card-actions">
                                            <button
                                                onClick={() =>
                                                    setCartDataFood([
                                                        {
                                                            nama: 'pizza-keju',
                                                            price: '70000',
                                                        },
                                                    ])
                                                }
                                                className="btn btn-primary">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center p-5">
                                <div className="card w-60 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="/assets/imgs/static/pizza-keju-tomat.png"
                                            alt="Shoes"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">pizza</h2>
                                        <p>Rp. 50000</p>
                                        <div className="card-actions">
                                            <button
                                                onClick={() =>
                                                    setCartDataFood([
                                                        {
                                                            nama: 'pizza-keju',
                                                            price: '50000',
                                                        },
                                                    ])
                                                }
                                                className="btn btn-primary">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex flex-wrap justify-center space-y-5 p-5 md:p-0 md:px-20 md:py-32 min-h-[300px]">
                        <h3 className="font-bold text-xl uppercase">Minuman</h3>
                        <Swiper
                            onSwiper={setSwiperRef}
                            slidesPerView={1}
                            centeredSlides={true}
                            spaceBetween={80}
                            pagination={{
                                type: 'fraction',
                            }}
                            navigation={true}
                            className="w-full">
                            <SwiperSlide className="flex justify-center p-5">
                                <div className="card w-60 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="/assets/imgs/static/jus-jeruk.png"
                                            alt="Shoes"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">pizza</h2>
                                        <p>Rp. 50000</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center p-5">
                                <div className="card w-60 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="/assets/imgs/static/cocacola.png"
                                            alt="Shoes"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">pizza</h2>
                                        <p>Rp. 50000</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex justify-center p-5">
                                <div className="card w-60 bg-base-100 shadow-xl">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src="/assets/imgs/static/jus-mangga-alpukat.png"
                                            alt="Shoes"
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">pizza</h2>
                                        <p>Rp. 50000</p>
                                        <div className="card-actions">
                                            <button className="btn btn-primary">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    )
}

export default OrderMenu
