# Neversitup Test

### Can you see structure from  `demo-project`

#### And Can you test API of `demo-project` by Download file `demo-project.postman_collection.json` to Import in Postman

# structure project
    project
    ├── README.md
    ├── config
    │     ├── default.json
    │     ├── production.json
    │     └── test.json
    ├── package-lock.json
    ├── package.json
    ├── src
        ├── app.hooks.js
        ├── app.js
        ├── authentication.js
        ├── channels.js
        ├── index.js
        ├── logger.js
        │    └── index.js
        ├── models
        │     └── users.model.js
        ├── mongodb.js
        ├── mongoose.js
        └── services
             ├── index.js
             └── users
                   ├── _model
                   │     ├── users.class.js
                   │     ├── users.hooks.js
                   │     └── users.service.js
                   ├── create
                   │     ├── create.class.js
                   │     ├── create.hooks.js
                   │     └── create.service.js
                   ├── get
                   │     ├── get.class.js
                   │     ├── get.hooks.js
                   │     └── get.service.js
                   ├── list
                   │     ├── list.class.js
                   │     ├── list.hooks.js
                   │     └── list.service.js
                   ├── remove
                   │     ├── remove.class.js
                   │     ├── remove.hooks.js
                   │     └── remove.service.js
                   └── update
                         ├── update.class.js
                         ├── update.hooks.js
                         └── update.service.js
