Ext.define("MatchaOverSencha.store.Users", {
  extend: "Ext.data.Store",

  alias: "store.users",

  model: "MatchaOverSencha.model.User",

  data: [
    {
      firstName: "Seth",
      age: "34",
    },
    {
      firstName: "Scott",
      age: "72",
    },
    {
      firstName: "Gary",
      age: "19",
    },
    {
      firstName: "Capybara",
      age: "208",
    },
  ],
});
