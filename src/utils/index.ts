export function getReleaseYear(release_date: string) {
  return release_date.split("-")[0];
}
