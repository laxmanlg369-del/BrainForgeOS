import type { FC } from "react";

type PageTitleProps = {
  title: string;
  subtitle?: string;
};

const PageTitle: FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <header className="space-y-2">
      <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="max-w-3xl text-sm leading-6 text-gray-400 sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
};

export default PageTitle;
