const declareExchange = async (channel, exchangeType, exchangeName) => {
    try {
        await channel.assertExchange(exchangeName, exchangeType, {durable: true});
        console.log(`${exchangeName} exchange declared....`);
    } catch (error) {
        console.error(`Error declaring ${exchangeName} exchange:`, error);
    }
}

export default declareExchange
