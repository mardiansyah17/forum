export function inputHandler(event) {
  return {
    name: event.target.name,
    value: event.target.value,
  };
}
