import React from 'react'

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>

        <div>
          <h2>Order Status</h2>
          <p>Processing</p>
        </div>

        <div>
          <h2>Placed At</h2>
          <p>13 Aug 2026, 10:00 AM</p>
        </div>

        <div>
          <h2>Delivered At</h2>
          <p>14 Aug 2026, 02:00 PM</p>
        </div>

        <div>
          <h2>Payment Method</h2>
          <p>Cash On Delivery (COD)</p>
        </div>

        <div>
          <h2>Payment Reference</h2>
          <p>PAY123456789</p>
        </div>

        <div>
          <h2>Paid At</h2>
          <p>13 Aug 2026, 10:00 AM</p>
        </div>
      </main>
    </section>
  )
}

export default OrderDetails
