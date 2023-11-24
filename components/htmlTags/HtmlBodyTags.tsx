import React from 'react'

import styles from './style.module.scss'

export default function HtmlBodyTags() {
  return (
    <>
      <span className={`${styles.tags} ${styles.topTagsHtml}`}>
        &lt;html&gt;
      </span>
      <br />
      <span className={`${styles.topTags} ${styles.tags}`}>&lt;body&gt;</span>
    </>
  )
}
