const ul = document.querySelector('.people');
const people = ['mario','tiano', 'jackal', 'francis','mark'];

let html = ``;

//people.forEach(function(person,index)
//{
    //console.log(`Hey ${person}, at position ${index+1}`);
//    html += `<li style="color:purple"> ${person}</li>`;
//});
people.forEach(function(person)
{
    //console.log(`Hey ${person}, at position ${index+1}`);
    html += `<li style="color:purple"> ${person}</li>`;
});

ul.innerHTML = html;
console.log("This");
console.log(html);
console.log("This nooot");

// object literals
let user = 
{
    name: "tiano",
    age: 30,
    email: "tiano@gmail.com",
    location:"Kigali",
    blogs:["blog this is 1", "blog this is 2", "this is 3"],
    login: function()
    {
        //console.log("User logged in");
    },
    logout: function()
    {
        //console.log("User logged out");
    },
    printBlogs: function()
    {
        console.log("This user has the following blogs");
        this.blogs.forEach(function(blog)
        {
            //console.log(blog);
        });
    }
};

//console.log(user);
user.age = 27;
user.name = "francis";
user.email = "frank@gmail.com";

//console.log(user);

user.login();
//user.printBlogs();

const navItems = ['Home','Items', 'Search', 'Blog','About us'];

     html = ``;
    navItems.forEach(function(item){
        if(item == title)
        //{
        //    `<a href="/create"style={{
        //        color:"white",
        //        backgroundColor: '#f1356d',
        //        borderRadius: '8px'
        //    }}>${item}</a>`;
        //}
        //else
            html += `<a href='#'>${item}</a>`
    });
    console.log(html);