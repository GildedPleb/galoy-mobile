import { MockedProvider } from "@apollo/client/testing"
import { ComponentMeta } from "@storybook/react"
import React from "react"
import { PersistentStateWrapper, StoryScreen } from "../../../.storybook/views"
import { createCache } from "../../graphql/cache"
import { IsAuthedContextProvider } from "../../graphql/is-authed-context"
import { BalanceHeader } from "./balance-header"
import mocks from "../../graphql/mocks"

export default {
  title: "Balance Header",
  component: BalanceHeader,
  decorators: [
    (Story) => (
      <PersistentStateWrapper>
        <MockedProvider mocks={mocks} cache={createCache()}>
          <StoryScreen>{Story()}</StoryScreen>
        </MockedProvider>
      </PersistentStateWrapper>
    ),
  ],
} as ComponentMeta<typeof BalanceHeader>

export const Unauthed = () => (
  <IsAuthedContextProvider value={false}>
    <BalanceHeader loading={false} />
  </IsAuthedContextProvider>
)

export const Authed = () => (
  <IsAuthedContextProvider value={true}>
    <BalanceHeader loading={false} />
  </IsAuthedContextProvider>
)

export const Loading = () => (
  <IsAuthedContextProvider value={true}>
    <BalanceHeader loading={true} />
  </IsAuthedContextProvider>
)
