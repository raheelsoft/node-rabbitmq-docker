import sendMessageToQueueWithFanoutExchange from "../queue_asserting/fanout_exchange.js";

const sendMessageWithFanoutExchange = (channel) => async (req, res) => {
    try {
        const {message1, message2} = req.body;

        // create queue and send message with fanout exchange
        await sendMessageToQueueWithFanoutExchange(channel, message1, message2);

        res.status(200).json({
            status: "Ok!",
            message: "Message successfully sent!",
        });
    } catch (error) {
        console.log(error);
    }
};

export default sendMessageWithFanoutExchange;
