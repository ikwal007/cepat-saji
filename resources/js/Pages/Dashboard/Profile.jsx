import DangerButton from '@/Components/DangerButton'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Modal from '@/Components/Modal'
import PrimaryButton from '@/Components/PrimaryButton'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import AuthDashboard from '@/Layouts/AuthDashboard'
import { Transition } from '@headlessui/react'
import { Head, useForm } from '@inertiajs/react'
import React, { useRef, useState } from 'react'
import UpdateInformation from './Partials/UpdateInformation'
import UpdatePassword from './Partials/UpdatePassword'

const Profile = (props, { mustVerifyEmail, status }) => {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false)
    const passwordInput = useRef()

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    })

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true)
    }

    const deleteUser = e => {
        e.preventDefault()

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        })
    }

    const closeModal = () => {
        setConfirmingUserDeletion(false)

        reset()
    }
    return (
        <AuthDashboard props={props}>
            <Head title="Profile" />
            <div className="space-y-6 p-5 w-full min-h-[300px]">
                <div className="space-y-3 rounded-xl p-5 w-full min-h-[300px] bg-orange-300 text-neutral">
                    <UpdateInformation
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />
                </div>
                <div className="space-y-3 rounded-xl p-5 w-full min-h-[300px] bg-orange-300 text-neutral">
                    <UpdatePassword />
                </div>
                <div className="space-y-3 rounded-xl p-5 w-full min-h-[300px] bg-orange-300 text-neutral">
                    <h2 className="text-lg font-bold">Delete Account</h2>
                    <p>
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Before deleting your
                        account, please download any data or information that
                        you wish to retain.
                    </p>
                    <button
                        onClick={confirmUserDeletion}
                        className="btn btn-error text-neutral">
                        Delete Account
                    </button>
                    <Modal show={confirmingUserDeletion} onClose={closeModal}>
                        <form onSubmit={deleteUser} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Are you sure you want to delete your account?
                            </h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Once your account is deleted, all of its
                                resources and data will be permanently deleted.
                                Please enter your password to confirm you would
                                like to permanently delete your account.
                            </p>

                            <div className="mt-6">
                                <InputLabel
                                    for="password"
                                    value="Password"
                                    className="sr-only"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    ref={passwordInput}
                                    value={data.password}
                                    handleChange={e =>
                                        setData('password', e.target.value)
                                    }
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    placeholder="Password"
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModal}>
                                    Cancel
                                </SecondaryButton>

                                <DangerButton
                                    className="ml-3"
                                    processing={processing}>
                                    Delete Account
                                </DangerButton>
                            </div>
                        </form>
                    </Modal>
                </div>
            </div>
        </AuthDashboard>
    )
}

export default Profile
