const { gql } = require('apollo-server-express');

const createMutation = `
    mutation registerMutation(name: $name!, email: $email!, password: $password!,
            phone_number: $phoneNumber!, address: $address!, is_admin: $isAdmin!)
`

const getUser = `
    user(id: 1) {
    name
    email
    phoneNumber
    address
  }
`
const testUser = {
    name: "thanh",
    email: "xthanh@gmail.com",
    password: "12345",
    phoneNumber: "0965301777",
    address: "ThaiBinh",
    isAdmin: false
}

describe('users', () => {
    it("register and get user", async () => {

    });

})