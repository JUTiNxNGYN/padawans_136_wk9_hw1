export default function Post ({ post }) {
    
    return (
        <p>
            <b>{post.car.model}</b><br />
            {post.car.make}
            {post.car.trim}
        </p>
    )
}