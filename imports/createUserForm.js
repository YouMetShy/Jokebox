import { Meteor } from 'meteor/meteor';
import * as bootstrap from 'bootstrap'

Template.createUserForm.events({
    'click .js-createUser'() {
        let username = document.querySelector("#nu-name")
        let pwd = document.querySelector("#nu-password")
        let confirmPwd = document.querySelector("#nu-confirmPassword")
        if (pwd.value != confirmPwd.value) {
            pwd.classList.add("errBox")
            confirmPwd.classList.add("errBox")
        }
        else {
            Meteor.call('createNewUserAccount', username.value, pwd.value, (err, result) => {
                if (err)
                    console.error(`create user error: ${err.reason}`)
                else {
                    if (result)
                        console.debug(`success: ${result}`)
                }
            })
        }
    },

    'click .js-showLogin'() {
        const createUserModal = bootstrap.Modal.getInstance("#createUserModal")
        createUserModal.hide()
        const loginModal = new bootstrap.Modal('#loginModal', {})
        loginModal.show()
    },
})

