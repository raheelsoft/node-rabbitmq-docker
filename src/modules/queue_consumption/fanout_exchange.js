import consumer from "../message_consumer/index.js";

const consumeMessageFromQueueWithFanoutExchange = async (channel) => {
    try {
        const firstQueueName = 'first_fanout_exchange_queue';
        const secondQueueName = 'second_fanout_exchange_queue';
        const exchangeName = 'fanout_exchange'

        await consumer(firstQueueName, channel, exchangeName)
        await consumer(secondQueueName, channel, exchangeName)
    } catch (error) {
        console.error('Error consuming message:', error);
    }
}

export default consumeMessageFromQueueWithFanoutExchange
