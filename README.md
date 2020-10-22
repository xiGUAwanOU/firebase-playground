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
