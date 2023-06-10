import { useTranslation } from 'react-i18next';
import { BugButton } from "app/providers/ErrorBoundary";
import { type FunctionComponent } from "react";
import { Counter } from "entities/Counter";
const MainPage: FunctionComponent = () => {
  const { t } = useTranslation('main');

  return (
      <div>
          {t('Main page')}
          <BugButton />
          <Counter />
      </div>
  );
};

export default MainPage;
