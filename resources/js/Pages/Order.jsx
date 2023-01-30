import Footer from '@/Components/Footer/Footer'
import Nav from '@/Components/Navbar/Nav'
import { Head, Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import { HiShoppingCart } from 'react-icons/hi'

const Order = props => {
    const [values, setValues] = useState({
        name: props.auth.user.id,
        myAddress: '',
        findRestorant: parseInt(props.findRestorant),
        totalPrice: 0
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
        router.post('/create-order', values)
      }
    
    return (
        <div className="flex flex-wrap">
            <Head title="Find restorant" />
            <Nav props={props} />
            <div className="flex flex-wrap w-full h-screen">
                <form className="w-full justify-center items-center flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <h1 className="uppercase text-center font-bold text-lg">
                        order data
                    </h1>
                    <input
                        type="text"
                        placeholder="nama anda"
                        className="input input-bordered input-warning w-full max-w-xs"
                        defaultValue={props.auth.user.name}
                        disabled={true}
                    />
                    <input
                        id='myAddress'
                        type="text"
                        placeholder="Alamat anda sekarang"
                        className="input input-bordered input-warning w-full max-w-xs"
                        defaultValue={values.myAddress}
                        onChange={handleChange}
                    />
                    <button
                        type='submit'
                        className="btn gap-2 btn-warning text-base-100">
                        Go Menu Order
                        <HiShoppingCart className="w-6 h-6" />
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Order
