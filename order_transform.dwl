%dw 2.0
output application/json
var order = payload.order
---
{
  product: {
    price: order.product.price as Number,
    model: order.product.model
  },
  item_amount: order.item_amount as Number,
  payment: {
    'payment-type': order.payment.'payment-type',
    currency: order.payment.currency,
    installments: order.payment.installments as Number
  },
  buyer: {
    email: order.buyer.email,
    name: order.buyer.name,
    address: order.buyer.address,
    city: order.buyer.city,
    state: order.buyer.state,
    postCode: order.buyer.postCode,
    nationality: order.buyer.nationality
  },
  shop: order.shop,
  salesperson: order.salesperson
}
