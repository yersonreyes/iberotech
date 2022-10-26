export function compare(a, b) {
  if (new Date(a.created) < new Date(b.created)) {
    return -1;
  }
  if (new Date(a.created) > new Date(b.created)) {
    return 1;
  }
  return 0;
}
