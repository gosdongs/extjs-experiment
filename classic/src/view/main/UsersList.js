Ext.define("MatchaOverSencha.view.main.UsersList", {
  extend: "Ext.grid.Panel",
  xtype: "usersList",

  requires: ["MatchaOverSencha.store.Users"],

  title: "Users",

  store: {
    type: "users",
  },

  columns: [
    { text: "Name", dataIndex: "name", flex: 1 },
    { text: "Email", dataIndex: "email", flex: 1 },
    { text: "Phone Number", dataIndex: "phoneNumber", flex: 1 },
    { text: "Gender", dataIndex: "gender", flex: 1 },
    { text: "Age", dataIndex: "age", flex: 1 },
  ],

  listeners: {
    select: "onItemSelected",
  },
});
