// Exercise 5

const power = (base, exponent) => {
  try {
    const numBase = Number(base);
    const numExp = Number(exponent);

    if (isNaN(numBase) && isNaN(numExp)) {
      throw new Error(`${base} and ${exponent} are not numbers`);
    }
    if (isNaN(numBase)) {
      throw new Error(`${base} is not a number`);
    } else if (isNaN(numExp)) {
      throw new Error(`${exponent} is not a number`);
    } else {
      return numBase ** numExp;
    }
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    console.log("Operation complete");
  }
};

// Avrei potuto usare anche uno switch