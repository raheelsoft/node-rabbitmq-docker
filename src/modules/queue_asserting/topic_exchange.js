import declareExchange from "../creating_exchange/index.js";
import bindQueueWithExchange from "../bind_queue_with_exchange/index.js";
import {QUEUE_OPTIONS} from "../../constants.js";

const sendMessageToQueueWithTopicExchange = async (channel, message) => {
    try {
        const queueName = 'my_topic_queue';
        const exchangeName = 'my_topic_exchange';
        const routingKey = 'topic.routing.key';

        // Declare the topic exchange
        await declareExchange(channel, 'topic', exchangeName)
        await bindQueueWithExchange(channel, queueName, exchangeName,QUEUE_OPTIONS , routingKey)

        // Publish the message to the topic exchange with the routing key
        const res = await channel.sendToQueue(queueName, Buffer.from(JSON.stringify({content: message})));
        if (res) {
            console.log(`Message sent to exchange '${exchangeName}' with routing key '${routingKey}': ${message}`);
        } else {
            console.error('Something went wrong. Try again!')
        }
    } catch (error) {
        console.error('Error setting up topic exchange:', error);
    }
}

export default sendMessageToQueueWithTopicExchange;
