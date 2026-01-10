const eventEmitter=require("events"); //event module returns class

const customEmitter=new eventEmitter; //instance of the class

customEmitter.on('response',(name,age)=>{
    console.log(`data recieved of user ${name} and age ${age}`);
    
})
customEmitter.on('response',()=>{
    console.log('other logic');
    
})

customEmitter.emit('response','john',34)