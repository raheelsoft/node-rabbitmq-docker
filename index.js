import connectToRabbitMQ from "./src/config.js";

import express from "express";
import bodyParser from "body-parser";
import sendMessageWithoutExchange from "./src/modules/controllers/without_exchange_controller.js";
import sendMessageWithDirectExchange from "./src/modules/controllers/direct_exchange_controller.js";
import sendMessageWithTopicExchange from "./src/modules/controllers/topic_exchange_controller.js";
import sendMessageWithFanoutExchange from "./src/modules/controllers/fanout_exchange_controller.js";
import messageConsumers from "./src/modules/consumers/index.js";

const app = express();
const jsonParser = bodyParser.json();

const {channel} = await connectToRabbitMQ();


app.get("", (req, res, next) => {
    console.log('Hello to Node Express and RabbitMQ')
    return res.send('<h1>Hello to Node Express and RabbitMQ</h1>')
});

app.post("/api/without_exchange", jsonParser, sendMessageWithoutExchange(channel));
app.post("/api/direct_exchange", jsonParser, sendMessageWithDirectExchange(channel));
app.post("/api/topic_exchange", jsonParser, sendMessageWithTopicExchange(channel));
app.post("/api/fanout_exchange", jsonParser, sendMessageWithFanoutExchange(channel));

await messageConsumers(channel)

app.listen(8080, () => {
    console.log(`Server is running on port 8080.`);
});

