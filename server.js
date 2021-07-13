
const express = require('express') // We need express for it's modules, remember the parantheses!
const app = express() // Now we have express, make sure we can use all it's functions by adding it to app
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {

'21 savage': {
    'age': 28,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthdate': '22 October 1992', 
    'birthLocation': 'London, England',
    'origin': 'Atlanta, Georgia',
    'genre': 'hip hop, trap, rap, horrorcore',
    'occupation': 'rapper, songwriter, record producer',
    'yearsActive': '2013-present',
    'labels': 'Epic, Slaughter Gang',
    'children': 3
},
'chance the rapper':{
    'age': 28,
    'birthName': 'Chancelor Jonathan Bennett',
    'birthdate': 'April 16, 1993', 
    'birthLocation': 'London, England',
    'origin': 'Chicago, Illinois',
    'genre': 'hip hop, alternative hip hop, r & b',
    'occupation': 'rapper, singer, song writer, record producer, activist, actor, philanthropist',
    'yearsActive': '2011-present',
    'labels': 'none',
    'children': 0
},
'unknown':{
    'age': 'unknown',
    'birthName': 'unknown',
    'birthdate': 'unknown', 
    'birthLocation': 'unknown',
    'origin': 'unknown',
    'genre': 'unknown',
    'occupation': 'unknown',
    'yearsActive': 'unknown',
    'labels': 'unknown',
    'children': 'unknown'
}


}

app.get('/', (request, response) => {                           // When someone makes a request for our app, respond by sending
    response.sendFile(__dirname + '/index.html')                // them a file which will be our index.html file
                                                                // Hears a request > Send them a html file.
})

app.get('/api/rappers/:rapperName', (request, response) => {
    const rapName = request.params.rapperName.toLowerCase()                   // If someone searches for a rapper name,
    console.log(rapName)                                       //  we want to return a response about that rapper.
    
    if (rappers[rapName]){
        response.json(rappers[rapName])
    } else {
        response.json(rappers['unknown'])
    }

    response.json(rappers[rapName])                             
    
})      

app.listen(process.env.PORT || PORT, () => {                                        // Set up the server to listen and run
    console.log(`Server running on port ${PORT}`)
})