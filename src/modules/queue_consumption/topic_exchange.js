import consumer from "../message_consumer/index.js";

const consumeMessageFromQueueWithTopicExchange = async (channel) => {
    try {
        const queueName = 'my_topic_queue';
        const exchangeName = 'my_topic_exchange';

        await consumer(queueName, channel, exchangeName)
    } catch (error) {
        console.error('Error consuming message:', error);
    }
}

export default consumeMessageFromQueueWithTopicExchange
