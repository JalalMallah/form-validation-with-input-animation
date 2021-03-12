import { useContext } from 'react';
import { AppContext } from 'context';

import './SuccessBanner.css';

const SuccessBanner = () => {
  const { isBannerActive } = useContext(AppContext);
  const bannerClassName = isBannerActive ? 'success-banner active' : 'success-banner';

  return (
    <div className={bannerClassName}>
      <p>Form has been submitted successfully!</p>
    </div>
  );
};

export default SuccessBanner;
