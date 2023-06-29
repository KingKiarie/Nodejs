const fs = require('node:fs')

// //synchronous Reading

// console.log('start reading a file...')

// const results = fs.readFile('./names.txt','utf8')

// fs.writeFileSync('./results.txt',`This is the final result:
// ${results}`,
// (error)=>{
//     if(error){
//         console.log(`Any error: ${error}`)
//     }
//     } 
//     )

    //console.log('Finish reading a file')

    //Asynchronous Reading

    console.log('Start reading a file')

    fs.readfile('./names.txt', 'utf8',(error,data)=>{
        if(error){
            console.log(`Any error: ${error}`)
        }else{
            console.log(data)
        }

        fs.writeFile(
            './results.txt',
            `Read file names.tt and results were:${data}`,
            (error)=>{
                if(error){
                    console.log(`Any error:${error}`)
                }else{
                    console.log('file written successfully')
                }
            }
        )
    })

    console.log('Finish reading a file...')
