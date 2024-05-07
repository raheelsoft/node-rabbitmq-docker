import {QUEUE_OPTIONS} from "../../constants.js";

const createQueue = async (channel, queueName) => {
    try {
        await channel.assertQueue(queueName, QUEUE_OPTIONS);
        console.log('Queue created successfully.');
    } catch (error) {
        console.error('Error creating queue:', error);
    }
}

export default createQueue
