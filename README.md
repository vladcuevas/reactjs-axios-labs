# React JS Axios Labs

This is a repository cloned from the [reactjs-labs][1], and its intention is to add [AXIOS][11] to be able to call REST APIs. The project [Sping-Boot-Labas][9] will be used as the [REST API][4]

The plan is to integrate the [Frontend][5] and the [Backend][6] with AXIOS, then deploy all of these components on a [Kubernetes][7] cluster by creating Kubernetes objects. These [Kubernetes objects][8] will contain the desired state of our deployment.

The 3 repositories that make part of this project are:
1. Backend: [Sping-Boot-Labas][9]
2. FrontEnd: [reactjs-axios-labs][10], the ReactJS version with API calls using [AXIOS][11], which will use the RESTAPI created in the project [Sping-Boot-Labas][9]
    - There is a [ReacJS][13] version without API calls [reactjs-labs][1]
3. The integration will be located in [Minikubes-Labs][15]

## Requirements

In this point the requirements are:
1. [ReacJS][16]
2. [NodeJS][17]
3. [AXIOS][18]
4. [Minikube][19]
5. [Spring Boot][20]
6. [Java][21]
7. A Database, it is planned to use [MySQL][22]

### Firebase

A [firebase][23] account.

Rename firebase-back.js from src/components/Login to firebase.js and fill the below keys with your values from firebase:

```json
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
```

Create an admin user in firebase

Log in with the user

## Start the application

For the FrontEnd Part, we can use the below command:

```powershell
npm start
```

Log with the user created as admin, or create a user in the main page

  [1]: https://github.com/vladcuevas/reactjs-labs
  [2]: https://github.com/axios/axios
  [3]: https://github.com/vladcuevas/spring-boot-labas
  [4]: https://www.redhat.com/en/topics/api/what-is-a-rest-api
  [5]: https://en.wikipedia.org/wiki/Front-end_web_development
  [6]: https://en.wikipedia.org/wiki/Frontend_and_backend
  [7]: https://kubernetes.io/
  [8]: https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/
  [9]: https://github.com/vladcuevas/spring-boot-labas
  [10]: https:/https://github.com/vladcuevas/spring-boot-labas/github.com/vladcuevas/spring-boot-labas
  [11]: https://github.com/axios/axios
  [12]: https://github.com/vladcuevas/spring-boot-labas
  [13]: https://reactjs.org/
  [14]: https://github.com/vladcuevas/reactjs-labs
  [15]: https://github.com/vladcuevas/Minikubes-Labs
  [16]: https://reactjs.org/
  [17]: https://nodejs.org/en/
  [18]: https://github.com/axios/axios
  [19]: https://minikube.sigs.k8s.io/docs/start/
  [20]: https://spring.io/projects/spring-boot
  [21]: https://openjdk.org/
  [22]: https://www.mysql.com/
  [23]: https://firebase.google.com/
