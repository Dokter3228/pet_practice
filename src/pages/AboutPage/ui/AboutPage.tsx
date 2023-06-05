import { useTranslation } from 'react-i18next';
import { type FunctionComponent } from "react";

const AboutPage: FunctionComponent = () => {
  const { t } = useTranslation('about');
  return (
      <div>
          {t('About page')}
      </div>
  );
};

export default AboutPage;
