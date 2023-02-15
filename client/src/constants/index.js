import gql from "graphql-tag";

export const URI = "http://localhost:4000/graphql";

export const PUBLIC_LAYOUT = "default";

export const MENU_ITEMS = [
  {
    icon: "fa-solid fa-cart-shopping",
    text: "Order",
    name: "Order",
  },
  {
    icon: "fa-solid fa-layer-group",
    text: "Product",
    name: "Product",
  },
  {
    icon: "fa-solid fa-book",
    text: "Category",
    name: "Category",
  },
  {
    icon: "fa-solid fa-motorcycle",
    text: "Shipping",
    name: "Shipping",
  },
  {
    icon: "fa-solid fa-address-card",
    text: "User",
    name: "User",
  },
];

export const TITLE_DATA_CATEGORY = [
  {
    title: "Category Id",
  },
  {
    title: "Name",
  },
  {
    title: "Slug",
  },
];

export const TITLE_DATA_PRODUCT_ATTR = [
  {
    title: "Id",
  },
  {
    title: "Size",
  },
  {
    title: "In Stock",
  },
];

export const TITLE_DATA_ORDER = [
  {
    title: "Order Id",
  },
  {
    title: "Email",
  },
  {
    title: "Shipping Method",
  },
];
export const TITLE_DATA_PRODUCT = [
  {
    title: "Product Id",
  },
  {
    title: "Name",
  },
  {
    title: "Price",
  },
  {
    title: "Category",
  },
];
export const TITLE_DATA_SHIPPING = [
  {
    title: "Shipping Id",
  },
  {
    title: "Name",
  },
  {
    title: "Price",
  },
];
export const TITLE_DATA_USER = [
  {
    title: "User Id",
  },
  {
    title: "Name",
  },
  {
    title: "Email",
  },
  {
    title: "Phone Number",
  },
];

export const GET_ALL_CATEGORIES = gql`
  query {
    categories {
      id
      name
      slug
    }
  }
`;

export const GET_CATEGORY = gql`
  query ($categoryId: Int!) {
    category(categoryId: $categoryId) {
      id
      name
      slug
    }
  }
`;

export const GET_ALL_ORDERS = gql`
  query {
    orders {
      id
      user {
        name
        email
        phoneNumber
        address
      }
      orderProductAttrs {
        id
        quantity
        price
        productAttr {
          id
          value
        }
      }
      shippingMethod {
        name
      }
    }
  }
`;

export const GET_ORDER = gql`
  query ($orderId: Int!) {
    order(orderId: $orderId) {
      id
      user {
        name
        address
      }
      orderProductAttrs {
        quantity
        price
        productAttr {
          value
        }
      }
      shippingMethod {
        name
      }
      orderStatus {
        status
      }
    }
  }
`;

export const GET_ALL_PRODUCT = gql`
  query {
    products {
      id
      name
      slug
      price
      description
      category {
        id
        name
        slug
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query ($productId: Int!) {
    product(productId: $productId) {
      id
      name
      slug
      image
      price
      description
      category {
        id
        name
        slug
      }
    }
  }
`;

export const GET_ALL_SHIPPING = gql`
  query {
    shippingMethods {
      id
      name
      price
    }
  }
`;

export const GET_USER = gql`
  query ($userId: Int!) {
    user(userId: $userId) {
      id
      name
      userName
      email
      phoneNumber
      address
      isAdmin
    }
  }
`;
export const GET_ALL_USERS = gql`
  query {
    users {
      id
      name
      userName
      email
      phoneNumber
      address
      isAdmin
    }
  }
`;
export const GET_ALL_STAFF = gql`
  query {
    staff {
      id
      name
      userName
      email
      phoneNumber
      address
      isAdmin
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation ($input: CreateCategoryInput!) {
    createCategory(input: $input) {
      id
      name
      slug
    }
  }
`;
export const UPDATE_CATEGORY = gql`
  mutation ($categoryId: Int!, $input: UpdateCategoryInput!) {
    updateCategory(categoryId: $categoryId, input: $input) {
      id
      name
      slug
    }
  }
`;
export const DELETE_CATEGORY = gql`
  mutation ($categoryId: Int!) {
    deleteCategory(categoryId: $categoryId) {
      success
    }
  }
`;

export const CREATE_SHIPPING = gql`
  mutation ($input: CreateShippingMethodInput!) {
    createShippingMethod(input: $input) {
      id
      name
      price
    }
  }
`;

export const CREATE_USER = gql`
  mutation ($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      userName
      email
      password
      phoneNumber
      address
      isAdmin
    }
  }
`;

export const CREATE_PRODUCT = gql`
  mutation ($input: CreateProductInput!) {
    createProduct(input: $input) {
      id
      name
      slug
      price
      description
    }
  }
`;

export const EXPORT_USER = gql`
  mutation {
    exportUser {
      fileUrl
    }
  }
`;
export const EXPORT_ORDER = gql`
  mutation {
    exportOrder {
      fileUrl
    }
  }
`;
export const EXPORT_PRODUCT = gql`
  mutation {
    exportOrder {
      fileUrl
    }
  }
`;

export const LOGIN = gql`
  query ($input: LoginInput!) {
    login(input: $input) {
      token
      user {
        id
        name
        userName
        email
        phoneNumber
        address
        isAdmin
      }
    }
  }
`;
export const UPDATE_USER = gql`
  mutation ($userId: Int!, $input: UpdateUserInput!) {
    updateUser(userId: $userId, input: $input) {
      id
      name
      userName
      email
      password
      phoneNumber
      address
      isAdmin
    }
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation ($productId: Int!, $input: UpdateProductInput!) {
    updateProduct(productId: $productId, input: $input) {
      id
      name
      slug
      description
      price
    }
  }
`;

export const DELETE_USER = gql`
  mutation ($userId: Int!) {
    deleteUser(userId: $userId) {
      success
    }
  }
`;
export const PROFILE = gql`
  query {
    me {
      id
      name
      userName
      email
      password
      phoneNumber
      address
      isAdmin
    }
  }
`;
export const UPDATE_PROFILE = gql`
  mutation ($userId: Int!, $input: UpdateProfileInput!) {
    updateProfile(userId: $userId, input: $input) {
      id
      name
      userName
      email
      phoneNumber
      address
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation ($userId: Int!, $input: ChangePasswordInput!) {
    changePassword(userId: $userId, input: $input) {
      id
      name
      userName
      email
      phoneNumber
      address
    }
  }
`;

export const GET_PRODUCT_ATTRS = gql`
  query ($productId: Int!) {
    productAttributes(productId: $productId) {
      id
      value
      quantityInStock
      product {
        name
      }
    }
  }
`;
