import React from "react";
import { getTopStories } from "./api/Toiservices"
import './App.css';

function App() {

  const [json, setJson] = React.useState()
  const [top5Stories, setTop5Stories] = React.useState()

  React.useEffect(() => {
    getTopStories()
      .then((res) => res.json()
        .then((json) => {
          setJson(json.result.slots)
        })
      ).catch(err => alert("unable to fetch data" + err))
  }, [])

  React.useEffect(() => {
   
   if(json !== undefined){
    let output = []
     json.forEach(item => {
       let title = item.story.content.title;
       let link =item.story.content.url;
       output.push({title,link})
     });
     setTop5Stories(output)
   }
  },[json])
  return (
    <div className="App">
       {top5Stories !== undefined && console.log(top5Stories)}
    </div>
  );
}

export default App;
