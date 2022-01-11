/* eslint-disable no-underscore-dangle */
export const createOrder = (cartProducts, isLoggedIn, values, user) => {
  if (isLoggedIn) {
    const newOrder = {
      customerId: user._id,
      deliveryAddress: {
        country: values.country,
        city: values.city,
        address: values.address,
        postal: values.postal
      },
      shipping: '$0',
      paymentInfo: values.paymentInfo,
      status: 'not shipped',
      email: values.email,
      mobile: values.mobile,
      notes: values.notes,
      firstName: values.firstName,
      lastName: values.lastName,
      letterSubject: 'Thank you for order! You are welcome!',
      letterHtml:
        '<h1>Your order is placed. OrderNo is OrderNumber.</h1><p>Some details about order</p>'
    }
    return newOrder
  }
  const newOrder = {
    products: cartProducts,
    deliveryAddress: {
      country: values.country,
      city: values.city,
      address: values.address,
      postal: values.postal
    },
    shipping: '$0',
    paymentInfo: values.paymentInfo,
    status: 'not shipped',
    email: values.email,
    mobile: values.mobile,
    notes: values.notes,
    firstName: values.firstName,
    lastName: values.lastName,
    letterSubject: 'Thank you for order! You are welcome!',
    letterHtml:
      '<h1>Your order is placed. OrderNo is OrderNumber.</h1><p>Some details about order</p>'
  }
  return newOrder
}
