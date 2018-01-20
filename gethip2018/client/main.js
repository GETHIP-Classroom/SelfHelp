import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.nav.helpers({
  'pathFor':function(route) {
    return "the route";
  }
});
