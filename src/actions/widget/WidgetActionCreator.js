export const moveWidget = (from, to) => {
  return {
    type: 'MOVE_WIDGET',
    from: from,
    to: to
  };
};
