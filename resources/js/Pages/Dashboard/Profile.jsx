import AuthDashboard from '@/Layouts/AuthDashboard'
import { Head } from '@inertiajs/inertia-react'
import React from 'react'

const Profile = props => {
    return (
        <AuthDashboard props={props}>
            <Head title='Profile' />
            <div className="space-y-6 p-5 w-full min-h-[300px]">
                <div className="space-y-3 rounded-xl p-5 w-full min-h-[300px] bg-orange-300 text-neutral">
                    <h2 className="text-lg font-bold">Profile Information</h2>
                    <p>
                        Update your account's profile information and email
                        address.
                    </p>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-neutral">
                                Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-accent input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-neutral">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            placeholder="Type here"
                            className="input input-accent input-bordered w-full max-w-xs"
                        />
                    </div>
                    <button className="btn btn-success text-neutral">
                        Save
                    </button>
                </div>
                <div className="space-y-3 rounded-xl p-5 w-full min-h-[300px] bg-orange-300 text-neutral">
                    <h2 className="text-lg font-bold">Update Password</h2>
                    <p>
                        Ensure your account is using a long, random password to
                        stay secure.
                    </p>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-neutral">
                                Current Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Type here"
                            className="input input-accent input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-neutral">
                                New Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Type here"
                            className="input input-accent input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-neutral">
                                Confirm Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Type here"
                            className="input input-accent input-bordered w-full max-w-xs"
                        />
                    </div>
                    <button className="btn btn-success text-neutral">
                        Save
                    </button>
                </div>
                <div className="space-y-3 rounded-xl p-5 w-full min-h-[300px] bg-orange-300 text-neutral">
                    <h2 className="text-lg font-bold">Delete Account</h2>
                    <p>
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Before deleting your
                        account, please download any data or information that
                        you wish to retain.
                    </p>
                    <button className="btn btn-error text-neutral">
                        Delete Account
                    </button>
                </div>
            </div>
        </AuthDashboard>
    )
}

export default Profile
