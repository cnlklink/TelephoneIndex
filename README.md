# Telephone Index (TypeScript/React Prototype)

TypeScript / React based prototype of the Fermilab Telephone Index page.  The purpose is to demonstrate that TypeScript/ React can be used to develop the User Interface for web-based console applications.

## Environment

To setup your environment, clone this repository and execute the following to install dependencies:

```
$ npm install
...
$ npx playwright install --with-deps
...
$ cd telephone-index
$ npm install
```

Optional: you will need to install the Playwright extension to be able to execute tests from VS Code.

## Unit tests

Build and run unit tests from the top-level directory:

```
npm run build-unit-tests
npm run unit-tests
```

## Running

Run with `npm start`:

```
cd telephone-index
npm start
```

Use ctrl-c to quit.

## Acceptance Tests

To run the acceptance test suite:

* Start the web server if it isn't already
* Run the acceptance test suite from the top-level directory:

```
npx playwright test
```

(Note: you could also install the Playwright extension in VS Code.)

## Docker & Kubernetes 

There is a `Dockerfile` in telephone-index/ that will create a deployable container image for the Telephone Index application.  This image can be deployed into the adkube K8 cluster using the configuration in `K8/`.

## CI/CD

GitHub Actions is used to execute the CI/CD pipeline.  Any commit to `main` will trigger a pipeline execution.  To edit the pipeline, see `.github/workflows/ci-cd.yml`.  To see the status of the pipeline, click the `Actions` tab from the GitHub page.

A sucessful run on the CI/CD pipeline will push a Docker image to Dockerhub as `cnlklink/react-telephone-index:latest`.

## Deployment

To deploy the container into `adkube` -

* Login to `clx50` or any other machine inside the firewall with docker/podman
* Pull the image from `docker.io`:

```
$ docker pull cnlklink/react-telephone-index:latest
```

* Re-tag the image for deploying to `adregistry.fnal.gov`:

```
$ podman image tag docker.io/cnlklink/react-telephone-index:latest adregistry.fnal.gov/telephone-index/react-telephone-index:latest
```

* Push the image to `adregistry.fnal.gov`:

```
$ podman image push adregistry.fnal.gov/telephone-index/react-telephone-index:latest
```

* Login to adkube
* Remember to pull from TelephoneIndex if necessary!
* Deploy:

```
$ cd K8/
$ kubectl apply -f deployment.yaml
$ kubectl apply -f load-balancer.yml
```
