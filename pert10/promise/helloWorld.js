let helloWorld = () => {
    let condition = true
    return new Promise((resolve) => {
        if(condition){
            setTimeout(() => {
                resolve(
                    console.log("Hello World!")
                )
            }, 2000)
        }
   })
}   

helloWorld()

export default helloWorld