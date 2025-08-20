const fs=require('fs')
console.log('start')

const data=fs.readFile('note12334.txt','utf-8',(error, data)=>{
    console.log('file read successfully',data,error)
})
console.log(fs.writeFileSync('note12334.txt','this is the second file of fs module'))

console.log('end')