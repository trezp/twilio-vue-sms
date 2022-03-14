exports.handler = async function(context, event, callback) {
  const twilioClient = context.getTwilioClient();
  const response = new Twilio.Response();
        
  response.setHeaders({
    "Access-Control-Allow-Origin": "http://localhost:8080",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  });

  try {
    const message = await twilioClient.messages.create({
      body: event.Body || "Your payment is confirmed!",
      to: "",
      from: ""
    });
    response.setBody({
      status: `Your message was sent successfully with SID: ${message.sid}`, 
    });
    return callback(null, response);
  } catch(error) {
    response.setBody({
      status: error
    });
    return callback(response);
  }
}