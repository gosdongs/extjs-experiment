Ext.define("MatchaOverSencha.model.User", {
  extend: "Ext.data.Model",

  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "phoneNumber",
      type: "string",
    },
    {
      name: "gender",
      type: "string",
    },
    {
      name: "age",
      type: "int",
    },
  ],

  appendMongoDbToName: function () {
    var currentName = this.get("name"),
      updatedName = currentName + " " + "(MongoDB)";

    this.set("name", updatedName);
  },
});
