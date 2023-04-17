Template.collectionData.helpers({
  jokes: function() {
    return Jokes.find();
  }
});

Template.collectionData.events({
  'click .delete-joke': function(event, template) {
    var jokeId = $(event.currentTarget).attr('data-id');
    Jokes.remove(jokeId);
  }
});