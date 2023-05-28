import React from "react";

import styles from './NotFoundBlock.module.scss';

function NotFoundBlock () {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        Nothing found
      </h1>
      <p className={styles.description}>Unfortunately, the requested page was not found.</p>
    </div>
  )
};

export default NotFoundBlock;