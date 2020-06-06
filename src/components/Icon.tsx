import React, { ReactElement } from 'react';

type Props = {
  IconProvider: ReactElement | any;
  link: string;
  color: string;
};

const IconLink = ({ IconProvider, link, color }: Props) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
    // style={{ textDecoration: 'none' }}
  >
    <IconProvider style={{ fontSize: 40, color }} />
  </a>
);

export { IconLink };
