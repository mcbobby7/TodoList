const express = require("express");
const next = require("next");
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        server.get('/todos', (req, res) => {
            const todos = [
                {
                   id: 1,
                   title: 'Complete ENYE todo list', 
                   completed: false
               },
               {
                   id: 2,
                   title: 'Make my array come from my express endpoint', 
                   completed: false
               },
               {
                   id: 3,
                   title: 'use componentDidMount in my react',
                   completed: false
               }
            ];

            res.json(todos);
        })

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, err => {
            if (err) throw err;
            console.log('> ready on port ${PORT}');
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });