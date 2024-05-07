const YOUR_USERNAME = 'new_user'
const YOUR_PASSWORD = 'new_password'

export const CONNECTION_STRING = `amqp://${YOUR_USERNAME}:${YOUR_PASSWORD}@localhost:5672/`;

// Define queue properties and configurations
export const QUEUE_OPTIONS = {
    durable: true, // Make the queue durable
    exclusive: false, // Not exclusive
    autoDelete: false, // Don't auto-delete the queue
    arguments: {
        'x-message-ttl': 30000, // Message TTL of 30 seconds
        'x-max-length': 1000, // Maximum queue length of 1000 messages
    },
};

export const ACKNOWLEGMENT = {noAck: false}
