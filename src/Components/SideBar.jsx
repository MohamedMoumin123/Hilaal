import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"; // Ensure this contains the appropriate styles for the sidebar

function AppSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Toggle button for mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 text-white bg-blue-500 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar p-2 lg:block ${isOpen ? "block" : "hidden"}`}
      >
        <div className="list-group list-group-flush">
          <span className="Information">Information</span>
          <hr />
          <a className="list-group-item py-2">
            <span>
              <Link to={"/home"} className="link">
                <i className="fa-solid fa-house fs-5 me-3"></i>
                Dashboard
              </Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <span>
              <Link to={"/users"} className="link">
                <i className="fa-solid fa-user fs-5 me-3"></i>
                Users
              </Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <span>
              <Link to={"/employe"}>
                <i className="fa-solid fa-users me-3"></i>
                Employees
              </Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <span>
              <Link to={"/services"} className="link">
                <i className="fas fa-cart-arrow-down fs-5 me-3"></i>
                Services
              </Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <span>
              <Link to={"/vehicles"} className="link">
                <i className="fas fa-subway fs-5 me-3"></i>
                Vehicles
              </Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <span>
              <Link to={"/drivers"} className="link">
                <i className="fas fa-car-crash fs-5 me-3"></i>
                Drivers
              </Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <span>
              <Link to={"/customers"} className="link">
                <i className="far fa-address-card fs-5 me-3"></i>
                Customers
              </Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <span>
              <Link to={"/bookings"} className="link">
                <i className="fa-solid fa-book fs-5 me-3"></i>
                Bookings
              </Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <span>
              <Link to={"/reports"} className="link">
                <i className="fa fa-file fs-5 me-3"></i>
                Reports
              </Link>
            </span>
          </a>
          <a className="list-group-item py-2">
            <span>
              <a href="/" className="link">
                <i className="fa-solid fa-arrow-right-from-bracket fs-5 me-3"></i>
                Logout
              </a>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AppSideBar;