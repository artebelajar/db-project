import readline from 'node:readline/promises';
import {stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({input, output})

export async function inputData(question){
    const answer = await rl.question(`${question}`)
    return answer.trim()
}
export async function closeInput() {
    await rl.close();
}