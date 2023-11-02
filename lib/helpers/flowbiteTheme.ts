import type { CustomFlowbiteTheme } from "flowbite-react";

const flowbiteTheme: CustomFlowbiteTheme = {
  badge: {
    root: {
      color: {
        info: "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
        primary:
          "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300",
      },
      size: {  xl: "px-3 py-2 text-base rounded-md"},
    },
    icon: {  off: "rounded-full px-2 py-1"},
  },
  button: {
    color: {
      gray: "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-blue-700 :ring-blue-700 focus:text-blue-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2",
      info: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
      primary:
        "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    },
    inner: { base: "flex items-center transition-all duration-200" },
    outline: { color: { gray: "border border-gray-200 dark:border-gray-500" } },
  },
  dropdown: {
    arrowIcon: "ml-2 h-4 w-4",
    content: "py-1 focus:outline-none",
    floating: {
      animation: "transition-opacity",
      arrow: {
        base: "absolute z-10 h-2 w-2 rotate-45",
        style: {  auto: "bg-gray-700" },
        placement: "-4px"
      },
      base: "z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none",
      content: "py-1 text-sm text-gray-200",
      divider: "my-1 h-px bg-gray-600",
      header: "block py-2 px-4 text-sm text-gray-200",
      hidden: "invisible opacity-0",
      item: {
        base: "flex items-center justify-start py-2 px-4 text-sm cursor-pointer w-full text-gray-200 hover:bg-gray-600 focus:outline-none hover:text-white focus:bg-gray-600 focus:text-white",
        icon: "mr-2 h-4 w-4"
      },
      style: { auto: "border border-none bg-gray-700 text-white" },
      target: "w-fit"
    },
    inlineWrapper: "flex items-center"
  },
  modal: {
    content: { inner: "relative rounded-lg bg-white shadow dark:bg-gray-800"},
    header: { base: "flex items-start justify-between rounded-t px-5 pt-5"  },
  },
  navbar: { root: { base: "fixed z-30 w-full border-b border-gray-700 bg-gray-800" } },
  sidebar: {
    root: {
      base: "flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full duration-75 border-r lg:flex transition-width border-gray-700",
      inner: "h-full overflow-y-auto overflow-x-hidden rounded py-4 px-3 bg-gray-800"
    },
    item: { base: "flex items-center justify-center rounded-lg p-2 text-base font-medium text-white hover:bg-gray-700" },
    collapse: {
      icon: {
        base: "h-6 w-6 transition duration-75 text-gray-400 group-hover:text-white",
        open: {
          off: "",
          on: "text-gray-100"
        }
      },
      button:
        "group flex w-full items-center rounded-lg p-2 text-base font-medium transition duration-75 text-white hover:bg-gray-700",
    },
  },
  textarea: {  base: "block w-full text-sm p-4 rounded-lg border disabled:cursor-not-allowed disabled:opacity-50"},
  textInput: {
    field: {
      input: {
        colors: { info: "text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500 border-blue-400 bg-gray-700" },
        withIcon: { on: "pl-12" },
      },
    },
  },
  toggleSwitch: {  toggle: {  checked: { color: { blue: "bg-blue-700 border-blue-700" }}}},
};

export default flowbiteTheme;
