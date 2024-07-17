import clsx from "clsx";

const index = ({ cards, cardType, setCardType, isLoading }) => {
  return (
    <>
      {cards.map((card, i) => (
        <div
          className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-3 intro-y"
          onClick={() => setCardType && setCardType(card.cardType)}
          key={i}
        >
          <div
            className={clsx([
              cardType && "relative zoom-in",
              // "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
            ])}
          >
            <div
              className={clsx([
                "p-5 box border-b-4",
                cardType && cardType === card.cardType
                  ? "border-[#1E293B]"
                  : card.medType === "total"
                  ? "border-[#1E293B] text-white"
                  : card.medType === "taken"
                  ? "bg-green-400"
                  : card.medType === "missed"
                  ? "bg-red-400"
                  : card.medType === "snoozed"
                  ? "bg-orange-400"
                  : "hover:border-[#1E293B]",
              ])}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 text-3xl font-medium leading-8">
                  <div className="mb-2 text-base">Total {card.title}</div>
                  {isLoading ? (
                    <span className="text-xs">loading...</span>
                  ) : (
                    card.count || 0
                  )}
                </div>
                <div
                  className={clsx([
                    "p-3 rounded-full",
                    card.title === "Hospitals" && "bg-[#ACFDD0]",
                    card.title === "Doctors" && "bg-[#FFDEDE]",
                    card.title === "Patients" && "bg-[#FEFFBD]",
                  ])}
                >
                  <img src={card?.img} alt={card?.title} className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default index;
