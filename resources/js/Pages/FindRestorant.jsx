import { Head, Link } from '@inertiajs/inertia-react'
import React from 'react'
import Nav from '@/Components/Navbar/Nav'
import Footer from '@/Components/Footer/Footer'

const FindRestorant = props => {
    return (
        <div className="flex flex-wrap">
            <Head title="Find restorant" />
            <Nav props={props} />
            <div className="flex flex-wrap w-full">
                <form className="flex flex-wrap justify-center md:items-center md:space-y-0 md:space-x-3 space-y-3 w-full min-h-[400px] m-5 md:mx-20 md:mb-32">
                    <div className="flex flex-wrap w-full items-center">
                        <div className="alert alert-info shadow-lg text-base-100">
                            <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="stroke-current flex-shrink-0 w-6 h-6">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>
                                    Pilih Restorant yang terdekat dengan anda
                                </span>
                            </div>
                        </div>
                    </div>
                    <select className="select select-warning w-full max-w-xs md:max-w-md lg:max-w-4xl">
                        <option value={null}>Pick a Restorant</option>
                        <option>Cheese</option>
                        <option>Veggie</option>
                        <option>Pepperoni</option>
                        <option>Margherita</option>
                        <option>Hawaiian</option>
                    </select>
                    <Link href='/order' className="btn btn-warning text-base-100">
                        Get Order
                    </Link>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default FindRestorant
