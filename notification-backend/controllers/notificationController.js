const sendNotification = async (req, res) => {
  try {
    const { userId, type, content } = req.body;
    const notification = new Notification({ userId, type, content });
    
    // Add to queue
    await queueService.publishToQueue({
      notificationId: notification._id,
      type,
      content,
      userId
    });

    await notification.save();
    res.status(202).json(notification);
  } catch (error) {
    res.status(500).json({ error: 'Notification processing failed' });
  }
};

const getNotifications = async (req, res) => {
  const notifications = await Notification.find({ userId: req.params.id });
  res.json(notifications);
};
