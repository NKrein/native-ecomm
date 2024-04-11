/*-------------- Format Number for show (number) --------------*/
export const formatNumber = (num) => {
  return new Intl.NumberFormat().format(Number(num).toFixed(2));
}
/*-------------- Capitalize word (string) --------------*/
export const capitalizeString = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/*-------------- Date format --------------*/
export const dateFormat = (ms) => {
  const date = new Date(ms)
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes()}hs`
}

/*-------------- Time ago --------------*/

const minAgo = (ms) => (Date.now() - ms) / 60000

const hsAgo = (ms) => minAgo(ms) / 60

const daysAgo = (ms) => hsAgo(ms) / 24

const monthAgo = (ms) => daysAgo(ms) / 30

export const timeAgo = (ms) => {
  if (minAgo(ms) >= 60 && hsAgo(ms) < 24) {
    return `${Math.floor(hsAgo(ms))} hora${Math.floor(hsAgo(ms)) > 1 ? 's' : ''}`
  } else if (hsAgo(ms) >= 24 && daysAgo(ms) < 30) {
    return `${Math.floor(daysAgo(ms))} dia${Math.floor(daysAgo(ms)) > 1 ? 's' : ''}`
  } else if (daysAgo(ms) >= 30 && monthAgo(ms) < 12) {
    return `${Math.floor(monthAgo(ms))} mes${Math.floor(monthAgo(ms)) > 1 ? 'es' : ''}`
  } else if (monthAgo(ms) >= 12) {
    return `${Math.floor(monthAgo(ms) / 12)} año${Math.floor(monthAgo(ms) / 12) > 1 ? 's' : ''}`
  } else {
    return `${Math.floor(minAgo(ms))} minuto${Math.floor(minAgo(ms)) > 1 ? 's' : ''}`
  }
}
//--------------------------------------------------------------------
