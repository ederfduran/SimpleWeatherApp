const path = require('path')
const Express= require('express')
const hbs= require('hbs')
const app= Express()

// Define paths for Express config
const publicPath= path.join(__dirname,'../public')
const viewsPath= path.join(__dirname,'../templates/views')
const partialsPath= path.join(__dirname,'../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(Express.static(publicPath))

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather app',
        name:'Eder Duran'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me',
        name:  'Eder Duran'
    })    
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help ',
        message: 'what do you need for help?',
        name: 'Eder Duran'
    })
})


app.get('/weather',(req,res)=>{
    res.send([{
        forecast:'50 degrees',
        location: 'Hell'
    }])
})

app.get('/help/*',(req,res)=>{
    res.render('notFound',{
        name:'Eder D',
        title:'Help',
        message:'Help Article not found'
    })
})

app.get('*',(req,res)=>{
    res.render('notFound',{
        name:'Eder D',
        title:'404',
        message:'Page not found'        
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})