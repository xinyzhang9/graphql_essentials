import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        language: String
        email: String
        age: Int
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Email {
        email: String
    }

    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        language: String
        email: String
        age: Int
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`)

export default schema;
