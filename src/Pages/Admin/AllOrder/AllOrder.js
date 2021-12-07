// import React from "react";

// const AllOrder = () => {
//   return <div>manage all order</div>;
// };

// export default AllOrder;
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
const AllOrder = () => {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  // const handleDelete = (id) => {
  //   alert("Are You Sure To DELETE this ORDER");
  //   axios.delete(`http://localhost:5000/orders/${id}`, orders).then((res) => {
  //     // console.log(res);
  //     const remaining = orders.filter((order) => order._id !== id);
  //     setOrder(remaining);
  //   });
  // };
  const handleUpdate = (id) => {
    alert("Are You Sure To Update this ORDER status");
    axios.put(`http://localhost:5000/orders/${id}`, orders).then((res) => {
      console.log(res);
      const remaining = orders.filter((order) => order._id !== id);
      setOrder(remaining);
    });
  };
  // react animation
  const styles = useSpring({
    loop: true,
    to: [
      { opacity: 1, color: "#800080" },
      { opacity: 0, color: "rgb(128,0,128)" },
    ],
    from: { opacity: 0, color: "purple" },
  });
  // animation
  const roundStyle = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 5 },
  });
  return (
    <div className="my-3 py-2">
      <animated.div style={roundStyle}>
        <h4 className="text-warning  text-center my-3 py-2">
          Update All Order Status
        </h4>
      </animated.div>
      {orders.map((order) => (
        <>
          <div className="container px-3">
            <div className="row gx-3 gy-3">
              <div className="col">
                <div className="p-3 border bg-light">
                  <div className="  " key={order._id}>
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
                    {/* <Button
                      className="btn btn-danger mx-3 px-3  my-3 py-2"
                      onClick={() => handleDelete(order._id)}
                    >
                      Delete
                    </Button> */}
                    {/* <Button
                      onClick={() => handleUpdate(order._id)}
                      variant="warning"
                    >
                      Approved
                    </Button> */}
                    <Button
                      onClick={() => handleUpdate(order._id)}
                      variant="warning"
                    >
                      Shipped
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AllOrder;
