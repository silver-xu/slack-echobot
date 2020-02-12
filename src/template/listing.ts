export const buildListingTemplate = (subject: string) => ({
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*${subject}*`,
      },
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: 'Current bid: `$100.00`, reserve `not met`, close in `5 hours 10 mins`',
        },
      ],
    },
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text:
          '>_Selling my gold iPhone 11 Pro Max 512gb. Tempered glass screen protector fitted. Comes with box, lightning cable, 5w power brick charger, and unused headphones_',
      },
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Place a bid',
          },
          value: 'bid',
        },
      ],
    },
    {
      type: 'divider',
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text: '*Bidding History*',
        },
      ],
    },
    {
      type: 'context',
      elements: [
        {
          type: 'mrkdwn',
          text:
            '`User 1` placed a bid of $100.00, 5 mins ago\n`User 2` place a bid of $99.00, 10 mins ago \n`User 3` placed a bid of $90.00, 15 mins ago\n ',
        },
      ],
    },
  ],
});
