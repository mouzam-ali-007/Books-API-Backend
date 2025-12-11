module.exports = function generateContactEmail(data) {
  const brandColor = "#0d6efd"; // 🔵 Change to your brand color

  return `
  <div style="font-family: Arial, sans-serif; padding: 0; margin: 0; background: #1b1b1b; color: #f2f2f2;">
    <div style="max-width: 650px; margin: auto; background: #242424; padding: 30px; border-radius: 14px;">

      <!-- Header Logo -->
     

      <h2 style="text-align: center; color: ${brandColor}; margin-top: 10px;">Thank You for Your Order!</h2>
      <p style="text-align: center; font-size: 14px; color: #cccccc;">
        We've received your order and will process it shortly.
      </p>

      <hr style="border: none; border-top: 1px solid #333; margin: 25px 0;" />

      <!-- Customer Information -->
      <h3 style="color: ${brandColor}; margin-bottom: 10px;">Customer Information</h3>
      <table style="width: 100%; border-collapse: collapse; color: #e5e5e5;">
        <tr><td style="padding: 8px 0; font-weight: bold;">Full Name:</td><td>${data.customer.fullName || "-"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Phone:</td><td>${data.customer.phone || "-"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${data.customer.email || "-"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Address:</td><td>${data.customer.address || "-"}</td></tr>
      </table>

      <hr style="border: none; border-top: 1px solid #333; margin: 25px 0;" />

      <!-- Product Items -->
      <h3 style="color: ${brandColor}; margin-bottom: 15px;">Your Items</h3>

      <div style="margin-bottom: 20px;">
        ${
          data.items && data.items.length > 0
            ? data.items
                .map(
                  (item) => `
          <div style="display: flex; background: #1f1f1f; padding: 12px; border-radius: 10px; margin-bottom: 12px; border: 1px solid #333;">
            
            <img src="${item.image}" style="width: 80px; height: 80px; border-radius: 8px; margin-right: 12px;" />

            <div style="flex: 1;">
              <p style="margin: 0; font-size: 15px; font-weight: bold; color: #fff;">${item.name}</p>
              <p style="margin: 5px 0; color: #bbb;">Qty: ${item.quantity}</p>
            </div>

            <div style="text-align: right;">
              <p style="margin: 0; font-size: 15px; color: #fff;"><strong>${item.price}</strong></p>
              <p style="margin: 5px 0; color: #bbb;">Total: ${item.total}</p>
            </div>

          </div>
        `
                )
                .join("")
            : `<p style="color:#aaa;">No items found.</p>`
        }
      </div>

      <hr style="border: none; border-top: 1px solid #333; margin: 25px 0;" />

      <!-- Order Summary -->
      <h3 style="color: ${brandColor}; margin-bottom: 10px;">Order Summary</h3>

      <table style="width: 100%; border-collapse: collapse; color: #e5e5e5;">
        <tr><td style="padding: 8px 0; font-weight: bold;">Order Status:</td><td>${data.orderStatus || "-"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Subtotal:</td><td>${data.subtotal || "-"}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: bold;">Shipping:</td><td>${data.shipping || "-"}</td></tr>
      </table>

      <!-- Grand Total -->
      <div style="background: #111; padding: 15px; border-left: 4px solid ${brandColor}; border-radius: 10px; margin-top: 15px;">
        <h3 style="margin: 0; color: ${brandColor};">Grand Total</h3>
        <p style="font-size: 22px; font-weight: bold; margin: 5px 0 0; color: #fff;">
          ${data.grandTotal || "-"}
        </p>
      </div>

      <p style="margin-top: 30px; text-align: center; color: #ccc; font-size: 14px;">
        Thank you for shopping with us!
      </p>

      <p style="text-align:center; color:${brandColor}; font-weight:600;">Best Regards,<br/>Arslan Abbas</p>

    </div>
  </div>
  `;
};
