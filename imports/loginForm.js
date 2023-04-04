import { Meteor } from 'meteor/meteor';
import * as bootstrap from 'bootstrap'

Template.loginForm.events({
    'click .js-logIn'() {
        let username = document.querySelector("#login-name").value
        let password = document.querySelector("#login-password").value
        Meteor.loginWithPassword(username, password, (err, result) => {
            if (err)
                console.error(`error: ${err}`)
            else {
                if (result)
                    console.debug(`result: ${result}`)
            }
        })
        console.warn(`loggin in with username: ${username} and password: ${password}`)
        loginModal.hide()
    },
    'click .js-showCreateUser'() {
        const loginModal = bootstrap.Modal.getInstance("#loginModal")
        loginModal.hide()
        const createUserModal = new bootstrap.Modal("#createUserModal")
        console.log('show create user dialog')
        createUserModal.show()
    }
})