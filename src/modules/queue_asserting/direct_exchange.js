import declareExchange from "../creating_exchange/index.js";
import bindQueueWithExchange from "../bind_queue_with_exchange/index.js";

const sendMessageToQueueWithDirectExchange = async (channel, message) => {
    try {
        const exchangeName = 'my_direct_exchange';
        const queueName = 'my_direct_queue'

        // Declare the direct exchange
        await declareExchange(channel, 'direct', exchangeName)
        await bindQueueWithExchange(channel, queueName, exchangeName, {durable: true})

        // Publish the message to the direct exchange with the routing key
        await channel.sendToQueue(queueName, Buffer.from(JSON.stringify({content: message})));
        console.log(`Message sent to exchange '${exchangeName} and ${queueName}' : ${message}`);
    } catch (error) {
        console.error('Error setting up direct exchange:', error);
    }
}

export default sendMessageToQueueWithDirectExchange;
