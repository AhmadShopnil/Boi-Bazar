import React, { useState } from 'react';

const BuyerTableRow = ({ buyer, deleteBuyer }) => {


    const handleDeleteBuyer = () => {
        deleteBuyer(buyer._id)
    }

    return (
        <tr className="hover">

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={buyer.userPhoto} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{buyer.userName}</div>
                        <div className="text-sm opacity-50">{buyer.userEmail}</div>
                    </div>
                </div>
            </td>
            <td>
                {buyer.userEmail}
            </td>
            <td><button onClick={handleDeleteBuyer} className="btn btn-active btn-secondary btn-xs">Delete</button></td>

        </tr>
    );
};

export default BuyerTableRow;