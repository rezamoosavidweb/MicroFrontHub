import '../src/styles.css';
import '../src/assets/fonts/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { Preview } from '@storybook/react';
import { ToastContainer } from 'react-toastify';

const preview: Preview = {
  decorators: [
    (Story, StoryContext) => {
      if (StoryContext.globals?.locale) {
        document.dir = StoryContext.globals?.locale;
      }
      return (
        <>
          <Story />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </>
      );
    },
  ],
};

export const globalTypes = {
  locale: {
    name: 'Language',
    description: 'Language',
    defaultValue: 'ltr',

    toolbar: {
      // The icon for the toolbar item
      icon: 'globe',
      // Array of options
      items: [
        { value: 'rtl', icon: 'globe', title: 'RTL' },
        { value: 'ltr', icon: 'globe', title: 'LTR' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export default preview;
