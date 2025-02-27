import React from 'react';
import { Text } from '../../components';
import { featureLintContents } from './toolkit';
// @ts-ignore
import videoTestImage from '../../images/feature_lint_video_image.svg';
// @ts-ignore
import styles from './index.module.scss';
// @ts-ignore
import home from '../../styles/Home.module.scss';

const FeatureLint = () => {
  return (
    <>
      <div className={home.inner_container}>
        <Text
          variant="h1"
          className={styles.title}
          value={featureLintContents.title()}
        />
        <Text
          variant="h6"
          className={styles.sub_title}
          value={featureLintContents.subTitle()}
        />
      </div>
        <img style={{ width: '100vw' }} src={videoTestImage} />
    </>
  );
};

export default FeatureLint;
