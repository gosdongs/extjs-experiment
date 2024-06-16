Ext.define("MatchaOverSencha.view.main.UsersList", {
  extend: "Ext.grid.Panel",
  xtype: "usersList",

  requires: ["MatchaOverSencha.store.Users"],

  title: "Users",

  store: {
    type: "users",
  },

  columns: [
    { text: "First Name", dataIndex: "firstName" },
    { text: "Age", dataIndex: "age", flex: 1 },
  ],

  listeners: {
    select: "onItemSelected",
  },
});
