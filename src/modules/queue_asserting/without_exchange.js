import createQueue from "../create_queue/index.js";

const sendMessageToQueueWithoutExchange = async (channel, message) => {
    try {
        const queueName = 'queue_without_exchange'
        await createQueue(channel, queueName);

        await channel.sendToQueue(queueName, Buffer.from(JSON.stringify({content: message})));
        console.log(`Sent ${message}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

export default sendMessageToQueueWithoutExchange
