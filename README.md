# Firebase Playground

This is a playground for Firebase technologies. This will also be a learning project for React.

## Hosting
This might be the easiest thing to do with Firebase.

Firstly we should initialize the Firebase Hosting in the project:

```console
$ firebase init hosting
```

And then follow the interactive command line guide.

Note that, after building, a `build` folder will be generated, containing all the files that are belong to the website. This folder should be the "public directory" for Firebase Hosting.

After initialization has been done, simply type the command below to deploy the website:

```console
$ firebase deploy --only hosting
```

It seems that Firebase Hosting is rather for the whole project than an app. In fact, it even works without an app created in the firebase project.

## Authentication
Using Email and password as authentication method is simple, just have a look into the code.

Note that Firebase SDK is using `IndexedDB` to store the login data, not `Local Storage`. After the page has been loaded, SDK needs around 1 second to recover the login status.

## Cloud Firestore
To use the Cloud Firestore, we should firstly create a collection and create an example document in the collection.

At the begining, I was confused why I don't have the permission to create a document in the collection. But soon I've figured out that it is actually caused by the wrong rule settings. It will e working in this way:

```text
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

To work with the database is actually very easy, just have a look into the code. But the example code doesn't cover any details like sorting, filtering, pagination or so.

## Functions
To initialize the project to implement Functions, simply run following command:

```console
$ firebase init functions
```

This will create a `functions` folder in the root folder of the Firebase project.

To use Functions without cost or without payment method, we should change the project to use Node 8, which is a deprecated version:

```javascript
// In the package.json file:
"engines": {
  "node": "8"
},
```

All the objects exported from the `src/index.ts` file will be treated as a Function entry.

After the function is implemented, use following command to deploy the function:

```console
$ firebase deploy --only functions
```
