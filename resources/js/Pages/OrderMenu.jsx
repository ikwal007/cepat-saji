import { Head, Link, router } from '@inertiajs/react'
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
    const [values, setValues] = useState({
        order_id: props.dataOrder.id,
        menu_id: null,
        quanty: 1,
    })

    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        router.post('/order-menu', values)
    }

    return (
        <div className="flex flex-wrap">
            <Head title="Order Menu" />
            <Nav props={props} />
            <div
                className={`fixed top-0 bottom-0 w-full z-50 bg-base-100 ${
                    cartShow == true ? 'flex' : 'hidden'
                }`}>
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
                                    <h3 className="font-bold">Total Price</h3>
                                    <div className="text-xs">
                                        Rp. {props.dataOrder.total_price}
                                    </div>
                                </div>
                            </div>
                            <div className="flex-none">
                                <Link href='/dashboard' className="btn btn-info text-white btn-sm">
                                    Pay
                                </Link>
                            </div>
                        </div>
                        <button
                            onClick={() => setCartShow(!cartShow)}
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
                    <div className="flex flex-col w-full items-center space-y-3">
                        {props.cartList.length > 0
                            ? props.cartList.map((data, i) => {
                                  return (
                                      <div
                                          key={i}
                                          className="card card-side bg-base-100 shadow-xl max-w-lg">
                                          <figure>
                                              <img
                                                  src={data.img}
                                                  alt={data.name}
                                              />
                                          </figure>
                                          <div className="card-body">
                                              <h2 className="card-title">
                                                  {data.name}
                                              </h2>
                                              <p>Rp. {data.price}</p>
                                              <div className="form-control">
                                                  <label className="label">
                                                      <span className="label-text">
                                                          Quanty
                                                      </span>
                                                  </label>
                                                  <label className="input-group">
                                                      <Link href={`/order-menu/${data.id}`} type='submit' as='button' method='delete' data={data} className='bg-info p-3'>-</Link>
                                                      <input
                                                          type="text"
                                                          value={data.quanty}
                                                          className="input input-bordered"
                                                          disabled={true}
                                                      />
                                                      <Link href={`/order-menu/${data.id}`} type='submit' as='button' method='put' data={data} className='bg-info p-3'>+</Link>
                                                  </label>
                                              </div>
                                              <div className="card-actions justify-end">
                                                  <button className="btn btn-primary">
                                                      Watch
                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                  )
                              })
                            : null}
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col w-full lg:flex-row p-5 md:p-0 md:px-20 md:py-32">
                    <div className="grid flex-grow h-20 card bg-base-300 rounded-box place-items-center font-bold uppercase">
                        total price Rp. {props.dataOrder.total_price}
                    </div>
                    <div className="divider lg:divider-horizontal">OR</div>
                    <button
                        onClick={() => setCartShow(!cartShow)}
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
                        {!props.food
                            ? null
                            : props.food.map((data, i) => {
                                  return (
                                      <SwiperSlide
                                          key={i}
                                          className="flex justify-center p-5">
                                          <form
                                              onSubmit={handleSubmit}
                                              className="card w-60 bg-base-100 shadow-xl">
                                              <figure className="px-10 pt-10">
                                                  <img
                                                      src={data.img}
                                                      alt="Shoes"
                                                      className="rounded-xl"
                                                  />
                                              </figure>
                                              <div className="card-body items-center text-center">
                                                  <h2 className="card-title">
                                                      {data.name}
                                                  </h2>
                                                  <p>Rp. {data.price}</p>
                                                  <div className="card-actions">
                                                      <button
                                                          id="menu_id"
                                                          value={data.id}
                                                          onClick={handleChange}
                                                          type="submit"
                                                          className={`btn btn-primary max-w-[150px]`}>
                                                          Add to cart
                                                      </button>
                                                  </div>
                                              </div>
                                          </form>
                                      </SwiperSlide>
                                  )
                              })}
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
                        {!props.drink
                            ? null
                            : props.drink.map((data, i) => {
                                  return (
                                      <SwiperSlide
                                          key={i}
                                          className="flex justify-center p-5">
                                          <form
                                              onSubmit={handleSubmit}
                                              className="card w-60 bg-base-100 shadow-xl">
                                              <figure className="px-10 pt-10">
                                                  <img
                                                      src={data.img}
                                                      alt="Shoes"
                                                      className="rounded-xl"
                                                  />
                                              </figure>
                                              <div className="card-body items-center text-center">
                                                  <h2 className="card-title">
                                                      {data.name}
                                                  </h2>
                                                  <p>Rp. {data.price}</p>
                                                  <div className="card-actions">
                                                      <button
                                                          id="menu_id"
                                                          value={data.id}
                                                          onClick={handleChange}
                                                          type="submit"
                                                          className="btn btn-primary max-w-[150px]">
                                                          Add to cart
                                                      </button>
                                                  </div>
                                              </div>
                                          </form>
                                      </SwiperSlide>
                                  )
                              })}
                    </Swiper>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OrderMenu
