/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./app",
    files: "**/*.stories.?(ts|tsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:app(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx)?)$",
  },
];

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-knobs/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./app/components/app-update/app-update.stories.tsx": require("../app/components/app-update/app-update.stories.tsx"),
    "./app/components/atomic/galoy-button-field/galoy-button-field.stories.tsx": require("../app/components/atomic/galoy-button-field/galoy-button-field.stories.tsx"),
    "./app/components/atomic/galoy-currency-bubble/galoy-currency-bubble.stories.tsx": require("../app/components/atomic/galoy-currency-bubble/galoy-currency-bubble.stories.tsx"),
    "./app/components/atomic/galoy-icon-button/galoy-icon-button.stories.tsx": require("../app/components/atomic/galoy-icon-button/galoy-icon-button.stories.tsx"),
    "./app/components/atomic/galoy-icon/galoy-icon.stories.tsx": require("../app/components/atomic/galoy-icon/galoy-icon.stories.tsx"),
    "./app/components/atomic/galoy-input/galoy-input.stories.tsx": require("../app/components/atomic/galoy-input/galoy-input.stories.tsx"),
    "./app/components/atomic/galoy-primary-button/galoy-primary-button.stories.tsx": require("../app/components/atomic/galoy-primary-button/galoy-primary-button.stories.tsx"),
    "./app/components/atomic/galoy-secondary-button/galoy-secondary-button.stories.tsx": require("../app/components/atomic/galoy-secondary-button/galoy-secondary-button.stories.tsx"),
    "./app/components/atomic/galoy-tertiary-button/galoy-tertiary-button.stories.tsx": require("../app/components/atomic/galoy-tertiary-button/galoy-tertiary-button.stories.tsx"),
    "./app/components/balance-header/balance-header.stories.tsx": require("../app/components/balance-header/balance-header.stories.tsx"),
    "./app/components/currency-keyboard/currency-keyboard.stories.tsx": require("../app/components/currency-keyboard/currency-keyboard.stories.tsx"),
    "./app/components/large-button/large-button.stories.tsx": require("../app/components/large-button/large-button.stories.tsx"),
    "./app/components/wallet-overview/wallet-overview.stories.tsx": require("../app/components/wallet-overview/wallet-overview.stories.tsx"),
    "./app/components/wallet-summary/wallet-summary.stories.tsx": require("../app/components/wallet-summary/wallet-summary.stories.tsx"),
    "./app/rne-theme/colors.stories.tsx": require("../app/rne-theme/colors.stories.tsx"),
    "./app/rne-theme/text.stories.tsx": require("../app/rne-theme/text.stories.tsx"),
    "./app/screens/contacts-screen/contacts-detail.stories.tsx": require("../app/screens/contacts-screen/contacts-detail.stories.tsx"),
    "./app/screens/contacts-screen/contacts.stories.tsx": require("../app/screens/contacts-screen/contacts.stories.tsx"),
    "./app/screens/earns-map-screen/earns-map-screen.stories.tsx": require("../app/screens/earns-map-screen/earns-map-screen.stories.tsx"),
    "./app/screens/earns-screen/earns-quiz.stories.tsx": require("../app/screens/earns-screen/earns-quiz.stories.tsx"),
    "./app/screens/earns-screen/earns-sections.stories.tsx": require("../app/screens/earns-screen/earns-sections.stories.tsx"),
    "./app/screens/earns-screen/section-completed.stories.tsx": require("../app/screens/earns-screen/section-completed.stories.tsx"),
    "./app/screens/home-screen/home-screen.stories.tsx": require("../app/screens/home-screen/home-screen.stories.tsx"),
    "./app/screens/phone-auth-screen/phone-flow.stories.tsx": require("../app/screens/phone-auth-screen/phone-flow.stories.tsx"),
    "./app/screens/phone-auth-screen/phone-validation.stories.tsx": require("../app/screens/phone-auth-screen/phone-validation.stories.tsx"),
    "./app/screens/receive-bitcoin-screen/receive-wrapper.stories.tsx": require("../app/screens/receive-bitcoin-screen/receive-wrapper.stories.tsx"),
    "./app/screens/send-bitcoin-screen/send-bitcoin-confirmation-screen.stories.tsx": require("../app/screens/send-bitcoin-screen/send-bitcoin-confirmation-screen.stories.tsx"),
    "./app/screens/send-bitcoin-screen/send-bitcoin-details-screen.stories.tsx": require("../app/screens/send-bitcoin-screen/send-bitcoin-details-screen.stories.tsx"),
    "./app/screens/settings-screen/display-currency-screen.stories.tsx": require("../app/screens/settings-screen/display-currency-screen.stories.tsx"),
    "./app/screens/settings-screen/language-screen.stories.tsx": require("../app/screens/settings-screen/language-screen.stories.tsx"),
    "./app/screens/settings-screen/settings-screen.stories.tsx": require("../app/screens/settings-screen/settings-screen.stories.tsx"),
    "./app/screens/transaction-detail-screen/transaction-detail-screen.stories.tsx": require("../app/screens/transaction-detail-screen/transaction-detail-screen.stories.tsx"),
  };
};

configure(getStories, module, false);
