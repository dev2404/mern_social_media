const postsResolver = require("./posts");
const userResolver = require("./users");
const commentsResolvers = require("./comments");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolver.Query,
  },
  Mutation: {
    ...userResolver.Mutation,
    ...postsResolver.Mutation,
    ...commentsResolvers.Mutation,
  },
  Subscription: {
    ...postsResolver.Subscription,
  },
};
