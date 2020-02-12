import { View } from '@slack/types';
import { CreateListingModel } from '../types/listing';

export const buildListingModal = (createListingModel: CreateListingModel): View => ({
  type: 'modal',
  title: {
    type: 'plain_text',
    text: 'GarageSale by auction',
  },
  submit: {
    type: 'plain_text',
    text: 'Submit',
    emoji: true,
  },
  close: {
    type: 'plain_text',
    text: 'Cancel',
    emoji: true,
  },
  blocks: [
    {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text:
          ":wave: Hey man!\n\nHere is where you sell your unwanted item. We'd love to hear from you more about what you are selling today.",
      },
    },
    {
      type: 'divider',
    },
    {
      type: 'input',
      label: {
        type: 'plain_text',
        text: 'Listing heading',
      },
      element: {
        type: 'plain_text_input',
        initial_value: createListingModel.heading,
        placeholder: {
          type: 'plain_text',
          text: 'Heading of the listing',
        },
      },
    },
    {
      type: 'input',
      label: {
        type: 'plain_text',
        text: 'Feature image url',
      },
      element: {
        type: 'plain_text_input',
        placeholder: {
          type: 'plain_text',
          text: 'External url of the feature image',
        },
      },
      optional: true,
    },
    {
      type: 'input',
      label: {
        type: 'plain_text',
        text: 'Some more details about the listing',
      },
      element: {
        type: 'plain_text_input',
        placeholder: {
          type: 'plain_text',
          text: 'Descriptions',
        },
        multiline: true,
      },
    },
    {
      type: 'input',
      label: {
        type: 'plain_text',
        text: 'Starting price',
      },
      element: {
        type: 'plain_text_input',
        placeholder: {
          type: 'plain_text',
          text: '1.00',
        },
        initial_value: '1.00',
      },
    },
    {
      type: 'input',
      label: {
        type: 'plain_text',
        text: 'Reserve price',
      },
      element: {
        type: 'plain_text_input',
        placeholder: {
          type: 'plain_text',
          text: 'Default to no reserve',
        },
      },
      optional: true,
    },
    {
      type: 'input',
      label: {
        type: 'plain_text',
        text: 'Buy now price',
      },
      element: {
        type: 'plain_text_input',
        placeholder: {
          type: 'plain_text',
          text: 'Price to win without bidding',
        },
      },
      optional: true,
    },
    {
      type: 'input',
      label: {
        type: 'plain_text',
        text: 'When should the auction end?',
      },
      element: {
        type: 'static_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select duration',
          emoji: true,
        },
        options: [
          {
            text: {
              type: 'plain_text',
              text: '3 days',
              emoji: true,
            },
            value: '3 days',
          },
          {
            text: {
              type: 'plain_text',
              text: '1 day',
              emoji: true,
            },
            value: '1 day',
          },
          {
            text: {
              type: 'plain_text',
              text: '4 hours',
              emoji: true,
            },
            value: '4 hours',
          },
          {
            text: {
              type: 'plain_text',
              text: '2 hours',
              emoji: true,
            },
            value: '2 hours',
          },
          {
            text: {
              type: 'plain_text',
              text: '1 hour',
              emoji: true,
            },
            value: '1 hour',
          },
        ],
      },
    },
  ],
});
