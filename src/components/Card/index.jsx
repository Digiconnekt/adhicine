import clsx from "clsx";
import Lucide from "../../base-components/Lucide";

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
              "before:content-[''] before:w-[90%] before:shadow-[0px_3px_20px_#0000000b] before:bg-slate-50 before:h-full before:mt-3 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70",
            ])}
          >
            <div
              className={clsx([
                "p-5 box",
                cardType && cardType === card.cardType
                  ? "bg-primary text-white"
                  : card.medType === "total"
                  ? "bg-primary text-white"
                  : card.medType === "taken"
                  ? "bg-green-400"
                  : card.medType === "missed"
                  ? "bg-red-400"
                  : card.medType === "snoozed"
                  ? "bg-orange-400"
                  : "hover:bg-primary hover:text-white",
              ])}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1 text-3xl font-medium leading-8">
                  {isLoading ? (
                    <span className="text-xs">loading...</span>
                  ) : (
                    card.count || 0
                  )}{" "}
                  <div className="mt-1 text-base">{card.title}</div>
                </div>
                <div className="">
                  <img
                    src={card?.img}
                    alt={card?.title}
                    className="w-12 h-12"
                  />
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
