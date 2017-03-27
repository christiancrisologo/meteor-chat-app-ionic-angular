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
import 'angular-meteor-auth';

// Modules
import ChatsCtrl from '../controllers/chats.controller';
import ChatCtrl from '../controllers/chat.controller';
import NewChatService from '../services/new-chat-service';
import LoginCtrl from '../controllers/login.controller';
import ProfileCtrl from '../controllers/profile.controller';
import ConfirmationCtrl from '../controllers/confirmation.controller';
import NewChatCtrl from '../controllers/new-chat.controller';
import SettingsCtrl from '../controllers/settings.controller';

// filters
import CalendarFilter from '../filters/calendar.filter';
import ChatNameFilter from '../filters/chat-name.filter';
import ChatPictureFilter from '../filters/chat-picture.filter';

// routes
 
import Routes from '../routes';

const App = 'Whatsapp';

// App
Angular.module(App, [
    'angularMoment',
    'ionic',
    'angular-meteor',
    'angular-meteor.auth',
]);

// add router
new Loader(App)
    .load(LoginCtrl)
    .load(ChatCtrl)
    .load(ChatsCtrl)
    .load(ConfirmationCtrl)
    .load(SettingsCtrl)
    .load(ProfileCtrl)
    .load(NewChatCtrl)
    .load(NewChatService)
    .load(CalendarFilter)
    .load(ChatNameFilter)
    .load(ChatPictureFilter) 
    .load(Routes);


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