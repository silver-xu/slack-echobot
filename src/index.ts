import { App } from '@slack/bolt';
import { buildListingModal } from './template/listingModal';

// Initializes your app with your bot token and signing secret
const app = new App({
  token: 'xoxb-946834943750-937692036673-ZU5sPdZ0hHyT8rQq7yPKeyz4',
  signingSecret: 'cd324dbe6dfaf33e0190315e7ca58ada',
  endpoints: {
    events: '/slack/events',
    commands: '/slack/commands',
  },
});

// Listens to incoming messages that contain "hello"
app.command('/sell', async ({ command, ack, payload, context }) => {
  ack();

  const subject = command.text;

  // const response = await app.client.chat.postMessage({
  //   channel: command.channel_id,
  //   text: '',
  //   attachments: [buildAuctionTemplate(subject)],
  //   token: context.botToken,
  // });

  app.client.views.open({
    token: context.botToken,
    trigger_id: payload.trigger_id,
    view: {
      ...buildListingModal({
        channel: command.channel_id,
        owner: command.user_id,
        heading: command.text,
      }),
      callback_id: 'create_listing',
    },
  });
  // let counter = 0;
  // setInterval(() => {
  //   app.client.chat.update({
  //     channel: command.channel_id,
  //     ts: response.ts as string,
  //     token: 'xoxb-946834943750-937692036673-ZU5sPdZ0hHyT8rQq7yPKeyz4',
  //     text: `${counter}`,
  //   });

  //   counter++;
  // }, 1000);
});

(async (): Promise<void> => {
  // Start your app
  await app.start(process.env.PORT || 80);

  console.log('⚡️ Bolt app is running!');
})();
