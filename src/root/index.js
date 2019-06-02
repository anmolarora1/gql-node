export default {
  addLink: (args, context) => {
    const { description, url, postedBy } = args;
    return context.addLink(description, url, postedBy);
  },
  link: (args, context) => context.getLink(args.id),
  links: (_, context) => context.links(),
  users: (_, context) => context.users()
};
