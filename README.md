# Telephone Index (TypeScript/React Prototype)

TypeScript / React based prototype of the Fermilab Telephone Index page.  The purpose is to demonstrate that TypeScript/ React can be used to develop the User Interface for web-based console applications.

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
