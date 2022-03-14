import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

//markdown guide that's displayed when the page first loads
const defaultText = `# Here's a little taste of what Markdown can do for us:  
# Use a hashtag to make a \`<h1>\` header  
## Use 2 hashtags to make a h2 sub-header, and so on...  
### Let's have a look at other awesome functionalities :  
Use a backtick on each side to render code inside the html file: \`<div></div>\` 

\`\`\`

Here we can do a multi-line code by using 
3 backticks on each side:
 
  function test(one, two) {
    if (one === two) {
      return "nay"
    };
  };
  
\`\`\`

**Make the text bold by using 2 asterisks on each side**,
_Or italic by using an underscore on each side_,
**_Aaand of course, we can do both!_**

Link URLs with bracket notation [Here](https://www.twitch.tv/vanska18), 
and
> Create block quotes with a right-pointing angle bracket,

+ Create lists by using a plus sign:
  + learn more about Markdown
  + or don't.
  + this is a short list of choices...

1. Create numbered lists by using number... it's fairly simple:
2. 1st item
3. 2nd item

You can add images aswell like so:
![Vanska18 Logo](https://static-cdn.jtvnw.net/jtv_user_pictures/85ddc58d-41ad-4210-beda-2084988b4cf4-profile_image-300x300.jpg)

Have fun everyone !`;

const App = () => {
  const [markdown, setMarkdown] = React.useState(defaultText);

  const handleChange = event => {
    setMarkdown(event.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "col-xs-6" }, /*#__PURE__*/
    React.createElement("div", { className: "left-well" }, /*#__PURE__*/
    React.createElement("h4", { className: "text-center" }, "Editor"), /*#__PURE__*/
    React.createElement(Editor, { markdown: markdown,
      onChange: handleChange }))), /*#__PURE__*/


    React.createElement("div", { className: "col-xs-6" }, /*#__PURE__*/
    React.createElement("div", { className: "right-well" }, /*#__PURE__*/
    React.createElement("h4", { className: "text-center" }, "Markdown Previewer"), /*#__PURE__*/
    React.createElement(Preview, { markdown: markdown }))))));





};

//creates a markdown renderer that interprets carriage returns & renders them as <br> 
const MakeItGlorious = new marked.Renderer();
marked.setOptions({
  breaks: true });


//part where we can write things in markdown language
const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("textarea", { type: "text",
      id: "editor",
      className: "myStyle",
      onChange: props.onChange,
      value: props.markdown }));

};

//preview part
const Preview = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "preview",
      dangerouslySetInnerHTML: { __html: marked(props.markdown, { renderer: MakeItGlorious }) } }));

};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("App"));