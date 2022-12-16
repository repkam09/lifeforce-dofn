# Lifeforce API on DigitalOcean Functions

## Getting Started

See: https://docs.digitalocean.com/products/functions/quickstart/

Check that your serverless extension is installed by running the status command:
```
doctl serverless status
```

Next, you’ll create a Functions namespace, then connect to it to deploy functions to the cloud.

```
doctl serverless namespaces create --label lifeforce --region nyc1
```

On your local machine, navigate to the directory where you’d like to put your function code, then use the serverless init subcommand to initialize a sample project. The -l or --language flag specifies which programming language the sample project should use. The options are go, javascript, php, and python.

Create a sample project in the language of your choice:

```
doctl serverless init --language js .
```

Be sure to replace <example-project> with your project name. A directory will be created with sample code and configuration files:

