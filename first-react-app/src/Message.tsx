
// Follow 'PascalCasing' in which the The Name-of-Function-Component should start with Capital-Letter always as per industry-standards
function Message() {
   // JSX: javascript XML (Following code is gonna complied into javascript)
   // To understanding how it works goto "babeljs.io/repl" url in chrome and write the code below

   const name = '';
   if (name)
      return <h1>Hello {name}</h1>;
   return <h1>Hello World</h1>;
}

export default Message;