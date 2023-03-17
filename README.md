# React JS Axios Labs

This repository is a fork of [reactjs-labs][1], enhanced with [Axios][11] to enable REST API calls. The [Spring-Boot-Labas][9] project serves as the [REST API][4] for this application.

The goal is to integrate the [frontend][5] and [backend][6] using Axios, and then deploy all components on a [Kubernetes][7] cluster by creating Kubernetes objects. These [Kubernetes objects][8] will define the desired state of our deployment.

## Repositories

The following repositories are part of this project:

1. Backend: [Spring-Boot-Labas][9]
2. Frontend: [reactjs-axios-labs][10] - A ReactJS version with API calls using [Axios][11], utilizing the REST API created in the [Spring-Boot-Labas][9] project.
    - A [ReactJS][13] version without API calls can be found at [reactjs-labs][1].
3. Integration: [Minikubes-Labs][15]

## Requirements

To set up and run this project, you will need:

1. [ReactJS][16]
2. [NodeJS][17]
3. [Axios][18]
4. [Minikube][19]
5. [Spring Boot][20]
6. [Java][21]
7. A database (e.g., [MySQL][22])

### Firebase

Start the application using the `npm start` command. Log in to the admin portal with username: `admin` and password: `admin`. To access the user portal, log in with username: `user` and password: `user`.

## Running the Application

To start the frontend, run the following command:

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
