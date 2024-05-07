import sendMessageToQueueWithoutExchange from "../queue_asserting/without_exchange.js";

const sendMessageWithoutExchange = (channel) => async (req, res) => {
    try {
        const {message} = req.body;

        // create queue and send message without any exchange
        await sendMessageToQueueWithoutExchange(channel, message);

        res.status(200).json({
            status: "Ok!",
            message: "Message successfully sent!",
        });
    } catch (error) {
        console.log(error);
    }
};

export default sendMessageWithoutExchange;
