import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useRole from '../hooks/useRole';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar';

const DashboardLayOut = () => {
    const { user } = useContext(AuthContext)
    const [userRole] = useRole(user?.email)

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile mb-6 ">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-2 md:px-20 ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4  w-2/5  md:w-52 bg-base-200 shadow-xl md:card  text-base-content">

                        {
                            userRole === 'admin' && <>
                                <li><Link to='/dashbord/allsellers'>All Sellers</Link></li>
                                <li><Link to='/dashbord/allBuyers'>All Buyers</Link></li>
                                <li><Link to='/dashbord/reportedItem'>Reported Item</Link></li>

                            </>
                        }
                        {
                            userRole === 'Seller' && <>
                                <li><Link to='/dashbord/addbook'>Add Book</Link></li>
                                <li><Link to='/dashbord/myproducts'>My Products</Link></li>
                            </>
                        }
                        {
                            userRole === 'Buyer' && <>
                                <li><Link to='/dashbord/myorders'>My Orders</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default DashboardLayOut;