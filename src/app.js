const path = require('path')
const Express= require('express')

const app= Express()
const publicPath= path.join(__dirname,'../public')

app.use(Express.static(publicPath))

app.get('',(req,res)=>{
    res.send('<h1>Hello Express</h1>')
})

// app.get('/help',(req,res)=>{
//     res.send('Help')
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About weather app</h1>')
// })

app.get('/weather',(req,res)=>{
    res.send([{
        forecast:'50 degrees',
        location: 'Hell'
    }])
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})