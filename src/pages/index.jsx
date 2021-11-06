import P from 'prop-types';
import React from 'react';
import { loadPages } from '../api/load-pages';

import Home from '../templates/Home';

export default function Index({ data }) {
  return <Home data={data} />;
}

export const getStaticProps = async (context) => {
  let data = null;

  try {
    data = await loadPages('landing-page');

  } catch (e) {
    console.log(e);
  }

  if(!data || !data.length) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
