// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    BasicProfile: {
      id: "kjzl6hvfrbw6c57p6t99krxnhqbxb24suuvxfhq1hnqujfecq0fap356ai7sjk9",
      accountRelation: { type: "single" },
    },
    Following: {
      id: "kjzl6hvfrbw6c9m9brthgvymjbe0wzk8svf9i4trl7a0cm87e4hi3zyimpjxexf",
      accountRelation: { type: "list" },
    },
    Posts: {
      id: "kjzl6hvfrbw6c7gxr84vvivh8c5awz1eycoj793oixk68zw7k3z3zk5uh06fwxl",
      accountRelation: { type: "list" },
    },
  },
  objects: {
    BasicProfile: {
      name: { type: "string", required: true },
      emoji: { type: "string", required: false },
      gender: { type: "string", required: false },
      username: { type: "string", required: true },
      description: { type: "string", required: false },
      posts: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "queryConnection",
          model:
            "kjzl6hvfrbw6c7gxr84vvivh8c5awz1eycoj793oixk68zw7k3z3zk5uh06fwxl",
          property: "profileId",
        },
      },
    },
    Following: {
      profileId: { type: "streamid", required: true },
      profile: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c57p6t99krxnhqbxb24suuvxfhq1hnqujfecq0fap356ai7sjk9",
          property: "profileId",
        },
      },
    },
    Posts: {
      body: { type: "string", required: true },
      edited: { type: "datetime", required: false },
      created: { type: "datetime", required: true },
      profileId: { type: "streamid", required: true },
      profile: {
        type: "view",
        viewType: "relation",
        relation: {
          source: "document",
          model:
            "kjzl6hvfrbw6c57p6t99krxnhqbxb24suuvxfhq1hnqujfecq0fap356ai7sjk9",
          property: "profileId",
        },
      },
    },
  },
  enums: {},
  accountData: {
    basicProfile: { type: "node", name: "BasicProfile" },
    followingList: { type: "connection", name: "Following" },
    postsList: { type: "connection", name: "Posts" },
  },
};
