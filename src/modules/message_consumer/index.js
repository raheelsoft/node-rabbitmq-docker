import {ACKNOWLEGMENT} from "../../constants.js";

const consumer =
    async (queueName, channel, exchangeName = '') => {
        try {
            await channel.consume(queueName, (message) => {
                if (message) {
                    console.log(`Message consumed from queue ${queueName}:`, message.content.toString());

                    channel.ack(message)
                } else {
                    console.error('Something went wrong. Try again!')
                }
            }, ACKNOWLEGMENT);

            if (exchangeName) {
                console.log('Consumer started for exchange:', exchangeName);
            }
        } catch (error) {
            console.error('Error consuming message:', error);
        }
    }

export default consumer
