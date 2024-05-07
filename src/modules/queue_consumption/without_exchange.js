import consumer from "../message_consumer/index.js";

const consumeMessageFromQueueWithoutExchange = async (channel) => {
    try {
        const queueName = 'queue_without_exchange'
        await consumer(queueName, channel)
    } catch (error) {
        console.error('An error occurred during consumption:', error);
    }
}

export default consumeMessageFromQueueWithoutExchange
