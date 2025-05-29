const parseNumber = (value) => {
  const isString = typeof value === 'string';
  if (!isString) return;

  const parsed = parseInt(value, 10);
  if (Number.isNaN(parsed)) return;

  return parsed;
};

const parseNumberOfRooms = (rooms) => {
  const allowed = [1, 2, 3];
  const parsed = parseNumber(rooms);
  if (allowed.includes(parsed)) return parsed;

  return;
};

export const parseFilterParams = (query) => {
  const { priceMin, priceMax, numberOfRooms } = query;

  const parsedPriceMin = parseNumber(priceMin);
  const parsedPriceMax = parseNumber(priceMax);
  const parsedNumberOfRooms = parseNumberOfRooms(numberOfRooms);

  return {
    priceMin: parsedPriceMin,
    priceMax: parsedPriceMax,
    numberOfRooms: parsedNumberOfRooms,
  };
};
