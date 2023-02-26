/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
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
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $id: ID
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSessions(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        state
        createdAt
        product
        fee
        orderSizeLimit
        activeVolumeLimit
        participants {
          nextToken
        }
        orderBook {
          id
          createdAt
          updatedAt
        }
        updatedAt
        sessionOrderBookId
      }
      nextToken
    }
  }
`;
export const getParticipant = /* GraphQL */ `
  query GetParticipant($id: ID!, $pnl: Float!) {
    getParticipant(id: $id, pnl: $pnl) {
      id
      alias
      pnl
      createdAt
      updatedAt
      sessionParticipantsId
    }
  }
`;
export const listParticipants = /* GraphQL */ `
  query ListParticipants(
    $id: ID
    $pnl: ModelFloatKeyConditionInput
    $filter: ModelParticipantFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listParticipants(
      id: $id
      pnl: $pnl
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const getOrderBook = /* GraphQL */ `
  query GetOrderBook($id: ID!) {
    getOrderBook(id: $id) {
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
export const listOrderBooks = /* GraphQL */ `
  query ListOrderBooks(
    $id: ID
    $filter: ModelOrderBookFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrderBooks(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getOrdersAtPrice = /* GraphQL */ `
  query GetOrdersAtPrice($id: ID!, $price: Float!) {
    getOrdersAtPrice(id: $id, price: $price) {
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
export const listOrdersAtPrices = /* GraphQL */ `
  query ListOrdersAtPrices(
    $id: ID
    $price: ModelFloatKeyConditionInput
    $filter: ModelOrdersAtPriceFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrdersAtPrices(
      id: $id
      price: $price
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
        orderBookBidsId
        orderBookAsksId
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!, $createdAt: String!) {
    getOrder(id: $id, createdAt: $createdAt) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $id: ID
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      id: $id
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const getAdmin = /* GraphQL */ `
  query GetAdmin($id: ID!) {
    getAdmin(id: $id) {
      id
      password
      createdAt
      updatedAt
    }
  }
`;
export const listAdmins = /* GraphQL */ `
  query ListAdmins(
    $id: ID
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAdmins(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        password
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const sessionsByStateAndCreatedAt = /* GraphQL */ `
  query SessionsByStateAndCreatedAt(
    $state: SessionState!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sessionsByStateAndCreatedAt(
      state: $state
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        state
        createdAt
        product
        fee
        orderSizeLimit
        activeVolumeLimit
        participants {
          nextToken
        }
        orderBook {
          id
          createdAt
          updatedAt
        }
        updatedAt
        sessionOrderBookId
      }
      nextToken
    }
  }
`;
export const participantsByAlias = /* GraphQL */ `
  query ParticipantsByAlias(
    $alias: String!
    $sortDirection: ModelSortDirection
    $filter: ModelParticipantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    participantsByAlias(
      alias: $alias
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const ordersAtPricesByPrice = /* GraphQL */ `
  query OrdersAtPricesByPrice(
    $price: Float!
    $sortDirection: ModelSortDirection
    $filter: ModelOrdersAtPriceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersAtPricesByPrice(
      price: $price
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
        orderBookBidsId
        orderBookAsksId
      }
      nextToken
    }
  }
`;
export const ordersByParticipantID = /* GraphQL */ `
  query OrdersByParticipantID(
    $participantID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByParticipantID(
      participantID: $participantID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const adminsByPassword = /* GraphQL */ `
  query AdminsByPassword(
    $password: String!
    $sortDirection: ModelSortDirection
    $filter: ModelAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    adminsByPassword(
      password: $password
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        password
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
