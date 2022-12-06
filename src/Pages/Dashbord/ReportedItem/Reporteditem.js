import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Reporteditem = () => {
    const [reportedBooks, setReportedBooks] = useState([])
    const [refresh, setRefresh] = useState(false)


    useEffect(() => {

        fetch('https://boi-bazar-server.vercel.app/getReportItem')
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setReportedBooks(data.data)

                }
            })
            .catch(error => console.error(error))

    }, [refresh])


    const deleteReportedItem = (id) => {
        const DeleteConfirm = window.confirm('Are you sure want to delete ?')
        if (DeleteConfirm) {
            fetch(`https://boi-bazar-server.vercel.app/myProduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.status) {
                        setRefresh(!refresh)
                        toast.success('Deleted Success')
                    }
                })
                .catch(error => console.error(error))
        }
    }

    return (
        <div>
            <h2 className='text-center font-bold text-3xl mb-10'>Reported Products</h2>
            {
                reportedBooks?.length ?
                    <>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reportedBooks?.map((book, i) => {
                                            return <tr key={book._id}>
                                                <th>{i + 1}</th>
                                                <td>{book.productName}</td>
                                                <td>{book.price}</td>
                                                <td>available</td>
                                                <td><button onClick={() => deleteReportedItem(book._id)} className='btn btn-sm'>Delete</button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    </>
                    :
                    <>
                        <h2 className='text-2xl text-center font-semibold'>No Reported Products</h2>
                    </>
            }
        </div>
    );
};

export default Reporteditem;