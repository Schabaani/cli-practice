import { exec } from "child_process";
import { promisify } from 'util';

const asyncExec = promisify(exec);

export default async function runTerminal () {
    // try {
    //     const res = await asyncExec('ls -la'); 
    //     console.log(res)
    // } catch (error) {
    //     console.log(error)
    // }
    exec("ls -la", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
}