// Exercise 5

const power = (base, exponent) => {
  try {
    const numBase = Number(base);
    const numExp = Number(exponent);

    if (isNaN(numBase) && isNaN(numExp)) {
      throw new Error(`base: '${base}' and exponent: '${exponent}' are not numbers`);
    }else if (isNaN(numBase)) {
      throw new Error(`base: '${base}' is not a number`);
    } else if (isNaN(numExp)) {
      throw new Error(`exponent: '${exponent}' is not a number`);
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