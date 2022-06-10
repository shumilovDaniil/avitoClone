import React, { FC } from 'react';

interface ITitle {
  subtitle?: string,
  children: JSX.Element | React.ReactNode
}

const Title: FC <ITitle> = ({ children, subtitle }) => (
  <div className="flex items-center gap-4 mb-5" style={{ marginBottom: 25 }}>
    <h2 className="text-2xl font-medium mr-5 ">{children}</h2>
      {(subtitle) ? <a className="border-2 rounded-xl text-gray-400 px-4" href="">{subtitle}</a> : null}
  </div>
);

export default Title;
