# Serverless Personal To-Do List Application with AWS Lambda, DynamoDB, and API Gateway

----------------- Extract app.zip and proceed further using instructions below ----------------
### NOTE - REFER TO GUIDE.pdf FOR FULL METHODOLOGY ###  

This project demonstrates how to build a serverless personal to-do list application using AWS Lambda for backend logic, DynamoDB for data storage, and API Gateway to expose RESTful APIs. This architecture eliminates the need to manage servers while providing a scalable and cost-effective solution.

## Overview

- **AWS Lambda:** Runs the application logic in response to API requests.
- **Amazon DynamoDB:** Stores to-do items in a NoSQL database.
- **Amazon API Gateway:** Provides RESTful endpoints to interact with the to-do list.

## Features

- Create, read, update, and delete (CRUD) to-do items
- Serverless architecture with automatic scaling
- Secure and cost-efficient

## Prerequisites

- AWS account with appropriate permissions
- AWS CLI configured locally
- Basic knowledge of AWS Lambda, DynamoDB, and API Gateway
- Node.js or Python runtime for Lambda functions (adjust as needed)

## Architecture Diagram
Client <--> API Gateway <--> AWS Lambda <--> DynamoDB


## Setup Instructions

### 1. Create a DynamoDB Table

- Table name: `ToDoTable`
- Primary key: `id` (String)

### 2. Develop Lambda Functions

Create Lambda functions for each CRUD operation:

- **CreateToDo:** Add a new to-do item
- **GetToDo:** Retrieve a to-do item by ID
- **UpdateToDo:** Modify an existing to-do item
- **DeleteToDo:** Remove a to-do item
- **ListToDos:** List all to-do items

Example (Node.js) snippet for creating a to-do item:
##### Here just download the app.zip file and refer to index.js for the complete code for this project. ############

### 3. Deploy Lambda Functions
- Package and deploy your Lambda functions via AWS CLI, AWS Console, or Infrastructure as Code tools like AWS SAM or CloudFormation.
- Set environment variable TABLE_NAME to your DynamoDB table name.

### 4. Configure API Gateway
- Create a REST API.
- Define resources and methods corresponding to Lambda functions (e.g., POST /todos, GET /todos/{id}).
- Integrate each method with the appropriate Lambda function.
- Enable CORS if your frontend is hosted separately.

### 5. Test the API
- Use tools like Postman or curl to test your API endpoints:
- Test using the given command :
  curl -X POST https://your-api-id.execute-api.region.amazonaws.com/prod/todos \
  -H "Content-Type: application/json" \
  -d '{"id":"1","task":"Buy groceries"}'

### 6. Cleanup
- To avoid charges, delete the DynamoDB table, Lambda functions, and API Gateway resources when no longer needed after completing the project.

### NOTE - REFER TO GUIDE.pdf FOR FULL METHODOLOGY ###  
