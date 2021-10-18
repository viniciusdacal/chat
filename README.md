## Instalation

Install dependencies

```bash
yarn install
```

Copy the file `.env.example` and rename it to `.env`.

You need to configure an `VF_API_KEY` and `VF_VERSION_ID`;

To get these values, autenticate into voiceflow and download [this template](https://www.voiceflow.com/templates/how-to-build-a-chatbot-assistant-for-your-banking-experience) as a Voice Assistant.

You will find this information inside the editor, on the sidebar menu "Integrations".

After you have this value configure, run `yarn start`.

## Disclaimer

To deploy this without exposing the API_KEY, it was used the vercel servless function.
In order to run this locally, you will need to configure vercel cli, but you should be good to go with the default values the CLI suggest you.

Vercel CLI will run the server and react-scripts under the hood.

# Structure

under `src` folder we have 5 directories

### /components

Most components we have inside app, usually containing business logic. They are groupped by domains.
For example, in this application, we have two domains: `User` and `Chat`;

### /pages

Page level components, only responsible to glue the other components.
I like to keep it as simple as possible, without to much logic.
Sub folders as organized accordingly to the routes definition, trying to match the exact path we defined for the routes.
That's why the folder names are in lowercase.

### /store

Redux or other global state code configuration.
The logic for each domain will be hold inside the `components/[Domain]` folder, here we just put config code and code that applies for the whole application

### /ui

The ui folder will contain generic ui components, that doesn't contain business logic (Just like the ones we have in external UI libs).
The general rule is: If it's a component that we could just copy and move to another project without business logic, should be in ui folder.

### /utils

Global utils code. Usually functions that could be used anywhere in the application.

## Naming components.

I name the components as what I call NAIL (Name as its location).

So, if a component is located at `components/Chat/TextMessage/TextMessage`, its name will be ChatTextMessage.
This makes very easy to find a component in a project.

Let's say you inspect the application with react dev tools.
You will see a component named `ChatTextMessage`, so, it's easy to guess where that component will be.

Also, this helps avoid redundancy in the folders names. As we have to include the location in the name, we avoid repeating the terms.
For example. Instead of having `components/User/UserList`, I just have `components/User/List`, because `UserUserList` it's obviously redundant.

Still on name, the `components` (folder name) is omitted from the component name, because it wouldn't make sense to prefix the components with `Components`.
But we still include the other folders names as a prefix: `PagesChat` or `UIButton` for example. This helps having unique names.
