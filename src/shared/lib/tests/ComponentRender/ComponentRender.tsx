import { type ReactNode } from "react";
import { render, type RenderResult } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { MemoryRouter } from "react-router-dom";
import { type StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { type DeepPartial } from "redux";

interface ComponentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export function ComponentRender (component: ReactNode, options: ComponentRenderOptions = {}): RenderResult {
  const { route = "/", initialState } = options;
  return render(
      <StoreProvider initialState={initialState}>
          <MemoryRouter initialEntries={[route]}>
              <I18nextProvider i18n={i18nForTests}>
                  {component}
              </I18nextProvider>
          </MemoryRouter>
      </StoreProvider>
  );
}
