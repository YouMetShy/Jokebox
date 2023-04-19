jokeboxdb = new Mongo.Collection("jokebox")

Jokes = new Mongo.Collection('jokes');

Jokes.allow({
    insert() {
        return true
    },
    remove() {
        return true
    },
    update() {
        return true
    }
})

jokeboxdb.allow({
    insert() {
        return true
    },
    remove() {
        return true
    },
    update() {
        return true
    }
})
