import { type ReactNode } from "react";
import { render, type RenderResult } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";
import { type Container } from "react-dom";

export function renderWithTranslation (component: ReactNode): RenderResult<Q, Container, BaseElement> {
  return render(<I18nextProvider i18n={i18nForTests}>
      {component}
  </I18nextProvider>);
}
