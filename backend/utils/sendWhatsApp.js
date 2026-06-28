import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_SID,
  process.env.TWILIO_TOKEN
);

export const sendWhatsApp =
  async (
    phone,
    message
  ) => {
    await client.messages.create({
      body: message,

      from:
        process.env.TWILIO_WHATSAPP,

      to:
        `whatsapp:${phone}`,
    });
  };