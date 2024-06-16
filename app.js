/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MatchaOverSencha.Application',

    name: 'MatchaOverSencha',

    requires: [
        // This will automatically load all classes in the MatchaOverSencha namespace
        // so that application classes do not need to require each other.
        'MatchaOverSencha.*'
    ],

    // The name of the initial view to create.
    mainView: 'MatchaOverSencha.view.main.Main'
});
