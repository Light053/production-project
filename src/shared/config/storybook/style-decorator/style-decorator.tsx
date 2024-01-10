import { Decorator } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator: Decorator = (Story) => {
  return (
    <div className="storybook-container">
      <Story />
    </div>
  );
};
