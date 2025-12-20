# How to configure the website (langs)

This website is highly customizable by JSON files and can be translated in different langages. You must create these translations files here. If you only want one langage, you'll just need to create one file. 

## File architecture
__Files__ : You'll need one file (config.json) to configure what is common of all the langages like the images or the links you want to put on your page. Then, you'll need one JSON file per langage you want to add.

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
You will need to modify the [`importLangs.ts`](./importLangs.ts) file to create the new langages that you add. For instance, you'll need to modify : 
- The import section :
    
    - Add the line `import messages_<lang_code>.json from './<lang_code>.json'`
    - Remove the langages that you don't have configured (messages_fr.json for example)
- The complete langage : 
    - Add the line `const <lang_code> = deepmerge(config, messages_<lang_code>);` under the similar lines 
    - Remove the lines of the langages you don't use 
- At this line : 
    
    ```export const i18n = createI18n<[Schema], "en" | "fr">```

    - Add the code of the langages you've added separated by a pipe (|)
    - Remove the code you don't use (fr for example)
- At this line : 

    ```messages: {en, fr}```
    - Add the code of the langages you've added separated by a ','
    - Remove the code you don't use (fr for example)

## JSON file architecture  

All your JSON file (except config.json) must have the same structure. There is __ONE__ object per page and __ONE__ main object to put the datas shared between the pages (the navbar for example)


```
type Sections = 
{
    [index: string] : {
        // config
        type: "experience" | "logos-list" | "logos-description" | "projects",
        titleInBox?: boolean,
        // lang
        title: string,
        sumup?: [],
        logos?: [{
            img: string,
            alt: string,
        }],
        content: {
            [index: string]: {
                date?: string,
                title?: string,
                description?: [],
                "img-description"?: string,
                img?: string,
                name?:string,
                alt?: string,
                imgs?: {
                    [index: string]: {
                        alt?: string,
                        file: string,
                        link?: string
                    }
                },
                links?: {
                    [index: string]: {
                        text: string,
                        link: string
                    }
                }

            }
        }
    }
};

type Main = {
    navbar: {
        title: {
            text: string
        },
        links: {
            [index: string]: {
                "text": string
            }
        }
    }
}

type Welcome = {
    title: string,
    subtitle: string,
    about: string,
    projects: string,
}

type About = {
    sumup: 
    {
        text: [string],
        projects: {
            text: string
        },
        resume: {
            "sections": Sections
        }
    },
}

type Lang = {
    main: Main,
    welcome: Welcome,
    about: About,
    projects: Sections,
    "ongoing-projects": Sections
}

export type langs = {
    en: Lang,
    fr: Lang,
}
```