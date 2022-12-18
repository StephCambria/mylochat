const { Chat } = require('../models/Chat');
const { Message } = require('../models/Message');
const { User } = require('../models/User');

const resolvers = {
    Query: {
        hello: () => 'Hello World'

    },


}

module.exports = resolvers;