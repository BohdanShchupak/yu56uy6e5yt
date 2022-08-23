'use strict';

exports.handler = async function(context, event, callback) {
  let response = new Twilio.Response();
  response.appendHeader('Content-Type', 'application/json');

  const client = context.getTwilioClient();

  const { StatusCallbackEvent, RoomSid } = event;
  const { CONVERSATIONS_SERVICE_SID } = context;

  if (StatusCallbackEvent === 'room-ended') {
    try {
      const conversationsClient = client.conversations.services(CONVERSATIONS_SERVICE_SID);

      const conversation = await conversationsClient.conversations(RoomSid).fetch();
      const { mediaProcessorSid } = JSON.parse(conversation.attributes);

      await client.media.mediaProcessor(mediaProcessorSid).update({ status: 'ended' });

      console.log('Ended MediaProcessor: ', mediaProcessorSid);
    } catch (e) {
      console.log(e);
      response.setStatusCode(500);
      response.setBody({
        error: {
          message: 'error deleting mediaProcessor',
          explanation: e.message,
        },
      });
      return callback(null, response);
    }
  }

  response.setBody({
    deleted: true,
  });

  callback(null, response);
};
