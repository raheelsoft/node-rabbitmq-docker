import consumeMessageFromQueueWithoutExchange from "../queue_consumption/without_exchange.js";
import consumeMessageFromQueueWithDirectExchange from "../queue_consumption/direct_exchange.js";
import consumeMessageFromQueueWithTopicExchange from "../queue_consumption/topic_exchange.js";
import consumeMessageFromQueueWithFanoutExchange from "../queue_consumption/fanout_exchange.js";

const messageConsumers = async (channel) => {
    try {
        // consume message from queue without any exchange
        await consumeMessageFromQueueWithoutExchange(channel)

        // create queue and send message with direct exchange
        await consumeMessageFromQueueWithDirectExchange(channel);

        // create queue and send message with topic exchange
        await consumeMessageFromQueueWithTopicExchange(channel);

        // create queues and send message with fanout exchange
        await consumeMessageFromQueueWithFanoutExchange(channel)

    } catch (error) {
        console.error('An error occurred:', error);
    }
}

export default messageConsumers
