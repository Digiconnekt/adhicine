import { twMerge } from "tailwind-merge";
import {
  Disclosure as HeadlessDisclosure,
  Transition,
} from "@headlessui/react";
import {
  Fragment,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const disclosureContext = createContext({
  open: false,
  close: () => {},
  key: 0,
});

const groupContext = createContext({
  selectedIndex: null,
  setSelectedIndex: () => {},
  variant: "default",
});

function Disclosure({ children, className, key = 0, ...props }) {
  const group = useContext(groupContext);

  return (
    <HeadlessDisclosure
      as="div"
      defaultOpen={group.selectedIndex === key}
      className={twMerge([
        "py-4 first:-mt-4 last:-mb-4",
        "[&:not(:last-child)]:border-b [&:not(:last-child)]:border-slate-200/60 [&:not(:last-child)]:dark:border-darkmode-400",
        group.variant == "boxed" &&
          "p-4 first:mt-0 last:mb-0 border border-slate-200/60 mt-3 dark:border-darkmode-400",
        className,
      ])}
      {...props}
    >
      {({ open, close }) => (
        <disclosureContext.Provider
          value={{
            open: open,
            close: close,
            key: key,
          }}
        >
          <>
            {typeof children === "function"
              ? children({
                  open: open,
                  close: close,
                })
              : children}
          </>
        </disclosureContext.Provider>
      )}
    </HeadlessDisclosure>
  );
}

Disclosure.Group = ({
  children,
  className,
  as,
  selectedIndex = 0,
  variant = "default",
  ...props
}) => {
  const [active, setActive] = useState(selectedIndex);
  const Component = as || "div";

  return (
    <groupContext.Provider
      value={{
        selectedIndex: active,
        setSelectedIndex: setActive,
        variant: variant,
      }}
    >
      {
        <Component className={className} {...props}>
          {Array.isArray(children)
            ? children.map((item, key) => {
                return {
                  ...item,
                  props: {
                    ...item.props,
                    key: key,
                  },
                };
              })
            : children}
        </Component>
      }
    </groupContext.Provider>
  );
};

Disclosure.Button = ({ children, className, ...props }) => {
  const disclosure = useContext(disclosureContext);
  const group = useContext(groupContext);

  useEffect(() => {
    group.selectedIndex !== disclosure.key && disclosure.close();
  }, [group.selectedIndex]);

  return (
    <HeadlessDisclosure.Button
      as="button"
      className={twMerge([
        "outline-none py-4 -my-4 font-medium w-full text-left dark:text-slate-400",
        disclosure.open && "text-primary dark:text-slate-300",
        className,
      ])}
      onClick={() => {
        group.setSelectedIndex(disclosure.key);
      }}
      {...props}
    >
      {children}
    </HeadlessDisclosure.Button>
  );
};

Disclosure.Panel = ({ children, className, ...props }) => {
  return (
    <Transition
      as={Fragment}
      enter="overflow-hidden transition-all linear duration-[400ms]"
      enterFrom="mt-0 max-h-0 invisible opacity-0"
      enterTo="mt-3 max-h-[2000px] visible opacity-100"
      leave="overflow-hidden transition-all linear duration-500"
      leaveFrom="mt-3 max-h-[2000px] visible opacity-100"
      leaveTo="mt-0 max-h-0 invisible opacity-0"
    >
      <HeadlessDisclosure.Panel
        as="div"
        className={twMerge([
          "mt-3 text-slate-700 leading-relaxed dark:text-slate-400",
          className,
        ])}
        {...props}
      >
        {children}
      </HeadlessDisclosure.Panel>
    </Transition>
  );
};

export default Disclosure;
