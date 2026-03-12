export function formatSecondsToMinutes(seconds: number)
{
    const minutes = string(Math.floor(seconds/60)).padStart(2,'0');
    const secondsMod = 
    return `${minutes}:`
}