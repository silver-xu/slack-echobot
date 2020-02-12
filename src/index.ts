import { App } from '@slack/bolt';

// Initializes your app with your bot token and signing secret
const app = new App({
  token: 'xoxb-946834943750-937692036673-lRP01dQRceZvHV96Dmf3Ju48',
  signingSecret: 'cd324dbe6dfaf33e0190315e7ca58ada',
  endpoints: {
    events: '/slack/events',
    commands: '/slack/commands',
  },
});

// Listens to incoming messages that contain "hello"
app.command('/sell', ({ command, ack, say }) => {
  ack();
  // say() sends a message to the channel where the event was triggered
  say(`Hey there`);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 80);

  console.log('⚡️ Bolt app is running!');
})();
