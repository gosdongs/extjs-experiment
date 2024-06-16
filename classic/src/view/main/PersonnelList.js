/**
 * This view is an example list of people.
 */
Ext.define("MatchaOverSencha.view.main.PersonnelList", {
  extend: "Ext.grid.Panel",
  xtype: "personnelList",

  requires: ["MatchaOverSencha.store.Personnel"],

  title: "Personnel",

  store: {
    type: "personnel",
  },

  columns: [
    { text: "Name", dataIndex: "name" },
    { text: "Email", dataIndex: "email", flex: 1 },
    { text: "Phone", dataIndex: "phone", flex: 1 },
  ],

  listeners: {
    select: "onItemSelected",
  },
});
