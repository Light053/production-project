import type { Preview } from "@storybook/react";
import { Themes } from "app/providers/theme-providers/lib/theme-context";
import { RouterDecorator } from "shared/config/storybook/router-decorator/router-decorator";
import { StyleDecorator } from "shared/config/storybook/style-decorator/style-decorator";
import { ThemeDecorator } from "shared/config/storybook/theme-decorator/theme-decorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [RouterDecorator, StyleDecorator, ThemeDecorator(Themes.LIGHT)],
};


export default preview;
