import sendMessageToQueueWithDirectExchange from "../queue_asserting/direct_exchange.js";

const sendMessageWithDirectExchange = (channel) => async (req, res) => {
    try {
        const {message} = req.body;

        // create queue and send message with direct exchange
        await sendMessageToQueueWithDirectExchange(channel, message);

        res.status(200).json({
            status: "Ok!",
            message: "Message successfully sent!",
        });
    } catch (error) {
        console.log(error);
    }
};

export default sendMessageWithDirectExchange;
