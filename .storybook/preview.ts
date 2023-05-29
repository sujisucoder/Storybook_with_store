import type { Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    layout: 'centered',
    options: {
      storySort: {
        order: [
          'Youtube',
          ['Title'],
          'Setup',
          [  'Markdown', 'Mermaid','Storybook','Ngxs'],
          'Task',
          ['TaskComponent', 'TaskListComponent'],
          'Screen',
          ['InboxScreen']
        ],
      },
       showPanel: false 
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
