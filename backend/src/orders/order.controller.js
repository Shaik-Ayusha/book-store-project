const Order = require("./order.model");

const createAOrder = async (req, res) => {
  try {
    console.log('Create order request body:', req.body);

    // Basic validation
    const required = ['name', 'email', 'phone', 'productIds', 'totalPrice', 'address'];
    for (const f of required) {
      if (!req.body[f]) {
        return res.status(400).json({ message: `Missing required field: ${f}` });
      }
    }

    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    // Duplicate key (unique index) handling
    if (error.code === 11000) {
      return res.status(409).json({ message: 'Duplicate key error', details: error.keyValue });
    }
    res.status(500).json({ message: 'Failed to create order', error: error.message });
  }
};

const getOrderByEmail = async (req, res) => {
  try {
    const {email} = req.params;
    const orders = await Order.find({email})
       .populate("productIds") 
      
    .sort({createdAt: -1});
    if(!orders) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders", error);
    res.status(500).json({ message: "Failed to fetch order" });
  }
}

module.exports = {
  createAOrder,
  getOrderByEmail
};
