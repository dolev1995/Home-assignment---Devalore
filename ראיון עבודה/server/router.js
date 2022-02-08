'use strict';
	//fs = require("fs")

    const todoSchema = new mongoose.Schema({
        name: string,
        age: Number,
        pet: string,
        color:string
    });
    const todo = mongoose.model("todo",todoSchema);

    //todo.save();

    // app.get("/", (req, res) => {
    //     res.send("hellow world!");
    // });

    const router = (app, express) => {

        // API
        // ==============================================
    
        app.post("/api/pet", async (req, res) => {
            try {
               const{name,age,pet,color} = req.body;
               const newTodo = new todo({name,age,pet,color});
               newTodo.save((err,todo) => {res.send(todo)});
            //    const newAnswer = {
            //        name,
            //        age,
            //        pet,
            //        color
            //    }
            //    todo.push(newAnswer);

                res.send(newAnswer);
            }
            catch(e){
                printError(e, req);
                res.status(500);
            }
   
        })


    }


    const printError = (e, req) => {
        console.error(`Error: ${new Date().toLocaleString()} : ${e.message}.\n stack: ${e.stack} \n  GET params: ${JSON.stringify(req.params)} \n POST parmars: ${JSON.stringify(req.body)}`)
    };
    module.exports = router;


