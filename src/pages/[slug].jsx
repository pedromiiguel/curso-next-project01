import P from 'prop-types';
import Home from '../templates/Home';
import { loadPages } from '../api/load-pages';

export default function Page({ data }) {
  return <Home data={data} />;
}

export const getStaticPaths = async () => {
  const paths = (await loadPages()).map((page) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

Page.propTypes = {
  data: P.object,
};

export const getStaticProps = async (context) => {
  let data = null;

  try {
    data = await loadPages(context.params.slug);
  } catch (error) {
    data = null;
  }

  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};
