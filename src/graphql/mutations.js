/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
      id
      state
      createdAt
      product
      fee
      orderSizeLimit
      activeVolumeLimit
      participants {
        items {
          id
          alias
          pnl
          createdAt
          updatedAt
          sessionParticipantsId
        }
        nextToken
      }
      orderBook {
        id
        bids {
          nextToken
        }
        asks {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      sessionOrderBookId
    }
  }
`;
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
      id
      state
      createdAt
      product
      fee
      orderSizeLimit
      activeVolumeLimit
      participants {
        items {
          id
          alias
          pnl
          createdAt
          updatedAt
          sessionParticipantsId
        }
        nextToken
      }
      orderBook {
        id
        bids {
          nextToken
        }
        asks {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      sessionOrderBookId
    }
  }
`;
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
      id
      state
      createdAt
      product
      fee
      orderSizeLimit
      activeVolumeLimit
      participants {
        items {
          id
          alias
          pnl
          createdAt
          updatedAt
          sessionParticipantsId
        }
        nextToken
      }
      orderBook {
        id
        bids {
          nextToken
        }
        asks {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      sessionOrderBookId
    }
  }
`;
export const createParticipant = /* GraphQL */ `
  mutation CreateParticipant(
    $input: CreateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    createParticipant(input: $input, condition: $condition) {
      id
      alias
      pnl
      createdAt
      updatedAt
      sessionParticipantsId
    }
  }
`;
export const updateParticipant = /* GraphQL */ `
  mutation UpdateParticipant(
    $input: UpdateParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    updateParticipant(input: $input, condition: $condition) {
      id
      alias
      pnl
      createdAt
      updatedAt
      sessionParticipantsId
    }
  }
`;
export const deleteParticipant = /* GraphQL */ `
  mutation DeleteParticipant(
    $input: DeleteParticipantInput!
    $condition: ModelParticipantConditionInput
  ) {
    deleteParticipant(input: $input, condition: $condition) {
      id
      alias
      pnl
      createdAt
      updatedAt
      sessionParticipantsId
    }
  }
`;
export const createOrderBook = /* GraphQL */ `
  mutation CreateOrderBook(
    $input: CreateOrderBookInput!
    $condition: ModelOrderBookConditionInput
  ) {
    createOrderBook(input: $input, condition: $condition) {
      id
      bids {
        items {
          id
          price
          createdAt
          updatedAt
          orderBookBidsId
          orderBookAsksId
        }
        nextToken
      }
      asks {
        items {
          id
          price
          createdAt
          updatedAt
          orderBookBidsId
          orderBookAsksId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOrderBook = /* GraphQL */ `
  mutation UpdateOrderBook(
    $input: UpdateOrderBookInput!
    $condition: ModelOrderBookConditionInput
  ) {
    updateOrderBook(input: $input, condition: $condition) {
      id
      bids {
        items {
          id
          price
          createdAt
          updatedAt
          orderBookBidsId
          orderBookAsksId
        }
        nextToken
      }
      asks {
        items {
          id
          price
          createdAt
          updatedAt
          orderBookBidsId
          orderBookAsksId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrderBook = /* GraphQL */ `
  mutation DeleteOrderBook(
    $input: DeleteOrderBookInput!
    $condition: ModelOrderBookConditionInput
  ) {
    deleteOrderBook(input: $input, condition: $condition) {
      id
      bids {
        items {
          id
          price
          createdAt
          updatedAt
          orderBookBidsId
          orderBookAsksId
        }
        nextToken
      }
      asks {
        items {
          id
          price
          createdAt
          updatedAt
          orderBookBidsId
          orderBookAsksId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createOrdersAtPrice = /* GraphQL */ `
  mutation CreateOrdersAtPrice(
    $input: CreateOrdersAtPriceInput!
    $condition: ModelOrdersAtPriceConditionInput
  ) {
    createOrdersAtPrice(input: $input, condition: $condition) {
      id
      price
      orders {
        items {
          id
          createdAt
          participantID
          size
          updatedAt
          ordersAtPriceOrdersId
          ordersAtPriceOrdersPrice
        }
        nextToken
      }
      createdAt
      updatedAt
      orderBookBidsId
      orderBookAsksId
    }
  }
`;
export const updateOrdersAtPrice = /* GraphQL */ `
  mutation UpdateOrdersAtPrice(
    $input: UpdateOrdersAtPriceInput!
    $condition: ModelOrdersAtPriceConditionInput
  ) {
    updateOrdersAtPrice(input: $input, condition: $condition) {
      id
      price
      orders {
        items {
          id
          createdAt
          participantID
          size
          updatedAt
          ordersAtPriceOrdersId
          ordersAtPriceOrdersPrice
        }
        nextToken
      }
      createdAt
      updatedAt
      orderBookBidsId
      orderBookAsksId
    }
  }
`;
export const deleteOrdersAtPrice = /* GraphQL */ `
  mutation DeleteOrdersAtPrice(
    $input: DeleteOrdersAtPriceInput!
    $condition: ModelOrdersAtPriceConditionInput
  ) {
    deleteOrdersAtPrice(input: $input, condition: $condition) {
      id
      price
      orders {
        items {
          id
          createdAt
          participantID
          size
          updatedAt
          ordersAtPriceOrdersId
          ordersAtPriceOrdersPrice
        }
        nextToken
      }
      createdAt
      updatedAt
      orderBookBidsId
      orderBookAsksId
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      createdAt
      participantID
      size
      updatedAt
      ordersAtPriceOrdersId
      ordersAtPriceOrdersPrice
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      createdAt
      participantID
      size
      updatedAt
      ordersAtPriceOrdersId
      ordersAtPriceOrdersPrice
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      createdAt
      participantID
      size
      updatedAt
      ordersAtPriceOrdersId
      ordersAtPriceOrdersPrice
    }
  }
`;
export const createAdmin = /* GraphQL */ `
  mutation CreateAdmin(
    $input: CreateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    createAdmin(input: $input, condition: $condition) {
      id
      password
      createdAt
      updatedAt
    }
  }
`;
export const updateAdmin = /* GraphQL */ `
  mutation UpdateAdmin(
    $input: UpdateAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    updateAdmin(input: $input, condition: $condition) {
      id
      password
      createdAt
      updatedAt
    }
  }
`;
export const deleteAdmin = /* GraphQL */ `
  mutation DeleteAdmin(
    $input: DeleteAdminInput!
    $condition: ModelAdminConditionInput
  ) {
    deleteAdmin(input: $input, condition: $condition) {
      id
      password
      createdAt
      updatedAt
    }
  }
`;
