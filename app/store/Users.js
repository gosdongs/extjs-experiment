Ext.define("MatchaOverSencha.store.Users", {
  extend: "Ext.data.Store",

  alias: "store.users",

  model: "MatchaOverSencha.model.User",

  data: [
    {
      name: "Big Mac (Local)",
      email: "big.mac@test.com",
      phoneNumber: "7781111111",
      gender: "male",
      age: 34,
    },
    {
      name: "Little Mac (Local)",
      email: "little.mac@test.com",
      phoneNumber: "7781111112",
      gender: "female",
      age: 33,
    },
  ],
});
