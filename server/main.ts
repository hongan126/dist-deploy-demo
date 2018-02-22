import {Meteor} from 'meteor/meteor';
import * as moment from 'moment';
import {Notes} from './collections/notes';
import {NoteType} from './models';
import {NoteGroups} from './collections/groups';

Meteor.startup(() => {
  if (Meteor.isServer) {
    Accounts.config({
      loginExpirationInDays: null
    });
    process.env.MAIL_URL = 'smtps://nsa1667%40gmail.com:65312%23%26gM@smtp.gmail.com:465/';
  }
  Accounts.emailTemplates.siteName = 'FTEL Notes Tm.';
  Accounts.emailTemplates.from = 'ftelnotes@fpt.com';
  Accounts.emailTemplates.resetPassword = {
    subject() {
      return "Reset Your Password - FTEL Notes";
    },
    text(user, url) {
      const username = user.profile.firstName + ' ' + user.profile.lastName,
        urlWithOutHash = url.replace('http://localhost:3000/#', 'http://localhost:4200');
      const emailBody = `Hello ` + username +
        `,\n\nTo reset your password, simply click the link below.\n\n` +
        urlWithOutHash +
        `\n\nBest regards!\n\nFTEL Notes`;
      return emailBody;
    }
  };
  
  Email.send({
	  to: 'hongan126@gmail.com',
	  from: 'nsa1667ABC',
	  subject: 'Server meteor api run',
	  text: 'Run run run, go go go!'
  });
  
  Notes.insert({
    title: 'Note number 3',
    type: NoteType.TEXT,
    content: 'Note for some thing A',
    createdAt: new Date()
  });
  Notes.insert({
    title: 'Note number 4',
    type: NoteType.TODO,
    todoList: [{checked: true, content: 'Todo something 1'},  {checked: false, content: 'Todo something 2'}],
    createdAt: moment().subtract(4, 'days').toDate()
  });
  NoteGroups.insert({
    name: 'Project 3',
    createdAt: new Date()
  });
  NoteGroups.insert({
    name: 'Project 4',
    createdAt: moment().subtract(4, 'months').toDate()
  });
});
