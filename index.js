const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "ToDoTable";

exports.handler = async (event) => {
    const httpMethod = event.httpMethod;
    const body = event.body ? JSON.parse(event.body) : {};


    switch (httpMethod) {
        case "POST":
            const newTask = {
                id:body.id,
                task:body.task,
                completed:false
            };
            await dynamoDB.put({ TableName: TABLE_NAME, Item: newTask }).promise();
            return { statusCode: 201, body:JSON.stringify(newTask)}; 
        case "GET":
            const tasks = await dynamoDB.scan({TableName: TABLE_NAME}).promise();
            return { statusCode: 200, body:JSON.stringify(tasks.Items)};
        case "PUT":
            await dynamoDB.update({
                TableName: TABLE_NAME,
                Key : { id: body.id },
                UpdateExpression: "set task = :task, completed = :completed",
                ExpressionAttributeValues: {
                    ":task": body.task,
                    ":completed": body.completed
                }
            }).promise();
            return { statusCode: 201, body:JSON.stringify({message: "Task updated"})};
        case "DELETE":
            await dynamoDB.delete({TableName: TABLE_NAME, Key: { id: body.id }}).promise();
            return { statusCode: 200, body:JSON.stringify({message: "Task Deleted"})};


        default:
            return { statusCode: 400, body:JSON.stringify({message: "Invalid Request"})};
    }
}