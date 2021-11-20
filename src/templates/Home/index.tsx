/* eslint-disable no-unused-vars */

import { Base } from '../Base';
import Head from 'next/head';

import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from '../../components/GridTwoColumns';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridSection, GridSectionProps } from '../../components/GridSection';
import { GridImage, GridImageProps } from '../../components/GridImage';
import { MenuLinkProps } from '../../components/MenuLink';
import { LogoLinkProps } from '../../components/LogoLink';

export type SectionProps =
  | GridContentProps
  | GridImageProps
  | GridSectionProps
  | GridTwoColumnsProps;

export type PageData = {
  title: string;
  slug: string;
  footerHtml: string;
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  sections: SectionProps[];
};

export type HomeProps = {
  data: PageData[];
};

function Home({ data }: HomeProps) {
  const { menu, sections, footerHtml, slug, title } = data[0];
  const { links, text, link, srcImg } = menu;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Landing page next" />
      </Head>

      <Base
        links={links}
        footerHtml={footerHtml}
        logoData={{ text, link, srcImg }}
      >
        {sections.map((section, index) => {
          const { component } = section;
          const key = `${slug}-${index}`;

          if (component === 'section.section-two-columns') {
            return (
              <GridTwoColumns key={key} {...(section as GridTwoColumnsProps)} />
            );
          }

          if (component === 'section.section-content') {
            return <GridContent key={key} {...(section as GridContentProps)} />;
          }

          if (component === 'section.section-grid-text') {
            return <GridSection key={key} {...(section as GridSectionProps)} />;
          }

          if (component === 'section.section-grid-image') {
            return <GridImage key={key} {...(section as GridImageProps)} />;
          }
        })}
      </Base>
    </>
  );
}

export default Home;
