import React from 'react';
import { Link } from 'react-router-dom';

const OrdersTableRow = ({ myOrder }) => {

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={myOrder.productPhoto} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{myOrder.productName}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>
                {myOrder.productPrice}
            </td>
            <td>

                {
                    myOrder.status === 'Sold' ?
                        <>
                            <p className='text-green-400 font-bold md:ml-2'>Paid</p>
                        </>
                        :
                        <>
                            <Link to={`/dashbord/payment/${myOrder._id}`}> <button className='btn btn-sm'>Pay</button></Link>
                        </>
                }




            </td>


        </tr>
    );
};

export default OrdersTableRow;