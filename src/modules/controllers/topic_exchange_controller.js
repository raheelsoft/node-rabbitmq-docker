import sendMessageToQueueWithTopicExchange from "../queue_asserting/topic_exchange.js";

const sendMessageWithTopicExchange = (channel) => async (req, res) => {
    try {
        const {message} = req.body;

        // create queue and send message with topic exchange
        await sendMessageToQueueWithTopicExchange(channel, message);

        res.status(200).json({
            status: "Ok!",
            message: "Message successfully sent!",
        });
    } catch (error) {
        console.log(error);
    }
};

export default sendMessageWithTopicExchange;
