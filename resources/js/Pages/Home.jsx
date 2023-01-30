import Visi from '@/Components/Card/Visi'
import Auth from '@/Layouts/Auth'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { IoLogoAppleAppstore, IoLogoGooglePlaystore } from 'react-icons/io5'
import { MdNavigateNext } from 'react-icons/md'

const Home = props => {
    const dataCard = [
        {
            icon: 'FaMotorcycle',
            judul: 'pengataran cepat',
            isi: 'pengantaran ketempat anda dibawah 30min',
        },
        {
            icon: 'BsFillCartFill',
            judul: 'Pengambilan',
            isi: 'Pengambilan pesanan anda sangat mudah',
        },
        {
            icon: 'ImSpoonKnife',
            judul: 'nikmati makanan anda',
            isi: 'Makan tanpa ribet',
        },
    ]
    const dataCard2 = [
        {
            icon: 'FaMotorcycle',
            judul: 'pengataran cepat',
            isi: 'pengantaran ketempat anda dibawah 30min',
        },
        {
            icon: 'BsFillCartFill',
            judul: 'Pengambilan',
            isi: 'Pengambilan pesanan anda sangat mudah',
        },
    ]
    return (
        <Auth props={props}>
            <Head title="Home" />
            <div className="flex flex-wrap min-h-screen">
                <div className="flex flex-wrap w-full md:mx-20 mx-5 lg:mt-20 md:mt-10 mt-5">
                    <div className="flex flex-wrap lg:w-[70%] w-full">
                        <div className="flex items-center md:w-[50%] w-full">
                            <div className="flex flex-wrap space-y-3 capitalize">
                                <h1 className="md:text-5xl text-lg font-bold">
                                    pengiriman{' '}
                                    <span className="text-orange-400">
                                        tercepat
                                    </span>{' '}
                                    & pengambilan{' '}
                                    <span className="text-orange-400">
                                        mudah
                                    </span>
                                </h1>
                                <div className="flex space-x-3 ml-3 py-3 items-center">
                                    <div className="avatar placeholder">
                                        <div className="bg-base-300 text-neutral-content rounded-full w-8 h-8">
                                            <img src="/assets/imgs/static/art-model3.svg" />
                                        </div>
                                    </div>
                                    <p className="text-xs font-semibold pr-3">
                                        Kamu malas memasak, sekarang kamu bisa
                                        memesan disini untuk makan
                                    </p>
                                </div>
                                <Link href='/find-restorant' className="btn btn-success text-base-100 capitalize px-4 py-3">
                                    <span>
                                        <BsSearch />
                                    </span>
                                    <span className="divider divider-horizontal"></span>
                                    <span >find restorant</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-center items-center md:w-[50%] w-full mt-5 md:mt-0">
                            <img
                                src="/assets/imgs/static/art-model2.svg"
                                className="w-60 h-60"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap md:justify-center items-center lg:w-[30%] w-full lg:mt-0 md:mt-10 mt-5">
                        <div>
                            {/* isi */}
                            {dataCard.length > 0
                                ? dataCard.map((data, i) => {
                                      return (
                                          <Visi
                                              key={i}
                                              icon={data.icon}
                                              title={data.judul}
                                              body={data.isi}
                                          />
                                      )
                                  })
                                : null}
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap w-full md:mx-20 mx-5 bg-orange-500 mt-32 min-h-[400px] lg:h-[400px] rounded-3xl md:justify-between lg:justify-center items-center lg:space-x-6">
                    <div className="md:flex lg:absolute lg:left-4 md:w-2/4 w-full mt-10 md:mt-0">
                        <img src="/assets/imgs/static/hp.png" />
                    </div>
                    <div className="flex flex-wrap lg:w-[30%] md:w-2/4 w-full z-10 md:space-y-5 md:justify-center pt-10 md:pt-0">
                        <div className="flex flex-wrap md:justify-center space-y-6 md:w-full w-full justify-center text-center">
                            <h2 className="capitalize text-3xl font-bold text-base-100 md:text-center">
                                unduh aplikasi sekarang juga
                            </h2>
                            <div className="avatar-group -space-x-6">
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-12">
                                        <img src="https://placeimg.com/192/192/people" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex flex-wrap justify-center items-end lg:absolute w-full lg:w-[30%] lg:h-[400px] space-y-3 md:space-y-0 md:space-x-3 lg:space-x-6 lg:right-0 lg:-bottom-[300px] mx-20 md:mx-0 my-10 md:my-0">
                            <div className="lg:w-1/5 lg:h-28 bg-base-100 rounded-full md:rounded-full lg:rounded-none lg:rounded-t-full flex flex-wrap justify-center items-center text-orange-500 py-3">
                                <IoLogoGooglePlaystore className="md:w-full lg:w-8 lg:h-8" />
                                <span className="font-bold">PlayStore</span>
                            </div>
                            <div className="lg:w-1/5 lg:h-28 bg-base-100 rounded-full md:rounded-full lg:rounded-none lg:rounded-t-full flex flex-wrap justify-center items-center text-orange-500 py-3">
                                <IoLogoAppleAppstore className="md:w-full lg:w-8 lg:h-8" />
                                <span className="font-bold">AppStore</span>
                            </div>
                            <div className="md:flex hidden md:absolute md:bottom-16 md:right-10 lg:-top-20 lg:right-0 md:w-24 lg:w-48 lg:h-48 bg-base-100 rounded-full">
                                <img
                                    src="/assets/imgs/static/pizza-sosis-jamur-sayur.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap w-full min-h-[300px] mx-5 md:mx-20 mt-32 capitalize">
                    <div className="w-full md:w-2/4 font-bold text-2xl md:text-4xl pr-48">
                        menu
                        <span className="text-orange-400"> yang banyak </span>
                        dipesan
                    </div>
                    <div className="w-full md:w-2/4 font-thin flex items-center pr-10">
                        ini bukan tentang makanan yang terbaik tetapi makanan
                        yang membuat kamu mendapatkan pengalaman.
                    </div>
                    <div className="w-full flex flex-wrap items-center justify-center py-8 text-centet">
                        <div className="w-full md:w-2/4 lg:w-96 bg-base-100 flex flex-wrap">
                            <figure className="w-full flex justify-center items-center">
                                <img
                                    src="/assets/imgs/static/lasagna.png"
                                    alt=""
                                    className="w-32 min-h-[128px] p-3 bg-green-500 rounded-full shadow-lg shadow-green-700"
                                />
                            </figure>
                            <h2 className="w-full text-center font-bold text-xl mt-3">
                                lasagna
                            </h2>
                            <p className="w-full font-extralight text-orange-500 flex items-center justify-center py-3">
                                pesan sekarang{' '}
                                <MdNavigateNext className="h-6 w-6 text-orange-500" />
                            </p>
                        </div>
                        <div className="full md:w-2/4 lg:w-96 bg-base-100 flex flex-wrap">
                            <figure className="w-full flex justify-center items-center">
                                <img
                                    src="/assets/imgs/static/pizza-keju-tomat.png"
                                    alt=""
                                    className="w-32 min-h-[128px] p-3 bg-orange-500 rounded-full shadow-lg shadow-orange-700"
                                />
                            </figure>
                            <h2 className="w-full text-center font-bold text-xl mt-3">
                                pizza keju tomat
                            </h2>
                            <p className="w-full font-extralight text-orange-500 flex items-center justify-center py-3">
                                pesan sekarang
                                <MdNavigateNext className="h-6 w-6 text-orange-500" />
                            </p>
                        </div>
                        <div className="w-full md:w-2/4 lg:w-96 bg-base-100 flex flex-wrap">
                            <figure className="w-full flex justify-center items-center">
                                <img
                                    src="/assets/imgs/static/jus-jeruk.png"
                                    alt=""
                                    className="w-32 min-h-[128px] p-3 bg-yellow-400 rounded-full shadow-lg shadow-yellow-600"
                                />
                            </figure>
                            <h2 className="w-full text-center font-bold text-xl mt-3">
                                orange jus
                            </h2>
                            <p className="w-full font-extralight text-orange-500 flex items-center justify-center py-3">
                                pesan sekarang{' '}
                                <MdNavigateNext className="h-6 w-6 text-orange-500" />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap md:items-center md:justify-between w-full min-h-[400px] bg-neutral mt-32 py-5 px-5 md:px-20 text-base-100">
                    <div className="w-full md:w-[30%] text-center md:text-left">
                        <h2 className="font-bold text-2xl md:text-4xl">
                            pengantaran{' '}
                            <span className="text-orange-600">
                                cepat didalam
                            </span>{' '}
                            kota
                        </h2>
                        <p className="mt-10 text-right md:text-left">
                            pengantaran dibawah waktu 30min setelah selesai
                            pemasakan
                        </p>
                    </div>
                    <div className="mx-auto w-[80%] md:w-[30%]">
                        <figure>
                            <img src="/assets/imgs/static/pizza-sayur-keju.png" alt="" />
                        </figure>
                    </div>
                    <div className="w-full md:w-[30%]">
                        {dataCard2.length > 0
                            ? dataCard2.map((data, i) => {
                                  return (
                                      <Visi
                                          key={i}
                                          icon={data.icon}
                                          title={data.judul}
                                          body={data.isi}
                                      />
                                  )
                              })
                            : null}
                    </div>
                </div>
                <div className="flex flex-wrap lg:mx-20 mx-5 mt-32 mb-32 w-full min-h-[500px]">
                    <h1 className="font-black text-4xl text-center w-full">
                        Promo <span className="text-orange-500">hari</span> ini
                    </h1>
                    <div className="flex flex-wrap w-full min-h-[400px] md:justify-center lg:justify-between">
                        <figure className="w-full lg:w-[50%] p-5">
                            <img
                                src="/assets/imgs/static/promo1.jpg"
                                className="lg:h-[400px] w-full"
                            />
                        </figure>
                        <div className="lg:w-[50%] space-y-10 lg:space-y-0 p-5 flex flex-wrap">
                            <figure className="w-full">
                                <img
                                    src="/assets/imgs/static/promo2.jpg"
                                    className="w-full h-[200px]"
                                />
                            </figure>
                            <figure className="w-full">
                                <img
                                    src="/assets/imgs/static/promo3.jpg"
                                    className="w-full h-[200px]"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </Auth>
    )
}

export default Home
