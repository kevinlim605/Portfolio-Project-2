export function dateConfigurator(dt) {
  const date = new Date(dt * 1000);
  const timeString = date
    .toLocaleTimeString()
    .replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
  const dateString = date
    .toDateString()
    .replace(" ", ", ")
    .replace(" 2", ", 2");
  return `${dateString} ${timeString}`;
}
