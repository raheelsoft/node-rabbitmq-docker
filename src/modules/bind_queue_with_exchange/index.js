import {QUEUE_OPTIONS} from "../../constants.js";

const bindQueueWithExchange = async (channel, queueName, exchangeName, queueOptions = QUEUE_OPTIONS) => {
    try {
        await channel.assertQueue(queueName, queueOptions);
        await channel.bindQueue(queueName, exchangeName);
        console.log('Queue declared and bound to exchange:', queueName);
    } catch (error) {
        console.error('Error declaring and binding queue:', error);
    }
}

export default bindQueueWithExchange
