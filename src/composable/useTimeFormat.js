const useTimeFormat = () => {
  const getTimeString = (time) => {
    const d = new Date(time * 1000);
    let options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return d.toLocaleString("en-us", options);
  };

  return { getTimeString };
};
export default useTimeFormat;
