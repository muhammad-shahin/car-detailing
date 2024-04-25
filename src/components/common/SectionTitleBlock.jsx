const SectionTitleBlock = ({
  title,
  description,
  titleClassName,
  descClassName,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 pb-7 lg:pb-10 xl:pb-[60px] justify-center items-center text-center`}
    >
      <h2
        className={`heading-2 leading-tight max-w-[800px] xl:max-w-[850px] mx-auto ${titleClassName}`}
      >
        {title}
      </h2>
      <p
        className={`paragraph-20 text-black max-w-[650px] xl:max-w-[720px] mx-auto ${descClassName}`}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionTitleBlock;
