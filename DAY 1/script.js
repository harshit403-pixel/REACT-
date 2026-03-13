console.log(React)

//real DOM SE ELEMENT

let h1D = document.createElement("h1")

//react se that is virtual dom mai 
let h1R = React.createElement("h1", {id : "hello" , class :"hanji"}, 
    React.createElement("span", null , "hey i am aspan from react")
)
//("name", props/attributes/inner css typeaa , "childrens kya andar likha hai [ek se jyada children toh array mai likhenge]")
console.log(h1D)
console.log(h1R)


let div = React.createElement("div", null, 
    [React.createElement("h1", null, "HELLO"),
        React.createElement("h1", null, "BYE"),

    ]
)

console.log(div)

//to display on page virtual dom ko real dom se attach kardia root use karke 
// slect kia html se element and usme div render kardia
ReactDOM.createRoot(document.getElementById("root")).render(div)