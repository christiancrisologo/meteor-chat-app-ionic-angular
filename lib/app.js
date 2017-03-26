// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import { Meteor } from 'meteor/meteor';

// Modules
import ChatsCtrl from '../controllers/chats.controller';
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig from '../routes';

const App = 'Whatsapp';

// App
Angular.module(App, [
    'angular-meteor',
    'ionic'
]);

// add router
new Loader(App)
    .load(ChatsCtrl)
    .load(CalendarFilter)
    .load(RoutesConfig);


// Startup
if (Meteor.isCordova) {
    Angular.element(document).on('deviceready', onReady);
}
else {
    Angular.element(document).ready(onReady);
}

function onReady() {
    Angular.bootstrap(document, [App]);
}