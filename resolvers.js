class Friend {
    constructor(id, { firstName, lastName, gender, language, email, age, contacts }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.language = language;
        this.email = email;
        this.age = age;
        this.contacts = contacts;
    }
}

const friendDataBase = {};

const resolvers = { 
    getFriend:({ id }) => {
        return new Friend(id, friendDataBase[id]);
    },
    createFriend: ({input}) => {
        let id = require('crypto').randomBytes(10).toString('hex');
        friendDataBase[id] = input;
        return new Friend(id, input);
    }
};

export default resolvers;