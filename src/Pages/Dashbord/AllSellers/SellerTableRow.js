import React from 'react';

const SellerTableRow = ({ seller, deleteSeller, setVerified }) => {

    const handleDeleteSeller = () => {
        deleteSeller(seller._id)
    }

    const handleVerify = () => {
        setVerified(seller._id)
    }

    return (
        <tr className="hover">
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={seller.userPhoto} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-1 '>
                        <div className="font-semibold text-xl">{seller.userName}
                        </div>
                        {
                            seller.verify === true && <div className="avatar">
                                <div className="w-5 h-5 rounded-full">
                                    <img src="https://cdn-icons-png.flaticon.com/128/6520/6520110.png" alt="" />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </td>
            <td>
                {seller.userEmail}
            </td>
            <td>
                {
                    seller.verify === true ?
                        <p className="badge badge-primary p-3 ">Verified</p>
                        :
                        <button onClick={handleVerify} className='btn btn-sm'>Verify</button>
                }



            </td>
            <td><button onClick={handleDeleteSeller} className="btn btn-active btn-secondary btn-xs">Delete</button></td>

        </tr>
    );
};

export default SellerTableRow;