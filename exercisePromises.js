// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "success");
})


// #2) Run the above promise and make it console.log "success"
promise.then(result => console.log(result));

// or

promise.then(console.log)


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise = Promise.resolve(
    setTimeout(() => {
        console.log("success");
    }, 4000)
);


// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
.catch(console.log("Oooops something went wrong"))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => 
    fetch(url).then(people => people.json())
))
.then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('Ops! 404 is here again!', err));


// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapio/api/people/4'
]
Promise.all(urls.map(url => 
    fetch(url).then(people => people.json())
))
.then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => console.log('Ops! 404 is here again!', err));


// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

async function getUrl() {
    const response = await fetch('https://swapi.co/api/starships/9/')
    const data = await response.json()
    console.log(data)
}

}
// #2) ADVANCED: Update the function below to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const resp = await fetch(url)
            return respo.json()      
     } 
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholderypicode.com/albums'
]

const getData = async function() {
    try {
  const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const resp = await fetch(url)
            return respo.json()      
     } 
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}
    catch(err) {
    console.log("Ooooooooops!", err);
}
}