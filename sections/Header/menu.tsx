import React from 'react';

import { headerMenu, headerSubMenu } from './toolkit';
import { Link } from '@material-ui/core';
import { Text } from '../../components';
//@ts-ignore
import styles from './index.module.scss';

const menu = () => {
  {
    headerMenu.map((item, i) => {
      let _interval = 0;
      if (i !== 0) _interval = 44;
      return (
        <Link href={item.href} key={i}>
          <Text
            className={styles.menu}
            variant="subtitle1"
            style={{ marginLeft: `${_interval}px` }}
            value={item.label}
          />
        </Link>
      );
    });
  }
};

const subMenu = () => {
  {
    headerSubMenu.map((item, i) => {
      let _interval = 0;
      if (i !== 0) _interval = 44;
      return (
        <Link href={item.href} key={i}>
          <Text
            className={styles.menu}
            variant="subtitle1"
            style={{ marginLeft: `${_interval}px` }}
            value={item.label}
          />
        </Link>
      );
    });
  }
};

export { menu, subMenu };
