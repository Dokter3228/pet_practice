import { useTranslation } from 'react-i18next';
import { BugButton } from "app/providers/ErrorBoundary";
import { type FunctionComponent } from "react";
const MainPage: FunctionComponent = () => {
  const { t } = useTranslation('main');

  return (
      <div>
          {t('Main page')}
          <BugButton />
      </div>
  );
};

export default MainPage;
