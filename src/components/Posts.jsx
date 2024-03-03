import Post from "./Post"
import Container from "react-bootstrap/Container"

export const Posts = () => {

    const posts = [
        {
            "body": "Tundra TRD PRO",
            "id": "3",
            "timestamp": "2024-01-03T00:35:27.568774",
            "user": {
              "email": "jutin469@gmail.com",
              "first_name": null,
              "id": "1",
              "last_name": null,
              "username": "jutin"
            }
          },
          {
            "body": "Nissan GTR Nismo",
            "id": "4",
            "timestamp": "2024-01-03T00:54:46.188100",
            "user": {
              "email": "jutin469@gmail.com",
              "first_name": null,
              "id": "1",
              "last_name": null,
              "username": "jutin"
            }
          },
          {
            "body": "Porchse Taycan Turbo",
            "id": "5",
            "timestamp": "2024-01-03T00:54:49.010977",
            "user": {
              "email": "jutin469@gmail.com",
              "first_name": null,
              "id": "1",
              "last_name": null,
              "username": "jutin"
            }
          },
          {
            "body": "Dodge Ram TRX",
            "id": "6",
            "timestamp": "2024-01-03T00:54:50.843257",
            "user": {
              "email": "jutin469@gmail.com",
              "first_name": null,
              "id": "1",
              "last_name": null,
              "username": "jutin"
            }
          },
          {
            "body": "Ford Raptor R",
            "id": "7",
            "timestamp": "2024-01-04T01:56:13.923976",
            "user": {
              "email": "jutin469@gmail.com",
              "first_name": null,
              "id": "1",
              "last_name": null,
              "username": "jutin"
            }
          }
        ]

    return (
        <>
            {posts.length > 0 ? posts.map((post) => {
                return <Post key={post.id} post={post} />
            }) : <p>No Cars to Display</p>}
        </>
    )
}