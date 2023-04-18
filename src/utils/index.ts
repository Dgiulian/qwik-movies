export function getReleaseYear(release_date: string) {
  return release_date.split("-")[0];
}

export function getRandomMovie(movieIds: number[]) {
  return movieIds[getRandomInt(0, movieIds.length)];
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * max + 1) + min;
}
