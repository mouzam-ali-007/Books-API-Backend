module.exports = function generateContactEmail(data) {
    return `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #2d3e50;">Thank you for your order!</h2>
        <p>Here are the details you submitted:</p>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td><strong>Full Name:</strong></td><td>${data.customer.fullName || "-" }</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${data.customer.phone || "-"}</td></tr>
          <tr><td><strong>Email:</strong></td><td>${data.customer.email || "-"}</td></tr>
          <tr><td><strong>Address:</strong></td><td>${data.customer.address || "-"}</td></tr>

          <tr><td><strong>Order Status:</strong></td><td>${data.orderStatus || "-"}</td></tr>
          <tr><td><strong>Subtotal:</strong></td><td>${data.subtotal || "-"}</td></tr>
          <tr><td><strong>Shipping:</strong></td><td>${data.shipping || "-"}</td></tr>

           <tr><td><strong>Grand Total</strong></td><td>${data.grandTotal || "-"}</td></tr>
        </table>
        <p style="margin-top: 20px;">We’ll get back to you soon.</p>
        <p>Best regards,<br/>Arslan Abbas</p>
      </div>
    `;
  };