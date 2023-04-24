Template.indexPage.helpers({
    topJokes: function() {
      return Jokes.find({}, { sort: { likes: -1 }, limit: 3 });
    }
  });