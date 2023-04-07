import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

BlazeLayout.setRoot('.mainContainer')

const normalRoute = FlowRouter.group()
const userRoutes = FlowRouter.group({
    triggersEnter: [
        (context, redirect) => {
            if (!Meteor.userId()) {
                if (context.route.name != 'index')
                    redirect('index')
            }
        }
    ]
})

normalRoute.route('/', {
    name: 'index',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'addProfile' })
    }
})

userRoutes.route('/add', {
    name: 'addProfile',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'addProfile' })
    }
})

userRoutes.route('/add', {
    name: 'Home',
    action() {
        BlazeLayout.render('appBody', {body: 'Home' })
    }
})
FlowRouter.route('/createuser', {
    name: 'createUser',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'createUserForm' })
    }
})

normalRoute.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'loginForm' })
    }
})

// catch-all
FlowRouter.route('*', {
    name: 'err404',
    action() {
        this.render('notFound')
    }
})