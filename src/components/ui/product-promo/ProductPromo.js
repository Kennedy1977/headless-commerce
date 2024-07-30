export const ProductPromo = ({ props }) => {
  const { label, promo } = props;
  return (
    <>
      <div
        className={`${promo} text-white text-center text-sm font-semibold px-2 py-1 rounded mb-2`}
      >
        {label}
      </div>
    </>
  );
};
