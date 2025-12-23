# How to configure the website (langs)

This website is highly customizable by JSON files and can be translated in different languages. You must create these translations files here. If you only want one langage, you'll just need to create one file. 

## File architecture
__Files__ : You'll need one file (config.json) to configure what is common of all the languages like the images or the links you want to put on your page. Then, you'll need one JSON file per langage you want to add.

The structure of this folder must look like this (lang_code:  'en' for english for exemple): 
```
|
|_ importLangs.ts
|_ config.json
|_ lang_code1.json
|_ lang_code2.json
|_ ...
|_ lang_codeN.json
```

## The importLangs.ts file
You will need to modify the [`importLangs.ts`](./importLangs.ts) file to create the new languages that you add. For instance, you'll need to modify : 
- The import section :
    
    - Add the line `import messages_<lang_code>.json from './<lang_code>.json'`
    - Remove the languages that you don't have configured (messages_fr.json for example)
- The complete langage : 
    - Add the line `const <lang_code> = deepmerge(config, messages_<lang_code>);` under the similar lines 
    - Remove the lines of the languages you don't use 
- At this line : 
    
    ```export const i18n = createI18n<[Schema], "en" | "fr">```

    - Add the code of the languages you've added separated by a pipe (|)
    - Remove the code you don't use (fr for example)
- At this line : 

    ```messages: {en, fr}```

    - Add the code of the languages you've added separated by a ','
    - Remove the code you don't use (fr for example)

## JSON file architecture  

All your JSON file (except config.json) must have the same structure. There is __ONE__ object per page and __ONE__ main object to put the datas shared between the pages (the navbar for example)

You can find the components configuration [here](/src/components/README.md)

```json
{
    "main": { // for common components 
        "navbar": {
            --- See NavBar component for the configuration ---
        }
    },
    "welcome": { // for the welcome page
        "title": "Hey ! I'm <name>.",
        "subtitle": "Very short description",
        "about": "About me",
        "projects": "My projects",
        "projects-url": "projects",
        "about-url": "about"
    },
    "about": { // for the about page
        "sumup": {
            "text": [
            "You can do a small presentation here. ",
            "It can be on multiple lines"
            ],
            "get-resume": {
                "text": "Download my resume",
                "url": "/resume.pdf" // in public folder
            },
            "profile_image": "/images/me.png", // in public folder
            "profile_image_desc": "Me"
        },
        "resume": {
            "sections": {
                --- See Sections component for the configuration ---
            }
        },
        "projects": {
            "text": "See my projects",
            "url": "projects"
        }
    },
    "ongoing-projects": {
        "sections": {
            --- See Sections component for the configuration ---
        }
    },
    "projects": { // for the projects page
        "sections": {
            --- See Sections component for the configuration ---
        }
    },
    "contact": { // for the contact page
        "sections": {
            --- See Sections component for the configuration ---
        }
    }
}

```