export const bannerNameVariant = {
  hidden: {
    opacity: 0,
    x: -100,
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
      duration: 0.4,
      delay: 0.5,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
      duration: 0.4,
      delay: 0.5,
    },
  },
};

export const recOuterDiv = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
};

export const recMidDiv = {
  hidden: {
    y: -10,
    opacity: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
};

export const recInnerDiv = {
  hidden: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 1,
      delay: 1,
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    },
  },
};
