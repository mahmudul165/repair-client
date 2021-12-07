import axios from "axios";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import useAuth from "../../Hook/useAuth";

const MyOrder = () => {
  const { user } = useAuth();
  const [orders, setOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [orders]);
  const handleDelete = (id) => {
    alert("Are You Sure To DELETE this ORDER");
    axios.delete(`http://localhost:5000/orders/${id}`, orders).then((res) => {
      const remaining = orders.filter((order) => order._id !== id);
      setOrder(remaining);
    });
  };
  // react animation

  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 0, color: "red" },
  });

  return (
    <div className="my-3 py-2">
      {/* this animation work on my local server but not animated all time  in heroku server in SLOW INTERNET */}
      <animated.div style={styles}>
        <h4 className="text-warning  text-center my-3 py-2">
          My All Order Items
        </h4>
      </animated.div>

      {orders.map((order) => (
        <>
          {user.displayName == order?.data?.customer_name && (
            <>
              <div className="container px-3  py2">
                <div className="row gx-3 gy-3">
                  <div className="col  ">
                    <div className="p-3 border bg-light ">
                      <div className=" gx-3 gy-3 " key={order._id}>
                        <h3>
                          <span>
                            <i className="fas fa-user"></i>
                          </span>
                        </h3>
                        <h4 className="text-primary">
                          {order?.data?.customer_name}
                        </h4>
                        <h6 className="text-secondary">
                          {order?.data?.order_name}
                        </h6>
                        <h4>
                          <animated.div style={styles}>
                            <span className="mx-2 px-2">
                              <i className="fas fa-mouse"></i>
                            </span>
                            {order.status}
                          </animated.div>
                        </h4>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(order._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ))}
    </div>
  );
};
export default MyOrder;
