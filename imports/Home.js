import { Meteor } from 'meteor/meteor';

Meteor.methods({
  async getJoke() {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
      });
      Template.Home.onCreated(function() {
        let intervalId = Meteor.setInterval(() => {
            fetch("https://icanhazdadjoke.com/", {
                headers: {
                    "Accept": "application/json"
                }
            })
            .then(response => response.json())
            .then(data => {
                $("#joke").text(data.joke);
            })
        }, 900000); // 15 minutes in milliseconds
        this.intervalId = intervalId;
    });

    Template.Home.onDestroyed(function() {
        Meteor.clearInterval(this.intervalId);
    });
      if (!response.ok) {
        throw new Meteor.Error('api-error', 'Unable to retrieve joke from API');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw new Meteor.Error('api-error', error.message);
    }
  }
});
