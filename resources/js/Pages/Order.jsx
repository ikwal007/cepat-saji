import Footer from '@/Components/Footer/Footer'
import Nav from '@/Components/Navbar/Nav'
import { Head, Link } from '@inertiajs/inertia-react'
import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'

const Order = props => {

    return (
        <div className="flex flex-wrap">
            <Head title="Find restorant" />
            <Nav props={props} />
            <div className="flex flex-wrap w-full h-screen">
                <div className="w-full justify-center items-center flex flex-col space-y-4">
                    <h1 className="uppercase text-center font-bold text-lg">
                        order data
                    </h1>
                    <input
                        type="text"
                        placeholder="nama anda"
                        className="input input-bordered input-warning w-full max-w-xs"
                        value={props.auth.user.name}
                        disabled={true}
                    />
                    <input
                        type="text"
                        placeholder='Alamat anda sekarang'
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                    <Link href='/order-menu' className="btn gap-2 btn-warning text-base-100">
                        Go Menu Order
                        <HiShoppingCart className="w-6 h-6" />
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Order
