import amqp from 'amqplib';
import {CONNECTION_STRING} from "./constants.js";

const connectToRabbitMQ = async () => {
    try {
        const connection = await amqp.connect(CONNECTION_STRING);
        const channel = await connection.createChannel();

        return {connection, channel}
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
    }
}

export default connectToRabbitMQ
