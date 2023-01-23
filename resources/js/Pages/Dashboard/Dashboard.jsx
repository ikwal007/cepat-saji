import AuthDashboard from '@/Layouts/AuthDashboard'
import React from 'react'

const Dashboard = props => {
    return (
        <AuthDashboard props={props}>
            <div className="space-y-6 p-5 w-full min-h-[300px]">
                <div className="space-y-3 rounded-xl p-5 w-full min-h-[300px] bg-orange-300 text-neutral">
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Quanty</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>pizza tomat</td>
                                    <td>3</td>
                                    <td>300000</td>
                                </tr>
                                <tr>
                                    <th>2</th>
                                    <td>Burger</td>
                                    <td>2</td>
                                    <td>100000</td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>cocacola 3L</td>
                                    <td>3</td>
                                    <td>100000</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Total Price</th>
                                    <th>Rp. 500000</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="flex justify-center items-center space-y-3 rounded-xl p-5 w-full min-h-[300px] bg-orange-300 text-neutral">
                    <ul className="steps steps-vertical lg:steps-horizontal">
                        <li className="step step-primary">Order</li>
                        <li className="step step-primary">Cooking</li>
                        <li className="step">Driving</li>
                        <li className="step">Finis</li>
                    </ul>
                </div>
            </div>
        </AuthDashboard>
    )
}

export default Dashboard
