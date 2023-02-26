/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession($filter: ModelSubscriptionSessionFilterInput) {
    onCreateSession(filter: $filter) {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($filter: ModelSubscriptionSessionFilterInput) {
    onUpdateSession(filter: $filter) {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($filter: ModelSubscriptionSessionFilterInput) {
    onDeleteSession(filter: $filter) {
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
export const onCreateParticipant = /* GraphQL */ `
  subscription OnCreateParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onCreateParticipant(filter: $filter) {
      id
      alias
      pnl
      createdAt
      updatedAt
      sessionParticipantsId
    }
  }
`;
export const onUpdateParticipant = /* GraphQL */ `
  subscription OnUpdateParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onUpdateParticipant(filter: $filter) {
      id
      alias
      pnl
      createdAt
      updatedAt
      sessionParticipantsId
    }
  }
`;
export const onDeleteParticipant = /* GraphQL */ `
  subscription OnDeleteParticipant(
    $filter: ModelSubscriptionParticipantFilterInput
  ) {
    onDeleteParticipant(filter: $filter) {
      id
      alias
      pnl
      createdAt
      updatedAt
      sessionParticipantsId
    }
  }
`;
export const onCreateOrderBook = /* GraphQL */ `
  subscription OnCreateOrderBook(
    $filter: ModelSubscriptionOrderBookFilterInput
  ) {
    onCreateOrderBook(filter: $filter) {
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
export const onUpdateOrderBook = /* GraphQL */ `
  subscription OnUpdateOrderBook(
    $filter: ModelSubscriptionOrderBookFilterInput
  ) {
    onUpdateOrderBook(filter: $filter) {
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
export const onDeleteOrderBook = /* GraphQL */ `
  subscription OnDeleteOrderBook(
    $filter: ModelSubscriptionOrderBookFilterInput
  ) {
    onDeleteOrderBook(filter: $filter) {
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
export const onCreateOrdersAtPrice = /* GraphQL */ `
  subscription OnCreateOrdersAtPrice(
    $filter: ModelSubscriptionOrdersAtPriceFilterInput
  ) {
    onCreateOrdersAtPrice(filter: $filter) {
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
export const onUpdateOrdersAtPrice = /* GraphQL */ `
  subscription OnUpdateOrdersAtPrice(
    $filter: ModelSubscriptionOrdersAtPriceFilterInput
  ) {
    onUpdateOrdersAtPrice(filter: $filter) {
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
export const onDeleteOrdersAtPrice = /* GraphQL */ `
  subscription OnDeleteOrdersAtPrice(
    $filter: ModelSubscriptionOrdersAtPriceFilterInput
  ) {
    onDeleteOrdersAtPrice(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateAdmin = /* GraphQL */ `
  subscription OnCreateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onCreateAdmin(filter: $filter) {
      id
      password
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdmin = /* GraphQL */ `
  subscription OnUpdateAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onUpdateAdmin(filter: $filter) {
      id
      password
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdmin = /* GraphQL */ `
  subscription OnDeleteAdmin($filter: ModelSubscriptionAdminFilterInput) {
    onDeleteAdmin(filter: $filter) {
      id
      password
      createdAt
      updatedAt
    }
  }
`;
