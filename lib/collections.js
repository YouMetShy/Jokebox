jokeboxdb = new Mongo.Collection("jokebox")

Jokes = new Mongo.Collection('jokes');

Jokes.allow({
    insert() {
        return true
    },
})