const SectionTitleBlock = ({
  title,
  description,
  titleClassName = 'max-w-[800px] mx-auto',
  descClassName = 'max-w-[650px] mx-auto',
}) => {
  return (
    <div
      className={`flex flex-col gap-4 justify-center items-center text-center`}
    >
      <h2 className={`heading-2 leading-tight ${titleClassName}`}>{title}</h2>
      <p className={`paragraph-20 text-black ${descClassName}`}>
        {description}
      </p>
    </div>
  );
};

export default SectionTitleBlock;
