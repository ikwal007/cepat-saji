import { Head, Link } from '@inertiajs/react'
import React, { useState } from 'react'
import Nav from '@/Components/Navbar/Nav'
import Footer from '@/Components/Footer/Footer'
import { router } from '@inertiajs/react'

const FindRestorant = props => {
    const [values, setValues] = useState({
        id: '',
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
        router.post('/order', values)
    }
    return (
        <div className="flex flex-wrap">
            <Head title="Find restorant" />
            <Nav props={props} />
            <div className="flex flex-wrap w-full">
                <form
                    className="flex flex-wrap justify-center md:items-center md:space-y-0 md:space-x-3 space-y-3 w-full min-h-[400px] m-5 md:mx-20 md:mb-32"
                    onSubmit={handleSubmit}>
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
                    <select
                        id="id"
                        className="select select-warning w-full max-w-xs md:max-w-md lg:max-w-4xl"
                        defaultValue={values.id}
                        onChange={handleChange}
                        required>
                        <option value="">Pick a Restorant</option>
                        {!props.allRestorant
                            ? null
                            : props.allRestorant.map((data, i) => {
                                  return (
                                      <option key={i} value={data.id}>
                                          {data.address}
                                      </option>
                                  )
                              })}
                    </select>
                    <button
                        type="submit"
                        className="btn btn-warning text-base-100">
                        Get Order
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default FindRestorant
