import express, { Router } from 'express'
import { userModel } from '../managers/UserManager.js';
import { deleteSessionController } from '../controllers/session.delete.controler.js';
import { onlyAuthenticated } from '../middlewares/autenticacionWeb.js'
import { postSessionsController, getCurrentSessionController, logoutSessionsController } from '../controllers/sessions.controller.js'
import { antenticacionPorGithub_CB, autenticacionPorGithub, autenticacionUserPass } from '../middlewares/passport.js'
import { getUsersController, postUsersController } from '../controllers/users.controller.js';

export const apiRouterSession = Router()

apiRouterSession.use(express.json())

apiRouterSession.get('/', function (req, res) {
  res.redirect('/login');
})

apiRouterSession.get('/login', function (req, res) {
  res.render('login', {
    pageTitle: 'Login'
  })
})

apiRouterSession.get('/register', function (req, res) {
  res.render('register', {
    pageTitle: 'Register'
  })
})

apiRouterSession.post('/sessions', autenticacionUserPass, postSessionsController)

apiRouterSession.get('/sessions/github', autenticacionPorGithub)
apiRouterSession.get('/sessions/githubcallback', antenticacionPorGithub_CB, (req, res, next) => { res.redirect('/products') })

apiRouterSession.post('/logout', logoutSessionsController)
apiRouterSession.post('/sessions/logout', logoutSessionsController)

apiRouterSession.get('/sessions/current', onlyAuthenticated, getCurrentSessionController)

apiRouterSession.post('/users', postUsersController)
apiRouterSession.get('/users', getUsersController)



