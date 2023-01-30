import Guest from '@/Layouts/Guest'
import { Link, Head } from '@inertiajs/react'
import ReactTypingEffect from 'react-typing-effect'

export default function Welcome(props) {
    return (
        <Guest props={props}>
            <Head title="Welcome" />
            <div className="flex lg:flex-wrap flex-wrap-reverse min-h-screen mx-5 md:mx-20 mb-10 md:pt-20 pt-10">
                <div className="lg:w-2/4 w-full flex flex-wrap items-center">
                    <div>
                        <h1 className="lg:text-7xl md:text-6xl text-3xl font-black lg:mb-5 md:mb-3 mb-1">
                            <ReactTypingEffect
                                text={[
                                    'Selamat datang di cepat saji',
                                    'Welcome to cepat saji',
                                    'مرحبا بكم في بيتزا غو',
                                    'ピザゴーへようこそ',
                                ]}
                            />
                        </h1>
                        <p className="mb-3 lg:text-4xl md:text-2xl text-xl">
                            Order sekarang menu kami
                        </p>
                        <Link href='/find-restorant' className="btn btn-accent text-base-100">
                            Order
                        </Link>
                    </div>
                </div>
                <div className="lg:w-2/4 w-full items-center flex">
                    <figure className='flex md:justify-end justify-center'>
                        <img
                            src="/assets/imgs/static/art-model.svg"
                            className="lg:w-full w-2/4"
                        />
                    </figure>
                </div>
            </div>
        </Guest>
    )
}
