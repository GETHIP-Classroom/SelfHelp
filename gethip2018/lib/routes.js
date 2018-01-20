import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: "home",
  action: function() {
    BlazeLayout.render("content", {content: "home"});
  }
});

FlowRouter.route('/about', {
  name: "about",
  action: function() {
    BlazeLayout.render("content", {content: "about"});
  }
});

FlowRouter.route('/profile', {
  name: "profile",
  action: function() {
    BlazeLayout.render("content", {content: "profile"});
  }
});

FlowRouter.route('/allgroups', {
  name: "allgroups",
  action: function() {
    BlazeLayout.render("content", {content: "allgroups"});
  }
});

FlowRouter.route('/addex', {
  name: "addex",
  action: function() {
    BlazeLayout.render("content", {content: "addex"});
  }
});

FlowRouter.route('/group-page', {
  name: "group-page",
  action: function() {
    BlazeLayout.render("content", {content: "group-page"});
  }
});

FlowRouter.route('/leaderboard', {
  name: "leaderboard",
  action: function() {
    BlazeLayout.render("content", {content: "leaderboard"});
  }
});

FlowRouter.route('/mygroups', {
  name: "mygroups",
  action: function() {
    BlazeLayout.render("content", {content: "mygroups"});
  }
});
