import consumer from "../message_consumer/index.js";

const consumeMessageFromQueueWithDirectExchange = async (channel) => {
    try {
        const exchangeName = 'my_direct_exchange';
        const queueName = 'my_direct_queue'

        await consumer(queueName, channel, exchangeName)
    } catch (error) {
        console.error('Error consuming message:', error);
    }
}

export default consumeMessageFromQueueWithDirectExchange
