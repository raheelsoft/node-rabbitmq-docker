import declareExchange from "../creating_exchange/index.js";
import bindQueueWithExchange from "../bind_queue_with_exchange/index.js";

const sendMessageToQueueWithFanoutExchange = async (channel, message1, message2) => {
    try {
        const firstQueueName = 'first_fanout_exchange_queue';
        const secondQueueName = 'second_fanout_exchange_queue';
        const exchangeName = 'fanout_exchange'

        await declareExchange(channel, 'fanout', exchangeName)
        await bindQueueWithExchange(channel, firstQueueName, exchangeName, {durable: true})
        await bindQueueWithExchange(channel, secondQueueName, exchangeName, {durable: true})

        await channel.sendToQueue(firstQueueName, Buffer.from(JSON.stringify({content: message1})));
        await channel.sendToQueue(secondQueueName, Buffer.from(JSON.stringify({content: message2})));

        console.log(`Sent ${message1}`);
        console.log(`Sent ${message2}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

export default sendMessageToQueueWithFanoutExchange
