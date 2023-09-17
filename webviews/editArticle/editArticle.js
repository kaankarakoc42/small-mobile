
function ArticleEditHTML(props){
      return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body>
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <h3 id ="toggleReadOnlyButton" class="navbar-brand" href="#">Editing</h3>
                 <button id="saveButton" type="button" class="btn btn-primary">create</button>
            </nav>
            <div id="editorjs"></div>

            <script src="https://cdn.jsdelivr.net/npm/@editorjs/header@latest"></script><!-- Header -->
            <script src="https://cdn.jsdelivr.net/npm/@editorjs/simple-image@latest"></script><!-- Image -->
            <script src="https://cdn.jsdelivr.net/npm/@editorjs/delimiter@latest"></script><!-- Delimiter -->
            <script src="https://cdn.jsdelivr.net/npm/@editorjs/list@latest"></script><!-- List -->
            <script src="https://cdn.jsdelivr.net/npm/@editorjs/checklist@latest"></script><!-- Checklist -->
            <script src="https://cdn.jsdelivr.net/npm/@editorjs/quote@latest"></script><!-- Quote -->
            <script src="https://cdn.jsdelivr.net/npm/@editorjs/code@latest"></script><!-- Code -->
            <script src="https://cdn.jsdelivr.net/npm/@editorjs/embed@latest"></script><!-- Embed -->
            <script src="https://cdn.jsdelivr.net/npm/@editorjs/table@latest"></script><!-- Table -->
            <script src="https://cdn.jsdelivr.net/npm/@editorjs/link@latest"></script><!-- Link -->
            <script src="https://cdn.jsdelivr.net/npm/@editorjs/warning@latest"></script><!-- Warning -->

            <script src="https://cdn.jsdelivr.net/npm/@editorjs/marker@latest"></script><!-- Marker -->
            <script src="https://cdn.jsdelivr.net/npm/@editorjs/inline-code@latest"></script><!-- Inline Code -->
            <script src="https://cdn.jsdelivr.net/npm/@editorjs/editorjs@latest"></script>

        <script>

      jsonData = ${JSON.stringify(props.state.jsonData)}
        toolsData = {
          header: {
            class: Header,
            inlineToolbar: ['marker', 'link'],
            config: {
              placeholder: 'Header'
            },
            shortcut: 'CMD+SHIFT+H'
          },
          image: SimpleImage,

          list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L'
          },

          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },

          quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
              quotePlaceholder: "Enter a quote",
              captionPlaceholder: "Quote's author",
            },
            shortcut: 'CMD+SHIFT+O'
          },

          warning: Warning,

          marker: {
            class:  Marker,
            shortcut: 'CMD+SHIFT+M'
          },

          code: {
            class:  CodeTool,
            shortcut: 'CMD+SHIFT+C'
          },

          delimiter: Delimiter,

          inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+C'
          },

          linkTool: LinkTool,

          embed: Embed,

          table: {
            class: Table,
            inlineToolbar: true,
            shortcut: 'CMD+ALT+T'
          },
        }

          InsertedArticleID=undefined
          var editor = new EditorJS({
            readOnly: false,
            holder: 'editorjs',
            tools: toolsData,

            data: {
              blocks: jsonData
            },
            onReady: function(){

            },
            onChange: function(api, event) {
               if(InsertedArticleID){
                       saveArticle(InsertedArticleID)
               }
            }
          });
          /**
       * Module to compose output JSON preview
       */

          const saveButton = document.getElementById('saveButton');
          const toggleReadOnlyButton = document.getElementById('toggleReadOnlyButton');
          const readOnlyIndicator = document.getElementById('readonly-state');


          saveButton.addEventListener('click', function () {
            editor.save()
              .then((savedData) => {
                  title=savedData.blocks[0].data.text
                  content= JSON.stringify(savedData.blocks)
                  data = JSON.stringify({content:content,title:title})
                  if(InsertedArticleID){
                     PublishArticle(InsertedArticleID);
                  }
                  else{
                    InsertArticle(data);
                 
                  }
                  
                  
              })
              .catch((error) => {
                console.error('Saving error', error);
              });
          });

          toggleReadOnlyButton.addEventListener('click', async () => {
            const readOnlyState = await editor.readOnly.toggle();
            toggleReadOnlyButton.innerHTML= readOnlyState ? 'Reading':"Editing";
            readOnlyIndicator.textContent = readOnlyState ? 'On' : 'Off';
          });

          

          function InsertArticle(data){
            console.log("selam")
                    var requestOptions = {
                      method: 'POST',
                      headers: {
                        "Content-Type":"application/json",
                        "Authorization":"Bearer ${props.state.token}"
                      },
                      body: data,
                    };
                    alert("saving")
                    fetch("https://onur.onrender.com/articles", requestOptions)
                      .then(response => {
                        //alert(response)
                        return response.json()})
                      .then(json =>{
                        //alert(JSON.stringify(json));
                        InsertedArticleID=json.data.id;
                        console.log(InsertedArticleID);
                        saveButton.innerText="Publish"
                      })
                      .catch(error => console.log('error', error));

          }


          function saveArticle(InsertedArticleID){
            editor.save()
                .then((savedData) => {
                    title=savedData.blocks[0].data.text
                    content= JSON.stringify(savedData.blocks)
                    var myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");

                    var raw = JSON.stringify({
                      "articleId": InsertedArticleID,
                      "title": title,
                      "content": content,
                      "published": false
                    });

                    var requestOptions = {
                      method: 'PUT',
                      headers: {
                        "Content-Type":"application/json",
                        "Authorization":"Bearer ${props.state.token}"
                      },
                      body: raw,
                      redirect: 'follow'
                    };

                    fetch("https://onur.onrender.com/articles", requestOptions)
                      .then(response => response.text())
                      .then(result => console.log(result))
                      .catch(error => console.log('error', error));

                })
          }

          function PublishArticle(InsertedArticleID){
              var requestOptions = {
                method: 'POST',
                headers: {
                  "Authorization":"Bearer ${props.state.token}"
                },
                redirect: 'follow'
              };

               console.log("id :",InsertedArticleID)
              fetch("https://onur.onrender.com/articles/"+InsertedArticleID+"/publish", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
          }
        </script>
        <style>
          :root {
        --color-bg-main: #fff;
        --color-border-light: #E8E8EB;
        --color-text-main: #000;
      }

      .dark-mode {
        --color-border-light: rgba(255, 255, 255,.08);
        --color-bg-main: #1c1e24;
        --color-text-main: #737886;
      }


      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;        font-size: 14px;
        line-height: 1.5em;
        margin: 0;
        background: var(--color-bg-main);
        color: var(--color-text-main);
      }
        </style>
      </body>
      </html>`
}
export default ArticleEditHTML;