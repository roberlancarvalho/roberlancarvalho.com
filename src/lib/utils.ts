export const timeToRead = (text: string): string => {
  const words = text.split(' ')
  const minutes = Math.ceil(words.length / 200)
  return `${minutes} min de leitura`
}

export const unique = <T>(val: T, index: number, self: T[]): boolean => {
  return self.indexOf(val) === index
}
