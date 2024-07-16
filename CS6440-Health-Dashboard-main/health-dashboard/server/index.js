const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Login = require("./mongo");
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3001, () => {
	console.log("Server is running...");
});

const uri =
	"mongodb+srv://adityaamagesh:B9aY7Qo4d2xIRQVm@cluster0.ff4ikda.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = {
	serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function run() {
	try {
		await mongoose.connect(uri, clientOptions);
		await mongoose.connection.db.admin().command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} catch (error) {
		console.error(error);
	}
}
run().catch(console.dir);

app.post("/login", async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await Login.findOne({
			username,
			password,
		});
		if (user) {
			res.status(200).send("Login successful");
		} else {
			res.status(401).send("Invalid credentials");
		}
	} catch {
		res.status(401).send("Invalid credentials");
	}
});

app.post("/register", async (req, res) => {
	const { username, password } = req.body;
	try {
		const isUsed = await Login.findOne({ username: username });
		console.log("isUsed", isUsed);
		if (isUsed) {
			res.status(400).send("Username already in use");
		} else {
			const user = new Login({
				username,
				password,
			});
			await user.save();
			res.status(200).send("User created");
		}
	} catch (error) {
		console.error(error);
		res.status(400).send("Failed to create user");
	}
});
