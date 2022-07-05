export const useDuration = () => {
  function formatDuration(value, showSeconds = false) {
    const hours = Math.floor(value / 3600);
    value -= hours * 3600;
    const minutes = Math.floor(value / 60);
    value -= minutes * 60;

    let transformed = zeroFill(hours) + ":" + zeroFill(minutes);

    if (showSeconds) {
      transformed += ":" + zeroFill(value);
    }

    return transformed;
  }

  function zeroFill(number) {
    const width = 2 - number.toString().length;
    if (width > 0) {
      return new Array(width + (/\./.test(number) ? 2 : 1)).join("0") + number;
    }
    return number + "";
  }

  return {
    formatDuration,
  };
};
