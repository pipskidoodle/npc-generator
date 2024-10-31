// Required Modules  
    const {rollDice} = await import('./rollDice.mjs')
    const {wildTable} = await import('../temporary_api/wildMagic.mjs')


// Module for rolling dice

export async function wildMagic(num) {
    let roll = await rollDice(`${num}d${wildTable.length}`)
    let surge = wildTable[roll]
    return surge
}
