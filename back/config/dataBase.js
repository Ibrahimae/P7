const mongoose = require("mongoose");

const connectApi = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://" +
            process.env.DB_USER_PASS +
            "@cluster0.v6gg0xf.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Connexion à la base de donnée réussie !");
    } catch (err) {
        console.log(
            "Connexion à la base de donnée échouée ! (" + err + ")"
        );
    }
};

module.exports = connectApi;