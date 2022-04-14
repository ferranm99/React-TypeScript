import Head from 'next/head'
import React, { FC } from 'react'

const Header: FC = React.memo(() =>
  <Head>
    <title>Jases.IO</title>
    <link rel="icon" href="data:image/png;base64,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" />
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  </Head>);

Header.displayName = 'Header';

export default Header