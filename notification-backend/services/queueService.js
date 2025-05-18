const amqp = require('amqplib');
let channel;

const connect = async () => {
  const conn = await amqp.connect(process.env.RABBITMQ_URL);
  channel = await conn.createChannel();
  
  // Create retry queues with DLX
  await channel.assertExchange('retry_exchange', 'direct');
  await channel.assertQueue('notifications_retry_1', {
    messageTtl: 30000,
    deadLetterExchange: 'notifications'
  });
};

const publishToQueue = (message) => {
  channel.sendToQueue('notifications', Buffer.from(JSON.stringify(message)), {
    persistent: true
  });
};

module.exports = { connect, publishToQueue };
