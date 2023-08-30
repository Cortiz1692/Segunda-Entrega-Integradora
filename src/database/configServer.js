const config = {
    server:{
        port:8080,
        secretSession:"claveSecretaSessions"
    },
    mongo:{
        url:"MONGO URL"
    },
    github:{
        clientId:process.env.GITHUB_CLIENT_ID,
        clienteSecret:process.env.GITHUB_SECRET_ID,
        callbackUrl:"http://localhost:8080/api/sessions/github-callback"
    }
}

module.exports = config;