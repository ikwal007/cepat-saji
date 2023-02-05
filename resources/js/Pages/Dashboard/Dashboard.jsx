import AuthDashboard from '@/Layouts/AuthDashboard'
import { Head } from '@inertiajs/react'
import React from 'react'

const Dashboard = props => {
    console.log(props)
    return (
        <AuthDashboard props={props}>
            <Head title="Dashboard" />
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
                                {props.mainData
                                    ? props.mainData.dataListMenu.map(
                                          (data, i) => {
                                              return (
                                                  <tr key={i}>
                                                      <th>{i+1}</th>
                                                      <td>{data.name}</td>
                                                      <td>{data.quanty}</td>
                                                      <td>{data.subPrice}</td>
                                                  </tr>
                                              )
                                          },
                                      )
                                    : null}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>Total Price</th>
                                    <th>Rp. {props.mainData.dataTotalPrice}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </AuthDashboard>
    )
}

export default Dashboard
