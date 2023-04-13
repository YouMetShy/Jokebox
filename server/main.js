import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import '../lib/collections.js'


Meteor.startup(() => {
  // code to run on server at startup
  if (!Accounts.findUserByUsername('admin')) {
    console.log('Creating admin account')
    Meteor.call('createNewUserAccount', 'admin', 'admin')
  }
});

Meteor.methods({
  createNewUserAccount(user, pwd) {
    let options = {
      'username': user,
      'password': pwd
    }
    return Accounts.createUser(options)
  }
})

Meteor.publish('Collect', () => {
  return Jokes.find({}, {
    fields: { 'name': 1, 'joke':1 }
  })
})