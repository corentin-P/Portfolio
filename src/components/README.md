# List of components 

## Contact 

Button on the bottom left corner of the page to access the contact page 

![contact-component](/doc/contact-component.png)

Include it in your `App.vue` file like that :

```vue
<script setup lang="ts">
    import Contact from '@/components/Contact.vue'
</script>
<template>
    <body>
        <div class="main">
            <Contact/>
        </div>
    </body>
</template>
```

## LangOption

List of buttons on the bottom right corner to choose the language of the website. 

![langOption-component](/doc/langOption-component.png)

Include it in your `App.vue` file like that : 

```vue
<script setup lang="ts">
    import langOption from '@/components/LangOption.vue'
</script>
<template>
    <body>
        <div class="main">
            <langOption/>
        </div>
    </body>
</template>
```

## NavBar

Link to homepage on the top left corner and list of links on the top right corner. 

![NavBar-component](/doc/NavBar-component.png)

Include it in your `App.vue` file like that : 

```vue
<script setup lang="ts">
    import NavBar from '@/components/NavBar.vue'
</script>
<template>
    <body>
        <div class="main">
            <NavBar/>
        </div>
    </body>
</template>
```

You can then configure it in the JSON file : 
```json 
{
    "main": {
        "navbar": {
            "title": {
                "text": "<name>",
                "url": "."
            },
            "links": {
                "link1": {
                    "text": "Projects",
                    "url": "projects"
                },
                "link2": {
                    "text": "Ongoing Projects",
                    "url": "ongoing-projects"
                },...
            }
        }
    }
}
```

## Sections

The "Sections" component represents the content of the page, in which we can include several components. It's like a list of components for the content of the page. 

Include it in your `App.vue` file like that : 

```vue
<script setup lang="ts">
    import Sections from '@/components/Sections.vue'
</script>
<template>
    <body>
        <div class="main">
            <div class="content">
                <Sections :sections="$tm('<page-name>.<sections>')"/>
            </div>
        </div>
    </body>
</template>
```

Then you can configure it in JSON : 
```json
"sections": {
    "<page-name>": {
        "sections": {
            "<section-name1>": {
                "type": "<type>",
                "titleInBox": true|false,
                "sumup": [ // not mandatory
                    "Architecture as you want, like projects for example"
                ],
                --- Attributes of the subsection ---
            },
            "<section-name2>": {
                "type": "<type>",
                "titleInBox": true|false,
                "sumup": [ // not mandatory
                    "Architecture as you want, like projects for example"
                ],
                --- Attributes of the subsection ---
            },...
        }
    },...
}
```

Here are the components that we can put in a "Sections" component : 

### Experience section 

![experience-section-component](/doc/experience-section-component.png)

Json configuration : 
```json
"sections": {
    "<section-name1>": {
        "type": "experience",
        "titleInBox": true,
        "title": "Education",
        "content": {
            "<name1>": {
                "date": "Sept. 2024 – July 2027",
                "description": ["School "],
                "img-description": "logo of school",
                "img": "/images/logos/logo.png"
            },
            "<name2>": {
                "date": "Sept. 2024 – July 2027",
                "description": ["School "],
                "img-description": "logo of school",
                "img": "/images/logos/logo.png"
            },...
        }
    },...
}
```

### Logos list

![logos-list-component](/doc/logos-list-component.png)

Json configuration : 
```json
"sections": {
    "<section-name1>": {
        "type": "logos-list",
        "titleInBox": true,
        "title": "IT skills",
        "logos": [
            {
                "img": "/images/logos/IT/C.png",
                "alt": "Logo C"
            },
            {
                "img": "/images/logos/IT/C++.png",
                "alt": "Logo C++"
            },...
        ]
    },...
}
```

### Logos description

![Logos-description-component](/doc/logos-description-component.png)

```json
"sections": {
    "<section-name1>": {
        "type": "logos-description",
        "titleInBox": true,
        "title": "Languages",
        "content": {
            "<name1>": {
                "name": "French", // title
                "alt": "French flag", // alt of the image
                "description": [
                    "Native speaker" 
                ],
                "img": "/images/logos/languages/france.jpg" // image link in public folder
            },
            "<name2>": {
                "name": "English",
                "alt": "English flag",
                // with a link in the description
                "description": [
                    {
                        "text": "C1 - cambridge",
                        "link": "https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/"
                    },
                    "I also did an exchange in the USA"
                ]
                "img": "/images/logos/languages/uk.jpg"
            },...
        }
    },...
}
```

### Projects

![projects-component](/doc/projects-component.png)

```json
"sections": {
    "Web": {
        "type": "projects",
        "content": {
            "My website": {
                "title": "My website",
                "description": [
                    "Description.",
                    "On multiple lines."
                ],
                "imgs": {
                    "website": {
                        "file": "/images/projects/logo.png",
                        "link": "https://github.com/",
                        "alt": "Capture"
                    }
                },
                "links": {
                    "GitHub": {
                        "link": "https://github.com/",
                        "text": "first link"
                    },
                    "website": {
                        "link": "https://github.com/",
                        "text": "second link"
                    }
                }
            },...
        }
    },...
}
```
