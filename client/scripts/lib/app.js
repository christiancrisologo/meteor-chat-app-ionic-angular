// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import { Meteor } from 'meteor/meteor';
import Loader from 'angular-ecmascript/module-loader';
import 'angular-moment';

// Modules
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';
import CalendarFilter from '../filters/calendar.filter';
import RoutesConfig from '../routes';

const App = 'Whatsapp';

// App
Angular.module(App, [
    'angular-meteor',
    'angularMoment',
    'ionic'
]);

// add router
new Loader(App)
    .load(ChatCtrl)
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